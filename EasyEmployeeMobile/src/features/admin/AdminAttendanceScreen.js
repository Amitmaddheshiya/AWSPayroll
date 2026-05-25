import React, {useEffect, useMemo, useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Check, Edit3, Trash2, X} from 'lucide-react-native';
import {
  deleteAdminAttendance,
  getAdminAllUsers,
  getAdminAttendance,
  getAdminLeaves,
  getPayrollPolicies,
  updateAdminAttendance,
} from '../../api/employeeApi';
import {AppButton} from '../../components/AppButton';
import {AppTextInput} from '../../components/AppTextInput';
import {Card} from '../../components/Card';
import {FilterChips} from '../../components/FilterChips';
import {PageHeader} from '../../components/PageHeader';
import {Screen} from '../../components/Screen';
import {StatusPill} from '../../components/StatusPill';
import {colors} from '../../theme/colors';
import {spacing} from '../../theme/spacing';
import {buildCycleDates, todayParts} from '../../utils/date';

const idOf = item => String(item?.id || item?._id || item || '');
const isWorkforce = user => ['employee', 'leader'].includes(String(user?.type || '').toLowerCase());
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const apiDate = (year, month, date) =>
  `${year}-${String(month).padStart(2, '0')}-${String(date).padStart(2, '0')}`;

const displayDate = (year, month, date) =>
  `${String(date).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;

const statusForMissing = (leaves, year, month, date) => {
  const target = apiDate(year, month, date);
  const leave = leaves.find(item => item.startDate <= target && item.endDate >= target);
  if (!leave) return 'Check-in not recorded';
  const status = leave.adminResponse || 'Pending';
  if (status === 'Approved') return `Approved Leave - ${leave.type || 'Leave'}`;
  if (status === 'Rejected') return `Leave Rejected - ${leave.type || 'Leave'}`;
  return `Leave Pending - ${leave.type || 'Leave'}`;
};

const emptyEdit = {status: 'Absent', attendanceIn: '', attendanceOut: '', late: 'No', timeStatus: ''};
const splitRuleList = value =>
  String(value || '')
    .split(',')
    .map(item => item.trim().toLowerCase())
    .filter(Boolean);
const weeklyOffDaysFromPolicies = policies => {
  const master = (policies || []).find(
    item =>
      String(item.title || '').toLowerCase() === 'master salary rule' ||
      String(item.category || '').toLowerCase() === 'master salary rule',
  );
  const rule = (master?.rules || []).find(item =>
    ['weekly off days', 'weekly off'].includes(String(item.label || '').trim().toLowerCase()),
  );
  return splitRuleList(rule?.value || 'Sunday');
};
const ruleNumberFromPolicies = (policies, labels, fallback) => {
  const master = (policies || []).find(
    item =>
      String(item.title || '').toLowerCase() === 'master salary rule' ||
      String(item.category || '').toLowerCase() === 'master salary rule',
  );
  const normalized = labels.map(item => item.toLowerCase());
  const rule = (master?.rules || []).find(item => normalized.includes(String(item.label || '').trim().toLowerCase()));
  const value = Number(String(rule?.value || '').match(/\d+/)?.[0]);
  return Number.isFinite(value) ? value : fallback;
};
const shouldAutoPresentWeeklyOff = cycle => Number(cycle?.fixedPaidDays ?? cycle?.openDaysInMonth) === 30;
const isAutoWeeklyOffRecord = item =>
  String(item?.attendanceIn || '').toLowerCase() === 'auto weekly off' ||
  String(item?.attendanceOut || '').toLowerCase() === 'auto weekly off' ||
  String(item?.reason || '').toLowerCase().includes('auto-present');
const currentCycleStartParts = (policies, today) => {
  const startDay = ruleNumberFromPolicies(policies, ['Salary Cycle Start Day', 'Cycle Start Day'], 1);
  const endDay = Math.min(ruleNumberFromPolicies(policies, ['Salary Cycle End Day', 'Cycle End Day'], 30), 30);
  if (startDay > endDay && today.date <= endDay) {
    const previous = new Date(today.year, today.month - 2, 1);
    return {year: previous.getFullYear(), month: previous.getMonth() + 1};
  }
  return {year: today.year, month: today.month};
};
const statusOptions = [
  {label: 'Present', value: 'Present'},
  {label: 'Half Day', value: 'Half Day'},
  {label: 'Absent', value: 'Absent'},
  {label: 'Leave', value: 'Leave'},
];
const lateOptions = [
  {label: 'No', value: 'No'},
  {label: 'Yes', value: 'Yes'},
];
const timeStatusOptions = [
  {label: 'Auto', value: ''},
  {label: 'Full Time', value: 'Full Time'},
  {label: 'Half Time', value: 'Half Time'},
  {label: 'Holiday', value: 'Holiday'},
];
const normalizeTimeInput = value => {
  const text = String(value || '').trim();
  if (!text || text === '-') return '';
  const match = text.match(/^(\d{1,2}):(\d{2})(?:\s*(AM|PM))?$/i);
  if (!match) return text;
  let hour = Number(match[1]);
  const minute = match[2];
  const meridian = match[3]?.toUpperCase();
  if (!meridian) {
    const suffix = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    return `${String(hour).padStart(2, '0')}:${minute} ${suffix}`;
  }
  return `${String(hour).padStart(2, '0')}:${minute} ${meridian}`;
};

const attendanceTabOptions = [
  {label: 'Present Today', value: 'present'},
  {label: 'Absent Today', value: 'absent'},
  {label: 'All Attendance', value: 'all'},
];

const compactLocation = location => {
  if (!location) return '';
  const cityState = [location.city, location.state, location.country].filter(Boolean).join(', ');
  const coords = Number.isFinite(Number(location.latitude)) && Number.isFinite(Number(location.longitude))
    ? `Lat ${Number(location.latitude).toFixed(6)}, Lng ${Number(location.longitude).toFixed(6)}`
    : '';
  if (location.address && cityState && !String(location.address).includes(cityState)) {
    return `${location.address}\n${cityState}`;
  }
  return location.address || cityState || coords;
};

const valueWithLocation = (time, location) => {
  const locationText = compactLocation(location);
  return locationText ? `${time || '-'}\n${locationText}` : time || '-';
};

const DetailTile = ({label, value, tone}) => (
  <View style={[styles.detailTile, tone === 'danger' ? styles.detailTileDanger : tone === 'success' ? styles.detailTileSuccess : null]}>
    <Text style={[styles.detailLabel, tone ? styles.detailLabelTone : null]}>{label}</Text>
    <Text style={[styles.detailValue, tone ? styles.detailValueTone : null]}>{value || '-'}</Text>
  </View>
);

export const AdminAttendanceScreen = ({route}) => {
  const today = useMemo(() => todayParts(), []);
  const [employees, setEmployees] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState('');
  const [records, setRecords] = useState([]);
  const [cycle, setCycle] = useState(null);
  const [leaves, setLeaves] = useState([]);
  const [todayRecords, setTodayRecords] = useState([]);
  const [todayLeaves, setTodayLeaves] = useState([]);
  const [weeklyOffDays, setWeeklyOffDays] = useState(['sunday']);
  const [search, setSearch] = useState('');
  const [dateFilter, setDateFilter] = useState(route?.params?.date ? String(route.params.date) : '');
  const [monthFilter, setMonthFilter] = useState(String(today.month));
  const [yearFilter, setYearFilter] = useState(String(today.year));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [editingKey, setEditingKey] = useState('');
  const [editForm, setEditForm] = useState(emptyEdit);
  const [activeTab, setActiveTab] = useState('present');

  const selectedEmployee = employees.find(employee => idOf(employee) === selectedEmployeeId);
  const month = Math.min(Math.max(Number(monthFilter || today.month), 1), 12);
  const year = Number(yearFilter || today.year);

  const loadEmployees = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await getAdminAllUsers();
      const workforce = (response?.data || []).filter(isWorkforce);
      setEmployees(workforce);
      const routeEmployeeId = route?.params?.employeeID ? String(route.params.employeeID) : '';
      if (routeEmployeeId) setSelectedEmployeeId(routeEmployeeId);
      else if (!selectedEmployeeId && workforce[0]) setSelectedEmployeeId(idOf(workforce[0]));
    } catch (err) {
      setError(err.message || 'Employees could not be loaded.');
    } finally {
      setLoading(false);
    }
  };

  const loadPolicies = async () => {
    try {
      const response = await getPayrollPolicies();
      const policies = response?.data || [];
      setWeeklyOffDays(weeklyOffDaysFromPolicies(policies));
      const cycleStart = currentCycleStartParts(policies, today);
      setMonthFilter(String(cycleStart.month));
      setYearFilter(String(cycleStart.year));
    } catch (err) {
      setWeeklyOffDays(['sunday']);
    }
  };

  const loadTodayAbsences = async () => {
    try {
      const [attendanceResponse, leavesResponse] = await Promise.all([
        getAdminAttendance({month: today.month, year: today.year, date: today.date}),
        getAdminLeaves({}),
      ]);
      setTodayRecords(attendanceResponse?.data || []);
      setTodayLeaves(leavesResponse?.data || []);
    } catch (err) {
      setError(err.message || 'Today absent list could not be loaded.');
    }
  };

  const loadAttendance = async () => {
    if (!selectedEmployeeId) return;
    setLoading(true);
    setError('');
    try {
      const [attendanceResponse, leavesResponse] = await Promise.all([
        getAdminAttendance({employeeID: selectedEmployeeId, month, year}),
        getAdminLeaves({applicantID: selectedEmployeeId}),
      ]);
      setRecords(attendanceResponse?.data || []);
      setCycle(attendanceResponse?.cycle || null);
      setLeaves(leavesResponse?.data || []);
    } catch (err) {
      setError(err.message || 'Attendance could not be loaded.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEmployees();
    loadTodayAbsences();
    loadPolicies();
  }, [route?.params?.employeeID]);

  useEffect(() => {
    if (route?.params?.date) setDateFilter(String(route.params.date));
  }, [route?.params?.date]);

  useEffect(() => {
    loadAttendance();
  }, [selectedEmployeeId, monthFilter, yearFilter]);

  const filteredEmployees = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return employees;
    return employees.filter(employee =>
      `${employee.name || ''} ${employee.email || ''} ${employee.username || ''} ${employee.employeeCode || ''} ${idOf(employee)}`
        .toLowerCase()
        .includes(term),
    );
  }, [employees, search]);

  const cycleAttendanceRows = useMemo(() => {
    if (!selectedEmployee) return [];
    const recordByDate = new Map(records.map(item => [`${item.year}-${item.month}-${item.date}`, item]));
    const cycleDates = buildCycleDates(cycle, year, month, today);
    const autoPresentWeeklyOff = shouldAutoPresentWeeklyOff(cycle);
    const effectiveWeeklyOffDays = (cycle?.weeklyOffDays?.length ? cycle.weeklyOffDays : weeklyOffDays).map(item => String(item).toLowerCase());
    const rows = [];
    cycleDates.forEach(parts => {
      const {year: rowYear, month: rowMonth, date} = parts;
      const record = recordByDate.get(`${rowYear}-${rowMonth}-${date}`);
      const day = dayNames[new Date(rowYear, rowMonth - 1, date).getDay()];
      const isWeeklyOff = effectiveWeeklyOffDays.includes(day.toLowerCase());
      const staleAutoWeeklyOff = record && isAutoWeeklyOffRecord(record) && (!autoPresentWeeklyOff || !isWeeklyOff);
      const isAutoWeeklyOff = isWeeklyOff && autoPresentWeeklyOff;
      const missingStatus = isWeeklyOff ? 'Weekly Off' : statusForMissing(leaves, rowYear, rowMonth, date);
      const status = staleAutoWeeklyOff ? 'Absent' : isAutoWeeklyOff ? 'Present' : isWeeklyOff ? 'Weekly Off' : record?.status || (record ? (record.present ? 'Present' : 'Absent') : missingStatus);
      rows.push({
        key: `${rowYear}-${rowMonth}-${date}`,
        id: record?._id || record?.id || '',
        employeeID: selectedEmployeeId,
        month: rowMonth,
        year: rowYear,
        name: selectedEmployee.name || selectedEmployee.username || '-',
        email: selectedEmployee.email || '-',
        date,
        day: record?.day || day,
        status,
        attendanceIn: staleAutoWeeklyOff ? '-' : isWeeklyOff ? (autoPresentWeeklyOff ? record?.attendanceIn || 'Auto Weekly Off' : '-') : record?.attendanceIn || '-',
        attendanceOut: staleAutoWeeklyOff ? '-' : isWeeklyOff ? (autoPresentWeeklyOff ? record?.attendanceOut || 'Auto Weekly Off' : '-') : record?.attendanceOut || '-',
        checkInLocation: record?.checkInLocation,
        checkOutLocation: record?.checkOutLocation,
        late: staleAutoWeeklyOff ? '-' : isWeeklyOff ? (autoPresentWeeklyOff ? record?.late || 'No' : '-') : record?.late || '-',
        totalHours: staleAutoWeeklyOff ? '-' : isWeeklyOff ? (autoPresentWeeklyOff ? record?.totalHours || '0' : '-') : record?.totalHours || '-',
        timeStatus: staleAutoWeeklyOff ? '-' : record?.timeStatus || (status === 'Present' ? 'Full Time' : status === 'Weekly Off' ? 'Weekly Off' : '-'),
        reason: staleAutoWeeklyOff
          ? 'Stale auto weekly off ignored by current policy'
          : isWeeklyOff
          ? (autoPresentWeeklyOff ? record?.reason || `${day} auto-present because fixed paid days is 30` : `${day} weekly off by master salary rule`)
          : record?.reason || statusForMissing(leaves, rowYear, rowMonth, date),
      });
    });
    return rows.sort((a, b) => new Date(b.year, b.month - 1, b.date) - new Date(a.year, a.month - 1, a.date));
  }, [cycle, leaves, month, records, selectedEmployee, selectedEmployeeId, today, weeklyOffDays, year]);

  const attendanceRows = useMemo(() => {
    const selectedDate = Number(dateFilter || 0);
    return selectedDate ? cycleAttendanceRows.filter(row => row.date === selectedDate) : cycleAttendanceRows;
  }, [cycleAttendanceRows, dateFilter]);

  const selectedAttendanceSummary = useMemo(() => {
    const present = cycleAttendanceRows.filter(row =>
      ['present', 'approved leave', 'half day'].includes(String(row.status || '').toLowerCase()),
    ).length;
    const absent = cycleAttendanceRows.filter(row =>
      String(row.status || '').toLowerCase() === 'absent' ||
      String(row.reason || '').toLowerCase() === 'check-in not recorded',
    ).length;
    return {
      present,
      absent,
      fixedPaidDays: Number(cycle?.fixedPaidDays ?? cycle?.openDaysInMonth) || 0,
      records: cycleAttendanceRows.length,
    };
  }, [cycle, cycleAttendanceRows]);

  const todayAbsentRows = useMemo(() => {
    const todayIso = apiDate(today.year, today.month, today.date);
    const todayDay = dayNames[new Date(today.year, today.month - 1, today.date).getDay()];
    if (weeklyOffDays.includes(todayDay.toLowerCase())) return [];
    const approvedLeaveIds = new Set(
      todayLeaves
        .filter(item => item.adminResponse === 'Approved' && item.startDate <= todayIso && item.endDate >= todayIso)
        .map(item => String(item.applicantID)),
    );
    const recordByEmployee = new Map(todayRecords.map(item => [idOf(item.employeeID), item]));
    return employees
      .filter(employee => {
        const employeeId = idOf(employee);
        const record = recordByEmployee.get(employeeId);
        return !approvedLeaveIds.has(employeeId) && (!record || !record.present);
      })
      .map(employee => {
        const employeeId = idOf(employee);
        const record = recordByEmployee.get(employeeId);
        const day = dayNames[new Date(today.year, today.month - 1, today.date).getDay()];
        return {
          key: `today-absent-${employeeId}`,
          id: record?._id || record?.id || '',
          employeeID: employeeId,
          month: today.month,
          year: today.year,
          name: employee.name || employee.username || '-',
          email: employee.email || '-',
          date: today.date,
          day: record?.day || day,
          status: record?.status || 'Absent',
          attendanceIn: record?.attendanceIn || '-',
          attendanceOut: record?.attendanceOut || '-',
          checkInLocation: record?.checkInLocation,
          checkOutLocation: record?.checkOutLocation,
          late: record?.late || '-',
          totalHours: record?.totalHours || '-',
          timeStatus: record?.timeStatus || '-',
          reason: record?.reason || 'Check-in not recorded',
        };
      });
  }, [employees, today, todayLeaves, todayRecords, weeklyOffDays]);

  const todayPresentRows = useMemo(() => {
    const todayDay = dayNames[new Date(today.year, today.month - 1, today.date).getDay()];
    if (weeklyOffDays.includes(todayDay.toLowerCase())) return [];
    const employeeById = new Map(employees.map(employee => [idOf(employee), employee]));
    return todayRecords
      .filter(record => record.present && employeeById.has(idOf(record.employeeID)))
      .map(record => {
        const employeeId = idOf(record.employeeID);
        const employee = employeeById.get(employeeId);
        return {
          key: `today-present-${record._id || record.id || record.employeeID}`,
          id: record._id || record.id || '',
          employeeID: employeeId,
          month: today.month,
          year: today.year,
          name: employee?.name || employee?.username || '-',
          email: employee?.email || '-',
          date: today.date,
          day: record.day || todayDay,
          status: record.status || 'Present',
          attendanceIn: record.attendanceIn || '-',
          attendanceOut: record.attendanceOut || '-',
          checkInLocation: record.checkInLocation,
          checkOutLocation: record.checkOutLocation,
          late: record.late || '-',
          totalHours: record.totalHours || '-',
          timeStatus: record.timeStatus || '-',
          reason: record.reason || 'Checked in today',
        };
      });
  }, [employees, today, todayRecords, weeklyOffDays]);

  const startEdit = row => {
    if (row.status === 'Weekly Off') {
      setError('Weekly off day cannot be edited.');
      return;
    }
    setEditingKey(row.key);
    setEditForm({
      status: ['Present', 'Half Day', 'Leave', 'Absent'].includes(row.status) ? row.status : 'Absent',
      attendanceIn: row.attendanceIn === '-' ? '' : row.attendanceIn,
      attendanceOut: row.attendanceOut === '-' ? '' : row.attendanceOut,
      late: row.late === '-' ? 'No' : row.late,
      timeStatus: row.timeStatus === '-' ? '' : row.timeStatus,
    });
  };

  const setEdit = (key, value) => setEditForm(current => ({...current, [key]: value}));

  const saveAttendance = async row => {
    if (row.status === 'Weekly Off') {
      setError('Weekly off day cannot be edited.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const present = editForm.status === 'Present' || editForm.status === 'Half Day';
      const response = await updateAdminAttendance({
        id: row.id || undefined,
        employeeID: row.employeeID,
        date: row.date,
        month: row.month || month,
        year: row.year || year,
        day: row.day,
        present,
        status: editForm.status,
        attendanceIn: normalizeTimeInput(editForm.attendanceIn) || '-',
        attendanceOut: normalizeTimeInput(editForm.attendanceOut) || '-',
        late: editForm.late || 'No',
        timeStatus: editForm.timeStatus || (editForm.status === 'Half Day' ? 'Half Time' : editForm.status === 'Present' ? 'Full Time' : '-'),
      });
      if (response?.success === false) throw new Error(response.message || 'Attendance could not be updated.');
      setEditingKey('');
      await loadAttendance();
      await loadTodayAbsences();
    } catch (err) {
      setError(err.message || 'Attendance could not be updated.');
    } finally {
      setLoading(false);
    }
  };

  const removeAttendance = async row => {
    if (row.status === 'Weekly Off') {
      setError('Weekly off day cannot be deleted.');
      return;
    }
    if (!row.id) {
      setError('No saved attendance record found for this day.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await deleteAdminAttendance(row.id);
      await loadAttendance();
      await loadTodayAbsences();
    } catch (err) {
      setError(err.message || 'Attendance could not be deleted.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Screen refreshControl={<RefreshControl refreshing={loading} onRefresh={() => { loadEmployees(); loadAttendance(); }} />}>
      <PageHeader
        eyebrow="Workforce control"
        title="Attendance"
        subtitle="Cycle-based attendance review with absences, leaves, weekly offs, and HR corrections."
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Card>
        <Text style={styles.title}>Today Workforce</Text>
        <View style={styles.statGrid}>
          <DetailTile label="Total Employees" value={String(employees.length)} />
          <DetailTile label="Present" value={String(todayPresentRows.length)} tone="success" />
          <DetailTile label="Absent" value={String(todayAbsentRows.length)} tone="danger" />
        </View>
        <View style={styles.tabs}>
          <FilterChips items={attendanceTabOptions} value={activeTab} onChange={setActiveTab} />
        </View>
      </Card>

      {activeTab === 'present' ? <View style={styles.todaySection}>
        <Text style={styles.section}>Present Today</Text>
        <Text style={styles.meta}>{displayDate(today.year, today.month, today.date)} / {todayPresentRows.length} employee or leader present</Text>
        <View style={styles.todayList}>
          {todayPresentRows.map(row => (
            <View key={row.key} style={styles.todayRowCard}>
              <View style={styles.flex}>
                <Text style={styles.name}>{row.name}</Text>
                <Text style={styles.meta}>{row.email}</Text>
                <Text style={styles.meta}>ID: {row.employeeID}</Text>
                <Text style={styles.meta}>In: {valueWithLocation(row.attendanceIn, row.checkInLocation)}</Text>
                <Text style={styles.meta}>Out: {valueWithLocation(row.attendanceOut, row.checkOutLocation)}</Text>
              </View>
              <AppButton
                icon={Edit3}
                title="Edit"
                variant="muted"
                onPress={() => {
                  setSelectedEmployeeId(row.employeeID);
                  setDateFilter(String(today.date));
                  setMonthFilter(String(today.month));
                  setYearFilter(String(today.year));
                  setActiveTab('all');
                  startEdit({...row, key: `${today.year}-${today.month}-${today.date}`});
                }}
              />
            </View>
          ))}
        </View>
        {!todayPresentRows.length ? <Text style={styles.empty}>No present employees today.</Text> : null}
      </View> : null}

      {activeTab === 'absent' ? <View style={styles.todaySection}>
        <Text style={styles.section}>Absent Today</Text>
        <Text style={styles.meta}>{displayDate(today.year, today.month, today.date)} / {todayAbsentRows.length} employee or leader absent</Text>
        <View style={styles.todayList}>
          {todayAbsentRows.map(row => (
            <View key={row.key} style={styles.todayRowCard}>
              <View style={styles.flex}>
                <Text style={styles.name}>{row.name}</Text>
                <Text style={styles.meta}>{row.email}</Text>
                <Text style={styles.meta}>ID: {row.employeeID}</Text>
                <Text style={styles.meta}>Reason: {row.reason}</Text>
              </View>
              <AppButton
                icon={Edit3}
                title={editingKey === row.key ? 'Editing' : 'Edit'}
                variant="muted"
                onPress={() => {
                  setSelectedEmployeeId(row.employeeID);
                  setDateFilter(String(today.date));
                  setMonthFilter(String(today.month));
                  setYearFilter(String(today.year));
                  startEdit(row);
                }}
              />
              {editingKey === row.key ? (
                <View style={styles.inlineEdit}>
                  <Text style={styles.inputLabel}>Status</Text>
                  <FilterChips items={statusOptions} value={editForm.status} onChange={value => setEdit('status', value)} />
                  <View style={styles.twoCol}>
                    <AppTextInput label="In Time" placeholder="09:30 AM" keyboardType="numbers-and-punctuation" value={editForm.attendanceIn} onChangeText={value => setEdit('attendanceIn', value)} style={styles.flex} />
                    <AppTextInput label="Out Time" placeholder="06:30 PM" keyboardType="numbers-and-punctuation" value={editForm.attendanceOut} onChangeText={value => setEdit('attendanceOut', value)} style={styles.flex} />
                  </View>
                  <View style={styles.actions}>
                    <AppButton icon={Check} title="Update" loading={loading} onPress={() => saveAttendance(row)} />
                    <AppButton icon={X} title="Cancel" variant="muted" onPress={() => setEditingKey('')} />
                  </View>
                </View>
              ) : null}
            </View>
          ))}
        </View>
        {!todayAbsentRows.length ? <Text style={styles.empty}>No absent employees today.</Text> : null}
      </View> : null}

      {activeTab === 'all' ? <Card>
        <Text style={styles.title}>Attendance Filters</Text>
        <AppTextInput label="Search employee by name, email, ID, code, or letter" value={search} onChangeText={setSearch} />
        <View style={styles.twoCol}>
          <AppTextInput label="Month" keyboardType="numeric" value={monthFilter} onChangeText={value => setMonthFilter(value.replace(/[^0-9]/g, ''))} style={styles.flex} />
          <AppTextInput label="Year" keyboardType="numeric" value={yearFilter} onChangeText={value => setYearFilter(value.replace(/[^0-9]/g, ''))} style={styles.flex} />
        </View>
        <AppTextInput
          label="Filter by date number"
          placeholder="Example: 1, 8, 16, 31"
          keyboardType="numeric"
          value={dateFilter}
          onChangeText={value => setDateFilter(value.replace(/[^0-9]/g, ''))}
        />
        <Text style={styles.meta}>Employees and leaders: {employees.length}</Text>
      </Card> : null}

      {activeTab === 'all' ? <Card>
        <Text style={styles.section}>Select Employee</Text>
        <ScrollView nestedScrollEnabled style={styles.employeeList}>
          {filteredEmployees.map(employee => {
            const active = idOf(employee) === selectedEmployeeId;
            return (
              <View key={idOf(employee)} style={styles.employeeRow}>
                <View style={styles.flex}>
                  <Text style={styles.name}>{employee.name || employee.username || '-'}</Text>
                  <Text style={styles.meta}>{employee.email || '-'} / {employee.username || '-'}</Text>
                </View>
                <AppButton title={active ? 'Selected' : 'Select'} variant={active ? 'primary' : 'muted'} onPress={() => setSelectedEmployeeId(idOf(employee))} />
              </View>
            );
          })}
        </ScrollView>
        {!filteredEmployees.length ? <Text style={styles.empty}>No employees found.</Text> : null}
      </Card> : null}

      {activeTab === 'all' && selectedEmployee ? (
        <View style={styles.selectedCard}>
          <View style={styles.selectedHeader}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarText}>{String(selectedEmployee.name || selectedEmployee.username || 'E').charAt(0).toUpperCase()}</Text>
            </View>
            <View style={styles.flex}>
              <Text style={styles.selectedName}>{selectedEmployee.name || selectedEmployee.username || '-'}</Text>
              <Text style={styles.selectedMeta}>{selectedEmployee.email || '-'}</Text>
              <Text style={styles.selectedMeta}>ID: {selectedEmployee.username || selectedEmployee.employeeCode || selectedEmployeeId}</Text>
            </View>
          </View>
          <View style={styles.selectedStats}>
            <View style={[styles.selectedStat, styles.presentStat]}>
              <Text style={styles.selectedStatLabel}>Present</Text>
              <Text style={styles.selectedStatValue}>{selectedAttendanceSummary.present}</Text>
            </View>
            <View style={[styles.selectedStat, styles.absentStat]}>
              <Text style={styles.selectedStatLabel}>Absent</Text>
              <Text style={styles.selectedStatValue}>{selectedAttendanceSummary.absent}</Text>
            </View>
            <View style={[styles.selectedStat, styles.fixedStat]}>
              <Text style={styles.selectedStatLabel}>Fixed Paid Days</Text>
              <Text style={styles.selectedStatValue}>{selectedAttendanceSummary.fixedPaidDays}</Text>
            </View>
          </View>
          <Text style={styles.selectedFoot}>Salary cycle records: {selectedAttendanceSummary.records}</Text>
        </View>
      ) : null}

      {attendanceRows.map(row => (
        activeTab === 'all' ? <Card key={row.key}>
          <View style={styles.heading}>
            <Text style={styles.name}>{row.name}</Text>
            <StatusPill value={row.status} />
          </View>
          <View style={styles.attendanceGrid}>
            <DetailTile label="Date" value={displayDate(row.year, row.month, row.date)} />
            <DetailTile label="Day" value={row.day} />
            <DetailTile label="In" value={valueWithLocation(row.attendanceIn, row.checkInLocation)} />
            <DetailTile label="Out" value={valueWithLocation(row.attendanceOut, row.checkOutLocation)} />
            <DetailTile label="Late" value={row.late} />
            <DetailTile label="Hours" value={row.totalHours} />
            <DetailTile label="Time Status" value={row.timeStatus} />
            <DetailTile label="Reason" value={row.reason || '-'} />
          </View>
          {editingKey === row.key ? (
            <View style={styles.editBox}>
              <Text style={styles.inputLabel}>Status</Text>
              <FilterChips items={statusOptions} value={editForm.status} onChange={value => setEdit('status', value)} />
              <View style={styles.twoCol}>
                <AppTextInput label="In Time" placeholder="09:30 AM" keyboardType="numbers-and-punctuation" value={editForm.attendanceIn} onChangeText={value => setEdit('attendanceIn', value)} style={styles.flex} />
                <AppTextInput label="Out Time" placeholder="06:30 PM" keyboardType="numbers-and-punctuation" value={editForm.attendanceOut} onChangeText={value => setEdit('attendanceOut', value)} style={styles.flex} />
              </View>
              <Text style={styles.inputLabel}>Late</Text>
              <FilterChips items={lateOptions} value={editForm.late} onChange={value => setEdit('late', value)} />
              <Text style={styles.inputLabel}>Time Status</Text>
              <FilterChips items={timeStatusOptions} value={editForm.timeStatus} onChange={value => setEdit('timeStatus', value)} />
              <View style={styles.actions}>
                <AppButton icon={Check} title="Update" loading={loading} onPress={() => saveAttendance(row)} />
                <AppButton icon={X} title="Cancel" variant="muted" onPress={() => setEditingKey('')} />
              </View>
            </View>
          ) : (
            <View style={styles.actions}>
              <AppButton icon={Edit3} title={row.status === 'Weekly Off' ? 'Weekly Off' : 'Edit'} variant="muted" disabled={row.status === 'Weekly Off'} onPress={() => startEdit(row)} />
              {row.id ? <AppButton icon={Trash2} title="Delete" variant="danger" disabled={row.status === 'Weekly Off'} onPress={() => removeAttendance(row)} /> : null}
            </View>
          )}
        </Card> : null
      ))}

      {activeTab === 'all' && !loading && selectedEmployee && !attendanceRows.length ? <Text style={styles.empty}>No attendance days found for this filter.</Text> : null}
    </Screen>
  );
};

const styles = StyleSheet.create({
  title: {color: colors.text, fontSize: 18, fontWeight: '900', marginBottom: spacing.sm},
  section: {color: colors.text, fontSize: 16, fontWeight: '900', marginBottom: spacing.sm},
  heading: {alignItems: 'center', flexDirection: 'row', gap: spacing.sm, justifyContent: 'space-between'},
  name: {color: colors.text, flex: 1, fontSize: 16, fontWeight: '900'},
  meta: {color: colors.textMuted, marginTop: spacing.xs},
  inputLabel: {color: colors.text, fontSize: 13, fontWeight: '800', marginTop: spacing.xs},
  twoCol: {flexDirection: 'row', gap: spacing.md},
  flex: {flex: 1},
  employeeList: {maxHeight: 246},
  todaySection: {gap: spacing.sm, marginBottom: spacing.md},
  todayList: {gap: spacing.sm, marginTop: spacing.sm},
  todayRowCard: {
    backgroundColor: colors.panel,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    gap: spacing.sm,
    padding: spacing.md,
  },
  inlineEdit: {gap: spacing.sm, marginTop: spacing.sm},
  employeeRow: {alignItems: 'center', borderBottomColor: colors.border, borderBottomWidth: 1, flexDirection: 'row', gap: spacing.sm, paddingVertical: spacing.sm},
  editBox: {gap: spacing.sm, marginTop: spacing.md},
  statGrid: {flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm},
  tabs: {marginTop: spacing.md},
  attendanceGrid: {flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginTop: spacing.md},
  detailTile: {
    backgroundColor: colors.surfaceMuted,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flexBasis: '47%',
    flexGrow: 1,
    padding: spacing.sm,
  },
  detailTileSuccess: {backgroundColor: colors.success, borderColor: colors.success},
  detailTileDanger: {backgroundColor: colors.danger, borderColor: colors.danger},
  detailLabel: {color: colors.textMuted, fontSize: 11, fontWeight: '900'},
  detailValue: {color: colors.text, fontSize: 13, fontWeight: '900', marginTop: spacing.xs},
  detailLabelTone: {color: colors.surface},
  detailValueTone: {color: colors.surface},
  selectedCard: {
    backgroundColor: colors.panel,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: spacing.md,
    padding: spacing.md,
  },
  selectedHeader: {alignItems: 'center', flexDirection: 'row', gap: spacing.sm},
  avatarCircle: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 8,
    height: 42,
    justifyContent: 'center',
    width: 42,
  },
  avatarText: {color: colors.surface, fontSize: 18, fontWeight: '900'},
  selectedName: {color: colors.text, fontSize: 16, fontWeight: '900'},
  selectedMeta: {color: colors.textMuted, fontSize: 12, marginTop: 2},
  selectedStats: {flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginTop: spacing.md},
  selectedStat: {borderRadius: 8, flexBasis: '30%', flexGrow: 1, padding: spacing.sm},
  presentStat: {backgroundColor: colors.success},
  absentStat: {backgroundColor: colors.danger},
  fixedStat: {backgroundColor: colors.info},
  selectedStatLabel: {color: colors.surface, fontSize: 11, fontWeight: '900'},
  selectedStatValue: {color: colors.surface, fontSize: 18, fontWeight: '900', marginTop: 2},
  selectedFoot: {color: colors.textMuted, fontSize: 12, fontWeight: '800', marginTop: spacing.sm},
  actions: {flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginTop: spacing.sm},
  error: {color: colors.danger},
  empty: {color: colors.textMuted, textAlign: 'center'},
});

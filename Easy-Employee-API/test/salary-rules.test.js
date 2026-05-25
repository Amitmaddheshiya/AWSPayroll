const assert = require('node:assert/strict');
const test = require('node:test');

const { __test: payroll } = require('../controllers/user-controller');

const masterRules = overrides => {
  const rules = [
  { label: 'Fixed Paid Days', value: '26' },
  { label: 'Salary Cycle Start Day', value: '1' },
  { label: 'Salary Cycle End Day', value: '30' },
  { label: 'Weekly Off Days', value: 'Sunday' },
  { label: 'Approved Leave Paid', value: 'Yes' },
  { label: 'Paid Holiday Dates', value: '2026-05-15, 2026-08-15, 2026-10-02' },
  { label: 'Minimum Full Day Hours', value: '8' },
  { label: 'Half Day Pay Value', value: '0.5' },
  { label: 'Absent Pay Value', value: '0' },
  { label: 'Expense Reimbursement Paid', value: 'Yes' },
  ];
  Object.entries(overrides || {}).forEach(([label, value]) => {
    const existing = rules.find(rule => rule.label === label);
    if (existing) existing.value = value;
    else rules.push({ label, value });
  });
  return rules;
};

test('fixed paid days 30 is the only weekly-off auto-present trigger', () => {
  const cycle30 = payroll.buildPayrollCycleSettingsFromRules(masterRules({ 'Fixed Paid Days': '30' }), 2026, 5);
  const cycle26 = payroll.buildPayrollCycleSettingsFromRules(masterRules({ 'Fixed Paid Days': '26' }), 2026, 5);
  const cycle22 = payroll.buildPayrollCycleSettingsFromRules(masterRules({ 'Fixed Paid Days': '22' }), 2026, 5);

  assert.equal(payroll.shouldAutoPresentWeeklyOff(cycle30), true);
  assert.equal(payroll.shouldAutoPresentWeeklyOff(cycle26), false);
  assert.equal(payroll.shouldAutoPresentWeeklyOff(cycle22), false);
});

test('Saturday is not auto-present when weekly off rule is Sunday and fixed paid days is 26', () => {
  const cycle = payroll.buildPayrollCycleSettingsFromRules(masterRules({
    'Fixed Paid Days': '26',
    'Weekly Off Days': 'Sunday',
  }), 2026, 5);
  const staleSaturdayAuto = {
    day: 'Saturday',
    present: true,
    status: 'Present',
    attendanceIn: 'Auto Weekly Off',
    attendanceOut: 'Auto Weekly Off',
    reason: 'Saturday auto-present because fixed paid days is 30',
  };

  assert.equal(cycle.weeklyOffDays.includes('saturday'), false);
  assert.equal(payroll.shouldIgnoreAutoWeeklyOffRecord(staleSaturdayAuto, cycle, 'Saturday'), true);
  assert.deepEqual(payroll.staleAutoWeeklyOffUpdate('Saturday'), {
    present: false,
    status: 'Absent',
    attendanceIn: '-',
    attendanceOut: '-',
    late: '-',
    totalHours: '-',
    timeStatus: 'Weekly Off',
    reason: 'Saturday weekly off by master salary rule',
  });
});

test('configured weekly off remains weekly off, not present, when fixed paid days is 26', () => {
  const cycle = payroll.buildPayrollCycleSettingsFromRules(masterRules({
    'Fixed Paid Days': '26',
    'Weekly Off Days': 'Saturday',
  }), 2026, 5);
  const savedAuto = {
    day: 'Saturday',
    present: true,
    status: 'Present',
    attendanceIn: 'Auto Weekly Off',
    attendanceOut: 'Auto Weekly Off',
    reason: 'Saturday auto-present because fixed paid days is 30',
  };

  const normalized = payroll.normalizeAttendanceForWeeklyOffPolicy(savedAuto, cycle);
  assert.equal(normalized.present, false);
  assert.equal(normalized.status, 'Weekly Off');
  assert.equal(normalized.attendanceIn, '-');
});

test('salary cycle supports end day 31 in a 31-day month', () => {
  const cycle = payroll.buildPayrollCycleSettingsFromRules(masterRules({
    'Salary Cycle End Day': '31',
  }), 2026, 5);

  assert.equal(cycle.endDay, 31);
  assert.equal(cycle.endDate.getFullYear(), 2026);
  assert.equal(cycle.endDate.getMonth() + 1, 5);
  assert.equal(cycle.endDate.getDate(), 31);
});

test('cross-month salary cycle uses requested month as cycle start month', () => {
  const cycle = payroll.buildPayrollCycleSettingsFromRules(masterRules({
    'Salary Cycle Start Day': '21',
    'Salary Cycle End Day': '20',
  }), 2026, 5);

  assert.equal(cycle.startDate.getFullYear(), 2026);
  assert.equal(cycle.startDate.getMonth() + 1, 5);
  assert.equal(cycle.startDate.getDate(), 21);
  assert.equal(cycle.endDate.getFullYear(), 2026);
  assert.equal(cycle.endDate.getMonth() + 1, 6);
  assert.equal(cycle.endDate.getDate(), 20);
});

test('salary formula uses net salary divided by fixed paid days and adds same-cycle approved expenses', () => {
  assert.deepEqual(payroll.calculateSalaryFromRuleInputs({
    assignedNetPay: 26000,
    fixedPaidDays: 26,
    payableDays: 10.5,
    approvedExpenses: 750,
  }), {
    perDaySalary: 1000,
    payableDays: 10.5,
    salaryTillDate: 10500,
    totalPay: 11250,
  });
});

test('payable days are capped to fixed paid days', () => {
  assert.deepEqual(payroll.calculateSalaryFromRuleInputs({
    assignedNetPay: 30000,
    fixedPaidDays: 30,
    payableDays: 35,
    approvedExpenses: 0,
  }), {
    perDaySalary: 1000,
    payableDays: 30,
    salaryTillDate: 30000,
    totalPay: 30000,
  });
});

test('minimum full day hours rule controls half-day status', () => {
  assert.equal(payroll.timeStatusFromHours('Monday', 7.5, 'Present', 8), 'Half Time');
  assert.equal(payroll.timeStatusFromHours('Monday', 8, 'Present', 8), 'Full Time');
});

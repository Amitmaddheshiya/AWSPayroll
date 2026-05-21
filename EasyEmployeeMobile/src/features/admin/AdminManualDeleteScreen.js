import React, {useEffect, useState} from 'react';
import {Alert, RefreshControl, StyleSheet, Text, View} from 'react-native';
import {CalendarCheck, FileCheck, RefreshCw, ReceiptText, Trash2} from 'lucide-react-native';
import {getManualDeleteSummary, manualDeleteServerData} from '../../api/employeeApi';
import {AppButton} from '../../components/AppButton';
import {Card} from '../../components/Card';
import {PageHeader} from '../../components/PageHeader';
import {Screen} from '../../components/Screen';
import {ToastBanner} from '../../components/ToastBanner';
import {colors} from '../../theme/colors';
import {spacing} from '../../theme/spacing';

const deleteItems = [
  {
    type: 'attendance',
    title: 'Attendance Data',
    caption: 'All attendance records stored on the server',
    countKey: 'attendance',
    icon: CalendarCheck,
  },
  {
    type: 'expenses',
    title: 'Expenses Data',
    caption: 'All employee expense request records',
    countKey: 'expenses',
    icon: ReceiptText,
  },
  {
    type: 'leaves',
    title: 'Leave Data',
    caption: 'All employee leave application records',
    countKey: 'leaves',
    icon: FileCheck,
  },
];

export const AdminManualDeleteScreen = () => {
  const [summary, setSummary] = useState({attendance: 0, expenses: 0, leaves: 0});
  const [loading, setLoading] = useState(false);
  const [deletingType, setDeletingType] = useState('');
  const [toast, setToast] = useState('');
  const [error, setError] = useState('');

  const load = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await getManualDeleteSummary();
      setSummary(response?.data || {attendance: 0, expenses: 0, leaves: 0});
    } catch (err) {
      setError(err.message || 'Server data summary could not be loaded.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const confirmDelete = item => {
    const count = summary[item.countKey] || 0;
    Alert.alert(
      `Delete ${item.title}?`,
      `${count} records will be permanently deleted from the server.`,
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => deleteData(item),
        },
      ],
    );
  };

  const deleteData = async item => {
    setDeletingType(item.type);
    setError('');
    try {
      const response = await manualDeleteServerData(item.type);
      setToast(response?.message || `${item.title} deleted successfully.`);
      await load();
    } catch (err) {
      setError(err.message || `${item.title} could not be deleted.`);
    } finally {
      setDeletingType('');
    }
  };

  return (
    <Screen refreshControl={<RefreshControl refreshing={loading} onRefresh={load} />}>
      <ToastBanner message={toast} type="success" onHide={() => setToast('')} />
      <PageHeader
        eyebrow="Server data"
        title="Manual Delete"
        subtitle="Delete only attendance, expenses, or leave data when the company asks for it."
      />

      <Card>
        <Text style={styles.section}>Delete Data From Server</Text>
        <Text style={styles.meta}>No data is deleted automatically. Use these buttons only for manual cleanup.</Text>
        <View style={styles.actions}>
          <AppButton icon={RefreshCw} title="Refresh Counts" variant="muted" loading={loading} onPress={load} />
        </View>
      </Card>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      {deleteItems.map(item => {
        const Icon = item.icon;
        const count = summary[item.countKey] || 0;
        return (
          <Card key={item.type}>
            <View style={styles.heading}>
              <Icon color={colors.primary} size={24} strokeWidth={2.2} />
              <View style={styles.copy}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.meta}>{item.caption}</Text>
              </View>
            </View>
            <Text style={styles.count}>{count} records</Text>
            <View style={styles.actions}>
              <AppButton
                icon={Trash2}
                title={`Delete ${item.title}`}
                variant="danger"
                disabled={!count}
                loading={deletingType === item.type}
                onPress={() => confirmDelete(item)}
              />
            </View>
          </Card>
        );
      })}
    </Screen>
  );
};

const styles = StyleSheet.create({
  section: {color: colors.text, fontSize: 17, fontWeight: '900'},
  heading: {alignItems: 'center', flexDirection: 'row', gap: spacing.md},
  copy: {flex: 1},
  title: {color: colors.text, fontSize: 17, fontWeight: '900'},
  meta: {color: colors.textMuted, lineHeight: 21, marginTop: spacing.xs},
  count: {color: colors.primary, fontSize: 16, fontWeight: '900', marginTop: spacing.md},
  actions: {flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginTop: spacing.md},
  error: {color: colors.danger, fontWeight: '800'},
});

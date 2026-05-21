import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, Alert, RefreshControl, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {getSalary} from '../../api/employeeApi';
import {Card} from '../../components/Card';
import {EmptyState} from '../../components/EmptyState';
import {PageHeader} from '../../components/PageHeader';
import {Screen} from '../../components/Screen';
import {getThemeColors} from '../../theme/colors';
import {spacing} from '../../theme/spacing';
import {formatCurrency} from '../../utils/money';

const MoneyRow = ({label, value, colors}) => (
  <View style={[styles.row, {borderBottomColor: colors.border}]}>
    <Text style={[styles.label, {color: colors.textMuted}]}>{label}</Text>
    <Text style={[styles.value, {color: colors.text}]}>{formatCurrency(value)}</Text>
  </View>
);

export const SalaryScreen = () => {
  const {user} = useSelector(state => state.auth);
  const themeMode = useSelector(state => state.ui.themeMode);
  const colors = getThemeColors(themeMode);
  const [salary, setSalary] = useState(null);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getSalary({employeeID: user.id});
      setSalary(response?.data?.[0] || null);
    } catch (error) {
      Alert.alert('Salary', error.message);
    } finally {
      setLoading(false);
    }
  }, [user.id]);

  useEffect(() => {
    load();
  }, [load]);

  if (loading && !salary) {
    return (
      <Screen scroll={false}>
        <ActivityIndicator color={colors.primary} />
      </Screen>
    );
  }

  if (!salary) {
    return (
      <Screen>
        <EmptyState title="No salary assigned" message="Your assigned salary details will appear after admin setup." />
      </Screen>
    );
  }

  const {earnings = {}, deductions = {}, netPay, assignedDate, month, year} = salary;

  return (
    <Screen refreshControl={<RefreshControl refreshing={loading} onRefresh={load} />}>
      <PageHeader
        eyebrow="Compensation"
        title="Salary Details"
        subtitle="Assigned earnings, deductions, and net pay structure."
      />
      <Card>
        <Text style={[styles.title, {color: colors.text}]}>Net Pay</Text>
        <Text style={[styles.subtitle, {color: colors.textMuted}]}>{month || '-'} / {year || '-'} | Assigned {assignedDate || '-'}</Text>
        <Text style={[styles.netPay, {color: colors.success}]}>{formatCurrency(netPay)}</Text>
        <Text style={[styles.subtitle, {color: colors.textMuted}]}>Net pay</Text>
      </Card>

      <Card>
        <Text style={[styles.section, {color: colors.text}]}>Earnings</Text>
        <MoneyRow colors={colors} label="Basic" value={earnings.basic} />
        <MoneyRow colors={colors} label="HRA" value={earnings.hra} />
        <MoneyRow colors={colors} label="Conveyance" value={earnings.conveyance} />
        <MoneyRow colors={colors} label="Medical" value={earnings.medical} />
        <MoneyRow colors={colors} label="Special Allowance" value={earnings.specialAllowance} />
        <MoneyRow colors={colors} label="Overtime Pay" value={earnings.overtimePay} />
        <MoneyRow colors={colors} label="Bonus" value={earnings.bonus} />
        <MoneyRow colors={colors} label="Other Benefits" value={earnings.otherBenefits} />
        <MoneyRow colors={colors} label="Gross" value={earnings.gross} />
      </Card>

      <Card>
        <Text style={[styles.section, {color: colors.text}]}>Deductions</Text>
        <MoneyRow colors={colors} label="PF Employee" value={deductions.pfEmployee} />
        <MoneyRow colors={colors} label="ESI Employee" value={deductions.esiEmployee} />
        <MoneyRow colors={colors} label="Professional Tax" value={deductions.professionalTax} />
        <MoneyRow colors={colors} label="Loan Recovery" value={deductions.loanRecovery} />
        <MoneyRow colors={colors} label="TDS Monthly" value={deductions.tdsMonthly} />
        <MoneyRow colors={colors} label="Total Deductions" value={deductions.totalDeductions} />
      </Card>
    </Screen>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '900',
  },
  subtitle: {
    marginTop: spacing.xs,
  },
  netPay: {
    fontSize: 32,
    fontWeight: '900',
    marginTop: spacing.lg,
  },
  section: {
    fontSize: 17,
    fontWeight: '900',
    marginBottom: spacing.md,
  },
  row: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm,
    gap: spacing.md,
  },
  label: {
    flex: 1,
  },
  value: {
    fontWeight: '800',
  },
});

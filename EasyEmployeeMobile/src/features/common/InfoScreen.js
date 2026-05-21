import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Mail, Phone} from 'lucide-react-native';
import {getCompanySettings} from '../../api/employeeApi';
import {Card} from '../../components/Card';
import {PageHeader} from '../../components/PageHeader';
import {Screen} from '../../components/Screen';
import {getThemeColors} from '../../theme/colors';
import {spacing} from '../../theme/spacing';

export const InfoScreen = ({route}) => {
  const {title = 'Information', body = '', kind = ''} = route.params || {};
  const [settings, setSettings] = useState(null);
  const themeMode = useSelector(state => state.ui.themeMode);
  const colors = getThemeColors(themeMode);

  useEffect(() => {
    if (kind !== 'settings') {
      return;
    }
    const load = async () => {
      try {
        const response = await getCompanySettings();
        setSettings(response?.data || null);
      } catch (err) {
        setSettings(null);
      }
    };
    load();
  }, [kind]);

  return (
    <Screen>
      <PageHeader
        eyebrow={kind === 'settings' ? 'Contact us' : 'Information'}
        title={title}
        subtitle={kind === 'settings' ? 'Official company support email and phone for employees and leaders.' : body}
      />
      <Card>
        {kind !== 'settings' ? <Text style={[styles.body, {color: colors.textMuted}]}>{body}</Text> : null}
        {kind === 'settings' ? (
          <View style={[styles.help, {backgroundColor: colors.surfaceMuted}]}>
            <View style={styles.row}>
              <Mail color={colors.primary} size={18} />
              <Text style={[styles.value, {color: colors.text}]}>{settings?.supportEmail || 'Help email not added yet'}</Text>
            </View>
            <View style={styles.row}>
              <Phone color={colors.info} size={18} />
              <Text style={[styles.value, {color: colors.text}]}>{settings?.supportPhone || 'Help number not added yet'}</Text>
            </View>
          </View>
        ) : null}
      </Card>
    </Screen>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: '900',
    marginBottom: spacing.md,
  },
  body: {
    lineHeight: 22,
  },
  help: {
    borderRadius: 8,
    gap: spacing.md,
    marginTop: spacing.lg,
    padding: spacing.md,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
  },
  value: {
    flex: 1,
    fontWeight: '800',
  },
});

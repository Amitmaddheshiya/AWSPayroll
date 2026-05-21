import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {getThemeColors} from '../theme/colors';
import {spacing} from '../theme/spacing';

export const EmptyState = ({title, message}) => {
  const themeMode = useSelector(state => state.ui.themeMode);
  const colors = getThemeColors(themeMode);
  return (
    <View style={styles.wrap}>
      <Text style={[styles.title, {color: colors.text}]}>{title}</Text>
      {message ? <Text style={[styles.message, {color: colors.textMuted}]}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    padding: spacing.xl,
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
  },
  message: {
    marginTop: spacing.sm,
    textAlign: 'center',
  },
});

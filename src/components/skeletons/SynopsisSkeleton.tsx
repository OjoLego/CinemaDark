import React from 'react';
import { StyleSheet, View } from 'react-native';

import SectionHeader from '../molecules/SectionHeader';
import { Spacer } from '../atoms/Spacer';
import { COLORS } from '../../utils/colors';

export const SynopsisSkeleton = () => {
  return (
    <>
      <SectionHeader title="Synopsis" />

      <Spacer height={24} />

      <View style={styles.container}>
        <View style={styles.lineShort} />
        <View style={styles.lineLong} />
        <View style={styles.lineMedium} />
        <View style={styles.lineLong} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },

  baseLine: {
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.Border,
    opacity: 0.3,
  },

  lineShort: {
    width: '60%',
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.Border,
    opacity: 0.3,
  },

  lineMedium: {
    width: '80%',
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.Border,
    opacity: 0.3,
  },

  lineLong: {
    width: '100%',
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.Border,
    opacity: 0.3,
  },
});

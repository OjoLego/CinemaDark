import React from 'react';
import { StyleSheet } from 'react-native';
import SectionHeader from '../molecules/SectionHeader';
import { AppFontFamily, Typography } from '../atoms/Typography';
import { COLORS } from '../../utils/colors';
import { Spacer } from '../atoms/Spacer';

type SynopsisSectionProps = {
  synopsis: string;
};

export const SynopsisSection = ({ synopsis }: SynopsisSectionProps) => {
  return (
    <>
      <SectionHeader title="Synopsis" />
      <Spacer height={24} />

      <Typography
        fontFamily={AppFontFamily.Inter}
        fontSize={18}
        color={COLORS.text2}
        style={styles.description}
      >
        {synopsis}
      </Typography>
    </>
  );
};

const styles = StyleSheet.create({
  description: {
    lineHeight: 22,
  },
});

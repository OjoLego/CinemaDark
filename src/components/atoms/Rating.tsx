import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Typography, AppFontFamily } from './Typography';
import { COLORS } from '../../utils/colors';
import { ICONS } from '../../utils/icons';

type RatingProps = {
  value: string | number;
  fontFamily?: AppFontFamily;
  fontSize?: number;
  color?: string;
};

export const Rating = ({
  value,
  fontFamily = AppFontFamily.InterBold,
  fontSize = 16,
  color = COLORS.Primary,
}: RatingProps) => {
  return (
    <View style={styles.container}>
      <ICONS.Star />

      <Typography fontFamily={fontFamily} fontSize={fontSize} color={color}>
        {value}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});

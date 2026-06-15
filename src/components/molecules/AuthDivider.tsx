import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppFontFamily, Typography } from '../atoms/Typography';
import { COLORS } from '../../utils/colors';
import { Divider } from '../atoms/Divider';

export type AuthDividerProps = {
  text: string;
};

export const AuthDivider = ({ text }: AuthDividerProps) => {
  return (
    <View style={styles.container}>
      <Divider />

      <Typography
        fontFamily={AppFontFamily.InterMedium}
        fontSize={12}
        color={COLORS.text2}
        style={styles.text}
      >
        {text}
      </Typography>

      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    marginHorizontal: 16,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.Border,
  },
});

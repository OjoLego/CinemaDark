import React from 'react';
import { StyleSheet, View, TextInputProps } from 'react-native';

import { COLORS } from '../../../utils/colors';
import { AppFontFamily, Typography } from '../../atoms/Typography';
import { TextField } from '../../atoms/TextField';

export type SignInInputFieldProps = {
  label: string;
  rightContent?: React.ReactNode;
  inputProps?: TextInputProps;
};

export const SignInInputField = ({
  label,
  rightContent,
  inputProps,
}: SignInInputFieldProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <Typography
          fontFamily={AppFontFamily.InterSemiBold}
          fontSize={14}
          color={COLORS.text2}
        >
          {label}
        </Typography>

        {rightContent}
      </View>

      <View style={styles.inputContainer}>
        <TextField {...inputProps} style={styles.input} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },

  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputContainer: {
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#0E0E0E',
    borderColor: '#4D4732',
    height: 57,
    justifyContent: 'center',
  },

  input: {
    paddingHorizontal: 16,
    fontFamily: AppFontFamily.Inter,
    fontSize: 16,
    color: COLORS.text1,
  },
});

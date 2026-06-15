import React from 'react';
import { StyleSheet, View, TextInputProps } from 'react-native';

import { COLORS } from '../../../utils/colors';
import { AppFontFamily, Typography } from '../../atoms/Typography';
import { TextField } from '../../atoms/TextField';

export type SignUpInputFieldProps = {
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  rightContent?: React.ReactNode;
  inputProps?: TextInputProps;
};

export const SignUpInputField = ({
  label,
  leftIcon,
  rightIcon,
  rightContent,
  inputProps,
}: SignUpInputFieldProps) => {
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
        {leftIcon}

        <TextField {...inputProps} style={styles.input} />

        {rightIcon}
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    gap: 8,
    backgroundColor: COLORS.Background,
    borderRadius: 8,
  },

  input: {
    flex: 1,
    fontFamily: AppFontFamily.Inter,
    fontSize: 16,
    color: COLORS.text1,
  },
});

import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import {
  Typography,
  AppFontFamily,
} from '../../../components/atoms/Typography';

import { COLORS } from '../../../utils/colors';
import { SignInInputField } from '../../molecules/InputField/SignInInputField';

export const SignInForm = () => {
  return (
    <View style={styles.container}>
      <SignInInputField
        label="Email Address"
        inputProps={{
          placeholder: 'name@example.com',
          placeholderTextColor: '#999077',
          keyboardType: 'email-address',
          autoCapitalize: 'none',
          autoCorrect: false,
        }}
      />

      <SignInInputField
        label="Password"
        rightContent={
          <TouchableOpacity>
            <Typography
              fontFamily={AppFontFamily.InterMedium}
              fontSize={12}
              color={COLORS.Primary}
            >
              Forgot Password?
            </Typography>
          </TouchableOpacity>
        }
        inputProps={{
          placeholder: '******',
          placeholderTextColor: '#999077',
          secureTextEntry: true,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    gap: 12,
  },
});

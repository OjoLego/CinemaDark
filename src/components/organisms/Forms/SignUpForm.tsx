import React from 'react';
import { StyleSheet, View } from 'react-native';

import { SignUpInputField } from '../../molecules/InputField/SignUpInputField';
import { ICONS } from '../../../utils/icons';

export const SignUpForm = () => {
  return (
    <View style={styles.container}>
      <SignUpInputField
        label="FULL NAME"
        leftIcon={<ICONS.Person />}
        inputProps={{
          placeholder: 'Enter your name',
          placeholderTextColor: '#999077',
        }}
      />

      <SignUpInputField
        label="EMAIL ADDRESS"
        leftIcon={<ICONS.Email />}
        inputProps={{
          placeholder: 'you@example.com',
          placeholderTextColor: '#999077',
          keyboardType: 'email-address',
          autoCapitalize: 'none',
          autoCorrect: false,
        }}
      />

      <SignUpInputField
        label="PASSWORD"
        leftIcon={<ICONS.Padlock />}
        rightIcon={<ICONS.Eye_Open />}
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
    gap: 12,
  },
});

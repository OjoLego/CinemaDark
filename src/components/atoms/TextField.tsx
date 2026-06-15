import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

export type TextFieldProps = TextInputProps;

export const TextField = (props: TextFieldProps) => {
  return <TextInput {...props} />;
};

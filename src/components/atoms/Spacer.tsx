import { View } from 'react-native';
import React from 'react';

type Props = {
  width?: number;
  height?: number;
};

export const Spacer = ({ width, height }: Props) => {
  return <View style={{ width, height }} />;
};

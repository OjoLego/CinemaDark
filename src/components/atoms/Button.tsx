import React, { ReactNode } from 'react';
import { Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native';

export type ButtonProps = PressableProps & {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const Button = ({ children, style, ...props }: ButtonProps) => {
  return (
    <Pressable {...props} style={style}>
      {children}
    </Pressable>
  );
};

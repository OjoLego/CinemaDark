import { ColorValue, Text, TextProps, TextStyle } from 'react-native';
import React from 'react';
import { COLORS } from '../../utils/colors';

export enum AppFontFamily {
  Inter = 'Inter-Regular',
  InterMedium = 'Inter-Medium',
  InterSemiBold = 'Inter-SemiBold',
  InterBold = 'Inter-Bold',

  Montserrat = 'Montserrat-Regular',
  MontserratMedium = 'Montserrat-Medium',
  MontserratSemiBold = 'Montserrat-SemiBold',
  MontserratBold = 'Montserrat-Bold',
}

type Props = TextProps & {
  color?: ColorValue;
  fontFamily?: AppFontFamily;
  fontSize?: number;
  fontWeight?: TextStyle['fontWeight'];
};

export const Typography = ({
  color = COLORS.White,
  fontFamily = AppFontFamily.Inter,
  fontSize = 14,
  fontWeight,
  style,
  ...props
}: Props) => {
  return (
    <Text
      style={[
        {
          color,
          fontFamily,
          fontSize,
          fontWeight,
        },
        style,
      ]}
      {...props}
    />
  );
};

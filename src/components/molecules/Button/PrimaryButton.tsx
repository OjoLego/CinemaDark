import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { Button } from '../../atoms/Button';
import { AppFontFamily, Typography } from '../../atoms/Typography';
import { COLORS } from '../../../utils/colors';

export type PrimaryButtonProps = {
  title: string;
  onPress?: () => void;

  leftIcon?: ReactNode;

  paddingVertical?: number;

  titleFontFamily?: AppFontFamily;
  titleFontSize?: number;
  titleColor?: string;
};

export const PrimaryButton = ({
  title,
  onPress,
  leftIcon,

  paddingVertical = 16,

  titleFontFamily = AppFontFamily.Montserrat,
  titleFontSize = 24,
  titleColor = '#221B00',
}: PrimaryButtonProps) => {
  return (
    <Button onPress={onPress} style={[styles.container, { paddingVertical }]}>
      <View style={styles.content}>
        {leftIcon}

        <Typography
          fontFamily={titleFontFamily}
          fontSize={titleFontSize}
          color={titleColor}
        >
          {title}
        </Typography>
      </View>
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: COLORS.Primary,
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
});

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppFontFamily, Typography } from '../../atoms/Typography';
import { COLORS } from '../../../utils/colors';

export type AuthTitleSubtitleProps = {
  title: string;
  subtitle: string;

  alignment?: 'left' | 'center';

  titleFontFamily?: AppFontFamily;
  titleFontSize?: number;
  titleColor?: string;

  subtitleFontFamily?: AppFontFamily;
  subtitleFontSize?: number;
  subtitleColor?: string;
};

export const AuthTitleSubtitle = ({
  title,
  subtitle,
  alignment = 'center',
  titleFontFamily = AppFontFamily.Montserrat,
  titleFontSize = 16,
  titleColor = COLORS.text1,
  subtitleFontFamily = AppFontFamily.Inter,
  subtitleFontSize = 16,
  subtitleColor = COLORS.text2,
}: AuthTitleSubtitleProps) => {
  const isCentered = alignment === 'center';

  return (
    <View
      style={[
        styles.container,
        isCentered ? styles.centerContainer : styles.leftContainer,
      ]}
    >
      <Typography
        fontFamily={titleFontFamily}
        fontSize={titleFontSize}
        color={titleColor}
      >
        {title}
      </Typography>

      <Typography
        fontFamily={subtitleFontFamily}
        fontSize={subtitleFontSize}
        color={subtitleColor}
      >
        {subtitle}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },

  centerContainer: {
    alignItems: 'center',
  },

  leftContainer: {
    alignItems: 'flex-start',
  },
});

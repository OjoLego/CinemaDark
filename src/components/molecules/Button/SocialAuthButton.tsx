import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button } from '../../atoms/Button';

import { Typography, AppFontFamily } from '../../atoms/Typography';

import { COLORS } from '../../../utils/colors';

type SocialAuthButtonProps = {
  title: string;
  icon?: React.ReactNode;
  onPress?: () => void;
};

export const SocialAuthButton = ({
  title,
  icon,
  onPress,
}: SocialAuthButtonProps) => {
  return (
    <Button onPress={onPress} style={styles.container}>
      <View style={styles.content}>
        {icon}

        <Typography
          fontFamily={AppFontFamily.Montserrat}
          fontSize={12}
          color={COLORS.text2}
        >
          {title}
        </Typography>
      </View>
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: COLORS.Border,
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
});

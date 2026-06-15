import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '../../atoms/Button';
import { AppFontFamily, Typography } from '../../atoms/Typography';
import { COLORS } from '../../../utils/colors';

export type SecondaryButtonProps = { title: string; onPress?: () => void };

export const SecondaryButton = ({ title, onPress }: SecondaryButtonProps) => {
  return (
    <Button onPress={onPress} style={styles.container}>
      <Typography
        fontFamily={AppFontFamily.InterMedium}
        fontSize={16}
        color={COLORS.text1}
      >
        {title}
      </Typography>
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: COLORS.Surface,
    borderColor: COLORS.Border,
    borderWidth: 1,
  },
});

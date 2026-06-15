import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/colors';
import { Checkbox } from '../../atoms/Checkbox';
import { Typography, AppFontFamily } from '../../atoms/Typography';
export const TermsAgreement = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <View style={styles.container}>
      <Checkbox checked={agreed} onPress={() => setAgreed(!agreed)} />

      <Typography
        style={styles.text}
        fontFamily={AppFontFamily.Inter}
        fontSize={14}
        color={COLORS.White}
      >
        I agree to the{' '}
        <Typography
          fontFamily={AppFontFamily.InterSemiBold}
          fontSize={14}
          color={COLORS.Primary}
          onPress={() => {}}
        >
          Terms of Service
        </Typography>{' '}
        and{' '}
        <Typography
          fontFamily={AppFontFamily.InterSemiBold}
          fontSize={14}
          color={COLORS.Primary}
          onPress={() => {}}
        >
          Privacy Policy.
        </Typography>
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  text: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    lineHeight: 20,
  },
});

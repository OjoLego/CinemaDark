import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/colors';
import { Typography, AppFontFamily } from '../../atoms/Typography';

export type AuthPromptProps = {
  text: string;
  actionText: string;
  onPress?: () => void;
};

export const AuthPrompt = ({ text, actionText, onPress }: AuthPromptProps) => {
  return (
    <View style={styles.container}>
      <Typography
        fontFamily={AppFontFamily.Inter}
        fontSize={14}
        color={COLORS.text2}
      >
        {text}
      </Typography>

      <TouchableOpacity onPress={onPress}>
        <Typography
          fontFamily={AppFontFamily.Montserrat}
          fontSize={12}
          color={COLORS.Primary}
          style={styles.actionText}
        >
          {actionText}
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  actionText: {
    marginLeft: 4,
  },
});

import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import { COLORS } from '../../utils/colors';

type CheckboxProps = {
  checked: boolean;
  onPress: () => void;
};

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <Text style={styles.checkmark}>✓</Text>}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderRadius: 4,
    borderColor: COLORS.Border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: COLORS.Primary,
  },
  checkmark: {
    color: COLORS.Black,
    fontSize: 12,
    fontWeight: '500',
  },
});

import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { AppFontFamily, Typography } from '../../atoms/Typography';
import { COLORS } from '../../../utils/colors';

type GenreChipProps = {
  title: string;
  selected?: boolean;
  onPress?: () => void;
};

export const GenreChip = ({
  title,
  selected = false,
  onPress,
}: GenreChipProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, selected ? styles.selected : styles.unselected]}
    >
      <Typography
        fontFamily={AppFontFamily.Inter}
        fontSize={16}
        color={selected ? '#221B00' : COLORS.text1}
      >
        {title}
      </Typography>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 36,
    paddingHorizontal: 20,
    borderRadius: 50,
    justifyContent: 'center',
  },

  selected: {
    backgroundColor: COLORS.Primary,
  },

  unselected: {
    backgroundColor: COLORS.Surface,
    borderWidth: 1,
    borderColor: COLORS.Border,
  },
});

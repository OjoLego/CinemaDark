import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../utils/colors';

export const TopRatedCardSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.poster} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },

  poster: {
    aspectRatio: 0.7,
    borderRadius: 12,
    backgroundColor: COLORS.Surface,
  },
});

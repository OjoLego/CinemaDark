import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SkeletonBox } from './SkeletonBox';

export const MovieCardSkeleton = () => {
  return (
    <View style={styles.container}>
      <SkeletonBox height={180} width={120} borderRadius={12} />
      <SkeletonBox height={12} width={100} />
      <SkeletonBox height={10} width={80} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 12,
    gap: 6,
  },
});

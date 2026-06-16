import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SkeletonBox } from './SkeletonBox';

export const HeroSkeleton = () => {
  return (
    <View style={styles.container}>
      <SkeletonBox height={400} width="100%" borderRadius={0} />

      <View style={styles.content}>
        <SkeletonBox height={20} width={120} />
        <SkeletonBox height={14} width="90%" />
        <SkeletonBox height={14} width="80%" />
        <SkeletonBox height={40} width={140} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  content: {
    position: 'absolute',
    bottom: 40,
    paddingHorizontal: 16,
    gap: 10,
  },
});

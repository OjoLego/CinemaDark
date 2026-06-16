import React from 'react';
import { View, StyleSheet } from 'react-native';

export const SkeletonBox = ({ height, width, borderRadius = 8 }: any) => {
  return <View style={[styles.box, { height, width, borderRadius }]} />;
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#2a2a2a',
    overflow: 'hidden',
  },
});

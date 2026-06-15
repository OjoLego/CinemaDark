import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Typography, AppFontFamily } from '../atoms/Typography';
import { COLORS } from '../../utils/colors';
import { Rating } from '../atoms/Rating';

type TrendingRatingProps = {
  rating: string | number;
};

const TrendingRating = ({ rating }: TrendingRatingProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.badge}>
        <Typography
          fontFamily={AppFontFamily.InterMedium}
          fontSize={12}
          color={COLORS.textDark}
        >
          TRENDING
        </Typography>
      </View>

      <Rating value={rating} />
    </View>
  );
};

export default TrendingRating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  badge: {
    backgroundColor: COLORS.Primary,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
});

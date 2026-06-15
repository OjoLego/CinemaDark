import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

import { AppFontFamily, Typography } from '../../atoms/Typography';
import { COLORS } from '../../../utils/colors';
import { Rating } from '../../atoms/Rating';

type NowPlayingCardProps = {
  image: ImageSourcePropType;
  title: string;
  genre: string;
  duration: string;
  rating: number;
  width?: number;
  onPress?: () => void;
};

export const NowPlayingCard = ({
  image,
  title,
  genre,
  duration,
  rating,
  width = 160,
  onPress,
}: NowPlayingCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        { width },
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="cover" />

        <View style={styles.ratingContainer}>
          <Rating
            value={rating}
            fontSize={12}
            fontFamily={AppFontFamily.InterMedium}
          />
        </View>
      </View>

      <Typography
        fontFamily={AppFontFamily.Inter}
        fontSize={16}
        color={COLORS.text1}
        numberOfLines={1}
      >
        {title}
      </Typography>
      <Typography
        fontFamily={AppFontFamily.Inter}
        fontSize={12}
        color={COLORS.text2}
        numberOfLines={1}
      >
        {genre} • {duration}
      </Typography>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 160,
  },

  imageContainer: {
    aspectRatio: 2 / 3,
    borderRadius: 12,
    borderColor: COLORS.Border,
    borderWidth: 1,
    overflow: 'hidden',
    marginBottom: 12,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  ratingContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: COLORS.Surface,
    borderColor: COLORS.Border,
    borderWidth: 1,
    borderRadius: 8,
    padding: 4,
  },
  pressed: {
    opacity: 0.8,
  },
});

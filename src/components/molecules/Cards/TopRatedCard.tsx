import React from 'react';
import { ImageBackground, Pressable, StyleSheet, View } from 'react-native';

import { Typography, AppFontFamily } from '../../atoms/Typography';
import { COLORS } from '../../../utils/colors';
import { Rating } from '../../atoms/Rating';

type TopRatedCardProps = {
  image?: string;
  title: string;
  rating: number | string;
  tag?: string;
  variant?: 'featured' | 'compact';
  onPress?: () => void;
};

const variantStyles = {
  featured: {
    titleSize: 16,
    metaSize: 12,
    paddingHorizontal: 24,
    paddingBottom: 24,
    gap: 8,
    aspectRatio: 4 / 3,
  },

  compact: {
    titleSize: 12,
    metaSize: 10,
    paddingHorizontal: 12,
    paddingBottom: 12,
    gap: 4,
    aspectRatio: 3 / 4,
  },
};

export const TopRatedCard = ({
  image,
  title,
  rating,
  tag,
  variant = 'compact',
  onPress,
}: TopRatedCardProps) => {
  const config = variantStyles[variant];

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <ImageBackground
        source={{ uri: image }}
        style={[styles.image, { aspectRatio: config.aspectRatio }]}
        imageStyle={styles.imageBorder}
        resizeMode="cover"
      >
        <View
          style={[
            styles.content,
            {
              paddingHorizontal: config.paddingHorizontal,
              paddingBottom: config.paddingBottom,
              gap: config.gap,
            },
          ]}
        >
          <View style={styles.ratingRow}>
            <Rating
              value={rating}
              fontSize={config.metaSize}
              fontFamily={AppFontFamily.Inter}
            />

            {tag && (
              <Typography
                fontFamily={AppFontFamily.Inter}
                fontSize={config.metaSize}
                color={COLORS.text2}
              >
                {`• ${tag}`}
              </Typography>
            )}
          </View>

          <Typography
            fontFamily={AppFontFamily.Montserrat}
            fontSize={config.titleSize}
            numberOfLines={2}
            color={COLORS.text1}
          >
            {title}
          </Typography>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    justifyContent: 'flex-end',
  },

  imageBorder: {
    borderRadius: 16,
    borderColor: COLORS.Border,
    borderWidth: 1,
  },

  content: {
    justifyContent: 'flex-end',
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  pressed: {
    opacity: 0.8,
  },
});

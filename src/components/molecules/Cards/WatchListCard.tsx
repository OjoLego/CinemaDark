import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Typography, AppFontFamily } from '../../atoms/Typography';
import { COLORS } from '../../../utils/colors';
import { Rating } from '../../atoms/Rating';
import { ICONS } from '../../../utils/icons';

type WatchListCardProps = {
  image: string;
  title: string;
  genres: string[];
  duration: string;
  rating: number | string;
  onDelete?: () => void;
  onPress?: () => void;
};

export const WatchListCard = ({
  image,
  title,
  genres,
  duration,
  rating,
  onDelete,
  onPress,
}: WatchListCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <Image
          source={{ uri: image }}
          style={styles.poster}
          resizeMode="cover"
        />

        <View style={styles.info}>
          <Typography
            fontFamily={AppFontFamily.Montserrat}
            fontSize={18}
            color={COLORS.text1}
            numberOfLines={2}
          >
            {title}
          </Typography>

          <View style={styles.genreRow}>
            <Typography
              fontFamily={AppFontFamily.Inter}
              fontSize={12}
              color={COLORS.text2}
              numberOfLines={1}
            >
              {genres.join(' • ')}
            </Typography>

            <Typography
              fontFamily={AppFontFamily.Inter}
              fontSize={12}
              color={COLORS.text2}
            >
              {duration}
            </Typography>
          </View>

          <View style={styles.rating}>
            <Rating value={rating} />
          </View>
        </View>

        <Pressable style={styles.deleteButton} onPress={onDelete}>
          <ICONS.Delete />
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    paddingVertical: 12,
    paddingStart: 12,
    borderWidth: 1,
    borderColor: COLORS.Border,
    backgroundColor: COLORS.SurfaceDark,
    borderRadius: 12,
  },

  poster: {
    width: 80,
    aspectRatio: 2 / 3,
    borderRadius: 8,
  },

  info: {
    flex: 1,
    paddingVertical: 12,
    marginStart: 16,
  },

  genreRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },

  rating: {
    marginTop: 8,
  },

  deleteButton: {
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  pressed: {
    opacity: 0.8,
  },
});

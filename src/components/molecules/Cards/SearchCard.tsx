import React from 'react';
import { ImageBackground, Pressable, StyleSheet, View } from 'react-native';

import { Typography, AppFontFamily } from '../../atoms/Typography';
import { COLORS } from '../../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';

type SearchCardProps = {
  image?: string;
  title: string;
  genre: string[];
  onPress?: () => void;
};

export const SearchCard = ({
  image,
  title,
  genre,
  onPress,
}: SearchCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <ImageBackground
        source={image ? { uri: image } : undefined}
        style={styles.image}
        imageStyle={styles.imageBorder}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['transparent', COLORS.Background]}
          style={styles.imageGradient}
        />

        <View style={styles.content}>
          <Typography
            fontFamily={AppFontFamily.Montserrat}
            fontSize={12}
            color={COLORS.text1}
            numberOfLines={2}
          >
            {title}
          </Typography>

          <Typography
            fontFamily={AppFontFamily.Inter}
            fontSize={10}
            color={COLORS.text2}
            numberOfLines={1}
          >
            {genre.join(' • ')}
          </Typography>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 3 / 4,
    justifyContent: 'flex-end',
  },

  imageBorder: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.Border,
  },

  content: {
    paddingHorizontal: 12,
    paddingBottom: 12,
    gap: 4,
  },

  pressed: {
    opacity: 0.8,
  },
  imageGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
  },
});

import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Spacer } from '../../atoms/Spacer';
import { COLORS } from '../../../utils/colors';
import { MovieDetailsInfo } from '../../molecules/MovieDetailsInfo';

type DetailsHeroBannerProps = {
  backgroundImage: { uri: string };
  posterImage: { uri: string };
  title: string;
  rating: number;
  genreText: string[];
  year: string;
  duration: string;
  isAdult: boolean;
};

export const DetailsHeroBanner = ({
  backgroundImage,
  posterImage,
  title,
  rating,
  genreText,
  year,
  duration,
  isAdult,
}: DetailsHeroBannerProps) => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.heroImage}
      resizeMode="cover"
    >
      <LinearGradient
        colors={['transparent', COLORS.Background]}
        style={styles.imageGradient}
      />

      <View style={styles.overlayContent}>
        <Image source={posterImage} style={styles.poster} />
        <Spacer height={24} />
        <MovieDetailsInfo
          title={title}
          rating={rating.toFixed(1)}
          year={year}
          duration={duration}
          isAdult={isAdult}
          genres={genreText}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  heroImage: {
    justifyContent: 'flex-end',
  },

  overlayContent: {
    paddingHorizontal: 16,
    paddingTop: 251,
    paddingBottom: 8,
  },

  imageGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 500,
  },
  poster: {
    width: 158,
    height: 238,
    borderRadius: 12,
    borderColor: COLORS.Border,
    borderWidth: 1,
  },
});

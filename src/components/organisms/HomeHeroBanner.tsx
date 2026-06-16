import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { ICONS } from '../../utils/icons';
import { AppFontFamily } from '../atoms/Typography';
import { Spacer } from '../atoms/Spacer';
import TrendingRating from '../molecules/TrendingRating';
import HomeMovieInfo from '../molecules/Texts/HomeMovieInfo';
import { PrimaryButton } from '../molecules/Button/PrimaryButton';
import { SecondaryButton } from '../molecules/Button/SecondaryButton';

type HomeHeroBannerProps = {
  image: { uri: string };
  title: string;
  description: string;
  rating: number;
  onPlayTrailer?: () => void;
  onMoreInfo?: () => void;
};

export const HomeHeroBanner = ({
  image,
  title,
  description,
  rating,
  onPlayTrailer,
  onMoreInfo,
}: HomeHeroBannerProps) => {
  return (
    <ImageBackground source={image} style={styles.heroImage} resizeMode="cover">
      <LinearGradient
        colors={['transparent', '#000']}
        style={styles.imageGradient}
      />

      <View style={styles.overlayContent}>
        <TrendingRating rating={rating.toFixed(1)} />

        <HomeMovieInfo title={title} description={description} />

        <Spacer height={32} />

        <View style={styles.actionButtons}>
          <View style={styles.actionButtonWrapper}>
            <PrimaryButton
              title="Play Trailer"
              leftIcon={<ICONS.Play />}
              onPress={onPlayTrailer}
              paddingVertical={12}
              titleFontFamily={AppFontFamily.InterMedium}
              titleFontSize={16}
            />
          </View>

          <View style={styles.actionButtonWrapper}>
            <SecondaryButton title="More Info" onPress={onMoreInfo} />
          </View>
        </View>
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
    paddingTop: 350,
    paddingBottom: 50,
    gap: 12,
  },

  imageGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 1000,
  },

  actionButtons: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },

  actionButtonWrapper: {
    flex: 1,
  },
});

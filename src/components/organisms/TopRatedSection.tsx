import React from 'react';
import { StyleSheet, View, ImageSourcePropType } from 'react-native';

import SectionHeader from '../molecules/SectionHeader';
import { TopRatedCard } from '../molecules/Cards/TopRatedCard';
import { Spacer } from '../atoms/Spacer';

type Movie = {
  id: string;
  image: ImageSourcePropType;
  title: string;
  rating: number;
  tag?: string;
};

type TopRatedSectionProps = {
  title: string;
  actionText?: string;
  movies: Movie[];
  onActionPress?: () => void;
  onMoviePress?: (movie: Movie) => void;
};

export const TopRatedSection = ({
  title,
  actionText,
  movies,
  onActionPress,
  onMoviePress,
}: TopRatedSectionProps) => {
  const featuredMovie = movies[0];
  const secondaryMovies = movies.slice(1, 3);

  if (!featuredMovie) {
    return null;
  }

  return (
    <View style={styles.container}>
      <SectionHeader
        title={title}
        actionText={actionText}
        onActionPress={onActionPress}
      />

      <Spacer height={24} />

      <TopRatedCard
        image={featuredMovie.image}
        title={featuredMovie.title}
        rating={featuredMovie.rating}
        tag={featuredMovie.tag}
        variant="featured"
        onPress={() => onMoviePress?.(featuredMovie)}
      />

      {secondaryMovies.length > 0 && (
        <>
          <Spacer height={16} />

          <View style={styles.bottomCardsRow}>
            {secondaryMovies.map(movie => (
              <View key={movie.id} style={styles.bottomCardWrapper}>
                <TopRatedCard
                  image={movie.image}
                  title={movie.title}
                  rating={movie.rating}
                  variant="compact"
                  onPress={() => onMoviePress?.(movie)}
                />
              </View>
            ))}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },

  bottomCardsRow: {
    flexDirection: 'row',
    gap: 12,
  },

  bottomCardWrapper: {
    flex: 1,
  },
});

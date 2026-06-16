import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import SectionHeader from '../molecules/SectionHeader';
import { NowPlayingCard } from '../molecules/Cards/NowPlayingCard';
import { Movie } from '../../utils/types';
import { useTmdbImage } from '../../hooks/useTmdbImage';

type NowPlayingSectionProps = {
  title: string;
  movies: Movie[];
  actionText?: string;
  onActionPress?: () => void;
  onMoviePress?: (movie: Movie) => void;
};

export const NowPlayingSection = ({
  title,
  movies,
  actionText,
  onActionPress,
  onMoviePress,
}: NowPlayingSectionProps) => {
  const { getImageUrl } = useTmdbImage();
  return (
    <View>
      <View style={styles.headerContainer}>
        <SectionHeader
          title={title}
          actionText={actionText}
          onActionPress={onActionPress}
        />
      </View>

      <View style={styles.listContainer}>
        <FlatList
          horizontal
          data={movies}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <NowPlayingCard
              image={getImageUrl(item.poster_path, 'w500') ?? ''}
              title={item.title}
              rating={item.vote_average.toFixed(1)}
              genre={item.genreText}
              onPress={() => onMoviePress?.(item)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 8,
    paddingBottom: 24,
    paddingHorizontal: 16,
  },

  listContainer: {
    paddingStart: 16,
  },

  listContent: {
    gap: 25,
  },
});

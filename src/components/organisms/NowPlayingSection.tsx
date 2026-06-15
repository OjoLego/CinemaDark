import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import SectionHeader from '../molecules/SectionHeader';
import { NowPlayingCard } from '../molecules/Cards/NowPlayingCard';

type Movie = {
  id: string;
  image: any;
  title: string;
  rating: number;
  genre: string;
  duration: string;
};

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
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <NowPlayingCard
              image={item.image}
              title={item.title}
              rating={item.rating}
              genre={item.genre}
              duration={item.duration}
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

import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../utils/colors';
import SectionHeader from '../components/molecules/SectionHeader';
import { Spacer } from '../components/atoms/Spacer';
import { WatchListCard } from '../components/molecules/Cards/WatchListCard';
import { watchListMoviesSelector } from '../redux/selectors/watchListSelector';
import { useDispatch, useSelector } from 'react-redux';
import { useTmdbImage } from '../hooks/useTmdbImage';
import { toggleWatchList } from '../redux/slices/watchListSlice';
import { AppDispatch } from '../redux/store';
import { useNavigation } from '@react-navigation/native';
import { WatchListNavigationProp } from '../navigation/WatchListStack';

const WatchList = () => {
  const navigation = useNavigation<WatchListNavigationProp>();
  const { getImageUrl } = useTmdbImage();
  const movies = useSelector(watchListMoviesSelector);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.horizontalPadding}>
        <Spacer height={32} />

        <SectionHeader title="My Watchlist" />

        <Spacer height={24} />

        <FlatList
          data={movies}
          keyExtractor={item => String(item.id)}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <WatchListCard
              image={getImageUrl(item.poster_path, 'w500') ?? ''}
              title={item.title}
              genres={item.genres}
              duration={item.duration}
              rating={item.rating}
              onDelete={() => dispatch(toggleWatchList(item.id))}
              onPress={() =>
                navigation.navigate('Details', {
                  movieId: item.id,
                })
              }
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default WatchList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Background,
  },

  horizontalPadding: {
    flex: 1,
    paddingHorizontal: 16,
  },

  listContent: {
    gap: 16,
    paddingBottom: 24,
  },
});

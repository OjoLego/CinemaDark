import React, { useEffect } from 'react';
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

import { COLORS } from '../utils/colors';
import { Header } from '../components/molecules/Header';
import { ICONS } from '../utils/icons';
import { AppFontFamily } from '../components/atoms/Typography';
import { HomeHeroBanner } from '../components/organisms/HomeHeroBanner';
import { Spacer } from '../components/atoms/Spacer';
import { NowPlayingSection } from '../components/organisms/NowPlayingSection';
import { TopRatedSection } from '../components/organisms/TopRatedSection';

import { AppDispatch } from '../redux/store';
import {
  fetchTrendingMovies,
  fetchNowPlayingMovies,
  fetchTopRatedMovies,
  fetchMovieGenres,
} from '../redux/thunks/homeThunk';

import { useTmdbImage } from '../hooks/useTmdbImage';
import { HeroSkeleton } from '../components/skeletons/HeroSkeleton';
import { MovieCardSkeleton } from '../components/skeletons/MovieCardSkeleton';
import { useHomeData } from '../hooks/useHomeData';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const home = useHomeData();

  const { getImageUrl } = useTmdbImage();

  function onRefresh() {
    dispatch(fetchTrendingMovies());
    dispatch(fetchNowPlayingMovies());
    dispatch(fetchTopRatedMovies());
    dispatch(fetchMovieGenres());
  }

  useEffect(() => {
    if (!home.trending.length) {
      dispatch(fetchTrendingMovies());
    }

    if (!home.nowPlaying.length) {
      dispatch(fetchNowPlayingMovies());
    }

    if (!home.topRated.length) {
      dispatch(fetchTopRatedMovies());
    }

    if (!home.genres.length) {
      dispatch(fetchMovieGenres());
    }
  }, [
    dispatch,
    home.trending.length,
    home.nowPlaying.length,
    home.topRated.length,
    home.genres.length,
  ]);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header
        title="CINEMA DARK"
        titleAlignment="left"
        titleProps={{
          fontFamily: AppFontFamily.MontserratBold,
          fontSize: 32,
          color: COLORS.Primary,
        }}
        rightIcons={[
          {
            icon: <ICONS.Search />,
            onPress: () => console.log('Search pressed'),
          },
        ]}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={onRefresh} />
        }
      >
        {home.loadingTrending ? (
          <HeroSkeleton />
        ) : home.heroMovie ? (
          <HomeHeroBanner
            image={{
              uri: getImageUrl(home.heroMovie.poster_path, 'w780') ?? '',
            }}
            title={home.heroMovie.title}
            description={home.heroMovie.overview}
            rating={home.heroMovie.vote_average}
          />
        ) : null}

        {home.loadingNowPlaying ? (
          <View style={styles.skeleton}>
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
          </View>
        ) : home.nowPlaying.length > 0 ? (
          <NowPlayingSection
            title="Now Playing"
            movies={home.nowPlaying}
            onMoviePress={movie => console.log(movie.id)}
          />
        ) : null}

        <Spacer height={48} />

        {home.loadingTopRated ? (
          <View style={styles.skeleton}>
            <MovieCardSkeleton />
            <MovieCardSkeleton />
          </View>
        ) : home.topRated.length > 0 ? (
          <TopRatedSection
            title="Top Rated"
            actionText="View All"
            movies={home.topRated}
            onActionPress={() => console.log('View All')}
            onMoviePress={movie => console.log(movie.id)}
          />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Background,
  },

  center: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorText: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 12,
  },

  sectionError: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  marginVertical: {
    marginVertical: 10,
  },
  skeleton: { flexDirection: 'row', gap: 12, paddingHorizontal: 16 },
});

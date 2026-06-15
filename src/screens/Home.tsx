import { ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../utils/colors';
import { Header } from '../components/molecules/Header';
import { ICONS } from '../utils/icons';
import { AppFontFamily } from '../components/atoms/Typography';
import { IMAGES } from '../utils/images';
import { HomeHeroBanner } from '../components/organisms/HomeHeroBanner';
import { Spacer } from '../components/atoms/Spacer';
import { NowPlayingSection } from '../components/organisms/NowPlayingSection';
import { TopRatedSection } from '../components/organisms/TopRatedSection';

const movies = [
  {
    id: '1',
    image: IMAGES.Home,
    title: 'Michael',
    rating: 8.5,
    genre: 'Drama',
    duration: '2h 15m',
  },
  {
    id: '2',
    image: IMAGES.Home,
    title: 'Dune: Part Two',
    rating: 8.7,
    genre: 'Sci-Fi',
    duration: '2h 46m',
  },
  {
    id: '3',
    image: IMAGES.Home,
    title: 'Oppenheimer',
    rating: 8.8,
    genre: 'Drama',
    duration: '3h',
  },
];

const topRatedMovies = [
  {
    id: '1',
    image: IMAGES.Home,
    title: 'The Orchestrator',
    rating: 9.8,
    tag: 'All Time Classic',
  },
  {
    id: '2',
    image: IMAGES.Home,
    title: 'Michael',
    rating: 8.9,
    tag: 'Biography',
  },
  {
    id: '3',
    image: IMAGES.Home,
    title: 'Dune: Part Two',
    rating: 8.7,
    tag: 'Sci-Fi',
  },
];

const Home = () => {
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
            onPress: () => {
              console.log('Search pressed');
            },
          },
        ]}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeroBanner
          image={IMAGES.Home}
          title="Michael"
          description="Michael follows the extraordinary life and career of Michael Jackson, tracing his journey from a gifted young performer in the Jackson 5 to becoming one of the most influential entertainers in music history. The film explores his groundbreaking artistry, record-breaking achievements, iconic performances, and the personal challenges that accompanied global fame, offering an intimate look at the man behind the legend."
          rating={8.9}
          onPlayTrailer={() => {
            console.log('Play Trailer Pressed');
          }}
          onMoreInfo={() => {
            console.log('More Info pressed');
          }}
        />
        <NowPlayingSection
          title="Now Playing"
          movies={movies}
          onMoviePress={movie => {
            console.log(movie.id);
          }}
        />
        <Spacer height={48} />
        <TopRatedSection
          title="Top Rated"
          actionText="View All"
          onActionPress={() => {
            console.log('View all Pressed');
          }}
          movies={topRatedMovies}
          onMoviePress={movie => {
            console.log('Selected movie:', movie.title);
          }}
        />
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
});

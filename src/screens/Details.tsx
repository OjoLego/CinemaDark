import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect, useMemo } from 'react';
import { COLORS } from '../utils/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppFontFamily, Typography } from '../components/atoms/Typography';
import { Header } from '../components/molecules/Header';
import { ICONS } from '../utils/icons';
import { DetailsRouteProp, HomeNavigationProp } from '../navigation/HomeStack';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DetailsHeroBanner } from '../components/organisms/HeroBanner/DetailsHeroBanner';
import { Spacer } from '../components/atoms/Spacer';
import { PrimaryButton } from '../components/molecules/Button/PrimaryButton';
import { SecondaryButton } from '../components/molecules/Button/SecondaryButton';
import { Divider } from '../components/atoms/Divider';
import { SynopsisSection } from '../components/organisms/SynopsisSection';
import { TopCastSection } from '../components/organisms/TopCastSection';
import { useDispatch, useSelector } from 'react-redux';
import {
  detailsSelector,
  selectMovieDetailsViewModel,
} from '../redux/selectors/detailsSelector';
import { AppDispatch } from '../redux/store';
import { useTmdbImage } from '../hooks/useTmdbImage';
import {
  fetchMovieCredits,
  fetchMovieDetails,
} from '../redux/thunks/detailsThunk';
import { HeroSkeleton } from '../components/skeletons/HeroSkeleton';
import { SynopsisSkeleton } from '../components/skeletons/SynopsisSkeleton';

const Details = () => {
  const route = useRoute<DetailsRouteProp>();
  const { movieId } = route.params;
  const { getImageUrl } = useTmdbImage();

  const navigation = useNavigation<HomeNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();

  const details = useSelector(detailsSelector);
  const movieSelector = useMemo(
    () => selectMovieDetailsViewModel(movieId),
    [movieId],
  );

  const movie = useSelector(movieSelector);

  useEffect(() => {
    if (!movie) {
      dispatch(fetchMovieDetails(movieId));
      dispatch(fetchMovieCredits(movieId));
    }
  }, [dispatch, movieId, movie]);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="CINEMA DARK"
        titleAlignment="left"
        titleProps={{
          fontFamily: AppFontFamily.Montserrat,
          fontSize: 16,
          color: COLORS.text1,
        }}
        leftIcon={<ICONS.Left_Arrow />}
        onLeftPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {details.loadingMovie ? (
          <HeroSkeleton />
        ) : movie ? (
          <>
            <DetailsHeroBanner
              backgroundImage={{
                uri: getImageUrl(movie.backdrop_path, 'w780') ?? '',
              }}
              posterImage={{
                uri: getImageUrl(movie.poster_path, 'w780') ?? '',
              }}
              title={movie.title}
              rating={movie.vote_average}
              genreText={movie.genreText}
              year={movie.year}
              duration={movie.duration}
              isAdult={movie.adult}
            />
            <Spacer height={40} />
          </>
        ) : null}

        <View style={styles.horizontalPadding}>
          {details.loadingMovie ? (
            <SynopsisSkeleton />
          ) : movie ? (
            <SynopsisSection synopsis={movie.overview} />
          ) : null}
          {details.loadingCredits ? null : (
            <>
              <Spacer height={48} />
              <TopCastSection
                cast={movie?.topCast ?? []}
                onViewAll={() =>
                  navigation.navigate('CastList', {
                    movieId,
                  })
                }
              />
              <Spacer height={24} />
              <View style={styles.actionButtons}>
                <View style={styles.actionButtonWrapper}>
                  <PrimaryButton
                    title="Add to Watchlist"
                    leftIcon={<ICONS.Watch_List_Neutral />}
                    onPress={() => console.log('Watchlist')}
                    paddingVertical={12}
                    titleFontFamily={AppFontFamily.InterMedium}
                    titleFontSize={16}
                  />
                </View>

                <View style={styles.actionButtonWrapper}>
                  <SecondaryButton
                    title="Trailer"
                    onPress={() => console.log('Trailer')}
                  />
                </View>
              </View>
              <Spacer height={24} />
              <View style={styles.divider}>
                <Divider />
              </View>
              <Spacer height={24} />
              <View style={styles.crewRow}>
                <View style={styles.crewTextWrapper}>
                  <Typography
                    fontFamily={AppFontFamily.Inter}
                    fontSize={12}
                    color={COLORS.text2}
                  >
                    Director
                  </Typography>
                  <Typography
                    fontFamily={AppFontFamily.InterBold}
                    fontSize={14}
                    color={COLORS.text1}
                  >
                    {movie?.director}
                  </Typography>
                </View>

                <View style={styles.crewTextWrapper}>
                  <Typography
                    fontFamily={AppFontFamily.Inter}
                    fontSize={12}
                    color={COLORS.text2}
                  >
                    Writer
                  </Typography>
                  <Typography
                    fontFamily={AppFontFamily.InterBold}
                    fontSize={14}
                    color={COLORS.text1}
                  >
                    {movie?.writer}
                  </Typography>
                </View>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Background,
  },
  horizontalPadding: {
    paddingHorizontal: 16,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },

  actionButtonWrapper: {
    flex: 1,
  },
  divider: {
    flexDirection: 'row',
  },
  crewRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  crewTextWrapper: {
    flex: 1,
  },
});

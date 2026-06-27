import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { COLORS } from '../utils/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/molecules/Header';
import { AppFontFamily, Typography } from '../components/atoms/Typography';
import { TextField } from '../components/atoms/TextField';
import { Spacer } from '../components/atoms/Spacer';
import { GenreChip } from '../components/molecules/Button/GenreChip';
import { useDispatch, useSelector } from 'react-redux';
import {
  filteredSearchResultsSelector,
  genreListSelector,
  searchLoadingSelector,
  searchTextSelector,
  selectedGenreSelector,
} from '../redux/selectors/searchSelector';
import {
  clearSearch,
  setSearchText,
  setSelectedGenre,
} from '../redux/slices/searchSlice';
import { searchMovies } from '../redux/thunks/searchThunk';
import { AppDispatch } from '../redux/store';
import { useTmdbImage } from '../hooks/useTmdbImage';
import { useNavigation } from '@react-navigation/native';
import { SearchNavigationProp } from '../navigation/SearchStack';
import { TopRatedCardSkeleton } from '../components/skeletons/TopRatedSkeleton';
import { SearchCard } from '../components/molecules/Cards/SearchCard';

const Search = () => {
  const { getImageUrl } = useTmdbImage();
  const dispatch = useDispatch<AppDispatch>();

  const navigation = useNavigation<SearchNavigationProp>();

  const genreList = useSelector(genreListSelector);
  const selectedGenre = useSelector(selectedGenreSelector);
  const searchText = useSelector(searchTextSelector);
  const movies = useSelector(filteredSearchResultsSelector);
  const loading = useSelector(searchLoadingSelector);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const query = searchText.trim();

      if (query.length === 0) {
        dispatch(clearSearch());
        return;
      }

      dispatch(searchMovies({ query }));
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchText, dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="CINEMA DARK"
        titleAlignment="left"
        titleProps={{
          fontFamily: AppFontFamily.MontserratBold,
          fontSize: 32,
          color: COLORS.Primary,
        }}
      />
      <View style={styles.horizontalPadding}>
        <Spacer height={24} />
        <View style={styles.inputContainer}>
          <TextField
            value={searchText}
            onChangeText={text => dispatch(setSearchText(text))}
            placeholder="Search movies..."
            placeholderTextColor={COLORS.text2}
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />
        </View>
        <Spacer height={24} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.genreList}
        >
          {genreList.map(item => (
            <GenreChip
              key={String(item.id)}
              title={item.name}
              selected={String(item.id) === selectedGenre}
              onPress={() => dispatch(setSelectedGenre(item.id))}
            />
          ))}
        </ScrollView>
        <Spacer height={24} />
        {loading ? (
          <FlatList
            data={Array.from({ length: 6 }, (_, index) => index)}
            numColumns={2}
            keyExtractor={item => String(item)}
            renderItem={() => (
              <View style={styles.item}>
                <TopRatedCardSkeleton />
              </View>
            )}
          />
        ) : movies.length === 0 ? (
          <View style={styles.emptyState}>
            <Typography
              fontFamily={AppFontFamily.Inter}
              fontSize={16}
              color={COLORS.text2}
            >
              No movies found.
            </Typography>
          </View>
        ) : (
          <FlatList
            data={movies}
            numColumns={2}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <SearchCard
                  image={getImageUrl(item.poster_path, 'w500')}
                  title={item.title}
                  genre={item.genreText}
                  onPress={() =>
                    navigation.navigate('Details', {
                      movieId: item.id,
                    })
                  }
                />
              </View>
            )}
            ListFooterComponent={<View style={styles.listFooterComponent} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Background,
  },
  horizontalPadding: {
    paddingHorizontal: 16,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#0E0E0E',
    borderColor: '#4D4732',
    height: 57,
    justifyContent: 'center',
  },

  input: {
    paddingHorizontal: 16,
    fontFamily: AppFontFamily.Inter,
    fontSize: 16,
    color: COLORS.text1,
  },
  genreList: {
    gap: 8,
    marginBottom: 8,
  },
  item: {
    flex: 1,
    marginHorizontal: 6,
    marginBottom: 16,
  },
  emptyState: {
    paddingTop: 64,
    alignItems: 'center',
  },
  listFooterComponent: {
    height: 200,
  },
});

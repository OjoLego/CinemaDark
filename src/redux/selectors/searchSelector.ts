import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { homeSelector } from './homeSelector';

export const searchSelector = (state: RootState) => state.search;

export const genresSelector = createSelector(
  [homeSelector],
  home => home.genres,
);

export const genreListSelector = createSelector([genresSelector], genres => [
  { id: 'all', name: 'All' },
  ...genres.map(genre => ({
    id: genre.id.toString(),
    name: genre.name,
  })),
]);

export const selectedGenreSelector = createSelector(
  [searchSelector],
  search => search.selectedGenre,
);

export const searchTextSelector = createSelector(
  [searchSelector],
  search => search.searchText,
);

export const searchResultsSelector = createSelector(
  [searchSelector],
  search => search.movies,
);

export const filteredSearchResultsSelector = createSelector(
  [searchResultsSelector, selectedGenreSelector],
  (movies, selectedGenre) => {
    if (selectedGenre === 'all') {
      return movies;
    }

    const genreId = Number(selectedGenre);

    return movies.filter(movie => movie.genre_ids?.includes(genreId));
  },
);

export const searchLoadingSelector = createSelector(
  [searchSelector],
  search => search.loading,
);

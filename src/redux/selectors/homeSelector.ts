import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const homeSelector = (reduxState: RootState) => reduxState.home;

export const heroMovieSelector = createSelector(
  [homeSelector],
  home => home.popular[home.heroIndex],
);

export const genreMapSelector = createSelector([homeSelector], state =>
  state.genres.reduce<Record<number, string>>((acc, genre) => {
    acc[genre.id] = genre.name;
    return acc;
  }, {}),
);

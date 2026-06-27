import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { detailsSelector } from './detailsSelector';
import { WatchListMovie } from '../../utils/types';

export const watchListSelector = (state: RootState) => state.watchList;

export const watchListMovieIdsSelector = createSelector(
  [watchListSelector],
  watchList => watchList.movieIds,
);

export const makeIsInWatchListSelector = (movieId: number) =>
  createSelector([watchListMovieIdsSelector], ids => ids.includes(movieId));

export const watchListMoviesSelector = createSelector(
  [watchListMovieIdsSelector, detailsSelector],
  (ids, details) =>
    ids
      .map(id => {
        const movie = details.cache[id]?.movie;

        if (!movie) return null;

        return {
          id: movie.id,
          title: movie.title,
          genres: movie.genres.map(g => g.name),
          duration: `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`,
          rating: movie.vote_average,
          poster_path: movie.poster_path,
        };
      })
      .filter((movie): movie is WatchListMovie => movie !== null),
);

import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const detailsSelector = (reduxState: RootState) => reduxState.details;

export const selectMovieDetailsViewModel = (movieId: number) =>
  createSelector([detailsSelector], details => {
    const data = details.cache[movieId];
    if (!data?.movie) return null;

    const movie = data.movie;
    const credits = data.credits;

    return {
      ...movie,
      year: movie.release_date?.split('-')[0],
      duration: movie.runtime
        ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
        : '',
      genreText: movie.genres.map(g => g.name),

      topCast: credits?.cast ?? [],
      director: credits?.crew.find(c => c.job === 'Director')?.name ?? '',
      writer:
        credits?.crew.find(c => c.job === 'Writer' || c.job === 'Screenplay')
          ?.name ?? '',
    };
  });

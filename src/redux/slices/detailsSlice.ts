import { createSlice } from '@reduxjs/toolkit';
import { CachedMovie } from '../../utils/types';
import { fetchMovieCredits, fetchMovieDetails } from '../thunks/detailsThunk';

const MAX_CACHE = 20;

function touchRecent(state: DetailsState, movieId: number) {
  state.recent = state.recent.filter(id => id !== movieId);
  state.recent.unshift(movieId);

  if (state.recent.length > MAX_CACHE) {
    const removed = state.recent.pop();
    if (removed) {
      delete state.cache[removed];
    }
  }
}

type DetailsState = {
  cache: Record<number, CachedMovie>;
  recent: number[];

  loadingMovie: boolean;
  loadingCredits: boolean;

  errorMovie: string | null;
  errorCredits: string | null;
};

const initialState: DetailsState = {
  cache: {},
  recent: [],

  loadingMovie: false,
  loadingCredits: false,

  errorMovie: null,
  errorCredits: null,
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMovieDetails.pending, state => {
        state.loadingMovie = true;
        state.errorMovie = null;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.loadingMovie = false;

        const movieId = action.payload.id;

        state.cache[movieId] = {
          movie: action.payload,
          credits: state.cache[movieId]?.credits,
        };

        touchRecent(state, movieId);
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.loadingMovie = false;
        state.errorMovie = action.error.message ?? null;
      })

      .addCase(fetchMovieCredits.pending, state => {
        state.loadingCredits = true;
        state.errorCredits = null;
      })
      .addCase(fetchMovieCredits.fulfilled, (state, action) => {
        state.loadingCredits = false;

        const movieId = action.payload.id;

        state.cache[movieId] = {
          movie: state.cache[movieId]?.movie,
          credits: action.payload,
        };

        touchRecent(state, movieId);
      })
      .addCase(fetchMovieCredits.rejected, (state, action) => {
        state.loadingCredits = false;
        state.errorCredits = action.error.message ?? null;
      });
  },
});

export default detailsSlice.reducer;

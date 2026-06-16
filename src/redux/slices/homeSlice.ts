import { createSlice } from '@reduxjs/toolkit';
import { Genre, Movie } from '../../utils/types';
import {
  fetchPopularMovies,
  fetchNowPlayingMovies,
  fetchTopRatedMovies,
  fetchMovieGenres,
} from '../thunks/homeThunk';

type HomeState = {
  popular: Movie[];
  nowPlaying: Movie[];
  topRated: Movie[];
  genres: Genre[];

  loadingPopular: boolean;
  loadingNowPlaying: boolean;
  loadingTopRated: boolean;
  loadingGenres: boolean;

  errorPopular: string | null;
  errorNowPlaying: string | null;
  errorTopRated: string | null;
  errorGenres: string | null;

  heroIndex: number;
};

const initialState: HomeState = {
  popular: [],
  nowPlaying: [],
  topRated: [],
  genres: [],

  loadingPopular: false,
  loadingNowPlaying: false,
  loadingTopRated: false,
  loadingGenres: false,

  errorPopular: null,
  errorNowPlaying: null,
  errorTopRated: null,
  errorGenres: null,

  heroIndex: 0,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    nextHeroMovie: state => {
      if (!state.popular.length) {
        return;
      }

      state.heroIndex = (state.heroIndex + 1) % state.popular.length;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPopularMovies.pending, state => {
        state.loadingPopular = true;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.loadingPopular = false;
        state.popular = action.payload.results;
        state.heroIndex = 0;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.loadingPopular = false;
        state.errorPopular = action.error.message ?? null;
      })

      .addCase(fetchNowPlayingMovies.pending, state => {
        state.loadingNowPlaying = true;
      })
      .addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
        state.loadingNowPlaying = false;
        state.nowPlaying = action.payload.results;
      })
      .addCase(fetchNowPlayingMovies.rejected, (state, action) => {
        state.loadingNowPlaying = false;
        state.errorNowPlaying = action.error.message ?? null;
      })

      .addCase(fetchTopRatedMovies.pending, state => {
        state.loadingTopRated = true;
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.loadingTopRated = false;
        state.topRated = action.payload.results;
      })
      .addCase(fetchTopRatedMovies.rejected, (state, action) => {
        state.loadingTopRated = false;
        state.errorTopRated = action.error.message ?? null;
      })
      .addCase(fetchMovieGenres.pending, state => {
        state.loadingGenres = true;
      })
      .addCase(fetchMovieGenres.fulfilled, (state, action) => {
        state.loadingGenres = false;
        state.genres = action.payload.genres;
      })
      .addCase(fetchMovieGenres.rejected, (state, action) => {
        state.loadingGenres = false;
        state.errorGenres = action.error.message ?? null;
      });
  },
});

export const { nextHeroMovie } = homeSlice.actions;

export default homeSlice.reducer;

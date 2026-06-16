import { createSlice } from '@reduxjs/toolkit';
import { Genre, Movie } from '../../utils/types';
import {
  fetchTrendingMovies,
  fetchNowPlayingMovies,
  fetchTopRatedMovies,
  fetchMovieGenres,
} from '../thunks/homeThunk';

type HomeState = {
  trending: Movie[];
  nowPlaying: Movie[];
  topRated: Movie[];
  genres: Genre[];

  loadingTrending: boolean;
  loadingNowPlaying: boolean;
  loadingTopRated: boolean;
  loadingGenres: boolean;

  errorTrending: string | null;
  errorNowPlaying: string | null;
  errorTopRated: string | null;
  errorGenres: string | null;

  heroIndex: number;
};

const initialState: HomeState = {
  trending: [],
  nowPlaying: [],
  topRated: [],
  genres: [],

  loadingTrending: false,
  loadingNowPlaying: false,
  loadingTopRated: false,
  loadingGenres: false,

  errorTrending: null,
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
      if (!state.trending.length) {
        return;
      }

      state.heroIndex = (state.heroIndex + 1) % state.trending.length;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTrendingMovies.pending, state => {
        state.loadingTrending = true;
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.loadingTrending = false;
        state.trending = action.payload.results;
        state.heroIndex = 0;
      })
      .addCase(fetchTrendingMovies.rejected, (state, action) => {
        state.loadingTrending = false;
        state.errorTrending = action.error.message ?? null;
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

import { createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../api/request';
import { GenresResponse, MoviesResponse } from '../../utils/types';

export const fetchPopularMovies = createAsyncThunk<MoviesResponse>(
  'home/fetchPopularMovies',
  async () => {
    const res = await client.get<MoviesResponse>('/movie/popular', {
      params: {
        language: 'en-US',
        page: 1,
      },
    });

    return res.data;
  },
);

export const fetchNowPlayingMovies = createAsyncThunk<MoviesResponse>(
  'home/fetchNowPlayingMovies',
  async () => {
    const res = await client.get<MoviesResponse>('/movie/now_playing', {
      params: {
        language: 'en-US',
        page: 1,
      },
    });

    return res.data;
  },
);

export const fetchTopRatedMovies = createAsyncThunk<MoviesResponse>(
  'home/fetchTopRatedMovies',
  async () => {
    const res = await client.get<MoviesResponse>('/movie/top_rated', {
      params: {
        language: 'en-US',
        page: 1,
      },
    });

    return res.data;
  },
);

export const fetchMovieGenres = createAsyncThunk<GenresResponse>(
  'home/fetchMovieGenres',
  async () => {
    const res = await client.get<GenresResponse>('/genre/movie/list', {
      params: {
        language: 'en',
      },
    });

    return res.data;
  },
);

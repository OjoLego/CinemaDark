import { createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../api/request';
import { MovieCreditsResponse, MovieDetailsResponse } from '../../utils/types';

export const fetchMovieDetails = createAsyncThunk<MovieDetailsResponse, number>(
  'details/fetchMovieDetails',
  async movieId => {
    const res = await client.get<MovieDetailsResponse>(`/movie/${movieId}`, {
      params: {
        language: 'en-US',
      },
    });

    return res.data;
  },
);

export const fetchMovieCredits = createAsyncThunk<MovieCreditsResponse, number>(
  'details/fetchMovieCredits',
  async movieId => {
    const res = await client.get<MovieCreditsResponse>(
      `/movie/${movieId}/credits`,
      {
        params: {
          language: 'en-US',
        },
      },
    );

    return res.data;
  },
);

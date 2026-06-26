import { createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../api/request';
import { MoviesResponse } from '../../utils/types';

export const searchMovies = createAsyncThunk<
  MoviesResponse,
  {
    query: string;
    page?: number;
  }
>('search/searchMovies', async ({ query, page = 1 }) => {
  const res = await client.get<MoviesResponse>('/search/movie', {
    params: {
      query,
      include_adult: false,
      language: 'en-US',
      page,
    },
  });

  return res.data;
});

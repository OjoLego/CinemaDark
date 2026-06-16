import { createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../api/request';

export const fetchTmdbConfig = createAsyncThunk(
  'tmdb/fetchConfig',
  async () => {
    const res = await client.get('/configuration');

    return res.data.images;
  },
);

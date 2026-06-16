import { createSlice } from '@reduxjs/toolkit';
import { fetchTmdbConfig } from '../thunks/configThunk';
import { TmdbImages } from '../../utils/types';

type TmdbState = {
  images: TmdbImages | null;
  loading: boolean;
  error: string | null;
};

const initialState: TmdbState = {
  images: null,
  loading: false,
  error: null,
};

const tmdbSlice = createSlice({
  name: 'tmdb',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTmdbConfig.pending, state => {
        state.loading = true;
      })
      .addCase(fetchTmdbConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
      })
      .addCase(fetchTmdbConfig.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export default tmdbSlice.reducer;

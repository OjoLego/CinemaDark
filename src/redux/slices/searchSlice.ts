import { createSlice } from '@reduxjs/toolkit';
import { Movie } from '../../utils/types';
import { searchMovies } from '../thunks/searchThunk';

type SearchState = {
  searchText: string;
  selectedGenre: string;

  movies: Movie[];

  loading: boolean;
  error: string | null;
};

const initialState: SearchState = {
  searchText: '',
  selectedGenre: 'all',
  movies: [],
  loading: false,
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },

    setSelectedGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },

    clearSearch: state => {
      state.searchText = '';
      state.movies = [];
      state.selectedGenre = 'all';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(searchMovies.pending, state => {
        state.loading = true;
        state.error = null;
      })

      .addCase(searchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload.results;
      })

      .addCase(searchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export const { setSearchText, setSelectedGenre, clearSearch } =
  searchSlice.actions;

export default searchSlice.reducer;

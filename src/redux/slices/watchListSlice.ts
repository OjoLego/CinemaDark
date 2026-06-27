import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type WatchListState = {
  movieIds: number[];
};

const initialState: WatchListState = {
  movieIds: [],
};

const watchListSlice = createSlice({
  name: 'watchList',
  initialState,
  reducers: {
    toggleWatchList(state, action: PayloadAction<number>) {
      const movieId = action.payload;

      const index = state.movieIds.indexOf(movieId);

      if (index >= 0) {
        state.movieIds.splice(index, 1);
      } else {
        state.movieIds.unshift(movieId);
      }
    },
  },
});

export const { toggleWatchList } = watchListSlice.actions;

export default watchListSlice.reducer;

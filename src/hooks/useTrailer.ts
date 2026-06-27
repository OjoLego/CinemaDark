import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../redux/store';
import { fetchMovieTrailer } from '../redux/thunks/detailsThunk';

export const useTrailer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [showTrailer, setShowTrailer] = useState(false);
  const [videoId, setVideoId] = useState('');

  const playTrailer = async (movieId: number) => {
    const result = await dispatch(fetchMovieTrailer(movieId));

    if (!fetchMovieTrailer.fulfilled.match(result)) {
      return;
    }

    if (!result.payload) {
      return;
    }

    setVideoId(result.payload.key);
    setShowTrailer(true);
  };

  const closeTrailer = () => {
    setShowTrailer(false);
    setVideoId('');
  };

  return {
    showTrailer,
    videoId,
    playTrailer,
    closeTrailer,
  };
};

import { useDispatch, useSelector } from 'react-redux';
import {
  heroMovieSelector,
  homeSelector,
  nowPlayingSelector,
} from '../redux/selectors/homeSelector';
import { AppDispatch } from '../redux/store';
import { useEffect } from 'react';
import { nextHeroMovie } from '../redux/slices/homeSlice';

export const useHomeData = () => {
  const dispatch = useDispatch<AppDispatch>();
  const home = useSelector(homeSelector);
  const heroMovie = useSelector(heroMovieSelector);
  const nowPlaying = useSelector(nowPlayingSelector);

  useEffect(() => {
    if (home.trending.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      dispatch(nextHeroMovie());
    }, 10000);

    return () => clearInterval(interval);
  }, [dispatch, home.trending.length]);

  return {
    ...home,
    heroMovie,
    nowPlaying,
  };
};

import { useDispatch, useSelector } from 'react-redux';
import {
  genreMapSelector,
  heroMovieSelector,
  homeSelector,
} from '../redux/selectors/homeSelector';
import { AppDispatch } from '../redux/store';
import { useEffect } from 'react';
import { nextHeroMovie } from '../redux/slices/homeSlice';

export const useHomeData = () => {
  const dispatch = useDispatch<AppDispatch>();
  const home = useSelector(homeSelector);
  const heroMovie = useSelector(heroMovieSelector);
  const genreMap = useSelector(genreMapSelector);

  useEffect(() => {
    if (home.popular.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      dispatch(nextHeroMovie());
    }, 10000);

    return () => clearInterval(interval);
  }, [dispatch, home.popular.length]);

  const nowPlaying = home.nowPlaying.map(movie => ({
    ...movie,
    genreText: movie.genre_ids?.map(id => genreMap[id]).filter(Boolean) ?? [],
  }));

  return {
    ...home,
    heroMovie,
    nowPlaying,
  };
};

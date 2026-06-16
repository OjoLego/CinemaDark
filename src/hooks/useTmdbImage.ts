import { useSelector } from 'react-redux';
import { configSelector } from '../redux/selectors/configSelector';

export const useTmdbImage = () => {
  const tmdb = useSelector(configSelector);
  const images = tmdb?.images;

  const getImageUrl = (path: string, size = 'w500') => {
    if (!path || !images?.secure_base_url) return null;

    return `${images.secure_base_url}${size}${path}`;
  };

  return { getImageUrl };
};

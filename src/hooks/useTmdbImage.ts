import { useSelector } from 'react-redux';
import { configSelector } from '../redux/selectors/configSelector';

export const useTmdbImage = () => {
  const tmdb = useSelector(configSelector);
  const images = tmdb?.images;

  const getImageUrl = (
    path: string | null | undefined,
    size = 'w500',
  ): string | undefined => {
    if (!path || !images?.secure_base_url) {
      return undefined;
    }

    return `${images.secure_base_url}${size}${path}`;
  };

  return { getImageUrl };
};

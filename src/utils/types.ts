export type MoviesResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
  genreText: string[];
};

export type TmdbImages = {
  secure_base_url: string;
  base_url: string;
  poster_sizes: string[];
  backdrop_sizes: string[];
  logo_sizes: string[];
  profile_sizes: string[];
  still_sizes: string[];
};

export type Genre = {
  id: number;
  name: string;
};

export type GenresResponse = {
  genres: Genre[];
};

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

export type MovieDetailsResponse = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  runtime: number;
  vote_average: number;
  adult: boolean;

  genres: {
    id: number;
    name: string;
  }[];
};

export type MovieCreditsResponse = {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
};

export type CastMember = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;

  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

export type CrewMember = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;

  credit_id: string;
  department: string;
  job: string;
};

export type CachedMovie = {
  movie: MovieDetailsResponse;
  credits: MovieCreditsResponse;
};

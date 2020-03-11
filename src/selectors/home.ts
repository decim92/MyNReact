import {builtTMDBImageUrlFromPath} from '../utils/imdb';

export interface TrendingMovie {
  id: number;
  title: string;
  overview: string;
  poster_image_url: string;
  poster_path: string;
}

const getTrendingMovies = (state: any): Array<TrendingMovie> => {
  if (state.home.response === undefined) {
    return [];
  }
  return state.home.response.results.map((movie: TrendingMovie) => {
    movie.poster_image_url = builtTMDBImageUrlFromPath(movie.poster_path);
    return movie;
  });
};

export {getTrendingMovies};

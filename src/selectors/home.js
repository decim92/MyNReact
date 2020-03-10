import {builtTMDBImageUrlFromPath} from '../utils/imdb';

const getTrendingMovies = state => {
  if (state.home.response === undefined) {
    return [];
  }
  return state.home.response.results.map(movie => {
    movie.poster_image_url = builtTMDBImageUrlFromPath(movie.poster_path);
    return movie;
  });
};

export {getTrendingMovies};

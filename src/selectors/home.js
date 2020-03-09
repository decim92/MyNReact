import {TMDB_IMG_URL, TMDB_API_KEY} from 'react-native-dotenv';

const getTrendingMovies = state => {
  console.log(state);
  if (state.home.response === undefined) {
    return [];
  }
  return state.home.response.results.map(movie => {
    movie.poster_image_url = builtTMDBImageUrlFromPath(movie.poster_path);
    return movie;
  });
};

const builtTMDBImageUrlFromPath = path =>
  `${TMDB_IMG_URL}/w500${path}?api_key=${TMDB_API_KEY}`;

export {getTrendingMovies};

import {builtTMDBImageUrlFromPath} from '../utils/imdb';

const getMovieDetail = state => {
  if (state.movie_detail.response === undefined) {
    return {};
  }
  const movieDetail = state.movie_detail.response;
  return {
    ...movieDetail,
    poster_image_url: builtTMDBImageUrlFromPath(movieDetail.poster_path),
    backdrop_image_url: builtTMDBImageUrlFromPath(movieDetail.backdrop_path),
  };
};

export {getMovieDetail};

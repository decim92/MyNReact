import {builtTMDBImageUrlFromPath} from '../utils/imdb';

export interface Movie {
  poster_image_url?: string;
  backdrop_image_url?: string;
  poster_path?: string;
  backdrop_path?: string;
}

const getMovieDetail = (state: any): Movie => {
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

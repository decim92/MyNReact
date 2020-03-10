import {
  FETCH_MOVIE_DETAIL,
  FETCH_MOVIE_DETAIL_SUCCESS,
  FETCH_MOVIE_DETAIL_ERROR,
} from '../constants/ActionTypes.js';

export const doFetchMovieDetail = payload => ({
  type: FETCH_MOVIE_DETAIL,
  payload,
});
export const doFetchMovieDetailSuccess = payload => ({
  type: FETCH_MOVIE_DETAIL_SUCCESS,
  payload,
});
export const doFetchMovieDetailError = payload => ({
  type: FETCH_MOVIE_DETAIL_ERROR,
  payload,
});

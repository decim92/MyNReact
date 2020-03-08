import {
  FETCH_TRENDING_MOVIES,
  FETCH_TRENDING_MOVIES_SUCCESS,
  FETCH_TRENDING_MOVIES_ERROR,
} from '../constants/ActionTypes.js';

export const doFetchTrendingMovies = payload => ({
  type: FETCH_TRENDING_MOVIES,
  payload,
});
export const doFetchTrendingMoviesSuccess = payload => ({
  type: FETCH_TRENDING_MOVIES_SUCCESS,
  payload,
});
export const doFetchTrendingMoviesError = payload => ({
  type: FETCH_TRENDING_MOVIES_ERROR,
  payload,
});

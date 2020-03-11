import {
  FETCH_TRENDING_MOVIES,
  FETCH_TRENDING_MOVIES_SUCCESS,
  FETCH_TRENDING_MOVIES_ERROR,
} from '../constants/ActionTypes';
import {ObjectResponse} from '../types/index';

export interface FetchTrendingMovies {
  type: FETCH_TRENDING_MOVIES;
}

export interface FetchTrendingMoviesSuccess {
  type: FETCH_TRENDING_MOVIES_SUCCESS;
  payload: ObjectResponse;
}

export interface FetchTrendingMoviesError {
  type: FETCH_TRENDING_MOVIES_ERROR;
  payload?: object;
}

export type FetchTrendingMoviesAction =
  | FetchTrendingMovies
  | FetchTrendingMoviesSuccess
  | FetchTrendingMoviesError;

export const doFetchTrendingMovies = (): FetchTrendingMovies => ({
  type: FETCH_TRENDING_MOVIES,
});

export const doFetchTrendingMoviesSuccess = (
  payload: ObjectResponse,
): FetchTrendingMoviesSuccess => ({
  type: FETCH_TRENDING_MOVIES_SUCCESS,
  payload,
});

export const doFetchTrendingMoviesError = (
  payload?: object,
): FetchTrendingMoviesError => ({
  type: FETCH_TRENDING_MOVIES_ERROR,
  payload,
});

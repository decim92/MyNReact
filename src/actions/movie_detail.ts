import {
  FETCH_MOVIE_DETAIL,
  FETCH_MOVIE_DETAIL_SUCCESS,
  FETCH_MOVIE_DETAIL_ERROR,
} from '../constants/ActionTypes';
import {ObjectResponse} from '../types/index';

export interface FetchMovieDetail {
  type: FETCH_MOVIE_DETAIL;
  payload: number;
}

export interface FetchMovieDetailSuccess {
  type: FETCH_MOVIE_DETAIL_SUCCESS;
  payload: ObjectResponse;
}

export interface FetchMovieDetailError {
  type: FETCH_MOVIE_DETAIL_ERROR;
  payload?: object;
}

export type FetchMovieDetailAction =
  | FetchMovieDetail
  | FetchMovieDetailSuccess
  | FetchMovieDetailError;

export const doFetchMovieDetail = (payload: number): FetchMovieDetail => ({
  type: FETCH_MOVIE_DETAIL,
  payload,
});

export const doFetchMovieDetailSuccess = (
  payload: ObjectResponse,
): FetchMovieDetailSuccess => ({
  type: FETCH_MOVIE_DETAIL_SUCCESS,
  payload,
});

export const doFetchMovieDetailError = (
  payload?: object,
): FetchMovieDetailError => ({
  type: FETCH_MOVIE_DETAIL_ERROR,
  payload,
});

import {takeEvery, all} from 'redux-saga/effects';
import {
  FETCH_TRENDING_MOVIES,
  FETCH_MOVIE_DETAIL,
} from '../constants/ActionTypes';
import {handleFetchTrendingMovies} from './home';
import {handleFetchMovieDetail} from './movie_detail';

function* watchAll() {
  yield all([takeEvery(FETCH_TRENDING_MOVIES, handleFetchTrendingMovies)]);
  yield all([takeEvery(FETCH_MOVIE_DETAIL, handleFetchMovieDetail)]);
}

export default watchAll;

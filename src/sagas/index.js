import {takeEvery, all} from 'redux-saga/effects';
import {FETCH_TRENDING_MOVIES} from '../constants/ActionTypes';
import {handleFetchTrendingMovies} from './home';

function* watchAll() {
  yield all([takeEvery(FETCH_TRENDING_MOVIES, handleFetchTrendingMovies)]);
}

export default watchAll;

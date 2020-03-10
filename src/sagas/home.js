import {call, put} from 'redux-saga/effects';
import {
  doFetchTrendingMoviesSuccess,
  doFetchTrendingMoviesError,
} from '../actions/home';
import {fetchTrendingMovies} from '../api/imdb';

function* handleFetchTrendingMovies(action) {
  try {
    const result = yield call(fetchTrendingMovies);
    if (result) {
      yield put(doFetchTrendingMoviesSuccess(result));
    } else {
      yield put(doFetchTrendingMoviesError());
    }
  } catch (error) {
    yield put(doFetchTrendingMoviesError(error));
  }
}

export {handleFetchTrendingMovies};

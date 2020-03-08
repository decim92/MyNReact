import {call, put} from 'redux-saga/effects';
import {
  doFetchTrendingMoviesSuccess,
  doFetchTrendingMoviesError,
} from '../actions/home';
import {fetchTrendingMovies} from '../api/home';

function* handleFetchTrendingMovies(action) {
  try {
    const result = yield call(fetchTrendingMovies);
    console.log(result);
    if (result) {
      yield put(doFetchTrendingMoviesSuccess(result));
    } else {
      yield put(doFetchTrendingMoviesError());
    }
  } catch (error) {
    console.log(error);
    yield put(doFetchTrendingMoviesError(error));
  }
}

export {handleFetchTrendingMovies};

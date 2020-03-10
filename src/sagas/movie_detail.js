import {call, put} from 'redux-saga/effects';
import {
  doFetchMovieDetailSuccess,
  doFetchMovieDetailError,
} from '../actions/movie_detail';
import {fetchMovieDetail} from '../api/imdb';

function* handleFetchMovieDetail(action) {
  try {
    const result = yield call(fetchMovieDetail, action.payload);
    console.log(result);
    if (result) {
      yield put(doFetchMovieDetailSuccess(result));
    } else {
      yield put(doFetchMovieDetailError());
    }
  } catch (error) {
    yield put(doFetchMovieDetailError(error));
  }
}

export {handleFetchMovieDetail};

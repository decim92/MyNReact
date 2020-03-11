import {
  FETCH_MOVIE_DETAIL,
  FETCH_MOVIE_DETAIL_SUCCESS,
  FETCH_MOVIE_DETAIL_ERROR,
} from '../constants/ActionTypes';
import {MovieDetailState} from '../types/index';
import {FetchMovieDetailAction} from '../actions/movie_detail';

export default (
  state: MovieDetailState = {},
  action: FetchMovieDetailAction,
): MovieDetailState => {
  switch (action.type) {
    case FETCH_MOVIE_DETAIL:
      return state;
    case FETCH_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        response: action.payload,
        loading: false,
      };
    case FETCH_MOVIE_DETAIL_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        message: 'Error returning movie detail',
      };
    default:
      return state;
  }
};

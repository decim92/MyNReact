import {
  FETCH_TRENDING_MOVIES,
  FETCH_TRENDING_MOVIES_SUCCESS,
  FETCH_TRENDING_MOVIES_ERROR,
} from '../constants/ActionTypes';
import {HomeState} from '../types/index';
import {FetchTrendingMoviesAction} from '../actions/home';

export default (
  state: HomeState = {},
  action: FetchTrendingMoviesAction,
): HomeState => {
  switch (action.type) {
    case FETCH_TRENDING_MOVIES:
      return state;
    case FETCH_TRENDING_MOVIES_SUCCESS:
      return {
        ...state,
        response: action.payload,
        loading: false,
      };
    case FETCH_TRENDING_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        message: 'Error returning trending movies',
      };
    default:
      return state;
  }
};

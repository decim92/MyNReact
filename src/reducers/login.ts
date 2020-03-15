import {LOGIN, LOGIN_SUCCESS, LOGIN_ERROR} from '../constants/ActionTypes';
import {LoginState} from '../types/index';
import {LoginAction} from '../actions/login';

export default (state: LoginState = {}, action: LoginAction): LoginState => {
  switch (action.type) {
    case LOGIN:
      return state;
    case LOGIN_SUCCESS:
      return {
        ...state,
        response: action.payload,
        loading: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        message: 'Error logging in',
      };
    default:
      return state;
  }
};

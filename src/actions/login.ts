import {LOGIN, LOGIN_SUCCESS, LOGIN_ERROR} from '../constants/ActionTypes';
import {ObjectResponse} from '../types/index';

export interface LoginType {
  type: LOGIN;
}

export interface LoginSuccess {
  type: LOGIN_SUCCESS;
  payload: ObjectResponse;
}

export interface LoginError {
  type: LOGIN_ERROR;
  payload?: object;
}

export type LoginAction = LoginType | LoginError | LoginSuccess;

export const doLogin = (): LoginType => ({
  type: LOGIN,
});

export const doLoginSuccess = (payload: ObjectResponse): LoginSuccess => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const doLoginError = (payload?: object): LoginError => ({
  type: LOGIN_ERROR,
  payload,
});

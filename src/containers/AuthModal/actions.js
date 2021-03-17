import * as constants from './constants';

export const clearError = () => ({
  type: constants.CLEAR_ERROR,
});

export const showAuthModal = () => ({
  type: constants.SHOW_AUTH_MODAL,
});

export const hideAuthModal = () => ({
  type: constants.HIDE_AUTH_MODAL,
});

export const checkAuthStatusRequest = () => ({
  type: constants.CHECK_AUTH_STATUS_REQUEST,
});

export const logoutRequest = () => ({
  type: constants.LOGOUT_REQUEST,
});

export const logoutSuccess = () => ({
  type: constants.LOGOUT_SUCCESS,
});

export const logoutError = (error) => ({
  type: constants.LOGOUT_ERROR,
  payload: { error },
});

export const postLoginRequest = (data) => ({
  type: constants.POST_LOGIN_REQUEST,
  payload: data,
});

export const postLoginSuccess = (token, userId) => ({
  type: constants.POST_LOGIN_SUCCESS,
  payload: { token, userId },
});

export const postLoginError = (error) => ({
  type: constants.POST_LOGIN_ERROR,
  payload: { error },
});

export const postSignUpRequest = (data) => ({
  type: constants.POST_SIGN_UP_REQUEST,
  payload: data,
});

export const postSignUpSuccess = (token, userId) => ({
  type: constants.POST_SIGN_UP_SUCCESS,
  payload: { token, userId },
});

export const postSignUpError = (error) => ({
  type: constants.POST_SIGN_UP_ERROR,
  payload: { error },
});

import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as constants from './constants';
import { postLogin, postSignUp } from './api';
import { getExpirationDate, isTokenValid } from './AuthModal.helpers';

export function* checkAuthStatusSaga() {
  const token = localStorage.getItem('token');
  const tokenExpirationDate = localStorage.getItem('tokenExpirationDate');
  const userId = localStorage.getItem('userId');
  if (token && isTokenValid(tokenExpirationDate)) {
    yield put(actions.postLoginSuccess(token, userId));
  } else {
    yield put(actions.logoutRequest());
  }
};

export function* loginSaga(data) {
  try {
    const response = yield call(postLogin, data.payload);
    yield put(actions.postLoginSuccess(response.data.idToken, response.data.localId));
    localStorage.setItem('token', response.data.idToken);
    localStorage.setItem('tokenExpirationDate', getExpirationDate(response.data.expiresIn));
    localStorage.setItem('userId', response.data.localId);
    yield put(actions.hideAuthModal());
  } catch (error) {
    yield put(actions.postLoginError(error.message));
  }
};

export function* logoutSaga() {
  try {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpirationDate');
    localStorage.removeItem('userId');
    yield put(actions.logoutSuccess());
  } catch (error) {
    yield put(actions.logoutError(error));
  }
};

export function* signUpSaga(data) {
  try {
    const response = yield call(postSignUp, data.payload);
    yield put(actions.postSignUpSuccess(response.data.idToken, response.data.localId));
    localStorage.setItem('token', response.data.idToken);
    localStorage.setItem('tokenExpirationDate', getExpirationDate(response.data.expiresIn));
    localStorage.setItem('userId', response.data.localId);
    yield put(actions.hideAuthModal());
  } catch (error) {
    yield put(actions.postSignUpError(error.message));
  }
};

export function* authWatcherSaga() {
  yield all([
    takeLatest(constants.CHECK_AUTH_STATUS_REQUEST, checkAuthStatusSaga),
    takeLatest(constants.POST_LOGIN_REQUEST, loginSaga),
    takeLatest(constants.LOGOUT_REQUEST, logoutSaga),
    takeLatest(constants.POST_SIGN_UP_REQUEST, signUpSaga),
  ]);
};

import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actions from './actions';
import * as constants from './constants';
import { getProducts } from './api';

export function* getProductsSaga() {
  try {
    const response = yield call(getProducts);
    yield put(actions.getProductsSuccess(response.data));
  } catch (error) {
    yield put(actions.getProductsError(error.message));
  }
};

export function* productListWatcherSaga() {
  yield all([
    takeLatest(constants.GET_PRODUCTS_REQUEST, getProductsSaga),
  ]);
};

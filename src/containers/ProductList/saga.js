import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actions from './actions';
import * as constants from './constants';
import { getProducts, putToggleWishlist } from './api';

export function* getProductsSaga() {
  try {
    const response = yield call(getProducts);
    yield put(actions.getProductsSuccess(response.data));
  } catch (error) {
    yield put(actions.getProductsError(error.message));
  }
};

export function* putToggleToWishlistSaga(data) {
  try {
    const { productId, updatedProduct } = data.payload;
    yield call(putToggleWishlist, productId, updatedProduct);
    yield put(actions.putToggleWishlistSuccess(productId, updatedProduct));
  } catch(error) {
    yield put(actions.putToggleWishlistError(error));
  }
};

export function* productListWatcherSaga() {
  yield all([
    takeLatest(constants.GET_PRODUCTS_REQUEST, getProductsSaga),
    takeLatest(constants.PUT_TOGGLE_WISHLIST_REQUEST, putToggleToWishlistSaga),
  ]);
};

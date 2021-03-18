import { all, call, delay, put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as constants from './constants';
import { getProducts, getWishlist, putToggleWishlist } from './api';
import { addUserIdToWishlist } from './ProductList.helpers';

export function* getProductsSaga(data) {
  const { userId, token } = data.payload;
  try {
    const response = yield call(getProducts);
    yield put(actions.getProductsSuccess(response.data));
    if (localStorage.getItem('userId') && localStorage.getItem('token')) {
      yield put(actions.getWishlistRequest(userId, token));
    }
  } catch (error) {
    yield put(actions.getProductsError(error.message));
  }
};

export function* getWishlistSaga(data) {
  const { userId, token } = data.payload;
  try {
    const response = yield call(getWishlist, userId, token);
    yield put(actions.getWishlistSuccess(response.data?.wishlist));
  } catch (error) {
    yield put(actions.getWishlistError(error.message));
  }
};

export function* putToggleToWishlistSaga(data) {
  try {
    const { wishlist, product, userId, token } = data.payload;
    const updatedWishlist = addUserIdToWishlist(wishlist, userId);
    yield call(putToggleWishlist, updatedWishlist, token, userId);
    yield put(actions.putToggleWishlistSuccess(wishlist, product));
    yield delay(3000);
    yield put(actions.clearSuccess())
  } catch(error) {
    yield put(actions.putToggleWishlistError(error.message));
  }
};

export function* productListWatcherSaga() {
  yield all([
    takeLatest(constants.GET_PRODUCTS_REQUEST, getProductsSaga),
    takeLatest(constants.GET_WISHLIST_REQUEST, getWishlistSaga),
    takeLatest(constants.PUT_TOGGLE_WISHLIST_REQUEST, putToggleToWishlistSaga),
  ]);
};

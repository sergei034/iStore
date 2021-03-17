import { all } from 'redux-saga/effects';

import { productListWatcherSaga } from './containers/ProductList/saga';
import { authWatcherSaga } from './containers/AuthModal/saga';

export default function* rootSaga() {
  yield all([
    productListWatcherSaga(),
    authWatcherSaga(),
  ]);
}

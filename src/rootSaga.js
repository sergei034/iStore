import { all } from 'redux-saga/effects';

import { productListWatcherSaga } from './containers/ProductList/saga';

export default function* rootSaga() {
  yield all([
    productListWatcherSaga(),
  ]);
}

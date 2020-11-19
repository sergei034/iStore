import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import productListReducer from './containers/ProductList/ProductListReducer';

export default history => combineReducers({
  products: productListReducer,
  router: connectRouter(history)
});

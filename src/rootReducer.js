import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import productListReducer from './containers/ProductList/ProductListReducer';
import authModalReducer from './containers/AuthModal/AuthModalReducer';

export default history => combineReducers({
  products: productListReducer,
  auth: authModalReducer,
  router: connectRouter(history)
});

import * as constants from './constants';

export const getProductsRequest = () => ({
  type: constants.GET_PRODUCTS_REQUEST,
});

export const getProductsSuccess = (products) => ({
  type: constants.GET_PRODUCTS_SUCCESS,
  payload: { products },
});

export const getProductsError = (error) => ({
  type: constants.GET_PRODUCTS_ERROR,
  payload: { error },
});

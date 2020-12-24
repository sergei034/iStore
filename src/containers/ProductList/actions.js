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

export const putToggleWishlistRequest = (productId, value) => ({
  type: constants.PUT_TOGGLE_WISHLIST_REQUEST,
  payload: { productId, value },
});

export const putToggleWishlistSuccess = () => ({
  type: constants.PUT_TOGGLE_WISHLIST_SUCCESS,
});

export const putToggleWishlistError = (error) => ({
  type: constants.PUT_TOGGLE_WISHLIST_ERROR,
  payload: { error },
});

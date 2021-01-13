import * as constants from './constants';

export const getProductsRequest = (currentCategory) => ({
  type: constants.GET_PRODUCTS_REQUEST,
  payload: { currentCategory },
});

export const getProductsSuccess = (products) => ({
  type: constants.GET_PRODUCTS_SUCCESS,
  payload: { products },
});

export const getProductsError = (error) => ({
  type: constants.GET_PRODUCTS_ERROR,
  payload: { error },
});

export const putToggleWishlistRequest = (currentCategory, productId, updatedProduct) => ({
  type: constants.PUT_TOGGLE_WISHLIST_REQUEST,
  payload: { currentCategory, productId, updatedProduct },
});

export const putToggleWishlistSuccess = (productId, updatedProduct) => ({
  type: constants.PUT_TOGGLE_WISHLIST_SUCCESS,
  payload: { productId, updatedProduct },
});

export const putToggleWishlistError = (error) => ({
  type: constants.PUT_TOGGLE_WISHLIST_ERROR,
  payload: { error },
});

export const setCurrentCategory = (currentCategory) => ({
  type: constants.SET_CURRENT_CATEGORY,
  payload: { currentCategory },
});

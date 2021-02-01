import * as constants from './constants';

export const clearError = () => ({
  type: constants.CLEAR_ERROR,
});

export const clearSuccess = () => ({
  type: constants.CLEAR_SUCCESS,
});

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

export const putToggleWishlistRequest = (productId, updatedProduct) => ({
  type: constants.PUT_TOGGLE_WISHLIST_REQUEST,
  payload: { productId, updatedProduct },
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

export const setSearchItem = (currentSearchItem) => ({
  type: constants.SET_SEARCH_ITEM,
  payload: { currentSearchItem },
});

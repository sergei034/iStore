import * as constants from './constants';

export const clearError = () => ({
  type: constants.CLEAR_ERROR,
});

export const clearSuccess = () => ({
  type: constants.CLEAR_SUCCESS,
});

export const getProductsRequest = (userId, token) => ({
  type: constants.GET_PRODUCTS_REQUEST,
  payload: { userId, token },
});

export const getProductsSuccess = (products) => ({
  type: constants.GET_PRODUCTS_SUCCESS,
  payload: { products },
});

export const getProductsError = (error) => ({
  type: constants.GET_PRODUCTS_ERROR,
  payload: { error },
});

export const getWishlistRequest = (userId, token) => ({
  type: constants.GET_WISHLIST_REQUEST,
  payload: { userId, token },
});

export const getWishlistSuccess = (wishlist) => ({
  type: constants.GET_WISHLIST_SUCCESS,
  payload: { wishlist },
});

export const getWishlistError = (error) => ({
  type: constants.GET_WISHLIST_ERROR,
  payload: { error },
});

export const putToggleWishlistRequest = (wishlist, product, userId, token) => ({
  type: constants.PUT_TOGGLE_WISHLIST_REQUEST,
  payload: { wishlist, product, userId, token },
});

export const putToggleWishlistSuccess = (wishlist, product) => ({
  type: constants.PUT_TOGGLE_WISHLIST_SUCCESS,
  payload: { wishlist, product },
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

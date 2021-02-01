import * as constants from './constants';
import { createSuccessMessageForWishlistToggler } from './ProductList.helpers';

const initialState = {
  error: null,
  loading: true,
  products: null,
  searchItem: '',
  success: false,
  successMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.CLEAR_ERROR: {
      return {
        ...state,
        error: null,
      };
    }
    case constants.CLEAR_SUCCESS: {
      return {
        ...state,
        success: false,
        successMessage: '',
      };
    }
    case constants.GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        error: null,
        loading: true,
        success: false,
        successMessage: '',
      };
    }
    case constants.GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload.products,
      };
    }
    case constants.GET_PRODUCTS_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        success: false,
        successMessage: '',
      };
    }
    case constants.SET_SEARCH_ITEM: {
      return {
        ...state,
        searchItem: action.payload.currentSearchItem,
      };
    }
    case constants.PUT_TOGGLE_WISHLIST_REQUEST: {
      return {
        ...state,
        error: null,
        loading: false,
        success: false,
        successMessage: '',
      };
    }
    case constants.PUT_TOGGLE_WISHLIST_SUCCESS: {
      return {
        ...state,
        products: state.products.map(product => 
          product.id === action.payload.productId ? action.payload.updatedProduct : product),
        loading: false,
        error: null,
        success: true,
        successMessage: createSuccessMessageForWishlistToggler(action.payload.updatedProduct),
      };
    }
    case constants.PUT_TOGGLE_WISHLIST_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        success: false,
        successMessage: '',
      };
    }
    default:
      return state;
  }
};

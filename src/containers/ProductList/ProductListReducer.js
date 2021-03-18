import * as constants from './constants';
import { createSuccessMessageForWishlistToggler } from './ProductList.helpers';

const initialState = {
  error: null,
  loading: true,
  products: null,
  searchItem: '',
  successMessage: '',
  wishlist: [],
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
        successMessage: '',
      };
    }
    case constants.GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        error: null,
        loading: true,
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
        successMessage: '',
      };
    }
    case constants.GET_WISHLIST_REQUEST: {
      return {
        ...state,
        error: null,
        loading: true,
        successMessage: '',
      };
    }
    case constants.GET_WISHLIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        wishlist: action.payload.wishlist,
      };
    }
    case constants.GET_WISHLIST_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
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
        successMessage: '',
      };
    }
    case constants.PUT_TOGGLE_WISHLIST_SUCCESS: {
      const { product, wishlist } = action.payload;
      return {
        ...state,
        loading: false,
        error: null,
        successMessage: createSuccessMessageForWishlistToggler(wishlist, product),
        wishlist,
      };
    }
    case constants.PUT_TOGGLE_WISHLIST_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        successMessage: '',
      };
    }
    case constants.LOGOUT_REQUEST: {
      return {
        ...state,
        searchItem: '',
        wishlist: [],
      };
    }
    default:
      return state;
  }
};

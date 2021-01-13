import * as constants from './constants';

const initialState = {
  // TODO: replace with null
  currentCategory: null,
  error: null,
  loading: true,
  products: null,
  success: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        error: null,
        loading: true,
        success: false,
      };
    }
    case constants.GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload.products,
        success: true,
      };
    }
    case constants.GET_PRODUCTS_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        success: false,
      };
    }
    case constants.PUT_TOGGLE_WISHLIST_REQUEST: {
      return {
        ...state,
        error: null,
        loading: false,
        success: false,
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
      };
    }
    case constants.PUT_TOGGLE_WISHLIST_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        success: false,
      };
    }
    case constants.SET_CURRENT_CATEGORY: {
      return {
        ...state,
        currentCategory: action.payload.currentCategory,
      };
    }
    default:
      return state;
  }
};

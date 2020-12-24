import * as constants from './constants';

const initialState = {
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
        loading: true,
        success: false,
      };
    }
    case constants.PUT_TOGGLE_WISHLIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
      };
    }
    case constants.PUT_TOGGLE_WISHLIST_ERROR: {
      console.log('error: ', action.payload.error); // TODO: remove
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        success: false,
      };
    }
    default:
      return state;
  }
};

import * as constants from './constants';
import { prepareErrorMessage } from './AuthModal.helpers';

const initialState = {
  error: null,
  isLoggedIn: false,
  loading: false,
  showAuthModal: false,
  signUpRequired: null,
  token: null,
  userId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.CLEAR_ERROR: {
      return {
        ...state,
        error: null,
      };
    }
    case constants.SHOW_AUTH_MODAL: {
      return {
        ...state,
        showAuthModal: true,
      };
    }
    case constants.HIDE_AUTH_MODAL: {
      return {
        ...state,
        showAuthModal: false,
      };
    }
    case constants.LOGOUT_REQUEST: {
      return {
        ...state,
        error: null,
        loading: true,
      };
    }
    case constants.LOGOUT_SUCCESS: {
      return {
        ...state,
        error: null,
        token: null,
        userId: null,
        loading: false,
      };
    }
    case constants.LOGOUT_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    }
    case constants.POST_LOGIN_REQUEST: {
      return {
        ...state,
        error: null,
        loading: true,
      };
    }
    case constants.POST_LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    }
    case constants.POST_LOGIN_ERROR: {
      return {
        ...state,
        error: prepareErrorMessage(action.payload.error),
        loading: false,
        token: null,
        userId: null,
      };
    }
    case constants.POST_SIGN_UP_REQUEST: {
      return {
        ...state,
        error: null,
        loading: true,
        token: null,
        userId: null,
      };
    }
    case constants.POST_SIGN_UP_SUCCESS: {
      return {
        ...state,
        loading: false,
        signUpRequired: false,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    }
    case constants.POST_SIGN_UP_ERROR: {
      return {
        ...state,
        error: prepareErrorMessage(action.payload.error),
        loading: false,
        token: null,
        userId: null,
      };
    }
    default:
      return state;
  }
};

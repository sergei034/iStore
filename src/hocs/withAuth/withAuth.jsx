import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { checkAuthStatusRequest, logoutRequest, showError } from '../../containers/AuthModal/actions';

const withAuth = (WrappedComponent) => ({ ...props }) => {
  const dispatch = useDispatch();

  const requestInterceptor = axios.interceptors.request.use((req) => {
    // TODO: check name for LS and cookies
    // req.headers['X-CSRFToken'] = Cookies.get('csrftoken');
    return req;
  });

  const responseInterceptor = axios.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      const { status } = err.response;
      if (status === 401 || status === 403) {
        dispatch(showError(err.response.message));
        // TODO: decide whether logout user or not
        dispatch(logoutRequest());
      }
      if (status === 500) {
        return Promise.reject(err);
      }
      return Promise.reject(err);
    },
  );

  useEffect(() => {
    dispatch(checkAuthStatusRequest());
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  });

  return <WrappedComponent {...props} />;
}

export default withAuth;

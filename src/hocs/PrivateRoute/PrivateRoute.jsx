import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(state => state.auth.token !== null);

  return (
    <Route 
      render={(props) => (!isLoggedIn ? <Redirect to="/" /> : <Component {...props} />)}
    />
  )
};

PrivateRoute.defaultProps = {
  Component: null,
};
PrivateRoute.propTypes = {
  Component: PropTypes.element,
};

export default PrivateRoute;

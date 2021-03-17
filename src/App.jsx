import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import AppHeader from './containers/AppHeader';
import ProductList from './containers/ProductList';
import HomePage from './containers/HomePage';
import AppFooter from './components/AppFooter';
import './main.css';
import AuthModal from './containers/AuthModal';
import PrivateRoute from './hocs/PrivateRoute';
import withAuth from './hocs/withAuth';

const App = () => {
  return (
    <>
      <AppHeader />
      <AuthModal />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <PrivateRoute exact path="/wishlist" component={ProductList} />
        <PrivateRoute exact path="/cart" render={() => (<h1 className="text-center">Your cart</h1>)} />
        <Route exact path="/products/:category" component={ProductList} />
        <Redirect to="/" />
      </Switch>
      <AppFooter />
    </>
  );
};

export default withAuth(App);

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import AppHeader from './containers/AppHeader';
import ProductList from './containers/ProductList';
import HomePage from './containers/HomePage';
import AppFooter from './components/AppFooter';
import './main.css';

const App = () => {
  return (
    <>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/account" render={() => (<h1 className="text-center">Your account</h1>)} />
        <Route exact path="/wishlist" component={ProductList} />
        <Route exact path="/cart" render={() => (<h1 className="text-center">Your cart</h1>)} />
        <Route exact path="/products/:category" component={ProductList} />
        <Redirect to="/" />
      </Switch>
      <AppFooter />
    </>
  );
};

export default App;

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import AppHeader from './containers/AppHeader';
import ProductList from './containers/ProductList';
import ProductDetails from './containers/ProductDetails';
import './main.css';

const App = () => {
  return (
    <>
      <AppHeader />
      <Switch>
        <Route exact path="/products" component={ProductList} />
        <Route exact path="/products/:productId" component={ProductDetails} />
        <Route exact path="/cart" render={() => (<h1 className="text-center">Your cart</h1>)} />
        <Redirect to="/products" />
      </Switch>
    </>
  );
};

export default App;

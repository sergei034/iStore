import React from 'react';
import { 
  Redirect, 
  Route, 
  Switch 
} from 'react-router-dom';

import AppHeader from './containers/AppHeader';
import ProductList from './containers/ProductList';
import './main.css';

const App = () => {
  return (
    <>
      <AppHeader />
      <Switch>
        <Route exact path="/account" render={() => (<h1 className="text-center">Your account</h1>)} />
        <Route exact path="/wishlist" render={() => (<h1 className="text-center">Your wishlist</h1>)} />
        <Route exact path="/cart" render={() => (<h1 className="text-center">Your cart</h1>)} />
        <Route exact path="/:category/:id?" component={ProductList} />
        <Redirect to="/iphone" />
      </Switch>
    </>
  );
};

export default App;

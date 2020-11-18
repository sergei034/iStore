import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import ProductList from './containers/ProductList';
import './main.css';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProductList} />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;

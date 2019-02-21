import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import App from './App';
import Home from './components/Home/Home';
import Register from './components/Auth/register';

export default (
  <Switch>
    <Route path="/register" component={Register} />
    <Route path="/" component={Home} />
  </Switch>
);

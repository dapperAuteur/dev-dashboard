import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import App from './App';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import Register from './components/Auth/register';
import Login from './components/Auth/login';

export default (
  <Switch>
    <Route path="/signup" component={Register} />
    <Route path="/signin" component={Login} />
    <Route
      path="/"
      render={() => (
        <Home>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={Profile} />
        </Home>
      )}
    />
    <Route path="/" component={Home} />
  </Switch>
);

import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import App from './App';
import Issue from './components/Issue/Issue';
import AddIssue from './components/AddIssue/AddIssue';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import Register from './components/Auth/register';
import Login from './components/Auth/login';

const token = localStorage.getItem('token');

export default (
  <Switch>
    <Route path="/signup" component={Register} />
    <Route path="/signin" component={Login} />
    <Route path="/issue" component={Issue} />
    {token && <Route path="/add-issue" component={AddIssue} />}
    {token && (
      <Route
        path="/"
        render={() => (
          <Home>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Profile} />
          </Home>
        )}
      />
    )}
  </Switch>
);

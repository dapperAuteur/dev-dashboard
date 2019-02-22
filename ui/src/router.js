import React from "react";
import { Switch, Route } from "react-router-dom";
// import App from './App';
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import Issue from "./components/Issue/Issue";
import AddIssue from "./components/AddIssue/AddIssue";

export default (
  <Switch>
    <Route path="/issue" component={Issue} />
    <Route path="/add-issue" component={AddIssue} />
    <Route
      path="/"
      render={() => (
        <Home>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={Profile} />
        </Home>
      )}
    />
  </Switch>
);

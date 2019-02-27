import React from "react";
import { Switch, Route } from "react-router-dom";
import SecureRoute from "./secureUtils/SecureRoute";
import Issue from "./components/Issue/Issue";
import AddIssue from "./components/AddIssue/AddIssue";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

export default (
  <Switch>
    <Route path="/signup" component={Register} />
    <Route path="/signin" component={Login} />
    <Route path="/issue" component={Issue} />
    <SecureRoute path="/add-issue" component={AddIssue} />
    <Route
      path="/"
      render={() => (
        <Home>
          <Route path="/dashboard" component={Dashboard} />
          <SecureRoute path="/profile" component={Profile} />
        </Home>
      )}
    />
  </Switch>
);

import React, { Component } from "react";
// import "./reset.css";
import { connect, Provider } from "react-redux";
// import router from "./../router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./../reducers/store";
import { SET_CURRENT_USER } from "./../actions/types";
import "normalize.css";
import "./App.css";
import setJWTToken from "./../secureUtils/setJWTToken";
import { logout } from "./../actions/securityActions";
import jwt_decode from "jwt-decode";
import NavBar from "./NavBar/NavBar";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Issues from "./../components/Issues/Issues";
import AddIssue from "./../components/Issues/AddIssue";
import Home from "./../components/Home/Home";

const token = localStorage.token;

if (token) {
  console.log("token", token);
  setJWTToken(token);
  const decoded_token = jwt_decode(token);
  store.dispatch({ type: SET_CURRENT_USER, payload: decoded_token });

  const currentTime = Date.now() / 1000;
  if (decoded_token.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    console.log("props", props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <NavBar />
        <h2>Nav</h2>
        <Router>
          <div>
            <Route path="/sign-up" component={Register} />
            <Route path="/sign-in" component={Login} />
            <Route exact path="/issues" component={Issues} />
            <Route path="/add-issue" component={AddIssue} />
            <Route path="/" component={Issues} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

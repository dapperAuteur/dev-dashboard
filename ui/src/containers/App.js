import React, { Component } from "react";
// import "./reset.css";
import { connect } from "react-redux";
import "normalize.css";
import "./App.css";
import setJWTToken from "./../secureUtils/setJWTToken";
import { logout } from "./../store/securityActions";
import jwt_decode from "jwt-decode";
import NavBar from "./NavBar/NavBar";

import router from "./router";
import store from "../store/store";
import { SET_CURRENT_USER } from "../store/actions";

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
      <div className="App">
        <NavBar />
        {router}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state);
  return { auth: state.authReducer };
};

export default connect(mapStateToProps)(App);

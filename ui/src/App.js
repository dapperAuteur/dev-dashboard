import React, { Component } from "react";
// import "./reset.css";
import "normalize.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import jwt_decode from "jwt-decode";
import store from "./store";
import setJWTToken from "./secureUtils/setJWTToken";
import router from "./router";
import { SET_CURRENT_USER } from "./actions/types";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  });
}

class App extends Component {
  constructor() {
    super();
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

export default App;

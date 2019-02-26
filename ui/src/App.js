import React, { Component } from 'react';
// import "./reset.css";

import 'normalize.css';
import './App.css';
import { connect } from 'react-redux';
import { getTags } from './ducks/reducer';
import axios from 'axios';
import NavBar from './components/NavBar/NavBar';
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

  async componentDidMount() {
    const { data } = await axios.get('http://localhost:8081/tags');
    this.props.getTags(data);
    console.log(data);
    console.log(this.props);
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
  return { tags: state.tags };
};

export default connect(
  mapStateToProps,
  { getTags }
)(App);

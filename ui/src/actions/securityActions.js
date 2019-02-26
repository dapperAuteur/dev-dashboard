import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

import setJWTToken from "./../secureUtils/setJWTToken";
import jwt_decode from "jwt-decode";

export const createNewUser = (newUser, history) => async dispatch => {
  axios
    .post("http://localhost:8081/auth/register", newUser)
    .then(function(res) {
      console.log(res);
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      dispatch({
        type: GET_ERRORS,
        payload: {}
      });
    })
    .catch(function(error) {
      console.log(error);
      dispatch({
        type: GET_ERRORS,
        payload: error.res.data
      });
    });
};

export const login = loginRequest => async dispatch => {
  const res = axios
    .post("http://localhost:8081/auth/login", loginRequest)
    .then(function(res) {
      const { token } = res.data;
      console.log("res", res);
      localStorage.setItem("jwtToken", res.data.token);
      setJWTToken(token);
      const decoded = jwt_decode(token);
      dispatch({
        type: SET_CURRENT_USER,
        payload: decoded
      });
    })
    .catch(err => {
      const { error } = err.response.data;
      console.log(error);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const logout = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setJWTToken(false);
  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  });
};

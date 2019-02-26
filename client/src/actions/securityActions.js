import axios from "axios";
import setJWTToken from "../secureUtils/setJWTToken";
import jwt_decode from "jwt-decode";
import { GET_ERROR, SET_CURRENT_USER } from "./types";

export const createNewUser = (newUser, history) => async dispatch => {
  console.log("newUser", newUser);
  try {
    await axios.post("/api/ver0001/auth/register", newUser);
    history.push("/login");
    dispatch({
      type: GET_ERROR,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data
    });
  }
};

export const login = loginRequest => async dispatch => {
  console.log("loginRequest 0", loginRequest);
  try {
    console.log("loginRequest 1", loginRequest);
    console.log("login");
    const res = await axios.post(
      "/ver0001/api/auth/register/login",
      loginRequest
    );
    const { token } = res.data;
    localStorage.setItem("token", token);
    setJWTToken(token);
    const decoded = jwt_decode(token);
    dispatch({
      type: SET_CURRENT_USER,
      payload: decoded
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data
    });
  }
};

export const logout = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setJWTToken(false);
  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  });
};

import axios from "axios";
import { GET_ERRORS, SET_USER_PHOTO, SET_ISSUE_PHOTO } from "./types";

export const setUserPhoto = (updatedProfile, history) => async dispatch => {
  const { token } = updatedProfile;
  const headers = new Headers({
    "Content-Type": "application/json",
    Authorization: token
  });
  console.log("updatedProfile", updatedProfile);
  axios
    .post("http:/localhost:8081/update", updatedProfile, headers)
    .then(res => {
      console.log("res", res);
    });
};

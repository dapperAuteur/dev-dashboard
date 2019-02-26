import axios from "axios";

const setJWTToken = token => {
  console.log("setJWTToken()");
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setJWTToken;

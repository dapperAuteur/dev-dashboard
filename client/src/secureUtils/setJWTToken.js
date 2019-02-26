import axios from "axios";

const setJWTToken = token => {
  console.log("object");
  if (token) {
    console.log("token", token);
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setJWTToken;

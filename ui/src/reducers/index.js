import { combineReducers } from "redux";
import securityReducer from "./securityReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  errors: errorReducer,
  security: securityReducer
});

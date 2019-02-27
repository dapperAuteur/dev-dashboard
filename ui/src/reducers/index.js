import { combineReducers } from "redux";
import securityReducer from "./securityReducer";
import errorReducer from "./errorReducer";
import otherReducer from "./../ducks/reducer";

export default combineReducers({
  errors: errorReducer,
  security: securityReducer,
  otherReducer
});

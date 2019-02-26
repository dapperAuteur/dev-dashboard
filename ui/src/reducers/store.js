import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import securityReducer from "./securityReducer";

const initialState = {};
const middleware = [thunk];
let store;

const rootReducer = combineReducers({
  security: securityReducer
});

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

if (window.navigator.userAgent.includes("Chrome") && ReactReduxDevTools) {
  store = createStore(rootReducer, initialState, compose(ReactReduxDevTools));
} else {
  store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );
}

export default store;

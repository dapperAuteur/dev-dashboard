import { VERIFIED_USER } from "./actions";

const INITIAL_STATE = {
  user: null
};

const USER_LOGIN = "USER_LOGIN";

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export function userLogin(user) {
  return {
    type: USER_LOGIN,
    payload: user
  };
}

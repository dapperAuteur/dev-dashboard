// import { VERIFIED_USER } from "./actions";

const INITIAL_STATE = {
  user: null,
  picUrl: ""
};

const USER_LOGIN = "USER_LOGIN";
const USER_PHOTO = "USER_PHOTO";

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, user: action.payload };
    case USER_PHOTO:
      return { ...state, picUrl: action.payload };
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

export function userPhoto(picUrl) {
  return {
    type: USER_PHOTO,
    payload: picUrl
  };
}

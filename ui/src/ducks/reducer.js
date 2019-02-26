// import { VERIFIED_USER } from './actions';

const INITIAL_STATE = {
  user: null,
  picUrl: '',
  issuePic: '',
  tags: []
};

const USER_LOGIN = 'USER_LOGIN';
const USER_PHOTO = 'USER_PHOTO';
const GET_TAGS = 'GET_TAGS';
const ISSUE_PHOTO = 'ISSUE_PHOTO';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, user: action.payload };
    case USER_PHOTO:
      return { ...state, picUrl: action.payload };
    case GET_TAGS:
      console.log(action.payload);
      return { ...state, tags: action.payload };
    case ISSUE_PHOTO:
      return { ...state, issuePic: action.payload };
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

export function getTags(tags) {
  console.log(tags);
  return {
    type: GET_TAGS,
    payload: tags
  };
}
export function issuePhoto(issuePic) {
  return {
    type: ISSUE_PHOTO,
    payload: issuePic
  };
}

import { REGISTER, REGISTER_ERR, LOGIN, LOGIN_ERR } from '../actions/types';

const initialState = {
  user: null,
  redirect: false,
  isLoggedIn: false,
  err: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        user: action.payload,
        redirect: true,
      };

    case REGISTER_ERR:
      return {
        ...state,
        err: action.payload,
        redirect: false,
      };
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        redirect: true,
        isLoggedIn: true,
      };
    case LOGIN_ERR:
      return {
        ...state,
        user: action.payload,
        redirect: true,
        isLoggedIn: true,
      };
    default:
      return { ...state };
  }
}

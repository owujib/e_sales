import axios from 'axios';
import { REGISTER, REGISTER_ERR, LOGIN, LOGIN_ERR } from './types';

export function register(userInput) {
  return function (dispatch) {
    axios
      .post('http://localhost:5000/api/user/register', userInput)
      .then((response) => {
        return dispatch({
          type: REGISTER,
          payload: response.data,
        });
      })
      .catch((err) => {
        return dispatch({
          type: REGISTER_ERR,
          payload: err.response,
        });
      });
  };
}

export const login = (userInput) => {
  return (dispatch) => {
    axios
      .post('http://localhost:5000/api/user/login', userInput)
      .then((response) => {
        return dispatch({
          type: LOGIN,
          payload: response.data,
        });
      })
      .catch((err) => {
        return dispatch({
          type: LOGIN_ERR,
          payload: err.response,
        });
      });
  };
};

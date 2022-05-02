import * as actionTypes from "./isLogged-types";

export const login = () => {
  return {
    type: actionTypes.LOGIN,
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

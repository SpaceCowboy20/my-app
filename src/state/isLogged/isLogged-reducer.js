import * as actionTypes from "./isLogged-types";
let exist = window.localStorage.getItem("TOKEN");
let logged = exist ? true : false;

const INITIAT_STATE = {
  isLogged: logged,
};

let isLoggedReducer = (state = INITIAT_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return { ...state, isLogged: true };
    case actionTypes.LOGOUT:
      return { ...state, isLogged: false };
    default:
      return state;
  }
};
export default isLoggedReducer;

const INITIAT_STATE = {
  isLogged: false,
};

let isLoggedReducer = (state = INITIAT_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLogged: true };
    case "LOGOUT":
      return { ...state, isLogged: false };
    default:
      return state;
  }
};
export default isLoggedReducer;

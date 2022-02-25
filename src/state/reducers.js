import { combineReducers } from "redux";
import isLoggedReducer from "./isLogged/isLogged-reducer";
import shopReducer from "./shopping/shopping-reducer";

const reducers = combineReducers({
  shop: shopReducer,
  isLogged: isLoggedReducer,
});

export default reducers;

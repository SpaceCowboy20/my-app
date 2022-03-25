import { combineReducers } from "redux";
import isLoggedReducer from "./isLogged/isLogged-reducer";
import searchReducer from "./search/search-reducer";
import shopReducer from "./shopping/shopping-reducer";

const reducers = combineReducers({
  shop: shopReducer,
  isLogged: isLoggedReducer,
  search: searchReducer,
});

export default reducers;

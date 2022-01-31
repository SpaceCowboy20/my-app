import { combineReducers } from "redux";
import shopReducer from "./shopping/shopping-reducer";

const reducers = combineReducers({
  shop: shopReducer,
});

export default reducers;

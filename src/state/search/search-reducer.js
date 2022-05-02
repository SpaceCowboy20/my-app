import * as actionTypes from "./search-types";

const INITIAT_STATE = {
  searchTerm: "",
};

const searchReducer = (state = INITIAT_STATE, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_SEARCH:
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;

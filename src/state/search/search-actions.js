import * as actionTypes from "./search-types";

export const updateSearch = (word) => {
  return {
    type: actionTypes.UPDATE_SEARCH,
    payload: word,
  };
};

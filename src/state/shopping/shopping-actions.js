import * as actionTypes from "./shopping-types";

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};
export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};
export const adjust = (itemID, value) => {
  return {
    type: actionTypes.ADJ_QTY,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};
export const loadCurrent = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};

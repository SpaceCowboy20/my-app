import * as actionTypes from "./shopping-types";

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      _id: itemID,
    },
  };
};

export const getallProds = (products) => {
  return {
    type: actionTypes.GET_ALL_PRODUCTS,
    payload: { products },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      _id: itemID,
    },
  };
};
export const removeFromHeart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_HEART,
    payload: {
      _id: itemID,
    },
  };
};
export const adjust = (itemID, value) => {
  return {
    type: actionTypes.ADJ_QTY,
    payload: {
      _id: itemID,
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

export const addToHeart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_HEART,
    payload: {
      _id: itemID,
    },
  };
};

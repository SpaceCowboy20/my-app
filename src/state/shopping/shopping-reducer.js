import * as actionTypes from "./shopping-types";

const INITIAT_STATE = {
  products: [],
  cart: JSON.parse(window.localStorage.getItem("cart")) || [],
  currentItem: null,
  heart: [],
};

const shopReducer = (state = INITIAT_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
      };
    case actionTypes.ADD_TO_CART:
      const item = state.products.find(
        (prod) => prod._id === action.payload._id
      );
      const inCart = state.cart.find((item) =>
        item._id === action.payload._id ? true : false
      );
      return {
        ...state,
        cart: inCart ? [...state.cart] : [...state.cart, item],
        /* 
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item._id === action.payload._id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }], */
      };

    case actionTypes.ADD_TO_HEART:
      const items = state.products.find(
        (prod) => prod._id === action.payload._id
      );
      const inHeart = state.heart.find((item) =>
        item._id === action.payload._id ? true : false
      );
      return {
        ...state,
        heart: inHeart ? [...state.heart] : [...state.heart, items],
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload._id),
      };

    case actionTypes.REMOVE_FROM_HEART:
      return {
        ...state,
        heart: state.heart.filter((item) => item._id !== action.payload._id),
      };
    case actionTypes.ADJ_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.payload._id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    case actionTypes.GET_HEARTS:
      return {
        ...state,
        heart: action.payload,
      };
    case actionTypes.DELETE_HEARTS:
      return {
        ...state,
        heart: [],
      };
    case actionTypes.DELETE_ALL_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default shopReducer;

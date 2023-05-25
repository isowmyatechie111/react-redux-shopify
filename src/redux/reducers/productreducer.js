//reducers
import { actionTypes } from "../constants/action-types";

const initialState = {
  // products: [{ id: 1, title: "Sowmya", category: "Teacher" }],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      console.log(action.payload);
      return { ...state, products: action.payload };
    case actionTypes.FETCH_PRODUCTS:
      console.log(action.payload);
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const selectProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECTED_PRODUCT:
      return { ...state, ...action.payload };
    case actionTypes.FETCH_PRODUCT:
      return { ...state, ...action.payload };
    case actionTypes.REMOVE_SELECETD_PRODUCT:
      return {};
    default:
      return state;
  }
};

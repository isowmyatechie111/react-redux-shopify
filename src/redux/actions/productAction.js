//constant action

import fakeStoreApi from "../../apis/fakeStoreApi";
import { actionTypes } from "../constants/action-types";

export const fetchProducts = () => async (dispatch) => {
  const responseData = await fakeStoreApi.get("/products");
  dispatch({
    type: actionTypes.FETCH_PRODUCTS,
    payload: responseData.data,
  });
};

export const fetchProduct = (productId) => async (dispatch) => {
  const responseData = await fakeStoreApi.get(`products/${+productId}`);
  //dispatch(setProduct(res.data));
  dispatch({
    type: actionTypes.FETCH_PRODUCT,
    payload: responseData.data,
  });
};
export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const setProduct = (product) => {
  return {
    type: actionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const cleanupProduct = () => {
  return {
    type: actionTypes.REMOVE_SELECETD_PRODUCT,
  };
};

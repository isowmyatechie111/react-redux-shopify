//combinereducers
import { combineReducers } from "redux";
import { productReducer } from "./productreducer";
import { selectProductReducer } from "./productreducer";

export const reducers = combineReducers({
  allProducts: productReducer,
  product: selectProductReducer,
});

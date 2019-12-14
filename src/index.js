import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

import AddCartReducer from "./components/redux/AddCartReducer";
import SearchReducer from "./components/redux/SearchReducer";
import Reducer from "./components/redux/Reducer";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const allReducer = {
  addcart: AddCartReducer,
  search: SearchReducer,
  products: Reducer
};
const rootReducer = combineReducers(allReducer);
const store = createStore(rootReducer);
store.subscribe(() => console.log("store is", store.getState()));
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

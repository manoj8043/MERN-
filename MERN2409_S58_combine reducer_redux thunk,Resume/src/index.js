import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";
let initialStore = {
  Batter: [],
  Bowler: [],
  Allrounder: [],
};

let BattersReducer = (latestStore = initialStore, dispatchedObj) => {
  if (dispatchedObj.type === "AddBatter") {
    return {
      ...latestStore,
      Batter: latestStore.Batter.concat(dispatchedObj.data),
    };
  }
  return latestStore;
};

let BowlersReducer = (latestStore = initialStore, dispatchedObj) => {
  if (dispatchedObj.type === "AddBowler") {
    return {
      ...latestStore,
      Bowler: latestStore.Bowler.concat(dispatchedObj.data),
    };
  }
  return latestStore;
};

let AllrounderReducer = (latestStore = initialStore, dispatchedObj) => {
  if (dispatchedObj.type === "AddAllrounder") {
    return {
      ...latestStore,
      Allrounder: latestStore.Allrounder.concat(dispatchedObj.data),
    };
  }
  return latestStore;
};
let store = createStore(
  combineReducers({ BattersReducer, BowlersReducer, AllrounderReducer }),
  applyMiddleware(thunk)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

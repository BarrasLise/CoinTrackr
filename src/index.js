import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/index.scss";

//REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer : rootReducer, //alimentation du store
  devTools : true,
})

root.render(
  <Provider store={store}>
    <App />
  </Provider>

);


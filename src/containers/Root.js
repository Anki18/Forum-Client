import "babel-polyfill";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

import configureStore from "../configureStore";

import App from "./App";

const store = configureStore();
export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>

    );
  }
}
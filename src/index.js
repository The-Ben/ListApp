import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./app";
import View from "./view";
import reducer from "./store/reducer";

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
    <View />
  </Provider>,
  document.getElementById("root")
);

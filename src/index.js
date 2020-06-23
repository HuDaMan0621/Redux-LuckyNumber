import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles.css";

const App = () => (
  <div className="box">
    <Counter />
  </div>
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

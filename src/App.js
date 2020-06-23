import React from "react";
import render from "react";
import "/styles.css";
import Counter from "./counter";
import { Provider } from "react-redux";
import Reducer from "Reducer";

export default function App() {
  return <Counter />;
}

const store = createStore(Reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

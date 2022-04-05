import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style.css";
import todoListReducer from "./store";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(todoListReducer);
const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

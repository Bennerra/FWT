import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { ThemeProvider } from "./context/ThemeContext";
import { store } from "./store";

import { App } from "./components/App";

import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);

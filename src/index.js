
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import { Provider } from 'react-redux'
import store from './store'
// Soft UI Context Provider
import { SoftUIControllerProvider } from "context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <SoftUIControllerProvider>
      <Provider store={store}>
      <App />
      </Provider>
    </SoftUIControllerProvider>
  </BrowserRouter>
);

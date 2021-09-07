import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "services/mirage";
import { GlobalStyles } from "styles/GlobalStyles";
import { Provider } from "hooks";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

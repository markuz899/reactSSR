import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { ThemeProvider } from "tenantuikit";

const lightTheme = {
  primary: "#ffffff",
  secondary: "#000000",
};

export const darkTheme = {
  colors: {
    primary: "#000000",
    secondary: "#ffffff",
  },
};

ReactDOM.hydrateRoot(
  document.getElementById("app") as HTMLElement,
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

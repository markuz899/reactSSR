import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/global-styles";
import theme from "./theme";

ReactDOM.hydrateRoot(
  document.getElementById("app") as HTMLElement,
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

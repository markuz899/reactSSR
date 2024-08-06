import * as React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import App from "./App";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { ThemeProvider } from "tenantuikit";

const lightTheme = {
  primary: "#ffffff",
  secondary: "#000000",
};

export function render(url: string) {
  const sheet = new ServerStyleSheet();
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <StyleSheetManager sheet={sheet.instance}>
          <ThemeProvider theme={lightTheme}>
            <App />
          </ThemeProvider>
        </StyleSheetManager>
      </StaticRouter>
    </React.StrictMode>
  );
}

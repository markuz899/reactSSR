import * as React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import App from "./App";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { ThemeProvider } from "tenantuikit";
import { GlobalStyle } from "./theme/global-styles";
import theme from "./theme";

interface IRenderProps {
  url: string;
}

export function render({ url }: IRenderProps) {
  const sheet = new ServerStyleSheet();
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url || "/"}>
        <StyleSheetManager sheet={sheet.instance}>
          <ThemeProvider theme={theme}>
            <App />
            <GlobalStyle />
          </ThemeProvider>
        </StyleSheetManager>
      </StaticRouter>
    </React.StrictMode>
  );
  return { html, head: sheet.instance };
}

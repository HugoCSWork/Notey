import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./utils/global";
import theme from "./utils/theme";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <App />
      </>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();

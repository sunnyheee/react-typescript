import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={undefined}> */}
    <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);

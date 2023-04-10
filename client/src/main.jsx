import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { AuthContextProvider } from "./contexts/AuthContext";
//pages
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./helpers/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);

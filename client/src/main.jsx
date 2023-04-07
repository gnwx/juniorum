import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { AuthContextProvider } from "./contexts/AuthContext";
//pages
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);

// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { ApiProvider } from "./context/apiContext";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <ApiProvider>
        <App />
      </ApiProvider>
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}

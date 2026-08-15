import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ServicesPage from "./ServicesPage.jsx";
import "./index.css";

const path = window.location.pathname;

const Page =
  path === "/services" || path === "/services/"
    ? ServicesPage
    : App;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);

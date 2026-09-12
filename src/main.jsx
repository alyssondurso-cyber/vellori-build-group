import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ServicesPage from "./ServicesPage.jsx";
import StuccoPage from "./StuccoPage.jsx";
import TravertinePage from "./TravertinePage.jsx";
import OutdoorLivingPage from "./OutdoorLivingPage.jsx";
import ConcretePage from "./ConcretePage.jsx";
import ServiceAreasPage from "./ServiceAreasPage.jsx";
import LocalStuccoPage from "./LocalStuccoPage.jsx";
import "./index.css";

const path = window.location.pathname.replace(/\/$/, "") || "/";

const routes = {
  "/": App,
  "/services": ServicesPage,
  "/stucco-boca-raton": StuccoPage,
  "/travertine-boca-raton": TravertinePage,
  "/outdoor-living-boca-raton": OutdoorLivingPage,
  "/concrete-boca-raton": ConcretePage,
  "/service-areas": ServiceAreasPage,
  "/stucco-palm-beach": LocalStuccoPage,
  "/stucco-fort-lauderdale": LocalStuccoPage,
  "/stucco-miami": LocalStuccoPage,
};

const Page = routes[path] || App;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);

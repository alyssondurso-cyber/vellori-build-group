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

const path = window.location.pathname;

let Page = App;

if (path === "/services" || path === "/services/") {
  Page = ServicesPage;
}

if (
  path === "/stucco-boca-raton" ||
  path === "/stucco-boca-raton/"
) {
  Page = StuccoPage;
}

if (
  path === "/travertine-boca-raton" ||
  path === "/travertine-boca-raton/"
) {
  Page = TravertinePage;
}

if (
  path === "/outdoor-living-boca-raton" ||
  path === "/outdoor-living-boca-raton/"
) {
  Page = OutdoorLivingPage;
}

if (
  path === "/concrete-boca-raton" ||
  path === "/concrete-boca-raton/"
) {
  Page = ConcretePage;
}


if (path === "/service-areas" || path === "/service-areas/") {
  Page = ServiceAreasPage;
}

if (
  path === "/stucco-palm-beach" ||
  path === "/stucco-palm-beach/" ||
  path === "/stucco-fort-lauderdale" ||
  path === "/stucco-fort-lauderdale/" ||
  path === "/stucco-miami" ||
  path === "/stucco-miami/"
) {
  Page = LocalStuccoPage;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);

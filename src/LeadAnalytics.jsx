import { useEffect } from "react";
import { trackLeadIntent } from "./MobileLeadBar.jsx";

const serviceByPath = {
  "/stucco-boca-raton": "Stucco & exterior finishes",
  "/travertine-boca-raton": "Travertine, tile & natural stone",
  "/outdoor-living-boca-raton": "Outdoor living or deck",
  "/concrete-boca-raton": "Concrete-related scope",
};

export function inferServiceFromPath(pathname = "") {
  return serviceByPath[pathname.replace(/\/$/, "")] || "General";
}

export default function LeadAnalytics() {
  useEffect(() => {
    const handleLeadClick = (event) => {
      const link = event.target.closest("a[href]");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      const service = inferServiceFromPath(window.location.pathname);

      if (href.startsWith("tel:")) trackLeadIntent("phone_call", service);
      if (href.startsWith("mailto:")) trackLeadIntent("email", service);
      if (href.startsWith("/project-request")) trackLeadIntent("estimate_request", service);
    };

    document.addEventListener("click", handleLeadClick);
    return () => document.removeEventListener("click", handleLeadClick);
  }, []);

  return null;
}

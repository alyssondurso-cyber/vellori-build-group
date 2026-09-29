import { useEffect } from "react";
import { trackLeadIntent } from "./MobileLeadBar.jsx";

const serviceByPath = {
  "/stucco-boca-raton": "Stucco & exterior finishes",
  "/travertine-boca-raton": "Travertine, tile & natural stone",
  "/outdoor-living-boca-raton": "Outdoor living or deck",
  "/concrete-boca-raton": "Concrete-related scope",
};

const campaignKeys = ["utm_source", "utm_medium", "utm_campaign"];
const campaignStorageKey = "vellori_campaign_attribution";

function campaignFromUrl() {
  const query = new URLSearchParams(window.location.search);
  return Object.fromEntries(campaignKeys.map((key) => [key, query.get(key) || ""]));
}

export function readCampaignAttribution() {
  const current = campaignFromUrl();
  let previous = {};
  try {
    previous = JSON.parse(window.sessionStorage.getItem(campaignStorageKey) || "{}") || {};
  } catch {
    // A blocked storage API must never interrupt a project request.
  }
  return Object.fromEntries(campaignKeys.map((key) => [key, current[key] || previous[key] || ""]));
}

function rememberCampaignAttribution() {
  const current = campaignFromUrl();
  if (!campaignKeys.some((key) => current[key])) return;
  try {
    window.sessionStorage.setItem(campaignStorageKey, JSON.stringify(current));
  } catch {
    // Campaign tracking is optional; the lead form stays usable.
  }
}

export function inferServiceFromPath(pathname = "") {
  return serviceByPath[pathname.replace(/\/$/, "")] || "General";
}

export default function LeadAnalytics() {
  useEffect(() => {
    rememberCampaignAttribution();

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

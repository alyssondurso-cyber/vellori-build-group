import React from "react";
import { Phone } from "lucide-react";

export function trackLeadIntent(action, service = "General") {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "lead_intent",
    lead_action: action,
    service_interest: service,
  });
}

export default function MobileLeadBar({ service = "General" }) {
  return (
    <>
      <div className="h-20 md:hidden" aria-hidden="true" />
      <aside
        aria-label="Contact VELLORI"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0D1B2A]/95 p-3 shadow-[0_-10px_35px_rgba(8,17,28,0.28)] backdrop-blur md:hidden"
      >
        <div className="mx-auto grid max-w-lg grid-cols-[0.8fr_1.2fr] gap-3">
          <a
            href="tel:+15618874653"
            onClick={() => trackLeadIntent("phone_call", service)}
            className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#C8A96B]/70 px-4 text-xs font-medium uppercase tracking-[0.12em] text-white"
          >
            <Phone className="h-4 w-4 text-[#C8A96B]" />
            Call
          </a>
          <a
            href="/project-request"
            onClick={() => trackLeadIntent("estimate_request", service)}
            className="inline-flex min-h-12 items-center justify-center bg-[#C8A96B] px-4 text-center text-xs font-semibold uppercase tracking-[0.12em] text-[#0D1B2A]"
          >
            Request an Estimate
          </a>
        </div>
      </aside>
    </>
  );
}

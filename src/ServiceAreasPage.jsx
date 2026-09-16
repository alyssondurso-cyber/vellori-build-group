import React, { useEffect } from "react";
import { ArrowRight, MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import VelloriLogo from "./VelloriLogo.jsx";
import MobileLeadBar from "./MobileLeadBar.jsx";

const regions = [
  {
    name: "Palm Beach County",
    summary: "Premium residential exterior work from Boca Raton through Palm Beach and the northern coastal communities.",
    areas: ["Boca Raton", "Highland Beach", "Delray Beach", "Gulf Stream", "Boynton Beach", "Manalapan", "Lantana", "Lake Worth Beach", "Palm Beach", "West Palm Beach", "Palm Beach Shores", "Singer Island", "Riviera Beach", "North Palm Beach", "Palm Beach Gardens", "Juno Beach", "Jupiter", "Jupiter Inlet Colony", "Jupiter Island", "Wellington", "Royal Palm Beach", "Loxahatchee"],
  },
  {
    name: "Broward County",
    summary: "Exterior finish and renovation support for waterfront, luxury, and established residential properties throughout Broward.",
    areas: ["Deerfield Beach", "Hillsboro Beach", "Lighthouse Point", "Pompano Beach", "Lauderdale-by-the-Sea", "Sea Ranch Lakes", "Fort Lauderdale", "Las Olas Isles", "Harbor Beach", "Rio Vista", "Coral Ridge", "Oakland Park", "Wilton Manors", "Dania Beach", "Hollywood", "Hallandale Beach", "Davie", "Plantation", "Sunrise", "Weston", "Pembroke Pines", "Miramar", "Coral Springs", "Parkland", "Coconut Creek"],
  },
  {
    name: "Miami-Dade County",
    summary: "Organized specialty exterior work for contemporary, coastal, Mediterranean, and tropical residences across Miami-Dade.",
    areas: ["Aventura", "Sunny Isles Beach", "Golden Beach", "Bal Harbour", "Bay Harbor Islands", "Surfside", "Indian Creek", "Miami Beach", "Fisher Island", "North Bay Village", "Miami", "Brickell", "Coconut Grove", "Coral Gables", "Key Biscayne", "Pinecrest", "Palmetto Bay", "Cutler Bay", "Kendall", "Doral", "Miami Lakes", "North Miami", "North Miami Beach", "Miami Shores", "Biscayne Park", "El Portal", "Homestead"],
  },
]

const services = [
  "Stucco repair, EIFS support, and refined exterior finishes",
  "Travertine, tile, stone, and pool-deck improvements",
  "Outdoor living and residential exterior transformations",
  "Defined concrete surface preparation and finish-support scopes",
  "Surface preparation and specialty finish support",
];

export default function ServiceAreasPage() {
  useEffect(() => {
    document.title = "South Florida Service Areas | VELLORI Build Group";

    let description = document.querySelector('meta[name="description"]');

    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }

    description.setAttribute(
      "content",
      "Explore VELLORI Build Group service areas across Palm Beach, Broward, and Miami-Dade for premium residential exterior improvements, stucco, outdoor living, tile, stone, and specialty finishes."
    );

    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      "https://velloribuild.com/service-areas"
    );

    return () => {
      document.title =
        "VELLORI Build Group | Premium Exterior Improvements & Outdoor Living in Boca Raton";
      canonical?.setAttribute("href", "https://velloribuild.com/");
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#F3EFE6] text-[#0D1B2A]">
      <header className="bg-[#0D1B2A] px-6 py-7 text-white lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" aria-label="VELLORI Build Group home"><VelloriLogo compact /></a>
          <nav className="hidden items-center gap-7 text-[11px] uppercase tracking-[0.16em] md:flex">
            <a href="/services" className="hover:text-[#C8A96B]">Services</a>
            <a href="/#about" className="hover:text-[#C8A96B]">About</a>
            <a href="/project-request" className="rounded-full border border-[#C8A96B]/60 px-5 py-3 hover:bg-[#C8A96B] hover:text-[#0D1B2A]">Request Consultation</a>
          </nav>
        </div>
      </header>

      <section className="bg-[#0D1B2A] px-6 py-28 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C8A96B]">South Florida Service Areas</p>
          <h1 className="mt-8 max-w-5xl font-serif text-5xl leading-[1.04] md:text-7xl">Residential exterior services across South Florida.</h1>
          <p className="mt-10 max-w-3xl text-lg leading-8 text-white/70">
            Based in Boca Raton, VELLORI Build Group supports defined residential exterior and specialty construction scopes throughout South Florida. Qualifying projects elsewhere in Florida are reviewed individually.
          </p>
          <a href="/project-request" className="mt-10 inline-flex items-center gap-3 bg-[#C8A96B] px-7 py-4 text-xs uppercase tracking-[0.20em] text-[#0D1B2A]">
            Discuss Your Project <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C8A96B]">Regional Coverage</p>
          <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">Focused service for coastal and high-value residential communities.</h2>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#0D1B2A]/65">
            Availability depends on project fit, scope, schedule, travel, and location. South Florida is our primary service region, and qualifying projects elsewhere in Florida are considered individually.
          </p>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {regions.map((region) => (
              <article key={region.name} className="border border-[#0D1B2A]/10 bg-white p-8">
                <MapPin className="h-6 w-6 text-[#C8A96B]" />
                <h3 className="mt-6 font-serif text-3xl">{region.name}</h3>
                <p className="mt-5 text-sm leading-7 text-[#0D1B2A]/65">{region.summary}</p>
                <ul className="mt-7 space-y-3">
                  {region.areas.map((area) => (
                    <li key={area} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="h-4 w-4 flex-none text-[#C8A96B]" /> {area}, FL
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#C8A96B]">Project Fit</p>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl">What VELLORI can support.</h2>
            <p className="mt-7 text-lg leading-8 text-[#0D1B2A]/65">
              Our team focuses on organized execution, exterior detail, clean presentation, and specialty finish work for residential properties.
            </p>
          </div>
          <div className="space-y-4">
            {services.map((service) => (
              <div key={service} className="flex items-start gap-4 border-b border-[#0D1B2A]/10 pb-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-[#C8A96B]" />
                <span>{service}</span>
              </div>
            ))}
            <p className="pt-3 text-sm leading-7 text-[#0D1B2A]/60">
              VELLORI does not represent itself as a licensed General Contractor. Any work requiring a licensed contractor, licensed trade, or permit is considered only as a defined subcontracted or specialty scope under the control and responsibility of the appropriately licensed party.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0D1B2A] px-6 py-24 text-white lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#C8A96B]">Based in Boca Raton. Serving South Florida.</p>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl">Tell us where and what you are planning.</h2>
          </div>
          <div className="space-y-5 text-white/75">
            <a href="tel:+15618874653" className="flex items-center gap-4 hover:text-[#C8A96B]"><Phone className="h-5 w-5 text-[#C8A96B]" /> (561) 887-4653</a>
            <a href="mailto:info@velloribuild.com" className="flex items-center gap-4 hover:text-[#C8A96B]"><Mail className="h-5 w-5 text-[#C8A96B]" /> info@velloribuild.com</a>
            <a href="/project-request" className="mt-6 inline-flex items-center gap-3 bg-[#C8A96B] px-7 py-4 text-xs uppercase tracking-[0.20em] text-[#0D1B2A]">
              Request Consultation <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#08111c] px-6 py-9 text-center text-white">
        <p className="text-xs uppercase tracking-[0.25em] text-white/55">Building Excellence. Creating Legacies.</p>
        <a href="/privacy" className="mt-4 inline-block text-xs text-white/45 underline underline-offset-4 hover:text-[#C8A96B]">Privacy Policy</a>
      </footer>
      <MobileLeadBar />
    </main>
  );
}

import React from "react";
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail } from "lucide-react";

const pages = {
  "/stucco-palm-beach": {
    eyebrow: "Palm Beach Stucco & Exterior Finishes",
    title: "Stucco Repair & Exterior Finishes in Palm Beach, FL",
    intro:
      "VELLORI Build Group provides organized stucco repair, exterior wall restoration, EIFS support, and refined finish applications for residential properties throughout Palm Beach and nearby coastal communities.",
    focusTitle: "Exterior finish work suited to Palm Beach residences.",
    focusText:
      "Coastal exposure, humidity, sun, and wind-driven rain place constant demands on exterior wall systems. Our work emphasizes careful preparation, compatible repair methods, clean transitions, and finish consistency.",
    needs: [
      ["Stucco Repair", "Repair and patching for cracked, deteriorated, or previously altered exterior stucco surfaces."],
      ["Smooth & Textured Finishes", "Refined smooth, textured, and Spanish-style finish applications selected for the property and existing substrate."],
      ["EIFS & Exterior Systems", "Organized execution for EIFS and exterior finish scopes, including reinforced base layers and finish applications."],
      ["Exterior Wall Restoration", "Surface preparation and finish restoration designed to improve appearance and support long-term exterior performance."],
    ],
    areas: ["Palm Beach", "Manalapan", "Gulf Stream", "Highland Beach", "Palm Beach Gardens", "Jupiter", "Jupiter Island", "Boca Raton"],
    climateTitle: "Prepared for coastal South Florida conditions.",
    climateText:
      "Palm Beach properties require exterior work that respects existing architecture while responding to intense sun, moisture, salt air, and seasonal storms. VELLORI approaches each scope with organized preparation and attention to the finished elevation.",
  },
  "/stucco-fort-lauderdale": {
    eyebrow: "Fort Lauderdale Stucco Specialists",
    title: "Stucco Repair & Smooth Finishes in Fort Lauderdale, FL",
    intro:
      "VELLORI Build Group supports residential stucco restoration, smooth finish upgrades, EIFS work, and exterior improvements across Fort Lauderdale and Broward County.",
    focusTitle: "Clean exterior transformations for waterfront and residential properties.",
    focusText:
      "From localized crack repair to broader façade refinishing, each project begins with the existing condition. Preparation, transitions, texture matching, and clean project coordination guide the work.",
    needs: [
      ["Crack Repair & Patching", "Targeted repair for visible cracks, damaged areas, penetrations, and transitions around exterior openings."],
      ["Smooth Stucco Upgrades", "Conversion and refinement of dated or inconsistent textures into cleaner, more contemporary exterior finishes."],
      ["EIFS Repair & Finishing", "Exterior insulation and finish system support, reinforced base applications, and specialty finish work."],
      ["Façade Restoration", "Coordinated exterior surface preparation and restoration for residential renovation scopes."],
    ],
    areas: ["Fort Lauderdale", "Las Olas Isles", "Harbor Beach", "Rio Vista", "Coral Ridge", "Lighthouse Point", "Pompano Beach", "Weston", "Parkland"],
    climateTitle: "Exterior finishes planned for Broward County weather.",
    climateText:
      "Waterfront exposure, heavy rain, humidity, and strong sun can reveal weaknesses in exterior finishes. Our process prioritizes appropriate preparation, neat execution, and a visually consistent result.",
  },
  "/stucco-miami": {
    eyebrow: "Miami Stucco & Exterior Restoration",
    title: "Stucco Repair, EIFS & Exterior Finishes in Miami, FL",
    intro:
      "VELLORI Build Group provides premium-minded stucco repair, EIFS support, smooth finish applications, and exterior wall restoration for residential projects across Miami and Miami-Dade County.",
    focusTitle: "Modern finish execution for distinctive Miami residences.",
    focusText:
      "Miami architecture ranges from coastal contemporary to Mediterranean and tropical design. We adapt preparation and finish work to the existing property, with close attention to clean planes, edges, texture, and visual continuity.",
    needs: [
      ["Residential Stucco Repair", "Organized repair and patching for damaged exterior surfaces, cracks, and renovation transitions."],
      ["Smooth Exterior Finishes", "Clean, contemporary smooth finishes for exterior transformations and architectural updates."],
      ["EIFS & Specialty Finishes", "EIFS installation support and specialty exterior finish applications for defined project scopes."],
      ["Surface Preparation", "Preparation, lath-related work, scratch coat, brown coat, and finish coat applications as required by the scope."],
    ],
    areas: ["Miami", "Miami Beach", "Bal Harbour", "Surfside", "Sunny Isles Beach", "Aventura", "Key Biscayne", "Coral Gables", "Pinecrest", "Coconut Grove"],
    climateTitle: "Built around Miami's coastal environment.",
    climateText:
      "Heat, humidity, salt air, and wind-driven rain make correct exterior preparation especially important. VELLORI combines disciplined execution with refined presentation for high-value residential properties.",
  },
};

function Header() {
  return (
    <header className="bg-[#0D1B2A] px-6 py-7 text-white lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="/" className="flex flex-col">
          <span className="font-serif text-3xl tracking-[0.27em]">VELLORI</span>
          <span className="mt-2 text-[9px] uppercase tracking-[0.28em] text-[#C8A96B]">Build Group</span>
        </a>
        <nav className="hidden items-center gap-7 text-[11px] uppercase tracking-[0.16em] md:flex">
          <a href="/services" className="hover:text-[#C8A96B]">Services</a>
          <a href="/service-areas" className="hover:text-[#C8A96B]">Service Areas</a>
          <a href="/#contact" className="rounded-full border border-[#C8A96B]/60 px-5 py-3 hover:bg-[#C8A96B] hover:text-[#0D1B2A]">Request Consultation</a>
        </nav>
      </div>
    </header>
  );
}

export default function LocalStuccoPage() {
  const path = window.location.pathname.replace(/\/$/, "");
  const page = pages[path] || pages["/stucco-palm-beach"];

  return (
    <main className="min-h-screen bg-[#F3EFE6] text-[#0D1B2A]">
      <Header />

      <section className="bg-[#0D1B2A] px-6 py-28 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C8A96B]">{page.eyebrow}</p>
          <h1 className="mt-8 max-w-5xl font-serif text-5xl leading-[1.04] md:text-7xl">{page.title}</h1>
          <p className="mt-10 max-w-3xl text-lg leading-8 text-white/70">{page.intro}</p>
          <a href="/#contact" className="mt-10 inline-flex items-center gap-3 bg-[#C8A96B] px-7 py-4 text-xs uppercase tracking-[0.20em] text-[#0D1B2A]">
            Request Project Consultation <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C8A96B]">Residential Stucco Services</p>
          <div className="mt-7 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="font-serif text-4xl leading-tight md:text-6xl">{page.focusTitle}</h2>
              <p className="mt-8 text-lg leading-8 text-[#0D1B2A]/65">{page.focusText}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {page.needs.map(([title, text]) => (
                <article key={title} className="border border-[#0D1B2A]/10 bg-white p-7">
                  <CheckCircle2 className="h-5 w-5 text-[#C8A96B]" />
                  <h3 className="mt-6 font-serif text-2xl">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#0D1B2A]/65">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#C8A96B]">South Florida Conditions</p>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl">{page.climateTitle}</h2>
            <p className="mt-7 text-lg leading-8 text-[#0D1B2A]/65">{page.climateText}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#C8A96B]">Areas Served</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {page.areas.map((area) => (
                <span key={area} className="border border-[#0D1B2A]/10 bg-[#F3EFE6] px-5 py-3 text-sm">{area}, FL</span>
              ))}
            </div>
            <a href="/service-areas" className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#9B7A3F]">
              View all service areas <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C8A96B]">Our Process</p>
          <div className="mt-10 grid gap-px bg-[#0D1B2A]/10 md:grid-cols-3">
            {[
              ["01", "Review", "We review the property condition, desired finish, location, access, and project requirements."],
              ["02", "Define", "The scope is organized around preparation, repair, application, finish, and coordination requirements."],
              ["03", "Execute", "Work proceeds with attention to cleanliness, communication, exterior detail, and finish consistency."],
            ].map(([num, title, text]) => (
              <article key={title} className="bg-[#F3EFE6] p-9">
                <div className="font-serif text-4xl text-[#C8A96B]">{num}</div>
                <h3 className="mt-6 font-serif text-2xl">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#0D1B2A]/65">{text}</p>
              </article>
            ))}
          </div>
          <p className="mt-7 text-sm leading-7 text-[#0D1B2A]/60">
            VELLORI reviews each project by scope and location. Where licensing or permitting is required, work is performed only under the responsibility and coordination of the appropriately licensed contractor or trade.
          </p>
        </div>
      </section>

      <section className="bg-[#0D1B2A] px-6 py-24 text-white lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#C8A96B]">Discuss Your Exterior</p>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl">Planning stucco or exterior finish work?</h2>
          </div>
          <div className="space-y-5 text-white/75">
            <div className="flex items-center gap-4"><MapPin className="h-5 w-5 text-[#C8A96B]" /> Serving South Florida</div>
            <div className="flex items-center gap-4"><Phone className="h-5 w-5 text-[#C8A96B]" /> (561) 887-4653</div>
            <div className="flex items-center gap-4"><Mail className="h-5 w-5 text-[#C8A96B]" /> info@velloribuild.com</div>
            <a href="/#contact" className="mt-6 inline-flex items-center gap-3 bg-[#C8A96B] px-7 py-4 text-xs uppercase tracking-[0.20em] text-[#0D1B2A]">
              Request Consultation <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#08111c] px-6 py-9 text-center text-white">
        <p className="text-xs uppercase tracking-[0.25em] text-white/55">Building Excellence. Creating Legacies.</p>
      </footer>
    </main>
  );
}

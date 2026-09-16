import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import VelloriLogo from "./VelloriLogo.jsx";
import MobileLeadBar from "./MobileLeadBar.jsx";

const surfaceServices = [
  "Interior & Exterior Tile Installation",
  "Travertine Installation",
  "Porcelain Tile Installation",
  "Natural Stone Installation",
  "Travertine Pool Decks",
  "Travertine Patios",
  "Travertine Walkways",
  "Floor & Surface Preparation",
  "Leveling & Layout Preparation",
  "Travertine Repair & Replacement",
  "Edge, Border & Transition Work",
  "Grout & Joint Improvements",
  "Exterior Stone Surface Improvements",
];

const areas = [
  "Boca Raton",
  "Delray Beach",
  "Highland Beach",
  "Palm Beach",
  "West Palm Beach",
  "Palm Beach Gardens",
  "Jupiter",
  "Parkland",
  "Coral Springs",
  "Pompano Beach",
  "Fort Lauderdale",
  "Hollywood",
  "Aventura",
  "Sunny Isles Beach",
  "Bal Harbour",
  "Miami Beach",
  "Miami",
];

export default function TravertinePage() {
  return (
    <main className="min-h-screen bg-[#F3EFE6] text-[#0D1B2A]">
      <header className="bg-[#0D1B2A] px-6 py-7 text-white lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" aria-label="VELLORI Build Group home"><VelloriLogo compact /></a>

          <a
            href="/project-request"
            className="hidden rounded-full border border-[#C8A96B]/60 px-5 py-3 text-xs uppercase tracking-[0.20em] transition hover:bg-[#C8A96B] hover:text-[#0D1B2A] md:inline-flex"
          >
            Request Consultation
          </a>
        </div>
      </header>

      <section className="bg-[#0D1B2A] px-6 py-28 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C8A96B]">
            Boca Raton Tile, Travertine & Natural Stone
          </p>

          <h1 className="mt-8 max-w-5xl font-serif text-5xl leading-[1.04] md:text-7xl">
            Tile, Travertine & Stone Installation in Boca Raton
          </h1>

          <p className="mt-10 max-w-3xl text-lg leading-8 text-white/70">
            VELLORI Build Group provides residential tile, travertine, and
            natural stone installation for interior floors, patios, pool
            decks, walkways, and outdoor living areas throughout Boca Raton
            and South Florida, with attention to preparation, alignment,
            transitions, and refined finish execution.
          </p>

          <a
            href="/project-request"
            className="mt-10 inline-flex items-center gap-3 bg-[#C8A96B] px-7 py-4 text-xs uppercase tracking-[0.20em] text-[#0D1B2A]"
          >
            Request Project Consultation
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="px-6 py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#C8A96B]">
              Tile, Travertine & Stone Services
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
              Surface installation built around preparation, precision, and detail.
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#0D1B2A]/65">
              Tile, travertine, and natural stone perform best when the
              substrate, layout, leveling, transitions, joints, and finish are
              handled as one coordinated scope. VELLORI approaches each
              residential installation with organized execution and close
              attention to the finished surface.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {surfaceServices.map((service) => (
              <div
                key={service}
                className="flex items-start gap-4 border border-[#0D1B2A]/10 bg-white p-6"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-[#C8A96B]" />
                <span className="text-sm leading-6">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C8A96B]">
            Refined Surface Installation
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl md:text-6xl">
            Tile, travertine, and stone installation built around preparation,
            precision, and finish quality.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <article className="border-t border-[#C8A96B] pt-7">
              <h3 className="font-serif text-2xl">Preparation</h3>

              <p className="mt-4 text-sm leading-7 text-[#0D1B2A]/65">
                Existing conditions are reviewed so the substrate can be
                properly prepared for the selected tile, travertine, or stone,
                including cleaning, leveling, layout planning, and other
                preparation required by the project.
              </p>
            </article>

            <article className="border-t border-[#C8A96B] pt-7">
              <h3 className="font-serif text-2xl">Installation</h3>

              <p className="mt-4 text-sm leading-7 text-[#0D1B2A]/65">
                Materials are installed with attention to alignment, pattern,
                spacing, transitions, edges, drainage considerations where
                applicable, and the continuity of the finished surface.
              </p>
            </article>

            <article className="border-t border-[#C8A96B] pt-7">
              <h3 className="font-serif text-2xl">Finish</h3>

              <p className="mt-4 text-sm leading-7 text-[#0D1B2A]/65">
                Final details are approached with attention to clean
                transitions, consistent joints, border work, visual balance,
                and a refined appearance across the completed outdoor space.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C8A96B]">
            Service Area
          </p>

          <h2 className="mt-5 font-serif text-4xl md:text-6xl">
            Tile, travertine, and stone services across Boca Raton and South Florida.
          </h2>

          <p className="mt-7 max-w-3xl leading-8 text-[#0D1B2A]/65">
            VELLORI supports residential tile, travertine, natural stone, and
            exterior surface projects across Boca Raton, Palm Beach County,
            Broward County, Miami-Dade, and surrounding South Florida communities.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="border border-[#0D1B2A]/10 bg-white px-5 py-3 text-sm"
              >
                {area}, FL
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4">
            <a
              href="/service-areas"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#8A6A32] transition hover:text-[#0D1B2A]"
            >
              Explore All South Florida Service Areas
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#8A6A32] transition hover:text-[#0D1B2A]"
            >
              View All Residential Services
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#0D1B2A] px-6 py-24 text-white lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#C8A96B]">
              Discuss Your Project
            </p>

            <h2 className="mt-6 font-serif text-4xl md:text-6xl">
              Planning a tile, travertine, or natural stone project?
            </h2>

            <p className="mt-7 max-w-xl leading-8 text-white/65">
              Tell us about the property, existing surface, material you are
              considering, project location, and the finished result you want.
            </p>
          </div>

          <div className="space-y-5 lg:pt-10">
            <div className="flex items-center gap-4">
              <MapPin className="h-5 w-5 text-[#C8A96B]" />
              Boca Raton & South Florida
            </div>

            <div className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-[#C8A96B]" />
              (561) 887-4653
            </div>

            <div className="flex items-center gap-4">
              <Mail className="h-5 w-5 text-[#C8A96B]" />
              info@velloribuild.com
            </div>

            <a
              href="/project-request"
              className="mt-6 inline-flex items-center gap-3 bg-[#C8A96B] px-7 py-4 text-xs uppercase tracking-[0.20em] text-[#0D1B2A]"
            >
              Request Consultation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#08111c] px-6 py-9 text-center text-white">
        <p className="text-xs uppercase tracking-[0.25em] text-white/55">
          Building Excellence. Creating Legacies.
        </p>
      </footer>
      <MobileLeadBar service="Tile, travertine and natural stone" />
    </main>
  );
}
  

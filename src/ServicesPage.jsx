import React, { useEffect } from "react";
import { ArrowRight, CheckCircle2, MapPin, Mail, Phone } from "lucide-react";

const serviceGroups = [
  {
    title: "Stucco & Exterior Finishes",
    description:
      "Refined exterior finish solutions for residential properties, including stucco application, repairs, patching, surface preparation, lath-related preparation, smooth finishes, textured finishes, and exterior wall restoration.",
    items: [
      "Stucco Installation",
      "Stucco Repair & Patching",
      "Exterior Stucco",
      "Smooth Stucco Finish",
      "Textured Stucco Finish",
      "Exterior Wall Restoration",
      "Surface Preparation",
      "Lath Preparation",
      "Scratch, Brown & Finish Coat Applications",
    ],
  },
  {
    title: "Travertine, Tile & Stone",
    description:
      "Premium installation and surface improvement for outdoor living areas, patios, pool decks, walkways, and residential exterior environments.",
    items: [
      "Travertine Installation",
      "Travertine Pool Decks",
      "Exterior Tile Installation",
      "Porcelain Tile",
      "Natural Stone Installation",
      "Pool Deck Improvements",
      "Grout & Mortar Applications",
      "Thinset Installation",
      "Surface Leveling",
      "Crack Isolation & Uncoupling Membrane Preparation",
    ],
  },
  {
    title: "Outdoor Living",
    description:
      "Execution of sophisticated residential exterior environments designed around comfort, functionality, property value, and refined finishes.",
    items: [
      "Outdoor Living Spaces",
      "Outdoor Kitchen Execution",
      "Pool Deck Transformations",
      "Patio Improvements",
      "Exterior Entertainment Areas",
      "Deck Construction",
      "Backyard Improvements",
      "Residential Exterior Upgrades",
    ],
  },
  {
    title: "Exterior Remodeling",
    description:
      "Organized execution and finish work for residential exterior transformations throughout South Florida.",
    items: [
      "Exterior Remodeling",
      "Exterior Renovation",
      "Facade Improvements",
      "Exterior Painting",
      "Exterior Finish Restoration",
      "Residential Exterior Improvements",
      "Surface Repairs",
      "Premium Finish Work",
    ],
  },
  {
    title: "Concrete & Surface Preparation",
    description:
      "Preparation and execution support for concrete-related residential scopes, exterior surfaces, and renovation projects.",
    items: [
      "Concrete Work",
      "Concrete Repair",
      "Concrete Surface Preparation",
      "Concrete Removal",
      "Formwork Support",
      "Surface Leveling",
      "Exterior Concrete Improvements",
      "Preparation for Finish Installation",
    ],
  },
  {
    title: "Demolition & Project Preparation",
    description:
      "Selective demolition and preparation services that help projects move into the next construction or finishing phase in an organized manner.",
    items: [
      "Selective Demolition",
      "Tile Removal",
      "Stone Removal",
      "Concrete Removal",
      "Existing Finish Removal",
      "Surface Preparation",
      "Debris Removal",
      "Project Preparation",
    ],
  },
  {
    title: "Interior & Finish Support",
    description:
      "Selected residential finish and improvement scopes completed with the same attention to detail applied to VELLORI exterior projects.",
    items: [
      "Drywall Repair",
      "Drywall Finishing",
      "Interior Tile Installation",
      "Flooring & Surface Improvements",
      "Interior Finish Work",
      "Surface Repairs",
    ],
  },
];

const areas = [
  "Boca Raton",
  "Delray Beach",
  "Palm Beach",
  "West Palm Beach",
  "Parkland",
  "Fort Lauderdale",
  "Miami",
  "South Florida",
];

 export default function ServicesPage() {
  useEffect(() => {
    document.title =
      "Residential Services in Boca Raton | VELLORI Build Group";

    let description = document.querySelector('meta[name="description"]');

    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }

    description.setAttribute(
      "content",
      "Explore VELLORI Build Group residential services in Boca Raton and South Florida, including stucco, travertine, tile, outdoor living, exterior improvements, surface preparation, demolition, concrete-related scopes, and refined finishes."
    );

    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      "https://velloribuild.com/services"
    );

    return () => {
      document.title =
        "VELLORI Build Group | Premium Exterior Improvements & Outdoor Living in Boca Raton";

      canonical?.setAttribute(
        "href",
        "https://velloribuild.com/"
      );
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#F3EFE6] text-[#0D1B2A]">
      <header className="bg-[#0D1B2A] px-6 py-7 text-white lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="flex flex-col">
            <span className="font-serif text-3xl tracking-[0.27em]">
              VELLORI
            </span>
            <span className="mt-2 text-[9px] uppercase tracking-[0.28em] text-[#C8A96B]">
              Build Group
            </span>
          </a>

          <a
            href="/#contact"
            className="hidden rounded-full border border-[#C8A96B]/60 px-5 py-3 text-xs uppercase tracking-[0.20em] transition hover:bg-[#C8A96B] hover:text-[#0D1B2A] md:inline-flex"
          >
            Request Consultation
          </a>
        </div>
      </header>

      <section className="bg-[#0D1B2A] px-6 py-28 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C8A96B]">
            Residential Construction & Exterior Improvements
          </p>

          <h1 className="mt-8 max-w-5xl font-serif text-5xl leading-[1.05] md:text-7xl">
            Premium Residential Services Across Boca Raton & South Florida
          </h1>

          <p className="mt-10 max-w-3xl text-lg leading-8 text-white/70">
            VELLORI Build Group supports premium residential projects through
            organized execution, refined craftsmanship, exterior improvements,
            outdoor living, stucco, travertine, tile, surface preparation,
            demolition, concrete-related scopes, and specialty finishes.
          </p>
        </div>
      </section>

      <section className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 md:grid-cols-2">
            {serviceGroups.map((group) => (
              <article
                key={group.title}
                className="border border-[#0D1B2A]/10 bg-white p-8 md:p-10"
              >
             {group.title === "Stucco & Exterior Finishes" ? (
  <h2 className="font-serif text-3xl">
    <a
      href="/stucco-boca-raton"
      className="transition hover:text-[#C8A96B]"
    >
      {group.title}
    </a>
  </h2>
) : group.title === "Travertine, Tile & Stone" ? (
  <h2 className="font-serif text-3xl">
    <a
      href="/travertine-boca-raton"
      className="transition hover:text-[#C8A96B]"
    >
      {group.title}
    </a>
  </h2>
) : group.title === "Outdoor Living" ? (
  <h2 className="font-serif text-3xl">
    <a
      href="/outdoor-living-boca-raton"
      className="transition hover:text-[#C8A96B]"
    >
      {group.title}
    </a>
  </h2>
) : (
  <h2 className="font-serif text-3xl">{group.title}</h2>
)}

                <p className="mt-5 leading-7 text-[#0D1B2A]/65">
                  {group.description}
                </p>

                <div className="mt-8 space-y-3">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#C8A96B]" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C8A96B]">
            Service Area
          </p>

          <h2 className="mt-5 font-serif text-4xl md:text-6xl">
            Serving Boca Raton and South Florida
          </h2>

          <p className="mt-7 max-w-3xl leading-8 text-[#0D1B2A]/65">
            VELLORI works with homeowners and construction professionals across
            South Florida, with a focus on premium residential properties,
            exterior transformations, outdoor environments, and refined finish
            execution.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="border border-[#0D1B2A]/10 px-5 py-3 text-sm"
              >
                {area}, FL
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D1B2A] px-6 py-24 text-white lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#C8A96B]">
              Start Your Project
            </p>

            <h2 className="mt-6 font-serif text-4xl md:text-6xl">
              Tell us what you are planning.
            </h2>

            <p className="mt-7 max-w-xl leading-8 text-white/65">
              Our team can review your project scope and discuss the appropriate
              next steps for execution.
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
              href="/#contact"
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
    </main>
  );
}

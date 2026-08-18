import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const concreteServices = [
  "Concrete-Related Project Support",
  "Formwork & Preparation Support",
  "Slab & Surface Preparation",
  "Exterior Concrete Improvements",
  "Concrete Repair Support",
  "Demolition & Removal Support",
  "Site Preparation",
  "Walkway Improvements",
  "Patio & Exterior Surface Improvements",
  "Concrete Surface Preparation",
  "Residential Exterior Project Support",
  "Coordination With Project Professionals",
];

const areas = [
  "Boca Raton",
  "Delray Beach",
  "Palm Beach",
  "West Palm Beach",
  "Parkland",
  "Fort Lauderdale",
];

export default function ConcretePage() {
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
            Boca Raton Concrete & Exterior Projects
          </p>

          <h1 className="mt-8 max-w-5xl font-serif text-5xl leading-[1.04] md:text-7xl">
            Concrete Project Support & Exterior Improvements in Boca Raton
          </h1>

          <p className="mt-10 max-w-3xl text-lg leading-8 text-white/70">
            VELLORI Build Group supports residential concrete-related scopes and
            exterior improvement projects throughout Boca Raton and South
            Florida, with a focus on organized execution, preparation,
            coordination, clean workmanship, and refined project delivery.
          </p>

          <a
            href="/#contact"
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
              Concrete Project Support
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
              Concrete-related work built around preparation, coordination, and
              disciplined execution.
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#0D1B2A]/65">
              Successful concrete-related scopes depend on careful preparation,
              sequencing, formwork, surface conditions, transitions, and
              organized field execution. VELLORI supports residential exterior
              projects with attention to detail and the overall finished result.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {concreteServices.map((service) => (
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
            Organized Project Execution
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl md:text-6xl">
            Concrete-related scopes approached with preparation, organization,
            and attention to the finished environment.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <article className="border-t border-[#C8A96B] pt-7">
              <h3 className="font-serif text-2xl">Preparation</h3>

              <p className="mt-4 text-sm leading-7 text-[#0D1B2A]/65">
                Existing site conditions are reviewed so surrounding areas,
                surfaces, access, and preparation needs can be organized around
                the project scope.
              </p>
            </article>

            <article className="border-t border-[#C8A96B] pt-7">
              <h3 className="font-serif text-2xl">Coordination</h3>

              <p className="mt-4 text-sm leading-7 text-[#0D1B2A]/65">
                Concrete-related work is approached with attention to
                sequencing, formwork preparation, adjacent finishes, project
                professionals, and overall site organization.
              </p>
            </article>

            <article className="border-t border-[#C8A96B] pt-7">
              <h3 className="font-serif text-2xl">Execution</h3>

              <p className="mt-4 text-sm leading-7 text-[#0D1B2A]/65">
                Field work is supported with a focus on clean execution,
                transitions, surrounding protection, workmanship, and the
                appearance of the completed exterior environment.
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
            Concrete-related project support across Boca Raton, Palm Beach County & South Florida.
          </h2>

          <p className="mt-7 max-w-3xl leading-8 text-[#0D1B2A]/65">
            VELLORI supports residential concrete-related and exterior improvement projects
across Boca Raton, Palm Beach County, Broward County, Miami-Dade, and
surrounding South Florida communities.
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
        </div>
      </section>

      <section className="bg-[#0D1B2A] px-6 py-24 text-white lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#C8A96B]">
              Discuss Your Project
            </p>

            <h2 className="mt-6 font-serif text-4xl md:text-6xl">
              Planning a concrete-related exterior improvement?
            </h2>

            <p className="mt-7 max-w-xl leading-8 text-white/65">
              Tell us about the property, existing conditions, project
              location, plans, and the exterior improvements you are
              considering.
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

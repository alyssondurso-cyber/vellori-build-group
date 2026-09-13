import React, { useEffect } from "react";
import { Mail, Phone } from "lucide-react";
import VelloriLogo from "./VelloriLogo.jsx";

const sections = [
  {
    title: "Information we collect",
    text: "When you contact VELLORI or submit a project request, we may receive your name, phone number, email address, preferred contact method, project location, project details, budget and timing preferences, and photos or videos you choose to upload.",
  },
  {
    title: "How we use information",
    text: "We use submitted information to review your request, respond to you, assess project fit, arrange a callback or site visit, prepare preliminary guidance or an estimate, and maintain records related to the inquiry.",
  },
  {
    title: "Forms and service providers",
    text: "Our project request form is processed through our website infrastructure. Service providers may support website hosting, email delivery, security, and business operations only as needed to receive, protect, and manage the inquiry.",
  },
  {
    title: "Sharing and selling",
    text: "VELLORI does not sell personal information submitted through this website. Information may be shared with service providers supporting the inquiry or, when a project requires licensed or permitted work, with an appropriately licensed contractor or trade only as needed to evaluate or coordinate that scope.",
  },
  {
    title: "Project photos and media",
    text: "Photos and videos submitted for an inquiry are used to understand the requested work. Submission does not give VELLORI permission to publish the media for marketing. Separate permission is required before project media is used publicly.",
  },
  {
    title: "Retention and security",
    text: "We retain inquiry information only for legitimate business, project, legal, and recordkeeping needs. We use reasonable measures to protect it, but no online transmission or storage system can be guaranteed completely secure.",
  },
  {
    title: "Your choices",
    text: "You may ask us to correct or delete information you submitted, subject to legal and legitimate business recordkeeping requirements. You may also ask us to stop nonessential follow-up communications.",
  },
];

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | VELLORI Build Group";

    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }
    description.setAttribute(
      "content",
      "Read the VELLORI Build Group privacy policy for information submitted through velloribuild.com and the project request form."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://velloribuild.com/privacy");

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
          <a href="/"><VelloriLogo compact /></a>
          <a href="/project-request" className="rounded-full border border-[#C8A96B]/60 px-5 py-3 text-[11px] uppercase tracking-[0.16em] hover:bg-[#C8A96B] hover:text-[#0D1B2A]">
            Request Consultation
          </a>
        </div>
      </header>

      <section className="bg-[#0D1B2A] px-6 py-24 text-white lg:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C8A96B]">VELLORI Build Group</p>
          <h1 className="mt-8 font-serif text-5xl leading-[1.04] md:text-7xl">Privacy Policy</h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
            This policy explains how we handle information submitted through velloribuild.com and our project request form.
          </p>
          <p className="mt-5 text-sm uppercase tracking-[0.18em] text-white/45">Last updated September 12, 2026</p>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-5xl space-y-5">
          {sections.map((section) => (
            <article key={section.title} className="border border-[#0D1B2A]/10 bg-white p-8 md:p-10">
              <h2 className="font-serif text-3xl">{section.title}</h2>
              <p className="mt-5 text-base leading-8 text-[#0D1B2A]/68">{section.text}</p>
            </article>
          ))}

          <article className="bg-[#0D1B2A] p-8 text-white md:p-10">
            <h2 className="font-serif text-3xl">Contact VELLORI</h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/65">For privacy questions or requests concerning information you submitted, contact us directly.</p>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:gap-8">
              <a href="mailto:info@velloribuild.com" className="flex items-center gap-3 hover:text-[#C8A96B]"><Mail className="h-5 w-5 text-[#C8A96B]" /> info@velloribuild.com</a>
              <a href="tel:+15618874653" className="flex items-center gap-3 hover:text-[#C8A96B]"><Phone className="h-5 w-5 text-[#C8A96B]" /> (561) 887-4653</a>
            </div>
          </article>
        </div>
      </section>

      <footer className="bg-[#08111c] px-6 py-9 text-center text-white">
        <p className="text-xs uppercase tracking-[0.25em] text-white/55">Building Excellence. Creating Legacies.</p>
      </footer>
    </main>
  );
}

import React, { useEffect, useState } from "react";
import { ArrowRight, CalendarDays, Camera, Mail, Phone } from "lucide-react";
import VelloriLogo from "./VelloriLogo.jsx";

const FORM_URL = "https://form.jotform.com/262545441554054";
const FORM_ID = "262545441554054";

export default function ProjectRequestPage() {
  const [formHeight, setFormHeight] = useState(720);

  useEffect(() => {
    const handleFormMessage = (event) => {
      if (event.origin !== "https://form.jotform.com" || typeof event.data !== "string") return;

      const [action, value, id] = event.data.split(":");
      if (action !== "setHeight" || (id && id !== FORM_ID)) return;

      const nextHeight = Number.parseInt(value, 10);
      if (Number.isFinite(nextHeight)) {
        setFormHeight(Math.min(Math.max(nextHeight, 560), 2400));
      }
    };

    window.addEventListener("message", handleFormMessage);
    return () => window.removeEventListener("message", handleFormMessage);
  }, []);

  return (
    <main className="min-h-screen bg-[#F3EFE6] text-[#0D1B2A]">
      <header className="bg-[#0D1B2A] px-6 py-7 text-white lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/"><VelloriLogo compact /></a>
          <nav className="hidden items-center gap-7 text-[11px] uppercase tracking-[0.16em] md:flex">
            <a href="/services" className="hover:text-[#C8A96B]">Services</a><a href="/service-areas" className="hover:text-[#C8A96B]">Service Areas</a><a href="/#about" className="hover:text-[#C8A96B]">About</a><a href="/#contact" className="rounded-full border border-[#C8A96B]/60 px-5 py-3 hover:bg-[#C8A96B] hover:text-[#0D1B2A]">Contact</a>
          </nav>
        </div>
      </header>
      <section className="bg-[#0D1B2A] px-6 py-24 text-white lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><p className="text-xs uppercase tracking-[0.35em] text-[#C8A96B]">Project Intake</p><h1 className="mt-8 max-w-5xl font-serif text-5xl leading-[1.04] md:text-7xl">Tell us what you are planning.</h1><p className="mt-9 max-w-3xl text-lg leading-8 text-white/70">Send photos for an initial project review, request an on-site visit, or ask our team to call you back. We will review the details and respond through your preferred contact method.</p><div className="mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">{[[Camera,"Send photos","Help us understand the existing condition."],[CalendarDays,"Request a visit","Share a preferred date and time of day."],[Phone,"Request a callback","We will follow up when you are available."]].map(([Icon,title,text])=><div key={title} className="border border-white/15 bg-white/5 p-6"><Icon className="h-5 w-5 text-[#C8A96B]"/><h2 className="mt-5 font-serif text-2xl">{title}</h2><p className="mt-3 text-sm leading-6 text-white/60">{text}</p></div>)}</div></div></section>
      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-24"><div className="mx-auto max-w-5xl"><div className="mb-9 flex flex-wrap items-end justify-between gap-5"><div><p className="text-xs uppercase tracking-[0.35em] text-[#C8A96B]">VELLORI Build Group</p><h2 className="mt-4 font-serif text-4xl md:text-5xl">Project Estimate &amp; Site Visit Request</h2></div><a href="mailto:info@velloribuild.com" className="inline-flex items-center gap-2 text-sm text-[#0D1B2A]/65 hover:text-[#9B7A3F]"><Mail className="h-4 w-4"/> info@velloribuild.com</a></div><div className="overflow-hidden border border-[#0D1B2A]/10 bg-white shadow-[0_18px_60px_rgba(13,27,42,0.08)]"><iframe id={`JotFormIFrame-${FORM_ID}`} title="VELLORI Project Estimate and Site Visit Request" src={FORM_URL} className="w-full transition-[height] duration-300" style={{ height: `${formHeight}px` }} frameBorder="0" scrolling="yes" allow="camera; microphone; geolocation"/></div><div className="mt-5 text-center"><a href={FORM_URL} target="_blank" rel="noreferrer" className="text-xs uppercase tracking-[0.18em] text-[#8A6A32] underline underline-offset-4">Open the secure form in a new window</a></div><p className="mt-6 text-center text-sm leading-7 text-[#0D1B2A]/60">Photo-based feedback and preliminary ranges are not final estimates. Final pricing depends on site conditions, measurements, materials, scope, access, permits, and any required licensed-trade coordination.</p></div></section>
      <section className="bg-white px-6 py-20 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="text-xs uppercase tracking-[0.35em] text-[#C8A96B]">South Florida Residential Work</p><h2 className="mt-5 max-w-3xl font-serif text-4xl md:text-5xl">A clear next step for your property.</h2></div><a href="tel:+15618874653" className="inline-flex items-center gap-3 text-lg hover:text-[#9B7A3F]"><Phone className="h-5 w-5 text-[#C8A96B]"/> (561) 887-4653 <ArrowRight className="h-4 w-4"/></a></div></section>
      <footer className="bg-[#08111c] px-6 py-9 text-center text-white"><p className="text-xs uppercase tracking-[0.25em] text-white/55">Building Excellence. Creating Legacies.</p><a href="/privacy" className="mt-4 inline-block text-xs text-white/45 underline underline-offset-4 hover:text-[#C8A96B]">Privacy Policy</a></footer>
    </main>
  );
}

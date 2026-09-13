import React, { useEffect, useState } from "react";
import { ArrowRight, CalendarDays, Camera, Mail, Phone } from "lucide-react";
import VelloriLogo from "./VelloriLogo.jsx";

const inputClass = "mt-2 w-full border border-[#0D1B2A]/15 bg-[#F8F5EE] px-4 py-3 text-sm outline-none transition focus:border-[#C8A96B] focus:ring-1 focus:ring-[#C8A96B]";
const labelClass = "text-xs font-medium uppercase tracking-[0.13em] text-[#0D1B2A]/70";

async function preparePhoto(file) {
  if (!file.type.startsWith("image/")) throw new Error("Please upload image files only.");
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, 1600 / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext("2d").drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.78));
  if (!blob) throw new Error("We could not prepare one of the photos.");
  const content = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
  return { filename: file.name.replace(/\.[^.]+$/, "") + ".jpg", content };
}

export default function ProjectRequestPage() {
  const [visitDate, setVisitDate] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const submitted = new URLSearchParams(window.location.search).get("submitted") === "1";

  useEffect(() => {
    document.title = "Request a Project Estimate | VELLORI Build Group";

    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }
    description.setAttribute(
      "content",
      "Request a project estimate or site visit from VELLORI Build Group for premium residential exterior improvements, stucco, outdoor living, tile, stone, and specialty scopes across South Florida."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://velloribuild.com/project-request");

    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", submitted ? "noindex, follow" : "index, follow");

    return () => {
      document.title =
        "VELLORI Build Group | Premium Exterior Improvements & Outdoor Living in Boca Raton";
      canonical?.setAttribute("href", "https://velloribuild.com/");
      robots?.setAttribute("content", "index, follow");
    };
  }, [submitted]);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const form = event.currentTarget;
      const data = new FormData(form);
      const photoFiles = data.getAll("photos").filter((file) => file?.size);
      if (photoFiles.length > 3) throw new Error("Please select up to 3 photos.");
      const attachments = await Promise.all(photoFiles.map(preparePhoto));
      data.delete("photos");
      const fields = Object.fromEntries(data.entries());
      const response = await fetch("/api/project-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fields, attachments }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "We could not send your request. Please try again.");
      window.location.assign("/project-request?submitted=1");
    } catch (submissionError) {
      setError(submissionError.message || "We could not send your request. Please call or email VELLORI.");
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-[#F3EFE6] text-[#0D1B2A]">
      <header className="bg-[#0D1B2A] px-6 py-7 text-white lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" aria-label="VELLORI Build Group home"><VelloriLogo compact /></a>
          <nav className="hidden items-center gap-7 text-[11px] uppercase tracking-[0.16em] md:flex">
            <a href="/services" className="hover:text-[#C8A96B]">Services</a><a href="/service-areas" className="hover:text-[#C8A96B]">Service Areas</a><a href="/#about" className="hover:text-[#C8A96B]">About</a><a href="/#contact" className="rounded-full border border-[#C8A96B]/60 px-5 py-3 hover:bg-[#C8A96B] hover:text-[#0D1B2A]">Contact</a>
          </nav>
        </div>
      </header>
      <section className="bg-[#0D1B2A] px-6 py-24 text-white lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><p className="text-xs uppercase tracking-[0.35em] text-[#C8A96B]">Project Intake</p><h1 className="mt-8 max-w-5xl font-serif text-5xl leading-[1.04] md:text-7xl">Tell us what you are planning.</h1><p className="mt-9 max-w-3xl text-lg leading-8 text-white/70">Send photos for an initial project review, request an on-site visit, or ask our team to call you back. We will review the details and respond through your preferred contact method.</p><div className="mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">{[[Camera,"Send photos","Help us understand the existing condition."],[CalendarDays,"Request a visit","Share a preferred date and time of day."],[Phone,"Request a callback","We will follow up when you are available."]].map(([Icon,title,text])=><div key={title} className="border border-white/15 bg-white/5 p-6"><Icon className="h-5 w-5 text-[#C8A96B]"/><h2 className="mt-5 font-serif text-2xl">{title}</h2><p className="mt-3 text-sm leading-6 text-white/60">{text}</p></div>)}</div></div></section>
      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
            <div><p className="text-xs uppercase tracking-[0.35em] text-[#C8A96B]">VELLORI Build Group</p><h2 className="mt-4 font-serif text-4xl md:text-5xl">Project Estimate &amp; Site Visit Request</h2></div>
            <a href="mailto:info@velloribuild.com" className="inline-flex items-center gap-2 text-sm text-[#0D1B2A]/65 hover:text-[#9B7A3F]"><Mail className="h-4 w-4"/> info@velloribuild.com</a>
          </div>
          {submitted ? (
            <div className="border border-[#C8A96B]/35 bg-white p-9 text-center shadow-[0_18px_60px_rgba(13,27,42,0.08)] md:p-14">
              <p className="text-xs uppercase tracking-[0.30em] text-[#C8A96B]">Request Received</p>
              <h3 className="mt-5 font-serif text-4xl">Thank you for contacting VELLORI.</h3>
              <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#0D1B2A]/65">Our team will review your project information and contact you through your preferred method.</p>
              <a href="/" className="mt-8 inline-flex items-center gap-3 bg-[#0D1B2A] px-7 py-4 text-xs uppercase tracking-[0.20em] text-white">Return to Home <ArrowRight className="h-4 w-4"/></a>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="border border-[#0D1B2A]/10 bg-white p-6 shadow-[0_18px_60px_rgba(13,27,42,0.08)] sm:p-9 md:p-12">
            <input type="text" name="website" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true"/>

            <div className="border-b border-[#0D1B2A]/10 pb-8">
              <p className="text-xs uppercase tracking-[0.30em] text-[#C8A96B]">01 · Contact &amp; Property</p>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <label className={labelClass}>First name *<input className={inputClass} type="text" name="firstName" required autoComplete="given-name"/></label>
                <label className={labelClass}>Last name *<input className={inputClass} type="text" name="lastName" required autoComplete="family-name"/></label>
                <label className={labelClass}>Mobile phone *<input className={inputClass} type="tel" name="phone" required placeholder="(561) 887-4653" autoComplete="tel"/></label>
                <label className={labelClass}>Email *<input className={inputClass} type="email" name="email" required autoComplete="email"/></label>
                <label className={labelClass}>Project city or ZIP code *<input className={inputClass} type="text" name="cityZip" required autoComplete="postal-code"/></label>
                <label className={labelClass}>Street address (optional)<input className={inputClass} type="text" name="address" autoComplete="street-address"/></label>
              </div>
              <fieldset className="mt-6"><legend className={labelClass}>Preferred contact method *</legend><div className="mt-3 flex flex-wrap gap-5 text-sm">{["Text message","Phone call","Email"].map(value=><label key={value} className="flex items-center gap-2"><input type="radio" name="contactMethod" value={value} required className="accent-[#C8A96B]"/>{value}</label>)}</div></fieldset>
              <fieldset className="mt-6"><legend className={labelClass}>Property type *</legend><div className="mt-3 flex flex-wrap gap-5 text-sm">{["Residential","Commercial"].map(value=><label key={value} className="flex items-center gap-2"><input type="radio" name="propertyType" value={value} required className="accent-[#C8A96B]"/>{value}</label>)}</div></fieldset>
            </div>

            <div className="border-b border-[#0D1B2A]/10 py-8">
              <p className="text-xs uppercase tracking-[0.30em] text-[#C8A96B]">02 · Project Details</p>
              <fieldset className="mt-7"><legend className={labelClass}>How would you like us to help? *</legend><div className="mt-3 grid gap-3 sm:grid-cols-3">{["Send photos for a preliminary estimate","Request an on-site visit","Request a callback"].map(value=><label key={value} className="flex items-start gap-3 border border-[#0D1B2A]/10 p-4 text-sm leading-6"><input type="radio" name="requestType" value={value} required className="mt-1 accent-[#C8A96B]"/>{value}</label>)}</div></fieldset>
              <label className={`${labelClass} mt-7 block`}>Primary service needed *<select className={inputClass} name="service" required defaultValue=""><option value="" disabled>Select a service</option>{["Stucco & exterior finishes","EIFS","Travertine, tile & natural stone","Pool deck","Outdoor living or deck","Concrete-related scope","Selective demolition or surface preparation","Drywall or finish support"].map(value=><option key={value} value={value}>{value}</option>)}</select></label>
              <label className={`${labelClass} mt-7 block`}>Project description *<textarea className={`${inputClass} min-h-36 resize-y`} name="description" required/></label>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <label className={labelClass}>Estimated timeline *<select className={inputClass} name="timeline" required defaultValue=""><option value="" disabled>Select timeline</option>{["ASAP","1–4 weeks","1–3 months","3+ months","Planning only"].map(value=><option key={value} value={value}>{value}</option>)}</select></label>
                <label className={labelClass}>Budget range<select className={inputClass} name="budget" defaultValue=""><option value="">Not sure yet</option>{["Under $10,000","$10,000–$25,000","$25,000–$50,000","$50,000–$100,000","$100,000+"].map(value=><option key={value} value={value}>{value}</option>)}</select></label>
              </div>
              <label className={`${labelClass} mt-7 block`}>Upload up to 3 project photos<input className={`${inputClass} file:mr-4 file:border-0 file:bg-[#0D1B2A] file:px-4 file:py-2 file:text-xs file:uppercase file:tracking-[0.12em] file:text-white`} type="file" name="photos" multiple accept="image/jpeg,image/png,image/webp"/></label>
            </div>

            <div className="pt-8">
              <p className="text-xs uppercase tracking-[0.30em] text-[#C8A96B]">03 · Visit or Callback</p>
              <div className="mt-7 grid gap-5 sm:grid-cols-3">
                <label className={labelClass}>Preferred visit date<input className={inputClass} type="date" name="visitDate" value={visitDate} onChange={(event)=>setVisitDate(event.target.value)}/></label>
                <label className={labelClass}>Preferred day<select className={inputClass} name="preferredDay" defaultValue=""><option value="">Select day</option>{["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map(value=><option key={value} value={value}>{value}</option>)}</select></label>
                <label className={labelClass}>Preferred time<select className={inputClass} name="preferredTime" defaultValue=""><option value="">Select time</option>{["Morning","Afternoon","Evening","Any time"].map(value=><option key={value} value={value}>{value}</option>)}</select></label>
              </div>
              <label className="mt-8 flex items-start gap-3 text-sm leading-6 text-[#0D1B2A]/70"><input type="checkbox" name="consent" value="accepted" required className="mt-1 accent-[#C8A96B]"/>I agree that VELLORI may contact me by phone, text message, or email about this project.</label>
              {error && <p role="alert" className="mt-6 border border-red-700/20 bg-red-50 px-4 py-3 text-sm text-red-800">{error} You can also call <a className="underline" href="tel:+15618874653">(561) 887-4653</a> or email <a className="underline" href="mailto:info@velloribuild.com">info@velloribuild.com</a>.</p>}
              <button type="submit" disabled={status === "sending"} className="mt-9 inline-flex w-full items-center justify-center gap-3 bg-[#0D1B2A] px-7 py-5 text-xs uppercase tracking-[0.20em] text-white transition hover:bg-[#C8A96B] hover:text-[#0D1B2A] disabled:cursor-wait disabled:opacity-60">{status === "sending" ? "Sending Request…" : "Send My Project Request"} <ArrowRight className="h-4 w-4"/></button>
            </div>
          </form>
          )}
          <p className="mt-6 text-center text-sm leading-7 text-[#0D1B2A]/60">Photo-based feedback and preliminary ranges are not final estimates. Final pricing depends on site conditions, measurements, materials, scope, access, permits, and any required licensed-trade coordination.</p>
        </div>
      </section>
      <section className="bg-white px-6 py-20 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="text-xs uppercase tracking-[0.35em] text-[#C8A96B]">South Florida Residential Work</p><h2 className="mt-5 max-w-3xl font-serif text-4xl md:text-5xl">A clear next step for your property.</h2></div><a href="tel:+15618874653" className="inline-flex items-center gap-3 text-lg hover:text-[#9B7A3F]"><Phone className="h-5 w-5 text-[#C8A96B]"/> (561) 887-4653 <ArrowRight className="h-4 w-4"/></a></div></section>
      <footer className="bg-[#08111c] px-6 py-9 text-center text-white"><p className="text-xs uppercase tracking-[0.25em] text-white/55">Building Excellence. Creating Legacies.</p><a href="/privacy" className="mt-4 inline-block text-xs text-white/45 underline underline-offset-4 hover:text-[#C8A96B]">Privacy Policy</a></footer>
    </main>
  );
}

import React, { useState } from "react";
import { ArrowRight, CalendarDays, Camera, Mail, Phone } from "lucide-react";
import VelloriLogo from "./VelloriLogo.jsx";

const FORM_ID = "262545441554054";

const inputClass = "mt-2 w-full border border-[#0D1B2A]/15 bg-[#F8F5EE] px-4 py-3 text-sm outline-none transition focus:border-[#C8A96B] focus:ring-1 focus:ring-[#C8A96B]";
const labelClass = "text-xs font-medium uppercase tracking-[0.13em] text-[#0D1B2A]/70";

export default function ProjectRequestPage() {
  const [visitDate, setVisitDate] = useState("");
  const [visitYear = "", visitMonth = "", visitDay = ""] = visitDate.split("-");
  const submitted = new URLSearchParams(window.location.search).get("submitted") === "1";

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
          <form action={`https://submit.jotform.com/submit/${FORM_ID}`} method="post" encType="multipart/form-data" className="border border-[#0D1B2A]/10 bg-white p-6 shadow-[0_18px_60px_rgba(13,27,42,0.08)] sm:p-9 md:p-12">
            <input type="hidden" name="formID" value={FORM_ID}/>
            <input type="text" name="website" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true"/>

            <div className="border-b border-[#0D1B2A]/10 pb-8">
              <p className="text-xs uppercase tracking-[0.30em] text-[#C8A96B]">01 · Contact &amp; Property</p>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <label className={labelClass}>First name *<input className={inputClass} type="text" name="q3_q3_fullname1[first]" required autoComplete="given-name"/></label>
                <label className={labelClass}>Last name *<input className={inputClass} type="text" name="q3_q3_fullname1[last]" required autoComplete="family-name"/></label>
                <label className={labelClass}>Mobile phone *<input className={inputClass} type="tel" name="q4_q4_phone2[full]" required placeholder="(561) 887-4653" autoComplete="tel"/></label>
                <label className={labelClass}>Email *<input className={inputClass} type="email" name="q5_q5_email3" required autoComplete="email"/></label>
                <label className={labelClass}>Project city or ZIP code *<input className={inputClass} type="text" name="q7_q7_textbox5" required autoComplete="postal-code"/></label>
                <label className={labelClass}>Street address (optional)<input className={inputClass} type="text" name="q8_q8_address6[addr_line1]" autoComplete="street-address"/></label>
              </div>
              <fieldset className="mt-6"><legend className={labelClass}>Preferred contact method *</legend><div className="mt-3 flex flex-wrap gap-5 text-sm">{["Text message","Phone call","Email"].map(value=><label key={value} className="flex items-center gap-2"><input type="radio" name="q6_q6_radio4" value={value} required className="accent-[#C8A96B]"/>{value}</label>)}</div></fieldset>
              <fieldset className="mt-6"><legend className={labelClass}>Property type *</legend><div className="mt-3 flex flex-wrap gap-5 text-sm">{["Residential","Commercial"].map(value=><label key={value} className="flex items-center gap-2"><input type="radio" name="q9_q9_radio7" value={value} required className="accent-[#C8A96B]"/>{value}</label>)}</div></fieldset>
            </div>

            <div className="border-b border-[#0D1B2A]/10 py-8">
              <p className="text-xs uppercase tracking-[0.30em] text-[#C8A96B]">02 · Project Details</p>
              <fieldset className="mt-7"><legend className={labelClass}>How would you like us to help? *</legend><div className="mt-3 grid gap-3 sm:grid-cols-3">{["Send photos for a preliminary estimate","Request an on-site visit","Request a callback"].map(value=><label key={value} className="flex items-start gap-3 border border-[#0D1B2A]/10 p-4 text-sm leading-6"><input type="radio" name="q10_q10_radio8" value={value} required className="mt-1 accent-[#C8A96B]"/>{value}</label>)}</div></fieldset>
              <label className={`${labelClass} mt-7 block`}>Primary service needed *<select className={inputClass} name="q12_q12_checkbox10[]" required defaultValue=""><option value="" disabled>Select a service</option>{["Stucco & exterior finishes","EIFS","Travertine, tile & natural stone","Pool deck","Outdoor living or deck","Concrete-related scope","Selective demolition or surface preparation","Drywall or finish support"].map(value=><option key={value} value={value}>{value}</option>)}</select></label>
              <label className={`${labelClass} mt-7 block`}>Project description *<textarea className={`${inputClass} min-h-36 resize-y`} name="q13_q13_textarea11" required/></label>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <label className={labelClass}>Estimated timeline *<select className={inputClass} name="q14_q14_radio12" required defaultValue=""><option value="" disabled>Select timeline</option>{["ASAP","1–4 weeks","1–3 months","3+ months","Planning only"].map(value=><option key={value} value={value}>{value}</option>)}</select></label>
                <label className={labelClass}>Budget range<select className={inputClass} name="q15_q15_dropdown13" defaultValue=""><option value="">Not sure yet</option>{["Under $10,000","$10,000–$25,000","$25,000–$50,000","$50,000–$100,000","$100,000+"].map(value=><option key={value} value={value}>{value}</option>)}</select></label>
              </div>
              <label className={`${labelClass} mt-7 block`}>Upload project photos or videos<input className={`${inputClass} file:mr-4 file:border-0 file:bg-[#0D1B2A] file:px-4 file:py-2 file:text-xs file:uppercase file:tracking-[0.12em] file:text-white`} type="file" name="file" multiple accept="image/*,video/*"/></label>
            </div>

            <div className="pt-8">
              <p className="text-xs uppercase tracking-[0.30em] text-[#C8A96B]">03 · Visit or Callback</p>
              <div className="mt-7 grid gap-5 sm:grid-cols-3">
                <label className={labelClass}>Preferred visit date<input className={inputClass} type="date" value={visitDate} onChange={(event)=>setVisitDate(event.target.value)}/><input type="hidden" name="q18_q18_datetime16[month]" value={visitMonth}/><input type="hidden" name="q18_q18_datetime16[day]" value={visitDay}/><input type="hidden" name="q18_q18_datetime16[year]" value={visitYear}/></label>
                <label className={labelClass}>Preferred day<select className={inputClass} name="q21_q21_dropdown19" defaultValue=""><option value="">Select day</option>{["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map(value=><option key={value} value={value}>{value}</option>)}</select></label>
                <label className={labelClass}>Preferred time<select className={inputClass} name="q22_q22_radio20" defaultValue=""><option value="">Select time</option>{["Morning","Afternoon","Evening","Any time"].map(value=><option key={value} value={value}>{value}</option>)}</select></label>
              </div>
              <label className="mt-8 flex items-start gap-3 text-sm leading-6 text-[#0D1B2A]/70"><input type="checkbox" name="q24_q24_checkbox22[]" value="I agree that VELLORI may contact me by phone, text message, or email about this project." required className="mt-1 accent-[#C8A96B]"/>I agree that VELLORI may contact me by phone, text message, or email about this project.</label>
              <button type="submit" className="mt-9 inline-flex w-full items-center justify-center gap-3 bg-[#0D1B2A] px-7 py-5 text-xs uppercase tracking-[0.20em] text-white transition hover:bg-[#C8A96B] hover:text-[#0D1B2A]">Send My Project Request <ArrowRight className="h-4 w-4"/></button>
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

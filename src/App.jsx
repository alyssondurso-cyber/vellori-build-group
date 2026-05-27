import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail, CheckCircle2, Menu, X } from "lucide-react";

const NAVY = "#0D1B2A";
const GOLD = "#C8A96B";
const SAND = "#F3EFE6";

const services = [
  "Luxury Outdoor Living",
  "Travertine Installation",
  "Pool Deck Transformations",
  "Exterior Painting",
  "Deck Construction",
  "High-End Exterior Remodeling",
  "Residential Exterior Improvements",
];

const projects = [
  {
    title: "Boca Raton Outdoor Living Transformation",
    tag: "Travertine • Pool Deck • Exterior Living",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Palm Beach Exterior Refinement",
    tag: "Facade • Paint • Architectural Finish",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Miami Modern Pool Environment",
    tag: "Pool Deck • Stone • Outdoor Upgrade",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1600&auto=format&fit=crop",
  },
];

function Button({ children, variant = "primary" }) {
  const primary = variant === "primary";
  return (
    <button
      className={`group inline-flex items-center gap-3 rounded-full px-7 py-[15px] text-[11px] tracking-[0.20em] uppercase transition-all duration-700 ease-out ${
        primary
          ? "bg-[#C8A96B] text-[#0D1B2A] hover:bg-[#d7ba82]"
          : "border border-[#C8A96B]/50 text-white hover:border-[#C8A96B] hover:bg-white/5"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </button>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mb-5 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C8A96B]">
      <span className="h-px w-12 bg-[#C8A96B]/70" />
      {children}
    </div>
  );
}

export default function VelloriWebsite() {

  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <main className="min-h-screen bg-[#F3EFE6] text-[#0D1B2A]">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0D1B2A]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-[22px] lg:px-10">
          <div className="flex items-center gap-3 text-white">
            <svg viewBox="0 0 150 110" className="h-10 w-10 flex-shrink-0" aria-label="VELLORI luxury symbol">
              <path
                d="M16 16 L54 16 L82 62 L70 84 Z"
                fill="none"
                stroke="#C8A96B"
                strokeWidth="11"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
              <path
                d="M40 42 L78 102 L124 16"
                fill="none"
                stroke="#F3EFE6"
                strokeWidth="11"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
              <path
                d="M82 58 L112 16 L136 16"
                fill="none"
                stroke="#0D1B2A"
                strokeWidth="11"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
            </svg>

            <div className="flex flex-col justify-center leading-none">
              <div className="font-serif text-[30px] tracking-[0.27em] text-white">
                VELLORI
              </div>

              <div className="mt-[7px] flex items-center gap-3">
                <span className="h-px w-5 bg-[#C8A96B]/50" />
                <span className="text-[9px] uppercase tracking-[0.28em] text-[#C8A96B]">
                  BUILD GROUP
                </span>
                <span className="h-px w-7 bg-[#C8A96B]/75" />
              </div>
            </div>
          </div>
          <nav className="hidden items-center gap-9 text-[11px] uppercase tracking-[0.16em] text-white/80 lg:flex">
            <a href="#home" className="transition-colors duration-300 hover:text-[#C8A96B]/85">Home</a>
            <a href="#services" className="hover:text-[#C8A96B]">Services</a>
            <a href="#projects" className="hover:text-[#C8A96B]">Projects</a>
            <a href="#about" className="hover:text-[#C8A96B]">About</a>
            <a href="#contact" className="hover:text-[#C8A96B]">Contact</a>
          </nav>
          {/* Mobile Button */}
<button
  onClick={() => setMobileMenu(!mobileMenu)}
  className="text-white lg:hidden"
>
  <X size={22} /> : <Menu size={22} />
</button>

{/* Mobile Menu */}
{mobileMenu && (
  <div className="absolute left-0 top-full w-full bg-[#0D1B2A] border-t border-white/10 flex flex-col items-center gap-6 py-8 text-sm uppercase tracking-[0.18em] text-white lg:hidden">
    <a href="#home" onClick={() => setMobileMenu(false)}>Home</a>
    <a href="#services" onClick={() => setMobileMenu(false)}>Services</a>
    <a href="#projects" onClick={() => setMobileMenu(false)}>Projects</a>
    <a href="#about" onClick={() => setMobileMenu(false)}>About</a>
    <a href="#contact" onClick={() => setMobileMenu(false)}>Contact</a>
  </div>
)}
          <a href="#contact" className="hidden rounded-full border border-[#C8A96B]/60 px-5 py-2 text-xs uppercase tracking-[0.22em] text-white transition hover:bg-[#C8A96B]/95 hover:text-[#0D1B2A] md:inline-flex">
            Request Consultation
          </a>
        </div>
      </header>

      <section id="home" className="relative min-h-screen overflow-hidden bg-[#0D1B2A] pt-[136px] text-white">
        <div className="absolute inset-0 opacity-55">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400&auto=format&fit=crop"
            alt="Luxury South Florida outdoor living residence"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A] via-[#0D1B2A]/76 to-[#0D1B2A]/24" />
        </div>
        <div className="relative mx-auto grid min-h-[calc(100vh-8.5rem)] max-w-7xl items-center px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-[880px]">
            <SectionLabel>South Florida Luxury Exteriors</SectionLabel>
            <h1 className="font-serif text-5xl leading-[1.03] tracking-[-0.018em] md:text-7xl lg:text-[90px]">
              Luxury Outdoor Living & Exterior Transformations in South Florida
            </h1>
            <p className="mt-11 max-w-xl text-[19px] leading-[2.15rem] text-white/68 md:text-[20px]">
              VELLORI Build Group creates refined outdoor environments for luxury residential properties across Boca Raton, Palm Beach, Miami, and surrounding areas.
            </p>
            <p className="mt-6 text-[12px] uppercase tracking-[0.32em] text-[#C8A96B]/90">Building Excellence. Creating Legacies.</p>
            <div className="mt-16 flex flex-col gap-5 sm:flex-row">
              <Button>Request Consultation</Button>
              <Button variant="secondary">Start Your Project</Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.15 }} className="mt-12 block lg:mt-0">
            <div className="ml-auto max-w-sm border border-white/20 bg-white/8 p-8 backdrop-blur-md">
              <div className="text-xs uppercase tracking-[0.35em] text-[#C8A96B]">Refined Residential Work</div>
              <div className="mt-16 grid grid-cols-2 gap-8">
                <div><div className="font-serif text-4xl">01</div><p className="mt-2 text-sm text-white/65">Premium exterior environments</p></div>
                <div><div className="font-serif text-4xl">02</div><p className="mt-2 text-sm text-white/65">Design-oriented execution</p></div>
                <div><div className="font-serif text-4xl">03</div><p className="mt-2 text-sm text-white/65">Clean project experience</p></div>
                <div><div className="font-serif text-4xl">04</div><p className="mt-2 text-sm text-white/65">Luxury market positioning</p></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="px-6 py-36 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionLabel>Services</SectionLabel>
              <h2 className="font-serif text-[42px] leading-[1.06] tracking-[-0.01em] md:text-[66px]">Exterior environments designed for premium living.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {services.map((service, index) => (
                <motion.div key={service} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="group border border-[#0D1B2A]/10 bg-white/55 p-7 transition hover:-translate-y-[2px] hover:border-[#C8A96B]/40 hover:bg-white">
                  <div className="mb-10 text-sm text-[#C8A96B]">0{index + 1}</div>
                  <h3 className="font-serif text-2xl">{service}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#0D1B2A]/65">Premium planning, refined finishes, organized execution, and a client experience built around trust and detail.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-[#0D1B2A] px-6 py-36 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <SectionLabel>Projects</SectionLabel>
              <h2 className="font-serif text-4xl md:text-6xl">Before, after, and beyond ordinary.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/65">A curated portfolio structure designed to build trust, show transformation, and support future Google Ads and local SEO campaigns.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="group overflow-hidden bg-white/5">
                <div className="h-[340px] overflow-hidden">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-[1800ms] ease-out group-hover:scale-[1.025]" />
                </div>
                <div className="border border-white/10 border-t-0 p-7">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#C8A96B]">{project.tag}</p>
                  <h3 className="mt-4 font-serif text-2xl">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-36 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1600&auto=format&fit=crop" alt="Luxury exterior residence detail" className="h-[620px] w-full object-cover" />
            <div className="absolute bottom-8 right-8 bg-[#F3EFE6] p-8 shadow-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-[#C8A96B]">VELLORI Standard</p>
              <p className="mt-3 font-serif text-3xl">Refined. Organized. Built to last.</p>
            </div>
          </div>
          <div>
            <SectionLabel>About VELLORI</SectionLabel>
            <h2 className="font-serif text-[42px] leading-[1.06] tracking-[-0.01em] md:text-[66px]">A premium exterior transformation company for South Florida residences.</h2>
            <p className="mt-11 text-[18px] leading-[2.15rem] text-[#0D1B2A]/64">VELLORI Build Group was created to bring refined craftsmanship, premium presentation, and organized execution to luxury residential exterior projects. Our approach combines architectural aesthetics with practical construction knowledge to deliver outdoor spaces that feel intentional, elegant, and enduring.</p>
            <div className="mt-10 grid gap-5">
              {["Luxury-focused project presentation", "Clean communication from consultation to completion", "Exterior transformations built around lifestyle and property value"].map((item) => (
                <div key={item} className="flex items-center gap-4"><CheckCircle2 className="h-5 w-5 text-[#C8A96B]" /><span className="text-sm uppercase tracking-[0.15em]">{item}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px overflow-hidden bg-[#0D1B2A]/10 md:grid-cols-3">
            {[
              ["01", "Premium Perception", "A visual-first brand presence designed to build confidence before the first conversation."],
              ["02", "Local Authority", "Structured for Boca Raton, Palm Beach, Miami, and the broader South Florida market."],
              ["03", "Lead Ready", "Built for consultations, estimates, Google Business, SEO, and future paid traffic."],
            ].map(([num, title, text]) => (
              <div key={title} className="bg-white p-10">
                <div className="font-serif text-5xl text-[#C8A96B]">{num}</div>
                <h3 className="mt-8 font-serif text-3xl">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#0D1B2A]/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#0D1B2A] px-6 py-36 text-white lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Start Your Project</SectionLabel>
            <h2 className="font-serif text-[42px] leading-[1.06] tracking-[-0.01em] md:text-[66px]">Request a premium consultation.</h2>
            <p className="mt-10 max-w-lg text-[18px] leading-[2.05rem] text-white/68">Tell us about your exterior transformation. Our team will review your project details and contact you to discuss the next steps.</p>
            <div className="mt-10 space-y-5 text-sm text-white/70">
              <div className="flex items-center gap-4"><MapPin className="h-5 w-5 text-[#C8A96B]" /> Serving Boca Raton, Palm Beach, Miami & South Florida</div>
              <div className="flex items-center gap-4"><Mail className="h-5 w-5 text-[#C8A96B]" /> info@velloribuild.com</div>
              <div className="flex items-center gap-4"><Phone className="h-5 w-5 text-[#C8A96B]" /> Request by consultation form</div>
            </div>
          </div>
          <form className="bg-[#F3EFE6] p-11 text-[#0D1B2A] md:p-14">
            <div className="grid gap-5 md:grid-cols-2">
              <input className="border border-[#0D1B2A]/10 bg-white px-5 py-4 outline-none focus:border-[#C8A96B]" placeholder="Name" />
              <input className="border border-[#0D1B2A]/10 bg-white px-5 py-4 outline-none focus:border-[#C8A96B]" placeholder="Phone" />
              <input className="border border-[#0D1B2A]/10 bg-white px-5 py-4 outline-none focus:border-[#C8A96B] md:col-span-2" placeholder="Email" />
              <input className="border border-[#0D1B2A]/10 bg-white px-5 py-4 outline-none focus:border-[#C8A96B] md:col-span-2" placeholder="Project Location" />
              <select className="border border-[#0D1B2A]/10 bg-white px-5 py-4 outline-none focus:border-[#C8A96B] md:col-span-2">
                <option>Service Needed</option>
                {services.map((service) => <option key={service}>{service}</option>)}
              </select>
              <textarea className="min-h-36 border border-[#0D1B2A]/10 bg-white px-5 py-4 outline-none focus:border-[#C8A96B] md:col-span-2" placeholder="Tell us about your project" />
            </div>
            <button type="button" className="mt-7 inline-flex w-full items-center justify-center gap-3 bg-[#0D1B2A] px-7 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:bg-[#C8A96B] hover:text-[#0D1B2A]">
              Request Estimate <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#08111c] px-6 py-10 text-white lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="font-serif text-2xl tracking-[0.28em]">VELLORI</div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.35em] text-[#C8A96B]">Build Group</div>
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-white/55">Building Excellence. Creating Legacies.</p>
          <p className="text-xs text-white/45">© 2026 VELLORI Build Group. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail, CheckCircle2, Menu, Camera, CalendarDays } from "lucide-react";
import VelloriLogo from "./VelloriLogo.jsx";
import MobileLeadBar from "./MobileLeadBar.jsx";

const NAVY = "#0D1B2A";
const GOLD = "#C8A96B";
const SAND = "#F3EFE6";

const services = [
  { title: "Luxury Outdoor Living", href: "/outdoor-living-boca-raton" },
  { title: "Tile, Travertine & Stone Installation", href: "/travertine-boca-raton" },
  { title: "Pool Deck Transformations", href: "/travertine-boca-raton" },
  { title: "Exterior Painting", href: "/project-request" },
  { title: "Deck Construction", href: "/outdoor-living-boca-raton" },
  { title: "High-End Exterior Remodeling", href: "/project-request" },
  { title: "Residential Exterior Improvements", href: "/project-request" },
];

const projects = [
  {
    title: "Refined Outdoor Living",
    tag: "Project Inspiration • Travertine • Exterior Living",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=70&w=900&auto=format&fit=crop",
  },
  {
    title: "Architectural Exterior Finishes",
    tag: "Project Inspiration • Facade • Refined Finish",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=70&w=900&auto=format&fit=crop",
  },
  {
    title: "Modern Pool Environments",
    tag: "Project Inspiration • Pool Deck • Stone",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=70&w=900&auto=format&fit=crop",
  },
];

function Button({ children, href, variant = "primary" }) {
  const primary = variant === "primary";
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full px-7 py-[15px] text-[11px] tracking-[0.20em] uppercase transition-all duration-700 ease-out ${
        primary
          ? "bg-[#C8A96B] text-[#0D1B2A] hover:bg-[#d7ba82]"
          : "border border-[#C8A96B]/50 text-white hover:border-[#C8A96B] hover:bg-white/5"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </a>
  );
}

function SectionLabel({ children, onDark = false }) {
  return (
    <div className={`mb-5 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.35em] ${onDark ? "text-[#C8A96B]" : "text-[#74551F]"}`}>
      <span className={`h-px w-12 ${onDark ? "bg-[#C8A96B]/70" : "bg-[#74551F]/70"}`} />
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
          <a href="/" className="text-white" aria-label="VELLORI Build Group home"><VelloriLogo /></a>
          <nav className="hidden items-center gap-9 text-[11px] uppercase tracking-[0.16em] text-white/80 lg:flex">
            <a href="#home" className="transition-colors duration-300 hover:text-[#C8A96B]/85">Home</a>
            <a href="/services" className="hover:text-[#C8A96B]">Services</a>
            <a href="/service-areas" className="hover:text-[#C8A96B]">Service Areas</a>
            <a href="#projects" className="hover:text-[#C8A96B]">Projects</a>
            <a href="#about" className="hover:text-[#C8A96B]">About</a>
            <a href="#contact" className="hover:text-[#C8A96B]">Contact</a>
          </nav>
          {/* Mobile Button */}
<button
  type="button"
  onClick={() => setMobileMenu(!mobileMenu)}
  className="text-white lg:hidden"
  aria-label={mobileMenu ? "Close navigation menu" : "Open navigation menu"}
  aria-expanded={mobileMenu}
  aria-controls="mobile-navigation"
>
 <Menu size={22} />
</button>

{/* Mobile Menu */}
{mobileMenu && (
  <div id="mobile-navigation" className="absolute left-0 top-full w-full bg-[#0D1B2A] border-t border-white/10 flex flex-col items-center gap-6 py-8 text-sm uppercase tracking-[0.18em] text-white lg:hidden">
    <a href="#home" onClick={() => setMobileMenu(false)}>Home</a>
    <a href="/services" onClick={() => setMobileMenu(false)}>Services</a>
    <a href="/service-areas" onClick={() => setMobileMenu(false)}>Service Areas</a>
    <a href="#projects" onClick={() => setMobileMenu(false)}>Projects</a>
    <a href="#about" onClick={() => setMobileMenu(false)}>About</a>
    <a href="#contact" onClick={() => setMobileMenu(false)}>Contact</a>
  </div>
)}
          <a href="/project-request" className="hidden rounded-full border border-[#C8A96B]/60 px-5 py-2 text-xs uppercase tracking-[0.22em] text-white transition hover:bg-[#C8A96B]/95 hover:text-[#0D1B2A] md:inline-flex">
            Request Consultation
          </a>
        </div>
      </header>

      <section id="home" className="relative min-h-screen overflow-hidden bg-[#0D1B2A] pt-[136px] text-white">
        <div className="absolute inset-0 opacity-55">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=70&w=1600&auto=format&fit=crop"
            srcSet="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=70&w=640&auto=format&fit=crop 640w, https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=70&w=960&auto=format&fit=crop 960w, https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=70&w=1280&auto=format&fit=crop 1280w, https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=70&w=1600&auto=format&fit=crop 1600w"
            sizes="100vw"
            alt="Luxury South Florida outdoor living residence"
            className="h-full w-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A] via-[#0D1B2A]/76 to-[#0D1B2A]/24" />
        </div>
        <div className="relative mx-auto grid min-h-[calc(100vh-8.5rem)] max-w-7xl items-center px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-[880px]">
            <SectionLabel onDark>South Florida Luxury Exteriors</SectionLabel>
            <h1 className="font-serif text-5xl leading-[1.03] tracking-[-0.018em] md:text-7xl lg:text-[90px]">
              Luxury Outdoor Living & Exterior Transformations in South Florida
            </h1>
            <p className="mt-11 max-w-xl text-[19px] leading-[2.15rem] text-white/68 md:text-[20px]">
              VELLORI Build Group creates refined outdoor environments for luxury residential properties across Boca Raton, Palm Beach, Miami, and surrounding areas.
            </p>
            <p className="mt-6 text-[12px] uppercase tracking-[0.32em] text-[#C8A96B]/90">Building Excellence. Creating Legacies.</p>
            <div className="mt-16 flex flex-col gap-5 sm:flex-row">
              <Button href="/project-request">Request Consultation</Button>
              <Button href="/project-request" variant="secondary">Start Your Project</Button>
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
                <motion.a href={service.href} key={service.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="group block border border-[#0D1B2A]/10 bg-white/55 p-7 transition hover:-translate-y-[2px] hover:border-[#C8A96B]/40 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#C8A96B]">
                  <div className="mb-10 text-sm text-[#74551F]">0{index + 1}</div>
                  <h3 className="font-serif text-2xl">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#0D1B2A]/65">Premium planning, refined finishes, organized execution, and a client experience built around trust and detail.</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#8A6A32]">View service <ArrowRight className="h-4 w-4" /></span>
                </motion.a>
              ))}
            </div>
          </div>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-[#0D1B2A]/10 pt-8 text-sm">
  <a
    href="/stucco-boca-raton"
    className="transition hover:text-[#C8A96B]"
  >
    Stucco & Exterior Finishes
  </a>

  <a
    href="/travertine-boca-raton"
    className="transition hover:text-[#C8A96B]"
  >
    Travertine & Tile Installation
  </a>

  <a
    href="/outdoor-living-boca-raton"
    className="transition hover:text-[#C8A96B]"
  >
    Outdoor Living
  </a>

  <a
    href="/concrete-boca-raton"
    className="transition hover:text-[#C8A96B]"
  >
    Concrete Project Support
  </a>
</div>
        </div>
      </section>

      <section id="projects" className="bg-[#0D1B2A] px-6 py-36 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <SectionLabel onDark>Project Vision</SectionLabel>
              <h2 className="font-serif text-4xl md:text-6xl">Exterior possibilities shaped around your property.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/65">Representative imagery illustrating the types of refined exterior environments VELLORI can help execute. Completed VELLORI projects will be added as photography becomes available.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="group overflow-hidden bg-white/5">
                <div className="h-[340px] overflow-hidden">
                  <img
                    src={project.image}
                    srcSet={`${project.image.replace("w=900", "w=480")} 480w, ${project.image.replace("w=900", "w=720")} 720w, ${project.image} 900w`}
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-[1800ms] ease-out group-hover:scale-[1.025]"
                    loading="lazy"
                    decoding="async"
                  />
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
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=70&w=1200&auto=format&fit=crop"
              srcSet="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=70&w=480&auto=format&fit=crop 480w, https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=70&w=768&auto=format&fit=crop 768w, https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=70&w=1200&auto=format&fit=crop 1200w"
              sizes="(min-width: 1024px) 50vw, 100vw"
              alt="Luxury exterior residence detail"
              className="h-[620px] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute bottom-8 right-8 bg-[#F3EFE6] p-8 shadow-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-[#74551F]">VELLORI Standard</p>
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
                <div className="font-serif text-5xl text-[#74551F]">{num}</div>
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
            <SectionLabel onDark>Start Your Project</SectionLabel>
            <h2 className="font-serif text-[42px] leading-[1.06] tracking-[-0.01em] md:text-[66px]">Request a premium consultation.</h2>
            <p className="mt-10 max-w-lg text-[18px] leading-[2.05rem] text-white/68">Tell us about your exterior transformation. Our team will review your project details and contact you to discuss the next steps.</p>
            <div className="mt-10 space-y-5 text-sm text-white/70">
              <a href="/service-areas" className="flex items-center gap-4 transition hover:text-[#C8A96B]"><MapPin className="h-5 w-5 text-[#C8A96B]" /> Serving Boca Raton, Palm Beach, Miami & South Florida</a>
              <div className="flex items-center gap-4"><Mail className="h-5 w-5 text-[#C8A96B]" /> info@velloribuild.com</div>
              <div className="flex items-center gap-4"><Phone className="h-5 w-5 text-[#C8A96B]" /> Request by consultation form</div>
            </div>
          </div>
          <div className="bg-[#F3EFE6] p-11 text-[#0D1B2A] md:p-14">
            <p className="text-xs uppercase tracking-[0.28em] text-[#684B19]">Choose the easiest next step</p>
            <div className="mt-7 grid gap-4">
              {[
                [Camera, "Send project photos", "Share the existing condition for an initial review."],
                [CalendarDays, "Request a site visit", "Tell us your preferred date and time of day."],
                [Phone, "Request a callback", "Choose when you would like our team to contact you."],
              ].map(([Icon, title, text]) => (
                <a key={title} href="/project-request" className="group flex items-start gap-4 border border-[#0D1B2A]/10 bg-white p-5 transition hover:border-[#C8A96B] focus:outline-none focus:ring-2 focus:ring-[#C8A96B]">
                  <Icon className="mt-1 h-5 w-5 flex-none text-[#C8A96B]" />
                  <span className="flex-1"><strong className="font-medium">{title}</strong><span className="mt-1 block text-sm leading-6 text-[#0D1B2A]/60">{text}</span></span>
                  <ArrowRight className="mt-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              ))}
            </div>
            <a href="/project-request" className="mt-7 inline-flex w-full items-center justify-center gap-3 bg-[#0D1B2A] px-7 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:bg-[#C8A96B] hover:text-[#0D1B2A]">
              Open Secure Project Form <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#08111c] px-6 py-10 text-white lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <VelloriLogo compact />
          <p className="text-xs uppercase tracking-[0.25em] text-white/55">Building Excellence. Creating Legacies.</p>
          <p className="text-xs text-white/45">© 2026 VELLORI Build Group. All rights reserved.</p>
        </div>
      </footer>
      <MobileLeadBar />
    </main>
  );
}

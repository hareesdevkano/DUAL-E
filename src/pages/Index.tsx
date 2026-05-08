import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Network, Code2, ShieldCheck, Cpu, Cloud, GraduationCap, Plus, Palette, Globe, Megaphone, Camera, MessageCircle, Mail } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-network.jpg";
import svcNetwork from "@/assets/svc-network.jpg";
import svcSoftware from "@/assets/svc-software.jpg";
import svcSecurity from "@/assets/svc-security.jpg";
import projEnvironment from "@/assets/proj-environment.jpg";
import projSmartschool from "@/assets/proj-smartschool.jpg";
import { Nav, Footer, WhatsAppFab } from "@/components/SiteChrome";

const WHATSAPP_NUMBER = "2349073733790";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Dual Intelligence, I'd like to discuss a project.")}`;
const CONTACT_EMAIL = "hareesabdulkadir@gmail.com";

const _NavOld = () => (
  <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/40 border-b border-border/50">
    <nav className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
      <a href="#" className="flex items-center gap-2 font-display font-bold text-sm tracking-widest">
        <span className="w-2 h-2 rounded-full bg-primary glow-primary animate-pulse" />
        DUAL <span className="text-primary">INTELLIGENCE</span>
      </a>
      <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] uppercase text-muted-foreground">
        <a href="#services" className="hover:text-foreground transition-colors">Services</a>
        <a href="#about" className="hover:text-foreground transition-colors">About</a>
        <a href="#work" className="hover:text-foreground transition-colors">Work</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </div>
      <a href="#contact" className="group inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase border border-foreground/20 px-4 py-2 hover:bg-foreground hover:text-background transition-colors">
        Start Project <ArrowUpRight className="w-3 h-3 group-hover:rotate-45 transition-transform" />
      </a>
    </nav>
  </header>
);

const Hero = () => (
  <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pt-16">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Server infrastructure" className="w-full h-full object-cover opacity-40" width={1920} height={1088} />
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      <div className="absolute inset-0 bg-grid opacity-20" />
    </div>

    <div className="relative max-w-[1400px] mx-auto w-full px-6 lg:px-12 pb-16 lg:pb-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        className="text-xs tracking-[0.4em] uppercase text-primary mb-8 flex items-center gap-3"
      >
        <span className="w-8 h-px bg-primary" /> ICT Services • Kano, Nigeria
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }}
        className="font-display font-bold text-[13vw] lg:text-[9.2vw] leading-[0.85] tracking-tighter uppercase"
      >
        ENGINEERING <span className="text-stroke">AFRICA'S</span><br />
        <span className="gradient-text">DIGITAL</span> BACKBONE.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
        className="mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
      >
        <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
          A full-spectrum ICT, software and creative firm headquartered in Kano — delivering enterprise-grade infrastructure, secure platforms and brand systems for governments, banks and growth-stage businesses across Nigeria and beyond.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-secondary transition-colors">
            Start a Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="inline-flex items-center gap-3 border border-foreground/20 px-8 py-4 text-sm tracking-[0.2em] uppercase hover:border-foreground transition-colors">
            Our Services
          </a>
        </div>
      </motion.div>
    </div>

    <div className="absolute bottom-6 right-6 text-[10px] tracking-[0.3em] uppercase text-muted-foreground rotate-90 origin-bottom-right hidden lg:block">
      Scroll to explore →
    </div>
  </section>
);

const services = [
  { icon: Network, title: "Network Infrastructure", desc: "Enterprise LAN/WAN, fiber backbones, VSAT, structured cabling and Wi-Fi rollouts engineered for uptime in any environment.", img: svcNetwork, tag: "01" },
  { icon: Code2, title: "Software Development", desc: "Custom web platforms, mobile apps and back-office systems that automate the messy parts of your business.", img: svcSoftware, tag: "02" },
  { icon: ShieldCheck, title: "Cybersecurity", desc: "Vulnerability assessments, endpoint protection, firewall hardening and incident response keeping your data sovereign.", img: svcSecurity, tag: "03" },
  { icon: Globe, title: "Project Sites & Web", desc: "High-converting marketing sites, project microsites and e-commerce builds shipped fast — engineered for SEO and speed.", tag: "04" },
  { icon: Palette, title: "Branding & Identity", desc: "Logo systems, brand guidelines, visual identity and naming for organizations that want to be remembered.", tag: "05" },
  { icon: Megaphone, title: "Digital Marketing", desc: "Social campaigns, SEO, content strategy and paid media that turn attention into measurable revenue.", tag: "06" },
  { icon: Camera, title: "Creative & Media Production", desc: "Photography, videography, motion graphics and product shoots for brands that need to look the part.", tag: "07" },
  { icon: Cpu, title: "Hardware & Procurement", desc: "Servers, workstations, networking gear and CCTV systems — sourced, deployed and maintained at scale.", tag: "08" },
  { icon: Cloud, title: "Cloud & Managed IT", desc: "Migration, hosting, backups and 24/7 managed services so your team can focus on what matters.", tag: "09" },
  { icon: GraduationCap, title: "ICT Training", desc: "Hands-on programs in cybersecurity, networking, software and digital skills for individuals and teams.", tag: "10" },
];

const Services = () => (
  <section id="services" className="relative py-24 lg:py-40">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">— What we do</p>
          <h2 className="font-display font-bold text-5xl lg:text-7xl leading-[0.9] uppercase tracking-tighter">
            Full-stack <br /><span className="gradient-text">ICT solutions.</span>
          </h2>
        </div>
        <p className="text-muted-foreground max-w-sm">From the first cable pulled to the last line of code shipped — one partner, end to end.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="group bg-background p-8 lg:p-10 hover:bg-card transition-colors relative overflow-hidden min-h-[340px] flex flex-col"
          >
            {s.img && (
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
                <img src={s.img} alt="" loading="lazy" className="w-full h-full object-cover" />
              </div>
            )}
            <div className="relative flex items-start justify-between mb-12">
              <s.icon className="w-8 h-8 text-primary" strokeWidth={1.2} />
              <span className="font-display text-xs tracking-widest text-muted-foreground">/{s.tag}</span>
            </div>
            <div className="relative mt-auto">
              <h3 className="font-display font-bold text-2xl lg:text-3xl uppercase mb-4 tracking-tight">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="relative py-24 lg:py-40 border-t border-border">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5">
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">— About</p>
        <h2 className="font-display font-bold text-6xl lg:text-8xl leading-[0.85] uppercase tracking-tighter">
          BUILT IN<br />
          <span className="text-stroke">KANO.</span><br />
          <span className="gradient-text">SCALED</span><br />
          NATIONWIDE.
        </h2>
      </div>
      <div className="lg:col-span-7 lg:pt-8">
        <p className="text-xl lg:text-2xl leading-relaxed text-foreground/90 mb-8">
          Dual Intelligence is an indigenous ICT and creative firm headquartered in Kano — engineering the digital infrastructure, project sites and brand systems that power government agencies, financial institutions and ambitious enterprises across Nigeria.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-12">
          Our dual intelligence — deep technical mastery paired with sharp creative and commercial insight — means every solution we ship is engineered to perform and designed to be remembered. From server racks to brand books, project microsites to nationwide rollouts, we deliver end to end.
        </p>
        <div className="grid grid-cols-2 gap-8 border-t border-border pt-12">
          {[
            { n: "120+", l: "Projects Delivered" },
            { n: "98%", l: "Uptime Maintained" },
            { n: "10+", l: "Years In Field" },
            { n: "24/7", l: "Support Coverage" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-5xl lg:text-6xl font-bold gradient-text mb-2">{s.n}</div>
              <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Marquee = () => {
  const items = ["Network Engineering", "•", "Cybersecurity", "•", "Custom Software", "•", "Branding", "•", "Project Sites", "•", "Digital Marketing", "•", "Cloud Migration", "•", "ICT Training", "•"];
  return (
    <section className="border-y border-border py-10 overflow-hidden">
      <div className="flex gap-12 marquee whitespace-nowrap font-display font-bold text-5xl lg:text-7xl uppercase tracking-tighter">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span key={i} className={i % 2 === 1 ? "text-primary" : "text-stroke"}>{t}</span>
        ))}
      </div>
    </section>
  );
};

const cases = [
  { tag: "Network Infrastructure", title: "Campus-Wide Fiber Rollout", outcome: "30km fiber, zero downtime cutover", color: "from-primary/30 to-transparent" },
  { tag: "Software", title: "Revenue Collection Platform", outcome: "+220% collection efficiency", color: "from-secondary/30 to-transparent" },
  { tag: "Cybersecurity", title: "SOC Implementation", outcome: "MTTR reduced by 65%", color: "from-primary/30 to-transparent" },
  { tag: "Branding", title: "Fintech Identity System", outcome: "Full rebrand in 6 weeks", color: "from-secondary/30 to-transparent" },
  { tag: "Project Site", title: "Real Estate Launch Microsite", outcome: "1.2k qualified leads in 30 days", color: "from-primary/30 to-transparent" },
  { tag: "Digital Marketing", title: "EdTech Growth Campaign", outcome: "4.3x ROAS across paid channels", color: "from-secondary/30 to-transparent" },
];

const Work = () => (
  <section id="work" className="py-24 lg:py-40">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
      <div className="mb-16">
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">— Selected work</p>
        <h2 className="font-display font-bold text-5xl lg:text-7xl leading-[0.9] uppercase tracking-tighter">Case Studies</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <motion.a
            href="#contact" key={c.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group block border border-border bg-card hover:border-primary/50 transition-colors overflow-hidden"
          >
            <div className={`aspect-[4/3] bg-gradient-to-br ${c.color} bg-grid relative flex items-end p-6`}>
              <span className="text-xs tracking-[0.2em] uppercase text-foreground/70">{c.tag}</span>
            </div>
            <div className="p-6 lg:p-8">
              <h3 className="font-display font-bold text-xl lg:text-2xl uppercase mb-3 tracking-tight">{c.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{c.outcome}</p>
              <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-primary group-hover:gap-4 transition-all">
                View Case <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

const faqs = [
  { q: "What ICT services do you offer?", a: "Network infrastructure, custom software development, cybersecurity, hardware procurement, cloud & managed IT, and professional ICT training programs." },
  { q: "Do you serve clients outside Kano?", a: "Yes. We're headquartered in Kano but deliver projects nationwide across Nigeria, with field engineers ready to deploy wherever you need them." },
  { q: "How long does a typical engagement take?", a: "From two weeks for focused deployments to multi-month programs for enterprise transformations. We scope every project transparently before kickoff." },
  { q: "Do you work with government and SMEs?", a: "Both. We support federal & state agencies, banks, NGOs, and growing businesses — tailoring delivery models to budget and scale." },
  { q: "Can you train our internal team?", a: "Absolutely. Our training arm runs hands-on courses in cybersecurity, networking, and software, on-site or at our Kano facility." },
  { q: "Do you handle branding and project websites?", a: "Yes. We design full brand identities — logos, guidelines, naming — and ship project sites, microsites and e-commerce builds engineered for SEO, speed and conversion." },
  { q: "Can you run our digital marketing too?", a: "We do. Social campaigns, paid media, SEO and content strategy — measured against real revenue, not vanity metrics." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 lg:py-40 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">— FAQ</p>
          <h2 className="font-display font-bold text-5xl lg:text-7xl leading-[0.9] uppercase tracking-tighter">
            Frequently<br /><span className="gradient-text">asked.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-sm">Still curious? Reach out — we answer every inquiry within one business day.</p>
        </div>
        <div className="lg:col-span-7">
          {faqs.map((f, i) => (
            <button
              key={f.q}
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left border-b border-border py-6 group"
            >
              <div className="flex items-center justify-between gap-6">
                <span className="font-display font-medium text-lg lg:text-2xl uppercase tracking-tight group-hover:text-primary transition-colors">{f.q}</span>
                <Plus className={`w-5 h-5 shrink-0 transition-transform ${open === i ? 'rotate-45 text-primary' : ''}`} />
              </div>
              <div className={`grid transition-all duration-500 ${open === i ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                <p className="overflow-hidden text-muted-foreground leading-relaxed pr-12">{f.a}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section id="contact" className="relative py-24 lg:py-40 overflow-hidden">
    <div className="absolute inset-0 bg-grid opacity-10" />
    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, hsl(188 95% 55% / 0.15), transparent 70%)' }} />
    <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
      <p className="text-xs tracking-[0.4em] uppercase text-primary mb-8">— Let's build</p>
      <h2 className="font-display font-bold text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] uppercase tracking-tighter mb-10">
        READY TO <br /><span className="gradient-text">ENGINEER</span><br /> YOUR EDGE?
      </h2>
      <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
        Tell us what you're building — a network, a product, a brand, a campaign. We'll bring the engineering, the design and the strategy to ship it.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-secondary transition-colors">
          <MessageCircle className="w-4 h-4" /> Chat on WhatsApp <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-3 border border-foreground/20 px-8 py-4 text-sm tracking-[0.2em] uppercase hover:border-foreground transition-colors">
          <Mail className="w-4 h-4" /> Email Us
        </a>
        <a href="tel:+2349073733790" className="inline-flex items-center gap-3 border border-foreground/20 px-8 py-4 text-sm tracking-[0.2em] uppercase hover:border-foreground transition-colors">
          Call +234 907 373 3790
        </a>
      </div>
    </div>
  </section>
);

const _FooterOld = () => (
  <footer className="border-t border-border py-12">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid md:grid-cols-4 gap-8 text-sm">
      <div className="md:col-span-2">
        <div className="font-display font-bold tracking-widest mb-4">DUAL <span className="text-primary">INTELLIGENCE</span></div>
        <p className="text-muted-foreground max-w-xs">ICT, Software, Cybersecurity, Branding, Project Sites & Digital Marketing. Headquartered in Kano, Nigeria.</p>
      </div>
      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Visit</p>
        <p className="text-foreground/80">Kano, Nigeria</p>
      </div>
      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Contact</p>
        <p className="text-foreground/80">hello@dualintelligence.ng</p>
      </div>
    </div>
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-12 flex justify-between text-xs text-muted-foreground tracking-[0.2em] uppercase">
      <span>© {new Date().getFullYear()} Dual Intelligence ICT</span>
      <span>Made in Kano</span>
    </div>
  </footer>
);

const liveProjects = [
  {
    name: "Kano State Ministry of Environment",
    url: "https://environment.kn.gov.ng",
    tag: "Government Portal",
    desc: "Official digital home for the Kano State Ministry of Environment — services, news and citizen engagement.",
    accent: "from-primary/40 via-primary/10 to-transparent",
    img: projEnvironment,
  },
  {
    name: "SmartSchool — Education Platform",
    url: "https://smartschooledu.org",
    tag: "EdTech SaaS",
    desc: "Premium school management platform serving 460+ schools and 46K+ students across Nigeria. Powered by Dual Intelligence.",
    accent: "from-secondary/40 via-secondary/10 to-transparent",
    img: projSmartschool,
  },
];

const TrustRibbon = () => {
  const items = [
    { k: "ISO 27001", v: "Aligned" },
    { k: "ITIL v4", v: "Service Mgmt" },
    { k: "PMI / PMP", v: "Led Delivery" },
    { k: "GDPR / NDPR", v: "Compliant" },
    { k: "99.9%", v: "Platform Uptime" },
    { k: "24 / 7", v: "NOC + SOC" },
  ];
  return (
    <section className="border-y border-border bg-background/40 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {items.map((i) => (
          <div key={i.k} className="flex flex-col">
            <span className="font-display font-bold text-lg lg:text-xl tracking-tight text-foreground">{i.k}</span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-1">{i.v}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const BrowserFrame = ({ url, children }: { url: string; children: React.ReactNode }) => (
  <div className="relative bg-[hsl(220_25%_10%)] border-b border-border">
    <div className="flex items-center gap-3 px-4 h-9 border-b border-border">
      <div className="flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="flex-1 mx-4 h-5 rounded-sm bg-background/60 border border-border/70 flex items-center px-3">
        <span className="text-[10px] tracking-wider text-muted-foreground truncate">🔒 {url}</span>
      </div>
    </div>
    {children}
  </div>
);

const LiveProjects = () => (
  <section className="relative py-24 lg:py-32 border-t border-border">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
      <div className="flex items-end justify-between gap-8 mb-14 flex-wrap">
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">— Live in production</p>
          <h2 className="font-display font-bold text-5xl lg:text-7xl uppercase tracking-tighter leading-[0.9]">
            Shipped &amp; <span className="gradient-text">scaling.</span>
          </h2>
        </div>
        <Link to="/projects" className="text-xs tracking-[0.2em] uppercase text-primary inline-flex items-center gap-2 hover:gap-4 transition-all">
          All Projects <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {liveProjects.map((p) => {
          const host = p.url.replace('https://','').replace('http://','');
          return (
            <a key={p.url} href={p.url} target="_blank" rel="noreferrer"
              className="group relative border border-border bg-card hover:border-primary/60 transition-all overflow-hidden rounded-md shadow-2xl shadow-black/40 hover:-translate-y-1 duration-500">
              <BrowserFrame url={host}>
                <div className="aspect-[16/10] overflow-hidden bg-background">
                  <img src={p.img} alt={`${p.name} website preview`} loading="lazy" width={1280} height={800}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700" />
                </div>
              </BrowserFrame>
              <div className="p-8 flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-primary mb-2">{p.tag}</p>
                  <h3 className="font-display font-bold text-2xl uppercase tracking-tight mb-3">{p.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <p className="text-xs tracking-[0.2em] uppercase text-foreground/60 mt-4">{host}</p>
                </div>
                <ArrowUpRight className="w-6 h-6 text-primary group-hover:rotate-45 transition-transform shrink-0" />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  </section>
);


const partners = [
  "Kano State Government",
  "Ministry of Environment, Kano",
  "SmartSchool EDU",
  "Kano State Ministry of Education",
  "REMASAB",
  "KEPA",
  "Bank of Industry",
  "Galaxy Backbone",
  "NITDA",
  "Dangote Group",
  "Arewa Chamber",
  "Bayero University Kano",
];

const Partners = () => (
  <section className="relative py-24 lg:py-32 border-t border-border overflow-hidden">
    <div className="absolute inset-0 bg-grid opacity-[0.07]" />
    <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">— Trusted by</p>
        <h2 className="font-display font-bold text-5xl lg:text-7xl uppercase tracking-tighter leading-[0.9]">
          Partners &amp; <span className="gradient-text">clients.</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border border border-border">
        {partners.map((p) => (
          <div key={p} className="bg-background/60 backdrop-blur-sm p-8 min-h-[120px] flex items-center justify-center text-center hover:bg-card transition-colors">
            <span className="font-display text-sm lg:text-base uppercase tracking-wider text-foreground/80">{p}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Index = () => (
  <main className="relative bg-ambient text-foreground overflow-hidden">
    <div className="orb animate-drift" style={{ width: 520, height: 520, background: 'hsl(188 95% 55%)', top: '15%', left: '-12%' }} />
    <div className="orb animate-drift" style={{ width: 460, height: 460, background: 'hsl(30 95% 58%)', top: '55%', right: '-10%', animationDelay: '-6s' }} />
    <div className="orb animate-drift" style={{ width: 600, height: 600, background: 'hsl(260 80% 60%)', bottom: '5%', left: '30%', animationDelay: '-3s', opacity: 0.3 }} />
    <div className="absolute inset-0 bg-noise opacity-[0.35] pointer-events-none mix-blend-overlay" />
    <div className="relative">
      <Nav />
      <Hero />
      <TrustRibbon />
      <Services />
      <Marquee />
      <LiveProjects />
      <About />
      <Work />
      <Partners />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppFab />

    </div>
  </main>
);

export default Index;

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Nav, Footer, PageHeader } from "@/components/SiteChrome";

const projects = [
  {
    name: "Kano State Ministry of Environment",
    url: "https://environment.kn.gov.ng",
    tag: "Government Portal",
    year: "2024",
    role: "Design, Build, Hosting",
    desc: "The official digital home of the Kano State Ministry of Environment — publishing services, news, policies and citizen engagement channels for one of Nigeria's most populous states.",
    accent: "from-primary/40 via-primary/10 to-transparent",
  },
  {
    name: "SmartSchool — Education Platform",
    url: "https://smartschooledu.org",
    tag: "EdTech SaaS",
    year: "2020 — Present",
    role: "Product, Engineering, Brand",
    desc: "A premium school management platform crafted for Islamiyya, Tahfiz, K-12 and tertiary institutions across Nigeria. 460+ schools, 46K+ students, 19 states, 97.9% uptime — built and operated by Dual Intelligence.",
    accent: "from-secondary/40 via-secondary/10 to-transparent",
  },
  {
    name: "State Revenue Collection Portal",
    url: "#",
    tag: "GovTech",
    year: "2024",
    role: "Software, Integration",
    desc: "USSD, web and POS-enabled revenue platform for a state government agency — replacing manual receipt books with real-time treasury reconciliation.",
    accent: "from-primary/30 via-primary/5 to-transparent",
  },
  {
    name: "Tertiary Campus Fiber Backbone",
    url: "#",
    tag: "Network Infrastructure",
    year: "2024",
    role: "Design, Deployment",
    desc: "30km of fiber connecting 22 buildings, 3 data closets and 1,400+ access points — delivered as a zero-downtime cutover to a live academic institution.",
    accent: "from-secondary/30 via-secondary/5 to-transparent",
  },
  {
    name: "Tier-2 Bank SOC",
    url: "#",
    tag: "Cybersecurity",
    year: "2023",
    role: "SOC, SIEM, EDR",
    desc: "24/7 Security Operations Centre with SIEM, EDR and incident playbooks — slashing mean-time-to-respond by 65% and passing CBN audit on first attempt.",
    accent: "from-primary/30 via-primary/5 to-transparent",
  },
  {
    name: "Real Estate Launch Microsite",
    url: "#",
    tag: "Project Site",
    year: "2025",
    role: "Brand, Web, Marketing",
    desc: "Conversion-engineered launch microsite with 3D walkthroughs, financing calculator and CRM integration. 1.2k qualified leads in 30 days; phase one sold out in 45.",
    accent: "from-secondary/30 via-secondary/5 to-transparent",
  },
];

const Projects = () => (
  <main className="relative bg-ambient text-foreground overflow-hidden min-h-screen">
    <div className="orb animate-drift" style={{ width: 520, height: 520, background: 'hsl(188 95% 55%)', top: '10%', left: '-10%' }} />
    <div className="orb animate-drift" style={{ width: 460, height: 460, background: 'hsl(30 95% 58%)', top: '60%', right: '-8%', animationDelay: '-6s' }} />
    <div className="absolute inset-0 bg-noise opacity-[0.35] pointer-events-none mix-blend-overlay" />
    <div className="relative">
      <Nav />
      <PageHeader
        eyebrow="Projects"
        title="THINGS WE'VE"
        highlight="SHIPPED."
        intro="Live products, government portals, infrastructure and brand systems we've designed, built and now operate. A working portfolio — not a slideshow."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => {
            const isLive = p.url.startsWith("http");
            const Tag: "a" | "div" = isLive ? "a" : "div";
            return (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              >
                <Tag
                  {...(isLive ? { href: p.url, target: "_blank", rel: "noreferrer" } : {})}
                  className="group block border border-border bg-card/70 backdrop-blur-sm hover:border-primary/60 transition-colors overflow-hidden"
                >
                  <div className={`aspect-[16/9] bg-gradient-to-br ${p.accent} bg-grid relative flex items-end justify-between p-6`}>
                    <span className="text-xs tracking-[0.2em] uppercase text-foreground/80">{p.tag}</span>
                    <span className="font-display text-xs tracking-widest text-muted-foreground">{p.year}</span>
                  </div>
                  <div className="p-8 lg:p-10">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h2 className="font-display font-bold text-2xl lg:text-3xl uppercase tracking-tight">{p.name}</h2>
                      {isLive && <ArrowUpRight className="w-5 h-5 text-primary group-hover:rotate-45 transition-transform shrink-0 mt-1" />}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                    <div className="flex items-center justify-between border-t border-border pt-5 text-xs tracking-[0.2em] uppercase">
                      <span className="text-muted-foreground">{p.role}</span>
                      {isLive && <span className="text-primary">{p.url.replace('https://','')}</span>}
                    </div>
                  </div>
                </Tag>
              </motion.article>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  </main>
);

export default Projects;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, Sparkles, Workflow, Users } from "lucide-react";
import { Nav, Footer, PageHeader } from "@/components/SiteChrome";
import heroImg from "@/assets/hero-network.jpg";

const values = [
  { icon: Compass, title: "Engineered for context", body: "We build for Northern Nigeria first — power realities, connectivity, language, regulation. What we ship works where you operate." },
  { icon: Sparkles, title: "Dual intelligence", body: "Technical mastery paired with sharp creative and commercial insight. Engineered to perform, designed to be remembered." },
  { icon: Workflow, title: "End to end", body: "One partner from cabling to brand book, from server rack to growth campaign — fewer vendors, tighter accountability." },
  { icon: Users, title: "Indigenous, professional", body: "Kano-grown talent operating to international standards. We hire local, train deep and ship global-grade work." },
];

const timeline = [
  { year: "2014", title: "Founded in Kano", body: "Started as a two-person networking outfit serving small businesses across Sabon Gari." },
  { year: "2017", title: "Software practice launched", body: "Added custom software development — first revenue platform deployed for a state agency." },
  { year: "2020", title: "Cybersecurity & SOC", body: "Built our first 24/7 security operations capability for financial services clients." },
  { year: "2023", title: "Creative & brand studio", body: "Opened the brand, marketing and media production studio under the Dual Intelligence umbrella." },
  { year: "2025", title: "Nationwide delivery", body: "Active engagements across 14 states, with field teams permanently stationed in Kano, Abuja and Lagos." },
];

const team = [
  { role: "Engineering", count: "18+", note: "Network, cloud & software engineers" },
  { role: "Security", count: "06", note: "SOC analysts & penetration testers" },
  { role: "Creative", count: "09", note: "Designers, writers & producers" },
  { role: "Operations", count: "07", note: "PMs, account leads & support" },
];

const About = () => (
  <main className="bg-background text-foreground">
    <Nav />
    <PageHeader
      eyebrow="About"
      title="BUILT IN KANO."
      highlight="SCALED NATIONWIDE."
      intro="Dual Intelligence ICT Services is an indigenous engineering and creative firm headquartered in Kano. We build the digital infrastructure, project sites and brand systems that power government agencies, financial institutions and ambitious enterprises across Nigeria."
    />

    <section className="relative py-24 lg:py-32 border-b border-border overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">— Our story</p>
          <h2 className="font-display font-bold text-4xl lg:text-6xl uppercase tracking-tighter mb-8 leading-[0.9]">
            A decade of <span className="gradient-text">engineering</span> in the North.
          </h2>
          <div className="space-y-5 text-foreground/85 leading-relaxed">
            <p>We started in 2014 with a single belief: world-class technical work could — and should — be built in Kano. Eleven years later we deliver across the country, but our roots and our standards never moved.</p>
            <p>Today the firm operates four practices under one roof — Engineering, Security, Creative and Operations — so our clients get a single partner who can pull cable, write code, harden a network, design an identity and run the launch campaign.</p>
          </div>
        </div>
        <div className="lg:col-span-6 relative">
          <div className="aspect-[4/5] overflow-hidden border border-border">
            <img src={heroImg} alt="Dual Intelligence operations" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-background border border-border p-6 max-w-[240px]">
            <div className="font-display text-4xl gradient-text font-bold">10+</div>
            <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">Years engineering across Nigeria</div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 lg:py-32 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">— What we believe</p>
        <h2 className="font-display font-bold text-4xl lg:text-6xl uppercase tracking-tighter mb-16 leading-[0.9]">Our principles.</h2>
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-background p-10"
            >
              <v.icon className="w-8 h-8 text-primary mb-6" strokeWidth={1.2} />
              <h3 className="font-display font-bold text-2xl uppercase tracking-tight mb-3">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 lg:py-32 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">— Timeline</p>
        <h2 className="font-display font-bold text-4xl lg:text-6xl uppercase tracking-tighter mb-16 leading-[0.9]">
          Eleven years, <span className="text-stroke">in motion.</span>
        </h2>
        <div className="space-y-px bg-border">
          {timeline.map((t) => (
            <div key={t.year} className="bg-background grid md:grid-cols-12 gap-6 py-8 px-2 md:px-6">
              <div className="md:col-span-2 font-display text-3xl font-bold text-primary">{t.year}</div>
              <div className="md:col-span-3 font-display text-xl uppercase tracking-tight">{t.title}</div>
              <div className="md:col-span-7 text-muted-foreground leading-relaxed">{t.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">— The team</p>
        <h2 className="font-display font-bold text-4xl lg:text-6xl uppercase tracking-tighter mb-16 leading-[0.9]">
          40+ specialists. <span className="gradient-text">One studio.</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {team.map((t) => (
            <div key={t.role} className="bg-background p-8">
              <div className="font-display text-5xl font-bold gradient-text mb-3">{t.count}</div>
              <div className="font-display text-lg uppercase tracking-tight mb-1">{t.role}</div>
              <div className="text-sm text-muted-foreground">{t.note}</div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to="/#contact" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-secondary transition-colors">
            Work with us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    <Footer />
  </main>
);

export default About;

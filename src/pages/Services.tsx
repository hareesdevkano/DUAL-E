import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { Nav, Footer, PageHeader } from "@/components/SiteChrome";
import { services } from "@/data/services";

const Services = () => (
  <main className="bg-background text-foreground">
    <Nav />
    <PageHeader
      eyebrow="Our Services"
      title="WHAT WE"
      highlight="BUILD."
      intro="Ten disciplines, one team. From the first cable pulled to the last campaign shipped — Dual Intelligence delivers the technical infrastructure and the brand systems that move ambitious organizations forward."
    />

    <section className="py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-px bg-border">
        {services.map((s, i) => (
          <motion.article
            key={s.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="bg-background py-12 lg:py-16 grid lg:grid-cols-12 gap-8 px-2 lg:px-8 hover:bg-card/40 transition-colors group"
          >
            <div className="lg:col-span-2 flex lg:flex-col items-start justify-between gap-4">
              <span className="font-display text-xs tracking-widest text-muted-foreground">/{s.tag}</span>
              <s.icon className="w-10 h-10 text-primary" strokeWidth={1.2} />
            </div>
            <div className="lg:col-span-6">
              <h2 className="font-display font-bold text-3xl lg:text-5xl uppercase tracking-tighter mb-4">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{s.long}</p>
              <Link to="/#contact" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-primary group-hover:gap-4 transition-all">
                Discuss this service <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="lg:col-span-4">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">— Deliverables</p>
              <ul className="space-y-3">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-foreground/85">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>

    <section className="py-24 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-display font-bold text-4xl lg:text-6xl uppercase tracking-tighter mb-8">
          Need something <span className="gradient-text">bespoke?</span>
        </h2>
        <Link to="/#contact" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-secondary transition-colors">
          Brief our team <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    <Footer />
  </main>
);

export default Services;

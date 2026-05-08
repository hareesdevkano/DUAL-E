import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Nav, Footer, PageHeader } from "@/components/SiteChrome";
import { caseStudies } from "@/data/services";

const CaseStudies = () => (
  <main className="bg-background text-foreground">
    <Nav />
    <PageHeader
      eyebrow="Case Studies"
      title="SELECTED"
      highlight="WORK."
      intro="A snapshot of recent engagements across networking, software, security, branding and digital marketing — delivered for clients in government, finance, education, real estate and emerging tech."
    />

    <section className="py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-6">
        {caseStudies.map((c, i) => (
          <motion.article
            key={c.slug}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
            className="group border border-border bg-card hover:border-primary/50 transition-colors overflow-hidden flex flex-col"
          >
            <div className={`aspect-[16/9] bg-gradient-to-br ${c.color} bg-grid relative flex items-end justify-between p-6`}>
              <span className="text-xs tracking-[0.2em] uppercase text-foreground/80">{c.tag}</span>
              <span className="font-display text-xs tracking-widest text-muted-foreground">{c.year}</span>
            </div>
            <div className="p-8 lg:p-10 flex-1 flex flex-col">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">{c.client}</p>
              <h2 className="font-display font-bold text-2xl lg:text-3xl uppercase mb-4 tracking-tight">{c.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{c.summary}</p>
              <div className="flex items-center justify-between border-t border-border pt-6">
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">Outcome</p>
                  <p className="font-display text-lg gradient-text">{c.outcome}</p>
                </div>
                <Link to="/#contact" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-primary group-hover:gap-4 transition-all">
                  Brief us <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>

    <section className="py-24 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-display font-bold text-4xl lg:text-6xl uppercase tracking-tighter mb-8">
          Your project, <span className="gradient-text">next.</span>
        </h2>
        <Link to="/#contact" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-secondary transition-colors">
          Start a conversation <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    <Footer />
  </main>
);

export default CaseStudies;

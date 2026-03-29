import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "How I Reduced Rendering Time by 96%",
    preview:
      "A deep-dive into the Azure DevOps CI/CD pipeline I built during my Hexaware internship — self-hosted agents, pipeline design, and the architectural decisions that made it work.",
    tag: "DevOps",
  },
  {
    title: "Designing a Slot-Based Workflow System",
    preview:
      "How I modelled a multi-service church's weekly workflow as isolated slots — and why treating Google Sheets as a state machine was the right call.",
    tag: "Architecture",
  },
  {
    title: "Using Google Sheets as a State Database",
    preview:
      "Lessons from using Google Sheets as a lightweight, human-readable state store — trade-offs, patterns, and when it's surprisingly powerful for automation.",
    tag: "Automation",
  },
];

const Insights = () => {
  return (
    <section className="px-6 py-24 bg-card/20">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-primary text-sm font-mono tracking-wider mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Writing
        </motion.p>
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Technical Insights
        </motion.h2>

        <div className="grid gap-5 sm:grid-cols-3">
          {articles.map((a, i) => (
            <motion.div
              key={a.title}
              className="rounded-lg border border-border bg-card p-6 flex flex-col card-hover group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className="text-xs font-mono text-primary mb-3 self-start px-2 py-0.5 rounded border border-primary/20 bg-primary/5">
                {a.tag}
              </span>
              <h3 className="font-semibold text-foreground text-sm mb-3 group-hover:text-primary transition-colors leading-snug">
                {a.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">
                {a.preview}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs text-primary font-mono group-hover:gap-2.5 transition-all">
                Read More <ArrowRight className="w-3 h-3" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;

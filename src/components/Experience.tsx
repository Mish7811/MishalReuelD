import { motion } from "framer-motion";

const bullets = [
  { text: "Worked on CI/CD automation pipelines built on Azure DevOps, contributing to a 96% reduction in rendering time — from 300 hrs to 12 hrs", strong: true },
  { text: "Gained hands-on experience automating 3D model baking and rendering workflows end-to-end", strong: false },
  { text: "Helped optimize task distribution across self-hosted Azure agents", strong: false },
  { text: "Contributed to a 90% improvement in overall operational efficiency for the team", strong: false },
  { text: "Collaborated in Agile sprints for debugging, testing, and deployment", strong: false },
];

const Experience = () => {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <motion.p
          className="text-primary text-xs font-mono tracking-widest uppercase mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Work History
        </motion.p>
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Professional Experience
        </motion.h2>

        <motion.div
          className="relative pl-5 border-l border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Dot on timeline line */}
          <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary/30 border-2 border-primary" />

          <div className="mb-6">
            <h3 className="font-bold text-foreground text-xl leading-tight mb-1">
              Development Intern
            </h3>
            <p className="text-primary text-sm font-medium mb-0.5">
              Hexaware Technologies
            </p>
            <p className="text-muted-foreground text-xs font-mono">
              July 2024 – September 2024
            </p>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-xl">
            During my internship at Hexaware Technologies, I worked on CI/CD automation pipelines and backend workflow systems, contributing to a 96% reduction in rendering time.
          </p>

          <ul className="space-y-3.5">
            {bullets.map((b, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-sm"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.1 + i * 0.07 }}
              >
                <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-primary/50 inline-block" />
                <span className={b.strong ? "text-foreground font-medium" : "text-muted-foreground"}>
                  {b.text}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

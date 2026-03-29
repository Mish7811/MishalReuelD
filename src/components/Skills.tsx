import { motion } from "framer-motion";

const skillCategories = [
  {
    label: "DevOps & Automation",
    skills: ["Azure DevOps", "CI/CD", "Git", "Docker", "Google Apps Script"],
    priority: true,
  },
  {
    label: "Programming",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "C"],
    priority: true,
  },
  {
    label: "Web & Backend",
    skills: ["React", "Node.js", "FastAPI", "HTML", "CSS"],
    priority: false,
  },
  {
    label: "Cloud & Platforms",
    skills: ["Azure (Basics)", "AWS (Basics)", "Google APIs"],
    priority: false,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-28 bg-card/20">
      <div className="max-w-3xl mx-auto">
        <motion.p
          className="text-primary text-xs font-mono tracking-widest uppercase mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Capabilities
        </motion.p>
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          How I Build Systems
        </motion.h2>

        <motion.p
          className="text-muted-foreground text-sm leading-relaxed mb-12 max-w-xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          These are the tools I use to turn structured thinking into production-ready backend systems.
        </motion.p>

        <div className="grid gap-5 sm:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              className={`rounded-lg border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_20px_hsl(0_0%_0%/0.3)] ${
                cat.priority ? "border-border" : "border-border/50"
              }`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <h3 className={`text-xs font-mono uppercase tracking-widest mb-4 ${cat.priority ? "text-primary" : "text-muted-foreground/60"}`}>
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-xs rounded border transition-colors hover:border-primary/30 hover:text-primary ${
                      cat.priority
                        ? "border-border bg-secondary/40 text-foreground/80"
                        : "border-border/50 bg-secondary/20 text-muted-foreground"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

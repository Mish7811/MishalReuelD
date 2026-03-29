import { motion } from "framer-motion";

const LookingFor = () => {
  return (
    <section className="px-6 py-28">
      <div className="max-w-2xl mx-auto">
        <motion.p
          className="text-primary text-xs font-mono tracking-widest uppercase mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Opportunities
        </motion.p>
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          What I'm Looking For
        </motion.h2>

        <motion.p
          className="text-muted-foreground leading-relaxed mb-10 text-sm max-w-xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          I'm looking for opportunities where I can grow as a full-stack developer while contributing to backend systems, automation workflows, and scalable applications.
        </motion.p>

        <motion.ul
          className="space-y-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.18 }}
        >
          {[
            "Entry-level Software Developer roles",
            "Automation and DevOps opportunities",
            "Backend and API-focused positions",
            "Growth-oriented engineering teams",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
              <span className="mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default LookingFor;

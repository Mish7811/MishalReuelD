import { motion } from "framer-motion";

const events = [
  {
    year: "2024",
    title: "Development Intern @ Hexaware",
    detail: "Built CI/CD pipeline cutting 3D rendering time by 96%. First exposure to enterprise DevOps at scale.",
  },
  {
    year: "2025",
    title: "Church Workflow Automation",
    detail: "Designed and shipped a full-stack slot-based automation system serving a live multi-service church.",
  },
  {
    year: "2025",
    title: "Playlist & Lyrics Automation",
    detail: "Deployed YouTube Playlist Manager and a Lyrics Automation System integrating multiple external APIs.",
  },
  {
    year: "2026",
    title: "Exploring AI Agents & Scalable Systems",
    detail: "Actively building toward AI-augmented automation pipelines and production-grade scalable backends.",
  },
];

const Timeline = () => {
  return (
    <section className="px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <motion.p
          className="text-primary text-sm font-mono tracking-wider mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Progression
        </motion.p>
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Growth &amp; Milestones
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {events.map((e, i) => (
              <motion.div
                key={i}
                className="flex gap-6 items-start"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                {/* Year */}
                <div className="w-16 shrink-0 text-right">
                  <span className="text-primary text-xs font-mono tracking-wider">
                    {e.year}
                  </span>
                </div>

                {/* Dot */}
                <div className="relative flex items-center justify-center shrink-0 mt-1.5">
                  <div className="w-3 h-3 rounded-full bg-primary/20 border-2 border-primary z-10" />
                </div>

                {/* Content */}
                <div className="pt-0">
                  <h3 className="font-semibold text-foreground text-sm mb-1">
                    {e.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {e.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

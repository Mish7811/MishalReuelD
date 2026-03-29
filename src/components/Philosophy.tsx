import { motion } from "framer-motion";

const principles = [
  {
    num: "01",
    text: "Break manual processes into structured, repeatable workflows",
  },
  {
    num: "02",
    text: "Learn by building real systems — not just tutorials",
  },
  {
    num: "03",
    text: "Prefer automation when repetition starts to appear",
  },
  {
    num: "04",
    text: "Focus on clarity before complexity",
  },
  {
    num: "05",
    text: "Measure impact and iterate",
  },
];

const Philosophy = () => {
  return (
    <section className="px-6 py-28 bg-card/20">
      <div className="max-w-3xl mx-auto">
        <motion.p
          className="text-primary text-xs font-mono tracking-widest uppercase mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Mindset
        </motion.p>
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          How I Approach Systems
        </motion.h2>

        <div className="space-y-7">
          {principles.map((p, i) => (
            <motion.div
              key={p.num}
              className="flex gap-7 items-start"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <span className="text-3xl font-bold text-primary/10 shrink-0 leading-none select-none w-10 text-right pt-0.5">
                {p.num}
              </span>
              <p className="text-foreground/75 leading-relaxed pt-1 border-b border-border/40 pb-7 flex-1 last:border-0 last:pb-0">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;

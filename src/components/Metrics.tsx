import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface Metric {
  value: number;
  suffix: string;
  label: string;
  dominant?: boolean;
}

const metrics: Metric[] = [
  { value: 96, suffix: "%", label: "Rendering Time Reduction", dominant: true },
  { value: 80, suffix: "%", label: "Workflow Time Saved" },
  { value: 3, suffix: "+", label: "Production Systems Deployed" },
  { value: 1, suffix: " yr", label: "Real-World Automation" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (inView) {
      animate(motionVal, value, { duration: 1.6, ease: "easeOut" });
    }
  }, [inView, motionVal, value]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v + suffix;
    });
  }, [rounded, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}

const Metrics = () => {
  return (
    <section className="px-6 py-14 border-y border-border bg-card/30">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-muted-foreground text-xs font-mono tracking-widest uppercase mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Measured Outcomes
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className="text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <p
                className={`font-bold text-primary mb-1 tabular-nums ${
                  m.dominant
                    ? "text-4xl sm:text-5xl"
                    : "text-2xl sm:text-3xl text-primary/70"
                }`}
              >
                <CountUp value={m.value} suffix={m.suffix} />
              </p>
              <p
                className={`leading-tight ${
                  m.dominant
                    ? "text-xs text-muted-foreground"
                    : "text-xs text-muted-foreground/60"
                }`}
              >
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;

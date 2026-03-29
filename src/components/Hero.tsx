import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TERMINAL_LINES = [
  "initializing profile...",
  "loading modules...",
  "name: Mishal Reuel",
  "role: Software Developer",
  "focus: Full-Stack | Backend | AI | Automation",
];

const TYPE_SPEED = 38;
const LINE_PAUSE = 280;

function useTerminalTyper(lines: string[]) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (done) return;

    if (lineIndex < lines.length) {
      const currentLine = lines[lineIndex];

      if (charIndex < currentLine.length) {
        timeoutRef.current = setTimeout(() => {
          setCharIndex((c) => c + 1);
          setDisplayed((prev) => {
            const next = [...prev];
            next[lineIndex] = currentLine.slice(0, charIndex + 1);
            return next;
          });
        }, TYPE_SPEED);
      } else {
        timeoutRef.current = setTimeout(() => {
          setLineIndex((l) => l + 1);
          setCharIndex(0);
        }, LINE_PAUSE);
      }
    } else {
      setDone(true);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [lineIndex, charIndex, done, lines]);

  return { displayed, done };
}

const Hero = () => {
  const { displayed, done } = useTerminalTyper(TERMINAL_LINES);

  return (
    <section className="min-h-[95vh] flex items-center justify-center px-6 relative hero-gradient py-28">
      <div className="max-w-2xl w-full">

        {/* Name — dominant primary element */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-3 text-foreground"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0, 0, 0.2, 1] }}
        >
          Mishal Reuel
        </motion.h1>

        {/* Role — clear but not arrogant */}
        <motion.p
          className="text-lg sm:text-xl text-primary font-medium mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.45, ease: [0, 0, 0.2, 1] }}
        >
          Full-Stack Developer in Progress
        </motion.p>

        {/* Focus line — small, sharp */}
        <motion.p
          className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.22, duration: 0.4 }}
        >
          Backend • Automation • AI Systems • Flutter
        </motion.p>

        {/* Supporting paragraph */}
        <motion.p
          className="text-muted-foreground leading-relaxed mb-10 max-w-xl text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.45, ease: [0, 0, 0.2, 1] }}
        >
          I enjoy building full-stack applications, designing structured backend systems, and experimenting with AI-driven workflows. I'm currently strengthening my foundations in scalable systems and production-ready development.
        </motion.p>

        {/* Terminal box — proof below statement */}
        <motion.div
          className="rounded-md border border-border bg-card/50 backdrop-blur-sm mb-10 overflow-hidden text-[0.78rem]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: [0, 0, 0.2, 1] }}
        >
          {/* Terminal header bar */}
          <div className="flex items-center gap-1.5 px-4 py-2 border-b border-border bg-secondary/20">
            <span className="w-2 h-2 rounded-full bg-border" />
            <span className="w-2 h-2 rounded-full bg-border" />
            <span className="w-2 h-2 rounded-full bg-border" />
            <span className="ml-3 text-[0.68rem] font-mono text-muted-foreground/60">
              profile.sh
            </span>
          </div>

          {/* Terminal body */}
          <div className="px-5 py-4 font-mono space-y-0.5 min-h-[7.5rem]">
            {TERMINAL_LINES.map((line, i) => {
              const text = displayed[i] ?? "";
              const isActive = i === displayed.length - 1 && !done;
              const isNameLine = line.startsWith("name:");
              const isFocusLine = line.startsWith("focus:");
              const isDimLine =
                line === "initializing profile..." ||
                line === "loading modules...";

              return (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-primary/40 select-none">$</span>
                  <span
                    className={
                      isDimLine
                        ? "text-muted-foreground/60"
                        : isNameLine || isFocusLine
                        ? "text-foreground font-medium"
                        : "text-foreground/75"
                    }
                  >
                    {text}
                  </span>
                  {(isActive || (done && i === TERMINAL_LINES.length - 1)) && (
                    <span className="terminal-cursor" />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.45, ease: [0, 0, 0.2, 1] }}
        >
          <a
            href="#projects"
            className="px-6 py-2.5 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-md border border-border/60 text-muted-foreground text-sm hover:text-foreground hover:border-border transition-colors"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

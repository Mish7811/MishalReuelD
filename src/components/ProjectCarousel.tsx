import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Project {
  title: string;
  summary: string;
  impact: string;
  impactLabel: string;
  tech: string[];
  problem: string;
  solution: string;
  highlights: string[];
  flagship?: boolean;
}

const projects: Project[] = [
  {
    title: "CI/CD Automation for 3D Rendering Pipeline",
    summary:
      "Azure DevOps pipeline that cut rendering time from 300 hours to 12 hours during Hexaware internship.",
    impact: "96%",
    impactLabel: "Rendering Time Reduction",
    tech: ["Azure DevOps", "CI/CD", "Self-hosted Agents", "PowerShell"],
    problem:
      "A 3D rendering team was spending ~300 hours on manual rendering workflows with no automation, causing massive delays in asset delivery.",
    solution:
      "Designed and implemented an Azure DevOps CI/CD pipeline with self-hosted agent optimization, automating the entire 3D rendering workflow from trigger to output.",
    highlights: [
      "Reduced rendering time from 300 hrs to 12 hrs (96% reduction)",
      "Configured Azure DevOps CI/CD pipeline from scratch",
      "Optimized self-hosted agent for 3D workloads",
      "Automated workflow for the entire 3D rendering team",
    ],
    flagship: true,
  },
  {
    title: "Church Songbook Workflow Automation",
    summary:
      "Slot-based full-stack automation replacing manual weekly slide preparation for a live multi-service church.",
    impact: "~80%",
    impactLabel: "Weekly Time Saved",
    tech: ["React", "TypeScript", "Python", "FastAPI", "Google APIs"],
    problem:
      "A multi-service church required weekly slide preparation — a manual, repetitive process involving multiple spreadsheets and presentation files.",
    solution:
      "A full-stack automation system with a slot-based model, structured state tracking via Google Sheets, and dynamic slide generation via Google APIs.",
    highlights: [
      "Designed a slot-based workflow model (A/B/C service isolation)",
      "Used Google Sheets as structured state tracking (pending → done)",
      "Built Python FastAPI backend to update Google Slides dynamically",
      "Implemented secure Google Service Account integration",
      "Deployed frontend on Vercel and backend on Render",
    ],
  },
  {
    title: "YouTube Playlist Manager",
    summary:
      "API-driven web app for YouTube playlist management with bulk operations and cross-playlist search.",
    impact: "3",
    impactLabel: "APIs Integrated",
    tech: ["React", "TypeScript", "YouTube Data API"],
    problem:
      "Managing large YouTube playlists manually is tedious — no built-in tools for bulk operations or cross-playlist management.",
    solution:
      "Built a React web app that interfaces with the YouTube Data API to enable search, bulk add/remove, and playlist organization features.",
    highlights: [
      "Full CRUD operations on YouTube playlists",
      "Search across playlists with filtering",
      "Bulk operations for playlist management",
      "OAuth 2.0 authentication flow",
    ],
  },
  {
    title: "Lyrics Automation System",
    summary:
      "End-to-end pipeline that fetches, formats, and pushes song lyrics directly into Google Slides.",
    impact: "100%",
    impactLabel: "Manual Steps Eliminated",
    tech: ["Python", "Google APIs", "Google Slides", "Automation"],
    problem:
      "Manually searching, copying, and formatting lyrics for weekly church services was time-consuming and error-prone, taking up to an hour each week.",
    solution:
      "Automated the full pipeline — from fetching lyrics via API to formatting and pushing them directly into Google Slides templates, ready for Sunday.",
    highlights: [
      "Automated lyrics fetch and formatting pipeline",
      "Direct Google Slides integration for slide generation",
      "Reduced weekly lyrics prep from ~60 min to near-zero",
      "Built as a reusable module integrated into the Church Songbook system",
    ],
  },
];

const ProjectCarousel = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="px-6 py-28">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-primary text-xs font-mono tracking-widest uppercase mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Portfolio
        </motion.p>
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Systems I've Built
        </motion.h2>

        {/* Horizontal scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
          {projects.map((project, i) => (
            <motion.button
              key={project.title}
              onClick={() => setSelected(project)}
              className={`snap-start shrink-0 rounded-lg border bg-card text-left cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_28px_hsl(0_0%_0%/0.35)] ${
                project.flagship
                  ? "w-[380px] sm:w-[420px] border-primary/30 p-7"
                  : "w-[300px] sm:w-[330px] border-border p-5"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {project.flagship && (
                <span className="inline-block text-[0.65rem] font-mono text-primary/70 border border-primary/20 bg-primary/5 px-2 py-0.5 rounded mb-4 tracking-wider uppercase">
                  Flagship Project
                </span>
              )}
              <h3 className={`font-semibold mb-2 text-foreground group-hover:text-primary transition-colors leading-snug ${project.flagship ? "text-base" : "text-sm"}`}>
                {project.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed mb-5">
                {project.summary}
              </p>
              <div className="mb-4">
                <span className={`font-bold text-primary ${project.flagship ? "text-4xl" : "text-2xl"}`}>
                  {project.impact}
                </span>
                <span className="text-muted-foreground text-xs ml-2">
                  {project.impactLabel}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs rounded border border-border text-muted-foreground/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Additional projects */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-xs font-mono text-muted-foreground/60 uppercase tracking-widest mb-4">
            Also Built
          </h3>
          <ul className="space-y-2">
            {[
              "Gratitude Journal — UI-focused web app",
              "Weeks of Life — Flutter app",
              "Smaller automation tools and experiments",
            ].map((p, i) => (
              <li
                key={i}
                className="text-muted-foreground/60 text-sm flex items-start gap-2.5"
              >
                <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-border inline-block" />
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-background/85 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />
            <motion.div
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-lg border border-border bg-card p-7 sm:p-9"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.25 }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-xl sm:text-2xl font-bold mb-8 pr-8 leading-snug">
                {selected.title}
              </h2>

              <div className="space-y-7">
                <div>
                  <h3 className="text-xs font-mono text-primary/70 uppercase tracking-widest mb-2">
                    Problem
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {selected.problem}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-mono text-primary/70 uppercase tracking-widest mb-2">
                    Solution
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {selected.solution}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-mono text-primary/70 uppercase tracking-widest mb-3">
                    Key Highlights
                  </h3>
                  <ul className="space-y-2.5">
                    {selected.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground text-sm flex items-start gap-2.5"
                      >
                        <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-primary/50 inline-block" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-mono text-primary/70 uppercase tracking-widest mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selected.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded border border-border text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded border border-border/60 bg-secondary/30 p-5">
                  <h3 className="text-xs font-mono text-primary/70 uppercase tracking-widest mb-2">
                    Impact
                  </h3>
                  <p className="text-3xl font-bold text-primary">
                    {selected.impact}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {selected.impactLabel}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectCarousel;

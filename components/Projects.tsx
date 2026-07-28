"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { projects, type Project } from "@/data/projects";
import Reveal from "./Reveal";

const categoryColor: Record<Project["category"], string> = {
  Web: "text-cyan-glow border-cyan-glow/30 bg-cyan-glow/10",
  Mobile: "text-pink-glow border-pink-glow/30 bg-pink-glow/10",
  Backend: "text-accent-soft border-accent/30 bg-accent/10",
};

function Card({ project, index }: { project: Project; index: number }) {
  const hasSplitRepos = Boolean(project.repos);

  const handleCardClick = () => {
    if (!hasSplitRepos) {
      window.open(project.repo, "_blank", "noreferrer");
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
      onClick={handleCardClick}
      role={hasSplitRepos ? undefined : "link"}
      tabIndex={hasSplitRepos ? undefined : 0}
      onKeyDown={
        hasSplitRepos
          ? undefined
          : (e) => {
              if (e.key === "Enter" || e.key === " ") handleCardClick();
            }
      }
      className={`glow-card group flex flex-col rounded-3xl glass p-6 transition-transform duration-300 hover:-translate-y-1.5 ${
        hasSplitRepos ? "" : "cursor-pointer"
      } ${project.featured ? "md:col-span-2" : ""}`}
    >
      <div className="mb-4 flex items-center justify-between">
        <span
          className={`rounded-full border px-3 py-1 font-mono text-xs ${categoryColor[project.category]}`}
        >
          {project.category}
        </span>
        <div className="flex items-center gap-3 text-slate-400">
          {!hasSplitRepos && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              aria-label="View source on GitHub"
              onClick={(e) => e.stopPropagation()}
              className="transition-colors hover:text-white"
            >
              <FiGithub className="text-xl" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              aria-label="Open live demo"
              onClick={(e) => e.stopPropagation()}
              className="transition-colors hover:text-white"
            >
              <FiExternalLink className="text-xl" />
            </a>
          )}
        </div>
      </div>

      <h3 className="flex items-center gap-1 text-2xl font-bold text-white">
        {project.title}
        {!hasSplitRepos && (
          <FiArrowUpRight className="text-accent-soft opacity-0 transition-opacity group-hover:opacity-100" />
        )}
      </h3>

      <p className="mt-3 flex-1 text-slate-400">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-lg bg-white/5 px-3 py-1 font-mono text-xs text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>

      {hasSplitRepos && project.repos && (
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.repos.frontend}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-glow/30 bg-cyan-glow/10 px-4 py-2 text-sm font-medium text-cyan-glow transition-colors hover:bg-cyan-glow/20"
          >
            <FiGithub /> Frontend repo
          </a>
          <a
            href={project.repos.backend}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent-soft transition-colors hover:bg-accent/20"
          >
            <FiGithub /> Backend repo
          </a>
        </div>
      )}
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal>
        <p className="eyebrow">02 — Work</p>
        <h2 className="section-title">Featured projects</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          A selection of things I&apos;ve built across web, backend, and mobile.
          Pulled straight from my GitHub.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Card key={p.title} project={p} index={i} />
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 text-center">
          <a
            href="https://github.com/RichardEfrem?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
          >
            <FiGithub /> See all repositories
          </a>
        </div>
      </Reveal>
    </section>
  );
}

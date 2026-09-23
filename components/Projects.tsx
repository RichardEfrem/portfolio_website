import { existsSync } from "fs";
import path from "path";
import Image from "next/image";
import {
  FiArrowUpRight,
  FiChevronDown,
  FiGithub,
  FiImage,
} from "react-icons/fi";
import { profile } from "@/data/profile";
import { projects, type Project } from "@/data/projects";
import Gallery from "./Gallery";
import Reveal from "./Reveal";

function Meta({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-2.5 font-mono text-[0.68rem] uppercase tracking-[0.14em]">
      <span className="text-accent">{project.category}</span>
      <span className="h-3 w-px bg-line" />
      <span className="truncate text-dim">{project.context}</span>
    </div>
  );
}

function Media({ project }: { project: Project }) {
  if (project.gallery?.length) {
    return <Gallery shots={project.gallery} title={project.title} />;
  }

  const src = project.image;
  const ready = src && existsSync(path.join(process.cwd(), "public", src));

  return (
    <div className="relative aspect-[16/10] border-b border-line bg-raise md:aspect-auto md:border-b-0 md:border-r">
      {ready ? (
        <Image
          src={src}
          alt={`${project.title} interface`}
          fill
          sizes="(max-width: 768px) 100vw, 55vw"
          className="object-cover object-left-top"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="rounded-lg border border-dashed border-line px-6 py-5 text-center">
            <FiImage className="mx-auto text-lg text-dim" aria-hidden />
            <p className="mt-3 font-mono text-[0.68rem] text-mute">
              public{src}
            </p>
            <p className="mt-1.5 text-[0.7rem] text-dim">
              Drop a screenshot here
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function CaseStudyPanel({ project }: { project: Project }) {
  const study = project.caseStudy;
  if (!study) return null;

  return (
    <details className="group/cs border-t border-line md:col-span-2">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-7 py-4 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-mute transition-colors hover:bg-raise hover:text-ink md:px-9 [&::-webkit-details-marker]:hidden">
        <span>
          <span className="group-open/cs:hidden">Read the case study</span>
          <span className="hidden group-open/cs:inline">Hide the case study</span>
        </span>
        <FiChevronDown
          className="text-dim transition-transform duration-300 group-open/cs:rotate-180 group-open/cs:text-accent"
          aria-hidden
        />
      </summary>

      <div className="border-t border-line px-7 pb-9 pt-7 md:px-9">
        <p className="max-w-[70ch] text-sm leading-[1.8] text-mute">
          {study.overview}
        </p>

        <div className="mt-9 grid grid-cols-1 gap-x-12 gap-y-9 md:grid-cols-2">
          {study.sections.map((section, i) => (
            <section key={section.heading}>
              <h4 className="flex items-baseline gap-3 text-sm font-semibold tracking-tight text-ink">
                <span className="font-mono text-[0.68rem] font-normal text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.heading}
              </h4>
              <ul className="mt-3.5 space-y-2.5">
                {section.points.map((point) => (
                  <li
                    key={point}
                    className="relative pl-4 text-sm leading-relaxed text-mute before:absolute before:left-0 before:top-[0.6em] before:h-px before:w-2 before:bg-dim"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </details>
  );
}

const repoLink =
  "inline-flex items-center gap-2 rounded-lg border border-line bg-raise px-3.5 py-2 text-xs text-mute transition-colors hover:border-dim hover:text-ink";

function FeaturedCard({ project }: { project: Project }) {
  return (
    <article className="group grid grid-cols-1 overflow-hidden rounded-xl border border-line bg-elevate transition-colors duration-300 hover:border-dim md:grid-cols-[1.05fr_1fr]">
      <Media project={project} />

      <div className="flex flex-col p-7 md:p-9">
        <Meta project={project} />

        <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-mute">
          {project.description}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-2 border-t border-line pt-6 md:mt-auto">
          {project.repos ? (
            <>
              <a
                href={project.repos.frontend}
                target="_blank"
                rel="noreferrer"
                className={repoLink}
              >
                <FiGithub /> Frontend
              </a>
              <a
                href={project.repos.backend}
                target="_blank"
                rel="noreferrer"
                className={repoLink}
              >
                <FiGithub /> Backend
              </a>
            </>
          ) : (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className={repoLink}
            >
              <FiGithub /> View source
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className={repoLink}
            >
              <FiArrowUpRight /> Live demo
            </a>
          )}
        </div>
      </div>

      <CaseStudyPanel project={project} />
    </article>
  );
}

function Row({ project }: { project: Project }) {
  return (
    <li>
      <a
        href={project.repo}
        target="_blank"
        rel="noreferrer"
        className="group grid gap-4 px-6 py-5 transition-colors hover:bg-raise sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8"
      >
        <div className="min-w-0">
          <Meta project={project} />
          <h3 className="mt-2.5 text-base font-semibold tracking-tight text-ink">
            {project.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-mute">
            {project.description}
          </p>
        </div>

        <div className="flex items-center gap-4 sm:shrink-0">
          <div className="hidden flex-wrap justify-end gap-2 lg:flex">
            {project.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
          <FiArrowUpRight
            className="text-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            aria-hidden
          />
        </div>
      </a>
    </li>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="section">
      <Reveal>
        <p className="eyebrow">03 / Work</p>
        <h2 className="section-title">Selected projects</h2>
        <p className="lede">
          Products and services I&apos;ve built across web, backend, and
          mobile — each one available on GitHub.
        </p>
      </Reveal>

      <div className="mt-14 space-y-5">
        {featured.map((project, i) => (
          <Reveal key={project.title} delay={i * 80}>
            <FeaturedCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={80}>
        <h3 className="mt-16 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-dim">
          Also built
        </h3>
        <ul className="mt-5 divide-y divide-line overflow-hidden rounded-xl border border-line bg-elevate">
          {rest.map((project) => (
            <Row key={project.title} project={project} />
          ))}
        </ul>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-10 flex justify-center">
          <a
            href={`${profile.links.github}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            <FiGithub /> Browse all repositories
          </a>
        </div>
      </Reveal>
    </section>
  );
}

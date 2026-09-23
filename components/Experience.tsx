import { experience } from "@/data/experience";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal>
        <p className="eyebrow">02 / Experience</p>
        <h2 className="section-title">Where I&apos;ve worked</h2>
        <p className="lede">
          Teaching, shipping software for industry, and running events under
          pressure — each one sharpened how I build and communicate.
        </p>
      </Reveal>

      <ol className="mt-14 space-y-5">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.company} delay={i * 90}>
            <article className="panel grid grid-cols-1 gap-6 p-6 md:grid-cols-[200px_1fr] md:gap-10 md:p-8">
              <header>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent">
                  {job.period}
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink">
                  {job.company}
                </h3>
                <p className="mt-1 text-sm text-dim">{job.location}</p>
              </header>

              <div className="space-y-7">
                {job.roles.map((role) => (
                  <div key={role.title}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h4 className="font-medium text-ink">{role.title}</h4>
                      {job.roles.length > 1 && (
                        <span className="font-mono text-[0.7rem] text-dim">
                          {role.period}
                        </span>
                      )}
                    </div>
                    <ul className="mt-3 space-y-2.5">
                      {role.points.map((point) => (
                        <li
                          key={point}
                          className="relative pl-5 text-sm leading-relaxed text-mute before:absolute before:left-0 before:top-[0.6em] before:h-px before:w-2.5 before:bg-dim"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

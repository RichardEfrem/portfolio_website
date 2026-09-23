import { FiArrowRight, FiGithub, FiMail } from "react-icons/fi";
import { profile } from "@/data/profile";
import RoleRotator from "./RoleRotator";

const meta = [
  { label: "Based in", value: profile.location },
  { label: "Education", value: profile.degree, sub: profile.university },
  { label: "Previously", value: profile.previousRole, sub: profile.university },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center px-6 pt-28 pb-20"
    >
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-elevate px-3.5 py-1.5 font-mono text-xs text-mute animate-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/70" />
            </span>
            {profile.availability}
          </p>

          <h1
            className="mt-7 text-[2.75rem] font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl animate-fade-up"
            style={{ animationDelay: "70ms" }}
          >
            {profile.name}
          </h1>

          <p
            className="mt-4 font-mono text-base text-mute sm:text-lg animate-fade-up"
            style={{ animationDelay: "140ms" }}
          >
            <span className="text-accent">$</span> <RoleRotator />
            <span className="ml-0.5 inline-block h-[1.1em] w-[0.5ch] translate-y-[0.15em] bg-accent animate-caret" />
          </p>

          <p
            className="mt-7 max-w-xl text-base leading-relaxed text-mute animate-fade-up"
            style={{ animationDelay: "210ms" }}
          >
            {profile.tagline}
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up"
            style={{ animationDelay: "280ms" }}
          >
            <a href="#work" className="btn-primary">
              View selected work <FiArrowRight />
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <FiGithub /> GitHub
            </a>
            <a href={`mailto:${profile.links.email}`} className="btn-ghost">
              <FiMail /> Email
            </a>
          </div>

          <dl
            className="mt-12 grid max-w-xl grid-cols-2 gap-x-8 gap-y-5 border-t border-line pt-7 sm:grid-cols-3 animate-fade-up"
            style={{ animationDelay: "350ms" }}
          >
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-dim">
                  {m.label}
                </dt>
                <dd className="mt-1.5 text-sm leading-snug text-ink">
                  {m.value}
                  {m.sub && (
                    <span className="mt-0.5 block text-[0.78rem] text-dim">
                      {m.sub}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className="hidden animate-fade-up lg:block"
          style={{ animationDelay: "240ms" }}
        >
          <div className="panel overflow-hidden">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="ml-2 font-mono text-[0.7rem] text-dim">
                stack.json
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[0.78rem] leading-[1.9] text-mute">
              <span className="text-dim">$ cat stack.json</span>
              {"\n\n"}
              <span className="text-dim">{"{"}</span>
              {"\n  "}
              <span className="text-accent">&quot;web&quot;</span>
              <span className="text-dim">:</span> [
              <span className="text-ink">&quot;Next.js&quot;</span>,{" "}
              <span className="text-ink">&quot;React&quot;</span>,{" "}
              <span className="text-ink">&quot;Laravel&quot;</span>],
              {"\n  "}
              <span className="text-accent">&quot;mobile&quot;</span>
              <span className="text-dim">:</span> [
              <span className="text-ink">&quot;Flutter&quot;</span>,{" "}
              <span className="text-ink">&quot;Kotlin&quot;</span>],
              {"\n  "}
              <span className="text-accent">&quot;services&quot;</span>
              <span className="text-dim">:</span> [
              <span className="text-ink">&quot;NestJS&quot;</span>,{" "}
              <span className="text-ink">&quot;Python&quot;</span>],
              {"\n  "}
              <span className="text-accent">&quot;data&quot;</span>
              <span className="text-dim">:</span> [
              <span className="text-ink">&quot;PostgreSQL&quot;</span>,{" "}
              <span className="text-ink">&quot;Prisma&quot;</span>],
              {"\n  "}
              <span className="text-accent">&quot;principle&quot;</span>
              <span className="text-dim">:</span>{" "}
              <span className="text-ink">&quot;ship it clean&quot;</span>
              {"\n"}
              <span className="text-dim">{"}"}</span>
            </pre>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-dim transition-colors hover:text-ink md:flex"
      >
        Scroll
        <span className="h-px w-10 bg-line" />
      </a>
    </section>
  );
}

import { skillGroups } from "@/data/skills";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="stack" className="section">
      <Reveal>
        <p className="eyebrow">04 / Stack</p>
        <h2 className="section-title">Tools I reach for</h2>
        <p className="lede">
          The languages, frameworks, and infrastructure I use to take an idea
          from a blank repository to something running in production.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={(i % 2) * 90}>
            <div className="panel h-full p-6">
              <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-accent">
                {group.label}
              </h3>
              <p className="mt-2 text-sm text-dim">{group.note}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <li
                      key={skill.name}
                      className="group flex items-center gap-2 rounded-lg border border-line bg-raise px-3 py-2 transition-colors hover:border-dim"
                    >
                      <Icon
                        className="text-base opacity-60 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                        style={{ color: skill.color }}
                        aria-hidden
                      />
                      <span className="text-[0.8rem] text-mute transition-colors group-hover:text-ink">
                        {skill.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

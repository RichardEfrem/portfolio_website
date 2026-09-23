import Image from "next/image";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import Reveal from "./Reveal";

const stats = [
  { value: "B.Sc.", label: "Computer Science" },
  { value: "3", label: "Frameworks" },
  { value: String(projects.length), label: "Projects built" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <p className="eyebrow">01 / About</p>
        <h2 className="section-title">
          End to end, interface to database.
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-[260px_1fr] md:gap-14">
        <Reveal delay={80}>
          <div className="panel overflow-hidden">
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={520}
              height={520}
              className="aspect-square w-full object-cover opacity-90 grayscale-[45%] transition duration-500 hover:opacity-100 hover:grayscale-0"
              priority
            />
            <div className="border-t border-line px-4 py-3">
              <p className="font-mono text-[0.7rem] text-dim">
                {profile.location}
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal delay={140}>
            <div className="max-w-[60ch] space-y-5 text-base leading-[1.8] text-mute">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <dl className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line">
              {stats.map((s) => (
                <div key={s.label} className="bg-elevate px-4 py-5 sm:px-6">
                  <dt className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1.5 text-xs leading-snug text-dim sm:text-sm">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";

const stats = [
  { value: "5+", label: "Shipped projects" },
  { value: "4", label: "Languages" },
  { value: "3", label: "Platforms" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <p className="eyebrow">01 — About</p>
        <h2 className="section-title">Who I am</h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <div className="glow-card mx-auto w-fit rounded-3xl glass p-2">
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={280}
              height={280}
              className="rounded-2xl"
              priority
            />
          </div>
          <p className="mt-5 flex items-center justify-center gap-2 text-sm text-slate-400">
            <FiMapPin className="text-accent-soft" /> {profile.location}
          </p>
        </Reveal>

        <div>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-lg leading-relaxed text-slate-300">
              {profile.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl glass p-5 text-center"
                >
                  <div className="text-3xl font-black gradient-text">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal>
        <p className="eyebrow">03 — Toolbox</p>
        <h2 className="section-title">Skills &amp; technologies</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          The languages and tools I reach for to take products from idea to
          production.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.label} delay={gi * 0.08}>
            <div className="glow-card h-full rounded-3xl glass p-6">
              <h3 className="mb-5 font-mono text-sm uppercase tracking-[0.2em] text-accent-soft">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, si) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: si * 0.04 }}
                      whileHover={{ y: -4 }}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5"
                    >
                      <Icon
                        className="text-xl"
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm font-medium text-slate-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

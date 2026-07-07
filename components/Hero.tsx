"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowDown, FiGithub, FiMail } from "react-icons/fi";
import { profile } from "@/data/profile";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % profile.roles.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* floating blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-float" />
        <div className="absolute right-[12%] top-[30%] h-80 w-80 rounded-full bg-cyan-glow/15 blur-3xl animate-float [animation-delay:-3s]" />
        <div className="absolute bottom-[10%] left-[40%] h-64 w-64 rounded-full bg-pink-glow/15 blur-3xl animate-pulse-glow" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 pt-24 md:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-sm text-slate-300"
          >
            <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px] shadow-green-400" />
            Available for opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl"
          >
            Hi, I&apos;m
            <br />
            <span className="gradient-text">{profile.name}.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 flex items-center gap-2 text-2xl font-semibold text-slate-200 md:text-3xl"
          >
            <span className="font-mono text-accent-soft">{"{"}</span>
            <span className="relative flex h-9 items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  className="whitespace-nowrap"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  {profile.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="font-mono text-accent-soft">{"}"}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-accent to-cyan-glow px-7 py-3 font-semibold text-white shadow-lg shadow-accent/30 transition-transform hover:scale-105"
            >
              View my work
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full glass px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              <FiGithub /> GitHub
            </a>
            <a
              href={`mailto:${profile.links.email}`}
              className="flex items-center gap-2 rounded-full glass px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              <FiMail /> Email
            </a>
          </motion.div>
        </div>

        {/* Avatar / code card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto hidden md:block"
        >
          <div className="glow-card rounded-3xl glass p-2">
            <div className="rounded-2xl bg-surface p-5 font-mono text-sm leading-relaxed">
              <div className="mb-4 flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>
              <pre className="whitespace-pre-wrap text-slate-300">
                <span className="text-pink-glow">const</span>{" "}
                <span className="text-cyan-glow">richard</span> = {"{"}
                {"\n"}  role: <span className="text-green-400">&quot;Fullstack&quot;</span>,
                {"\n"}  stack: [<span className="text-green-400">&quot;Next.js&quot;</span>,{" "}
                <span className="text-green-400">&quot;Laravel&quot;</span>,{" "}
                <span className="text-green-400">&quot;Python&quot;</span>],
                {"\n"}  mobile: <span className="text-green-400">&quot;Flutter&quot;</span>,
                {"\n"}  learning: <span className="text-accent-soft">true</span>,
                {"\n"}
                {"}"};
              </pre>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition-colors hover:text-white"
        aria-label="Scroll to about"
      >
        <FiArrowDown className="animate-bounce text-2xl" />
      </a>
    </section>
  );
}

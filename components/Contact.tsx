import { FiGithub, FiLinkedin, FiMail, FiFileText, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <Reveal>
        <div className="glow-card relative overflow-hidden rounded-[2rem] glass p-10 text-center md:p-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-cyan-glow/20 blur-3xl" />

          <p className="eyebrow">04 — Contact</p>
          <h2 className="mx-auto max-w-2xl text-4xl font-black tracking-tight text-white md:text-5xl">
            Let&apos;s build something{" "}
            <span className="gradient-text">great together.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-400">
            I&apos;m open to internships, freelance work, and collaboration.
            Have an idea or a role in mind? My inbox is always open.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.links.email}`}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-cyan-glow px-7 py-3 font-semibold text-white shadow-lg shadow-accent/30 transition-transform hover:scale-105"
            >
              <FiMail /> Say hello
            </a>
            <a
              href={profile.links.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full glass px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              <FiFileText /> Resume
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 text-2xl text-slate-400">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-white"
            >
              <FiGithub />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-white"
            >
              <FiLinkedin />
            </a>
            <a
              href={profile.links.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="transition-colors hover:text-pink-glow"
            >
              <FiInstagram />
            </a>
            <a
              href={profile.links.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="transition-colors hover:text-green-400"
            >
              <FaWhatsapp />
            </a>
            <a
              href={`mailto:${profile.links.email}`}
              aria-label="Email"
              className="transition-colors hover:text-white"
            >
              <FiMail />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

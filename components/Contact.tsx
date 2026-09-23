import { FiArrowUpRight, FiFileText, FiGithub, FiInstagram, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";

const channels = [
  {
    icon: FiMail,
    label: "Email",
    value: profile.links.email,
    href: `mailto:${profile.links.email}`,
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "@RichardEfrem",
    href: profile.links.github,
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+62 819 3639 1615",
    href: profile.links.whatsapp,
  },
  {
    icon: FiInstagram,
    label: "Instagram",
    value: "@richardefrem_",
    href: profile.links.instagram,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
        <Reveal>
          <p className="eyebrow">05 / Contact</p>
          <h2 className="section-title">
            Have something worth building?
          </h2>
          <p className="lede">
            I&apos;m available for freelance work and open to software and web
            developer roles. Tell me what you&apos;re building — I read every
            message.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.links.email}`}
              className="btn-primary"
            >
              <FiMail /> Start a conversation
            </a>
            <a
              href={profile.links.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <FiFileText /> Resume / CV
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ul className="divide-y divide-line overflow-hidden rounded-xl border border-line bg-elevate">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-raise"
                >
                  <Icon className="shrink-0 text-base text-dim transition-colors group-hover:text-accent" />
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[0.68rem] uppercase tracking-[0.18em] text-dim">
                      {label}
                    </span>
                    <span className="mt-0.5 block truncate text-sm text-ink">
                      {value}
                    </span>
                  </span>
                  <FiArrowUpRight className="shrink-0 text-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

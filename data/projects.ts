// ─────────────────────────────────────────────────────────────
//  Projects pulled from github.com/RichardEfrem.
//  Add `demo` URLs and `image` paths (put images in /public) to
//  make cards richer. `featured: true` gets a larger card.
// ─────────────────────────────────────────────────────────────

export type Project = {
  title: string;
  description: string;
  tags: string[];
  repo: string;
  repos?: { frontend: string; backend: string };
  demo?: string;
  image?: string; // e.g. "/projects/gunsnip.png"
  featured?: boolean;
  category: "Web" | "Mobile" | "Backend";
};

export const projects: Project[] = [
  {
    title: "Iconspirit",
    description:
      "Production website for Iconspirit — a full-stack TypeScript codebase with a polished, responsive frontend and a dedicated backend service.",
    tags: ["TypeScript", "React", "Full Stack"],
    repo: "https://github.com/RichardEfrem/iconspirit_frontend",
    repos: {
      frontend: "https://github.com/RichardEfrem/iconspirit_frontend",
      backend: "https://github.com/RichardEfrem/iconspirit_backend",
    },
    category: "Web",
    featured: true,
  },
  {
    title: "Gunsnip",
    description:
      "A Gunpla (model-kit) e-commerce website built for a Web Framework & Deployment final project. Full shopping flow built with Laravel and TailwindCSS.",
    tags: ["Laravel", "PHP", "TailwindCSS", "MySQL"],
    repo: "https://github.com/RichardEfrem/Gunsnip",
    category: "Web",
    featured: true,
  },
  {
    title: "Class Offering Service",
    description:
      "A microservice that handles class-offering logic, built as the final project for a Service-Oriented Architecture course.",
    tags: ["Python", "Microservices", "REST API", "SOA"],
    repo: "https://github.com/RichardEfrem/penawaran_kelas_service",
    category: "Backend",
    featured: true,
  },
  {
    title: "AbsoluteCinema",
    description:
      "A cinema ticket-booking Android application built for an Android Development final project. Browse showtimes and book seats natively.",
    tags: ["Kotlin", "Android", "Mobile"],
    repo: "https://github.com/RichardEfrem/AbsoluteCinema",
    category: "Mobile",
  },
  {
    title: "Tasked",
    description:
      "A task-list Android app built for an Android Application Development class — create, track, and manage tasks on the go.",
    tags: ["Kotlin", "Android", "Mobile"],
    repo: "https://github.com/RichardEfrem/Tasked",
    category: "Mobile",
  },
];

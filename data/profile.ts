// ─────────────────────────────────────────────────────────────
//  EDIT ME: This is your personal info. Swap in real links/text.
//  Anything marked TODO is a placeholder for you to fill in.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Richard Efrem",
  // Short punchy title shown in the hero.
  title: "Fullstack Engineer",
  // Rotating words in the hero headline.
  roles: ["Fullstack Engineer", "Web Developer", "Mobile Developer", "Problem Solver"],
  // One-line tagline under your name.
  tagline:
    "Computer Science undergraduate & assistant lecturer building web and mobile products end to end.",

  location: "Surabaya, Indonesia",
  avatar: "https://avatars.githubusercontent.com/u/187286272?v=4",

  // A longer paragraph for the About section — edit freely.
  about: [
    "I'm a Computer Science undergraduate at Petra Christian University, where I also serve as an Assistant Lecturer helping students learn to build software.",
    "I enjoy working across the whole stack — from crafting responsive frontends and REST APIs to designing service-oriented backends and shipping native mobile apps. My projects span TypeScript, Python, Laravel, and Kotlin.",
    "I care about clean architecture, thoughtful UX, and turning ideas into products people actually use.",
  ],

  // Links — replace the TODO ones with your real profiles.
  links: {
    github: "https://github.com/RichardEfrem",
    email: "richardomega144@gmail.com",
    linkedin: "https://www.linkedin.com/in/", // TODO: add your LinkedIn
    instagram: "https://www.instagram.com/richardefrem_/",
    // WhatsApp uses international format without "+" or spaces.
    whatsapp: "https://wa.me/6281936391615",
    resumeUrl: "/resume.pdf", // TODO: drop a resume.pdf into /public
  },
};

export type Profile = typeof profile;

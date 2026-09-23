import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiLaravel,
  SiPhp,
  SiFlutter,
  SiDart,
  SiKotlin,
  SiAndroid,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiNodedotjs,
  SiNestjs,
  SiPrisma,
  SiHtml5,
} from "react-icons/si";

export type SkillGroup = {
  label: string;
  note: string;
  skills: { name: string; icon: IconType; color: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    note: "Interfaces that stay fast and readable",
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    ],
  },
  {
    label: "Backend",
    note: "APIs and services behind the product",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
    ],
  },
  {
    label: "Mobile",
    note: "Native and cross-platform apps",
    skills: [
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      { name: "Android", icon: SiAndroid, color: "#3DDC84" },
    ],
  },
  {
    label: "Data & Tooling",
    note: "Storage, versioning, and delivery",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
    ],
  },
];

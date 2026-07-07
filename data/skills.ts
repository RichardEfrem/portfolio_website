// ─────────────────────────────────────────────────────────────
//  Skills grid. Icons come from react-icons (Simple Icons set).
//  Add/remove freely.
// ─────────────────────────────────────────────────────────────
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
  SiHtml5,
} from "react-icons/si";

export type SkillGroup = {
  label: string;
  skills: { name: string; icon: IconType; color: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
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
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
    ],
  },
  {
    label: "Mobile",
    skills: [
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      { name: "Android", icon: SiAndroid, color: "#3DDC84" },
    ],
  },
  {
    label: "Data & Tools",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
    ],
  },
];

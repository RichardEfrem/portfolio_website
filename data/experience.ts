export type Role = {
  title: string;
  period: string;
  points: string[];
};

export type Experience = {
  company: string;
  location: string;
  period: string;
  roles: Role[];
};

export const experience: Experience[] = [
  {
    company: "Petra Christian University",
    location: "Surabaya, East Java",
    period: "Feb 2024 — Aug 2026",
    roles: [
      {
        title: "Assistant Lecturer",
        period: "Feb 2024 — Aug 2026",
        points: [
          "Led practicum sessions for Basic Programming, Statistics, OOP, Data Structures, and Database Systems (Java, Python, PostgreSQL), guiding students through ERD design, normalization, and SQL.",
          "Adapted course materials to curriculum changes and resolved technical issues in real time, sharpening teaching and public speaking skills across sessions.",
        ],
      },
      {
        title: "Lab Assistant",
        period: "Jan 2026 — Aug 2026",
        points: [
          "Maintained lab equipment and infrastructure and developed practicum modules for Database Systems, keeping sessions running without technical disruption.",
          "Provided on-site technical support and direct assistance to lecturers during practicum sessions.",
        ],
      },
    ],
  },
  {
    company: "PT. Multi Spunindo Jaya",
    location: "Krian, Sidoarjo",
    period: "Jan 2025 — Jun 2025",
    roles: [
      {
        title: "Intern Web Developer",
        period: "Jan 2025 — Jun 2025",
        points: [
          "Built a Laravel-based web application for the marketing team, digitizing a manual, multi-station sample request process into a single workflow accessible from anywhere.",
          "Added automated email notifications at every stage of the request process, eliminating manual follow-up and significantly reducing request turnaround time.",
        ],
      },
    ],
  },
  {
    company: "Excedio Event Organizer",
    location: "Surabaya, East Java",
    period: "Mar 2025 — Jun 2026",
    roles: [
      {
        title: "Event Organizer Leader & Crew",
        period: "Mar 2025 — Jun 2026",
        points: [
          "Led and coordinated event crews and maintained direct client communication to ensure execution matched expectations.",
          "Proactively identified support needs and resolved on-the-spot issues, anticipating problems early to keep events running smoothly under pressure.",
        ],
      },
    ],
  },
];

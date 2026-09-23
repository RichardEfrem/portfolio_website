export type Shot = { src: string; caption: string };

export type CaseStudy = {
  overview: string;
  sections: { heading: string; points: string[] }[];
};

export type Project = {
  title: string;
  context: string;
  description: string;
  tags: string[];
  repo: string;
  repos?: { frontend: string; backend: string };
  demo?: string;
  image?: string;
  gallery?: Shot[];
  caseStudy?: CaseStudy;
  featured?: boolean;
  category: "Web" | "Mobile" | "Backend";
};

export const projects: Project[] = [
  {
    title: "Iconspirit",
    context: "Factory production management",
    description:
      "A production-floor system for a custom furniture manufacturer: order intake, material inventory, a scheduling engine that plans work across stations and crews, and a runtime that advances the plan on its own.",
    tags: ["TypeScript", "Next.js", "Laravel", "PostgreSQL"],
    repo: "https://github.com/RichardEfrem/iconspirit_frontend",
    repos: {
      frontend: "https://github.com/RichardEfrem/iconspirit_frontend",
      backend: "https://github.com/RichardEfrem/iconspirit_backend",
    },
    gallery: [
      { src: "/projects/iconspirit/dashboard.jpg", caption: "Dashboard" },
      { src: "/projects/iconspirit/new-orders.jpg", caption: "New orders" },
      {
        src: "/projects/iconspirit/awaiting-material.jpg",
        caption: "Awaiting material",
      },
      {
        src: "/projects/iconspirit/material-requests.jpg",
        caption: "Material requests",
      },
      { src: "/projects/iconspirit/inventory.jpg", caption: "Inventory" },
      { src: "/projects/iconspirit/timeline.jpg", caption: "Station timeline" },
      { src: "/projects/iconspirit/order-view.jpg", caption: "Live orders" },
      { src: "/projects/iconspirit/order-detail.jpg", caption: "Order detail" },
    ],
    caseStudy: {
      overview:
        "Every piece of furniture on the factory floor passes through the same three stations — woodwork, paint, then accessories — and each station is staffed by crews with limited capacity. Iconspirit replaces spreadsheet planning with a system that takes an order from intake to delivery: it tracks materials, plans the work, starts each job when its crew is free, and reports cost and timing when the order is done. It is a decoupled build: a Laravel API owns every business rule, and a Next.js app renders it.",
      sections: [
        {
          heading: "Order lifecycle",
          points: [
            "Orders move through an explicit state machine: new → awaiting material → awaiting scheduling → in progress → finished (or cancelled).",
            "An order is only schedulable once its materials have been deducted from stock, so the plan never includes work the factory can't physically start.",
            "Material arrival can be confirmed per order or in batch, and a slipping ETA can be pushed back without losing the order's place.",
            "Work orders (SPK) are generated as PDFs in the browser with @react-pdf/renderer and printed straight from the app.",
          ],
        },
        {
          heading: "The scheduling engine",
          points: [
            "Ordering jobs across fixed stations is a permutation flow-shop problem, which is NP-hard, so the planner uses a hybrid heuristic instead of an exact solver.",
            "Each job's duration is estimated from its real dimensions (length × height × quantity) and split across the three stations by fixed ratios.",
            "Jobs are grouped per factory and sorted into five bands: urgent and deadline-critical work is ordered by Earliest Due Date to protect deadlines, and everything with slack is ordered by NEH (Nawaz–Enscore–Ham) to minimise total finish time.",
            "The sequence is then mapped onto the real calendar — Monday to Friday working hours, earliest-available crew per station, and never before a job's materials arrive.",
            "Every tuning constant lives in one config file. Comparison tests showed NEH saves about a working day of makespan but can miss deadlines under contention, which is why critical work is routed through EDD.",
          ],
        },
        {
          heading: "Live execution",
          points: [
            "A scheduled command runs every minute and starts any station whose slot has arrived and whose crew is free — nobody has to click \"start\", and a crew is never double-booked.",
            "Operators only ever mark a station complete; the system then starts the next station, reflows any knock-on slots, and finishes the order after the last one.",
            "Early or late material arrivals shift the plan automatically, and all planning and runtime work runs under one global lock so a background tick can't race an operator.",
            "Live tracking pages refresh every 30 seconds to follow the floor as it moves.",
          ],
        },
        {
          heading: "Architecture & security",
          points: [
            "The backend is layered: thin controllers validate and shape JSON, services hold every rule, and Eloquent models map to PostgreSQL — so the scheduler is testable without HTTP.",
            "Authentication uses Laravel Sanctum's cookie sessions with CSRF protection, so credentials never reach JavaScript. Next.js server components forward cookies and Origin headers by hand so sessions work during server rendering.",
            "Four roles — admin, operator, inventory and owner — are enforced on the server. The frontend only hides what a role can't use.",
            "The UI is built with shadcn/ui, react-hook-form and Zod, and server-side validation errors are mapped back onto the form fields.",
          ],
        },
      ],
    },
    category: "Web",
    featured: true,
  },
  {
    title: "GunSnip",
    context: "Gunpla e-commerce platform",
    description:
      "A storefront and back office on one typed codebase: faceted catalogue search, server-computed checkout with vouchers and tiered Indonesian shipping, transactional order and payment state machines, an immutable inventory ledger, and verified-buyer reviews minted on delivery.",
    tags: ["TypeScript", "Next.js", "NestJS", "PostgreSQL", "Prisma"],
    repo: "https://github.com/RichardEfrem/GunSnipV2",
    gallery: [
      { src: "/projects/gunsnip/home-1.jpg", caption: "Homepage" },
      { src: "/projects/gunsnip/home-2.jpg", caption: "Homepage" },
      { src: "/projects/gunsnip/home-3.jpg", caption: "Homepage" },
      { src: "/projects/gunsnip/catalogue-1.jpg", caption: "Catalogue" },
      { src: "/projects/gunsnip/catalogue-2.jpg", caption: "Catalogue" },
      { src: "/projects/gunsnip/product-1.jpg", caption: "Product page" },
      { src: "/projects/gunsnip/product-2.jpg", caption: "Product page" },
      { src: "/projects/gunsnip/product-3.jpg", caption: "Product page" },
      { src: "/projects/gunsnip/cart.jpg", caption: "Cart" },
    ],
    caseStudy: {
      overview:
        "GunSnip is a personal hobby project, not a live commercial store. Most hobby shops sell you a Master Grade kit and leave you to discover it needs a nipper, a hobby knife and a panel liner. GunSnip models that relationship as data — every kit knows what it needs on the bench and says so on the product page. It is an npm-workspaces monorepo: a Next.js storefront and admin, a NestJS REST API, and a shared package that exposes the Postgres enums as TypeScript union types to both sides.",
      sections: [
        {
          heading: "Storefront & search",
          points: [
            "Category tree with faceted filtering, sorting and pagination held entirely in the URL, so every view is shareable and back-button safe.",
            "Full-text search on a Postgres tsvector column maintained by a trigger (it folds in brand and series names from other tables), with a pg_trgm fuzzy fallback so a misspelled kit name still finds the kit.",
            "Product pages carry variants, related kits, purchasable bundles and the tool requirements for the build.",
          ],
        },
        {
          heading: "Checkout, orders & payments",
          points: [
            "Totals are recomputed on the server on every call — the client never sends a price. Vouchers are rejected with a specific reason (expired, fully claimed, minimum not met).",
            "Indonesian province → city → district addressing drives tiered shipping rates; guests can track an order by number and email.",
            "Stock is reserved and the order created in a single transaction, placement is idempotent, and orders and payments each run on an explicit state machine.",
            "A mock payment provider sits behind the same interface a real gateway will implement, and a scheduled job expires unpaid orders and releases their held stock.",
          ],
        },
        {
          heading: "Back office & reviews",
          points: [
            "Admin dashboard, product and variant editing with image upload, order fulfilment, voucher management, banners and reference data.",
            "Inventory changes are written to an immutable ledger rather than overwriting a stock count, so every movement is auditable.",
            "Reviews are invitation-only: a tokenised link is minted when an order is delivered, so only verified buyers can review. Reviews capture build time, difficulty and tools used, and go through a moderation queue with shop replies.",
            "Transactional email goes out on every order event — placement, payment, each fulfilment step.",
          ],
        },
        {
          heading: "Engineering",
          points: [
            "Unit tests cover the four places money and inventory break: price calculation, stock reservation and release, both state machines, and voucher validation.",
            "An integration suite rebuilds a dedicated _test database from migrations and seed before every run, and refuses to start against anything else.",
            "Every environment variable is validated at boot, and a lint step fails the build if a palette change drops any colour pair below the contrast floor.",
            "Customer accounts and a real payment gateway are deliberately deferred, with their seams already in place so adding them is a small change rather than a refactor.",
          ],
        },
      ],
    },
    category: "Web",
    featured: true,
  },
  {
    title: "Class Offering Service",
    context: "Service-oriented architecture",
    description:
      "A standalone microservice owning class-offering logic and exposing it over a documented REST interface.",
    tags: ["Python", "Microservices", "REST API"],
    repo: "https://github.com/RichardEfrem/penawaran_kelas_service",
    category: "Backend",
  },
  {
    title: "AbsoluteCinema",
    context: "Android development — final project",
    description:
      "A native cinema ticketing app: browse showtimes, pick seats, and confirm a booking.",
    tags: ["Kotlin", "Android"],
    repo: "https://github.com/RichardEfrem/AbsoluteCinema",
    category: "Mobile",
  },
  {
    title: "Tasked",
    context: "Android development — coursework",
    description:
      "A task manager for Android — create, track, and close out tasks on the go.",
    tags: ["Kotlin", "Android"],
    repo: "https://github.com/RichardEfrem/Tasked",
    category: "Mobile",
  },
];

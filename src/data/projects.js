export const projects = [
  {
    id: "project-1",
    title: "Project Alpha",
    tagline: "A modern web application",
    thumbnail: "/images/projects/project-1.jpg",
    stack: ["React", "Node.js", "MongoDB"],
    description:
      "A full-stack web application with authentication, CRUD operations, and a clean dashboard UI. Built to explore modern React patterns and REST API design.",
    liveUrl: "#",
    githubUrl: "https://github.com/shkMahdi",
    challenges:
      "Handling async state management across nested components was the biggest challenge. Solved it with proper Context API usage and custom hooks.",
    improvements:
      "Plan to add real-time features using WebSockets and improve mobile responsiveness.",
    gradient: "from-emerald-500/30 via-cyan-500/20 to-slate-900",
  },
  {
    id: "project-2",
    title: "Nebula Dashboard",
    tagline: "Analytics with Firebase backend",
    thumbnail: "/images/projects/project-2.jpg",
    stack: ["React", "Firebase", "Tailwind CSS"],
    description:
      "A responsive analytics dashboard with Firebase Auth, Firestore queries, and role-based views. Focused on fast filtering and accessible data visualization.",
    liveUrl: "#",
    githubUrl: "https://github.com/shkMahdi",
    challenges:
      "Optimizing Firestore reads while keeping filters snappy required composite indexes and careful query batching.",
    improvements:
      "Add export to CSV, dark-mode charts, and server-side aggregation for heavier datasets.",
    gradient: "from-violet-500/30 via-fuchsia-500/20 to-slate-900",
  },
  {
    id: "project-3",
    title: "Atlas Commerce",
    tagline: "Next.js storefront prototype",
    thumbnail: "/images/projects/project-3.jpg",
    stack: ["Next.js", "MongoDB", "Stripe"],
    description:
      "A storefront-style app with server components for catalog pages, MongoDB for inventory, and a Stripe-inspired checkout flow (test mode).",
    liveUrl: "#",
    githubUrl: "https://github.com/shkMahdi",
    challenges:
      "Keeping cart state consistent between server-rendered pages and client interactions meant leaning on URL state and shallow routing.",
    improvements:
      "Integrate real payments, inventory webhooks, and image optimization for product galleries.",
    gradient: "from-amber-500/30 via-orange-500/20 to-slate-900",
  },
  {
    id: "project-4",
    title: "Pixel Sketch Lab",
    tagline: "Canvas playroom in vanilla JS",
    thumbnail: "/images/projects/project-4.jpg",
    stack: ["JavaScript", "HTML5 Canvas", "CSS"],
    description:
      "A browser-based drawing board with layers, brush sizes, and export to PNG—built without frameworks to deepen DOM and Canvas fundamentals.",
    liveUrl: "#",
    githubUrl: "https://github.com/shkMahdi",
    challenges:
      "Smoothing stroke input on high-DPI screens required scaling the backing store and syncing pointer events carefully.",
    improvements:
      "Add undo/redo stacks, custom palettes, and touch-friendly controls for tablets.",
    gradient: "from-sky-500/30 via-blue-500/20 to-slate-900",
  },
  {
    id: "project-5",
    title: "Pulse Notes",
    tagline: "Markdown notes with local-first sync",
    thumbnail: "/images/projects/project-5.jpg",
    stack: ["React", "IndexedDB", "Vite"],
    description:
      "A lightweight notes client with Markdown preview, fuzzy search, and offline persistence via IndexedDB wrappers.",
    liveUrl: "#",
    githubUrl: "https://github.com/shkMahdi",
    challenges:
      "Debounced saves colliding with rapid edits needed a simple queue to serialize writes reliably.",
    improvements:
      "Optional cloud backup, collaborative cursors, and mobile quick-capture.",
    gradient: "from-rose-500/30 via-red-500/20 to-slate-900",
  },
  {
    id: "project-6",
    title: "Circuit CRM",
    tagline: "Team pipeline in Next + Prisma",
    thumbnail: "/images/projects/project-6.jpg",
    stack: ["Next.js", "Prisma", "PostgreSQL"],
    description:
      "A CRM-style pipeline for tracking leads and tasks with typed Prisma models, server actions, and optimistic UI updates.",
    liveUrl: "#",
    githubUrl: "https://github.com/shkMahdi",
    challenges:
      "Modeling flexible pipeline stages without over-normalizing pushed me to balance JSON columns with relational integrity.",
    improvements:
      "Email ingest, calendar sync, and richer reporting with chart primitives.",
    gradient: "from-lime-500/30 via-green-500/20 to-slate-900",
  },
];

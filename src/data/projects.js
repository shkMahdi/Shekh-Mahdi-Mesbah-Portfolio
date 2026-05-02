export const projects = [
  {
    id: "project-1",
    title: "Keen Keeper",
    tagline: "A friendship management and interaction tracking web app",
    thumbnail: "/images/projects/keen-keeper.jpg",
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Context API",
      "Recharts",
      "React Router"
    ],
    description:
      "Keen Keeper is a modern web application designed to help users maintain meaningful relationships by tracking their interactions with friends. Users can log calls, texts, and video calls, view interaction history in a timeline, and analyze their communication patterns through visual analytics like pie charts.",
    liveUrl: "https://keepyourkeen.netlify.app/",
    githubUrl: "https://github.com/shkMahdi/A7-Keen-Keeper",
    challenges:
      "Managing global state for interactions across multiple components and ensuring real-time updates in analytics and timelines was challenging. This was solved using the Context API and efficient state updates.",
    improvements:
      "Future improvements include adding user authentication, relationship goals with reminders, exporting interaction data, and building a mobile-friendly version with enhanced UI/UX.",
    gradient: "from-emerald-500/30 via-cyan-500/20 to-slate-900",
  },
  {
    id: "project-2",
    title: "DigiTools",
    tagline: "A digital tools platform with React and Tailwind CSS",
    thumbnail: "/images/projects/project-2.jpg",
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "React Icons",
      "JavaScript (ES6+)"
    ],
    description:
      "DigiTools is your all-in-one platform for premium digital tools, AI-powered resources, and productivity software. Whether you're a creator, designer, or business professional, we've got everything you need to work smarter and faster. Access high‑quality templates, AI tools, stock assets, and design resources all in one place, so you can focus on what you do best.",
    liveUrl: "https://digi-tools-and-more.netlify.app/",
    githubUrl: "https://github.com/shkMahdi/A6-DigiTools-Platform",
    challenges:
      "Implementing real‑time cart updates and smooth transitions on a dynamic product gallery while keeping the UI responsive across all screen sizes.",
    improvements:
      "Add user authentication, order history, product search/filtering, and export cart data as CSV or JSON for offline use.",
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

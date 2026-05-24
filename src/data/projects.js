export const projects = [
  {
    id: "project-1",
    title: "StudyNook",
    tagline: "A full-stack room booking platform for listing, discovering, and reserving study rooms by the hour",
    thumbnail: "/images/study-nook-mockup.png",
    stack: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS v4",
      "DaisyUI v5",
      "Better Auth",
      "MongoDB",
      "React Hook Form",
      "React Hot Toast",
    ],
    description:
      "StudyNook is a full-stack room booking platform where users can list, discover, and reserve study rooms by the hour. It features browsing rooms with details like capacity, floor, hourly rate, and amenities, authenticated room listings with photos and tags, hourly booking with automatic cost calculation, booking management, and secure authentication via email/password and Google OAuth.",
    liveUrl: "https://study-nook-ivory.vercel.app/",
    githubUrl: "https://github.com/shkMahdi/A9-Study-Nook",
    challenges:
      "Implementing JWT-based session handling for protected routes alongside Better Auth's Google OAuth flow required careful coordination. Managing real-time booking state and preventing double-bookings while keeping the UI responsive was also a key challenge.",
    improvements:
      "Future improvements include a calendar view for availability, real-time notifications for booking confirmations, review and rating system for rooms, and an admin dashboard for platform management.",
    gradient: "from-teal-500/30 via-cyan-500/20 to-slate-900",
  },
  {
    id: "project-2",
    title: "Skill Sphere",
    tagline: "An online course browsing and discovery platform",
    thumbnail: "/images/skill-sphere-mockup.png",
    stack: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS v4",
      "DaisyUI v5",
      "Better Auth",
      "MongoDB",
      "React Hook Form",
      "React Hot Toast",
      "React Spring",
      "Swiper"
    ],
    description:
      "Skill Sphere is a modern online course browsing platform where users can explore a variety of courses, view detailed information, and manage their profiles. It features authentication with email/password and Google OAuth, animated UI components like a hero slider and course cards, and a fully responsive design for seamless use across devices.",
    liveUrl: "https://skill-sphere-mu.vercel.app",
    githubUrl: "https://github.com/shkMahdi/A8-Skill-Sphere",
    challenges:
      "Implementing secure authentication with Better Auth and integrating Google OAuth alongside email/password login was complex. Managing state across dynamic course data, animations, and user sessions while maintaining performance and responsiveness also posed challenges.",
    improvements:
      "Future improvements include adding course enrollment and progress tracking, user reviews and ratings, bookmarking/favorites, advanced filtering, and an admin dashboard for course management.",
    gradient: "from-indigo-500/30 via-purple-500/20 to-slate-900",
  },
  {
    id: "project-3",
    title: "Keen Keeper",
    tagline: "A friendship management and interaction tracking web app",
    thumbnail: "/images/keen-keeper-mockup.png",
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
    id: "project-4",
    title: "DigiTools",
    tagline: "A digital tools platform with React and Tailwind CSS",
    thumbnail: "/images/digi-tools-mockup.png",
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
]
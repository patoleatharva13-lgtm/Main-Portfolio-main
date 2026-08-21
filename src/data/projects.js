export const projects = [
  {
    id: "buildstack",
    slug: "buildstack",
    title: "BuildStack 2.0",
    subtitle: "Enterprise Project Management Platform",
    featured: true,
    tag: "Flagship Project",
    category: "Full Stack Web Application",
    shortDescription: "A modern project management platform designed to help teams manage projects, roadmaps, documentation and collaboration in one unified workspace.",
    technologies: ["React", "Supabase", "Tailwind CSS", "Framer Motion", "JavaScript"],
    liveUrl: "https://buildstack-2-0.vercel.app/",
    githubUrl: "https://github.com/patoleatharva13-lgtm/Buildstack-2.0",
    caseStudyUrl: "/projects/buildstack",
    accentColor: "#8b5cf6",
    gradient: "from-purple-600/20 via-indigo-600/10 to-transparent",
    stats: [
      { label: "Core Modules", value: "9+" },
      { label: "State Layer", value: "Realtime" },
      { label: "Security", value: "Row-Level RLS" }
    ],
    features: [
      "Sprint boards & Kanban workflows",
      "Interactive product roadmap timeline",
      "Integrated documentation wiki",
      "Team role & permission management"
    ]
  },
  {
    id: "fintrack",
    slug: "fintrack",
    title: "FinTrack",
    subtitle: "Personal Finance & Expense Analytics",
    featured: false,
    tag: "Analytics & Finance",
    category: "Fintech Web App",
    shortDescription: "Modern personal finance tracker with visual analytics, categorical budgeting, and seamless transaction management.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Chart Analytics", "Framer Motion"],
    liveUrl: "https://fin-track-two-tan.vercel.app/",
    githubUrl: "https://github.com/patoleatharva13-lgtm/FinTrack",
    caseStudyUrl: "/projects/fintrack",
    accentColor: "#06b6d4",
    gradient: "from-cyan-600/20 via-blue-600/10 to-transparent",
    stats: [
      { label: "Visual Dashboards", value: "Dynamic" },
      { label: "Budget Categories", value: "Flexible" },
      { label: "Performance", value: "Sub-second" }
    ],
    features: [
      "Real-time expense & income tracking",
      "Visual spending breakdowns & trends",
      "Smart category filtering and sorting",
      "Persistent state & responsive analytics"
    ]
  },
  {
    id: "healthconnect",
    slug: "healthconnect",
    title: "HealthConnect",
    subtitle: "Healthcare Discovery & Appointment Platform",
    featured: false,
    tag: "Healthcare Portal",
    category: "HealthTech UI",
    shortDescription: "Healthcare platform for discovering doctors, exploring specialized medical services, and scheduling patient appointments.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Modern Component Architecture"],
    liveUrl: "https://healthconnectcare.lovable.app/",
    githubUrl: null, // Configurable / Not provided
    caseStudyUrl: "/projects/healthconnect",
    accentColor: "#10b981",
    gradient: "from-emerald-600/20 via-teal-600/10 to-transparent",
    stats: [
      { label: "Doctor Directory", value: "Specialized" },
      { label: "Booking Flow", value: "Step-by-step" },
      { label: "Accessibility", value: "High Contrast" }
    ],
    features: [
      "Specialty-based physician search",
      "Interactive clinic & doctor profile cards",
      "Appointment booking workflows",
      "Mobile-optimized medical service directory"
    ]
  },
  {
    id: "techshop",
    slug: "techshop",
    title: "TechShop",
    subtitle: "Modern E-Commerce Storefront",
    featured: false,
    tag: "E-Commerce System",
    category: "Full Stack Commerce",
    shortDescription: "Modern React + Supabase e-commerce application with dynamic product catalogs, user authentication, and interactive shopping cart UI.",
    technologies: ["React", "Supabase", "Tailwind CSS", "JavaScript", "Node.js"],
    liveUrl: null, // Configurable in data
    githubUrl: null, // Configurable in data
    caseStudyUrl: "/projects/techshop",
    accentColor: "#f59e0b",
    gradient: "from-amber-600/20 via-orange-600/10 to-transparent",
    stats: [
      { label: "Cart & Checkout", value: "Realtime" },
      { label: "Auth Backend", value: "Supabase" },
      { label: "Catalog", value: "Relational DB" }
    ],
    features: [
      "Dynamic product catalog with filtering",
      "Secure user authentication & sessions",
      "Persistent cart state & order calculations",
      "Clean administrative catalog controls"
    ]
  }
];

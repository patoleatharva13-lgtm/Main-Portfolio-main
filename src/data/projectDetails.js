export const projectDetails = {
  buildstack: {
    slug: "buildstack",
    title: "BuildStack 2.0",
    subtitle: "Enterprise-Grade Collaborative Project & Sprint Management Platform",
    tagline: "Unifying roadmaps, sprint execution, and technical documentation into a single lightning-fast workspace.",
    category: "Full Stack Web Application",
    status: "Production Ready",
    timeline: "3 Months",
    role: "Sole Full Stack Developer & UI/UX Designer",
    liveUrl: "https://buildstack-2-0.vercel.app/",
    githubUrl: "https://github.com/patoleatharva13-lgtm/Buildstack-2.0",
    accentColor: "#8b5cf6",
    accentGlow: "rgba(139, 92, 246, 0.25)",
    badgeText: "Flagship Project",
    overview: "BuildStack 2.0 is a comprehensive project workspace engineered to solve tool fragmentation for engineering and product teams. It integrates sprint task planning, Kanban boards, Gantt-style milestone roadmaps, collaborative markdown documentation, and real-time team permissions into an intuitive, keyboard-accessible web application.",
    problem: "Modern engineering teams frequently suffer from context switching between disparate systems for issue tracking, release roadmapping, and internal wikis. Many enterprise solutions are sluggish, overly bloated, and lack immediate real-time synchronization between sprint boards and executive roadmaps.",
    solution: "BuildStack 2.0 delivers an ultra-fast, unified interface powered by React and Supabase. By leveraging Supabase PostgreSQL with Row Level Security (RLS) and real-time subscriptions, updates to backlog items, sprint milestones, and team permissions propagate instantly across all active client sessions.",
    coreFeatures: [
      {
        id: "auth",
        title: "Secure Authentication & Session Handling",
        description: "Robust email/password and OAuth authentication backed by Supabase Auth with JWT token rotation and secure session persistence.",
        tag: "Security"
      },
      {
        id: "routes",
        title: "Protected Application Routes",
        description: "Client-side route guards ensuring strict role-based access control (RBAC), automatic redirection for unauthorized views, and persistent URL state.",
        tag: "Navigation"
      },
      {
        id: "projects",
        title: "Multi-Project Workspace Management",
        description: "Create, configure, and isolate distinct project workspaces with customized priority matrices, deadlines, and member role assignments.",
        tag: "Core Workspace"
      },
      {
        id: "teams",
        title: "Granular Team Management & Invites",
        description: "Assign member permissions (Owner, Admin, Member, Viewer) with fine-grained capability checks on project deletion, edits, and sprint closures.",
        tag: "Collaboration"
      },
      {
        id: "sprint",
        title: "Interactive Sprint Kanban Board",
        description: "Fluid drag-and-drop task boards with custom status columns, quick filtering by assignee/priority, inline editing, and instant state synchronization.",
        tag: "Productivity"
      },
      {
        id: "roadmap",
        title: "Visual Product Roadmap & Milestones",
        description: "Interactive timeline visualizer linking sprint tasks to higher-level deliverables, providing stakeholders with high-level release visibility.",
        tag: "Planning"
      },
      {
        id: "docs",
        title: "Integrated Technical Documentation Wiki",
        description: "Rich markdown document editor supporting code blocks, nested organizational trees, and live preview for technical specifications and SOPs.",
        tag: "Knowledge Base"
      },
      {
        id: "analytics",
        title: "Real-time Analytics & Velocity Dashboard",
        description: "Visual metric widgets calculating sprint completion rates, blocker trends, team velocity, and overdue task distributions.",
        tag: "Metrics"
      },
      {
        id: "responsive",
        title: "High-Performance Responsive UI",
        description: "Engineered with Tailwind CSS and Framer Motion for flawless usability across mobile screens, tablet viewports, and multi-monitor setups.",
        tag: "Design System"
      }
    ],
    techStack: [
      { category: "Frontend Framework", name: "React 18+", role: "Component architecture, custom hooks, and state isolation" },
      { category: "Styling & Tokens", name: "Tailwind CSS", role: "Utility-first design system with dark mode glassmorphism" },
      { category: "Animations", name: "Framer Motion", role: "Fluid layout transitions, modal reveals, and drag gestures" },
      { category: "Backend & Database", name: "Supabase (PostgreSQL)", role: "Relational data schema, real-time channels, and storage" },
      { category: "Auth & Security", name: "Supabase Auth & RLS", role: "JWT session tokens and database-level security policies" },
      { category: "Routing", name: "React Router", role: "Dynamic nested routes with protected route guards" },
      { category: "Hosting & CI/CD", name: "Vercel", role: "Automated Git push preview deployments and global edge CDN" }
    ],
    architecture: {
      title: "System Architecture Flow",
      description: "A decoupled, client-first architecture leveraging PostgreSQL Row-Level Security for bulletproof multi-tenant isolation.",
      layers: [
        {
          name: "Presentation Tier",
          detail: "React SPA + Framer Motion + Tailwind CSS",
          subItems: ["Virtual DOM rendering", "Optimistic UI state updates", "Keyboard shortcuts & Accessibility"]
        },
        {
          name: "State & Data Layer",
          detail: "Custom Contexts & Custom Hooks",
          subItems: ["Realtime subscription listeners", "Cache synchronization", "Form validation & debounce"]
        },
        {
          name: "Backend-as-a-Service",
          detail: "Supabase Platform",
          subItems: ["Row Level Security (RLS) policies", "Database triggers & functions", "Secure Storage buckets"]
        },
        {
          name: "Data Persistence",
          detail: "PostgreSQL Relational Engine",
          subItems: ["Normalized relational tables", "Indexed foreign keys", "Atomic transaction rollbacks"]
        }
      ]
    },
    gallery: [
      {
        title: "Sprint Kanban Dashboard",
        caption: "Intuitive task cards with visual priority indicators, assignees, and real-time status transitions.",
        type: "kanban",
        color: "#8b5cf6"
      },
      {
        title: "Product Roadmap Timeline",
        caption: "Milestone schedule tracking epic progress and cross-team dependencies across quarters.",
        type: "roadmap",
        color: "#6366f1"
      },
      {
        title: "Project Analytics & Velocity",
        caption: "Real-time velocity charts, open blocker statistics, and member workload distribution.",
        type: "analytics",
        color: "#38bdf8"
      },
      {
        title: "Documentation & Knowledge Base",
        caption: "Markdown documentation system with structured category folders and syntax highlighting.",
        type: "docs",
        color: "#a855f7"
      }
    ],
    timelineEvents: [
      { phase: "Phase 1: Architecture & Data Modeling", duration: "Weeks 1-2", description: "Designed relational database schema in PostgreSQL, defined RLS rules, and established the UI design system." },
      { phase: "Phase 2: Authentication & Core Workspace", duration: "Weeks 3-5", description: "Implemented JWT authentication, role management, project isolation, and protected routing layers." },
      { phase: "Phase 3: Sprint Board & Realtime Sync", duration: "Weeks 6-8", description: "Engineered drag-and-drop Kanban boards with optimistic UI updates and live Supabase subscription feeds." },
      { phase: "Phase 4: Roadmap, Wiki & Analytics", duration: "Weeks 9-11", description: "Built roadmap timeline views, markdown documentation editor, and dynamic analytics widgets." },
      { phase: "Phase 5: Optimization & Production Launch", duration: "Week 12", description: "Audited accessibility, optimized asset bundling, configured Vercel edge deployment, and executed stress tests." }
    ],
    challenges: [
      {
        challenge: "Real-time Race Conditions on Concurrent Task Edits",
        solution: "Implemented optimistic UI updates paired with Supabase PostgreSQL broadcast channels and timestamp-based conflict reconciliation to guarantee UI consistency."
      },
      {
        challenge: "Complex Role-Based Permission Overhead",
        solution: "Authored granular PostgreSQL Row Level Security (RLS) policies directly on the database tables, preventing unauthorized read/write queries at the lowest system level."
      },
      {
        challenge: "Smooth Drag-and-Drop Performance with Large Backlogs",
        solution: "Employed memoized React components and optimized virtualized list rendering to maintain 60 FPS during intensive drag-and-drop rearrangements."
      }
    ],
    learnings: [
      "Mastered multi-tenant database modeling and advanced PostgreSQL Row Level Security.",
      "Gained deep expertise in orchestrating optimistic client-side UI updates with server-side database validation.",
      "Deepened understanding of scalable state isolation and modular design systems in production React apps."
    ],
    nextProjectSlug: "fintrack",
    nextProjectTitle: "FinTrack"
  },
  fintrack: {
    slug: "fintrack",
    title: "FinTrack",
    subtitle: "Modern Personal Finance & Expense Analytics Platform",
    tagline: "Empowering users to track daily cash flow, analyze spending patterns, and hit savings goals with zero friction.",
    category: "Fintech Web App",
    status: "Live & Deployed",
    timeline: "6 Weeks",
    role: "Frontend & Full Stack Developer",
    liveUrl: "https://fin-track-two-tan.vercel.app/",
    githubUrl: "https://github.com/patoleatharva13-lgtm/FinTrack",
    accentColor: "#06b6d4",
    accentGlow: "rgba(6, 182, 212, 0.25)",
    badgeText: "Finance & Analytics",
    overview: "FinTrack is a sleek, responsive financial dashboard designed to simplify budgeting and expense auditing. It gives individuals clear visual breakdowns of where their money goes through interactive charts, category budgeting, and instant balance computations.",
    problem: "Most budgeting tools are either overly complex enterprise spreadsheets or ad-cluttered mobile apps that make basic transaction logging slow and tedious. Users abandon tracking when inputting an expense takes more than a few seconds.",
    solution: "FinTrack offers a minimal, distraction-free interface with instant transaction entry, automatic categorized totals, and visual monthly burn-rate charts. Built with React and modern Tailwind CSS, it ensures fluid performance on any device.",
    coreFeatures: [
      {
        id: "transactions",
        title: "Instant Transaction Logging",
        description: "Quickly record income and expense entries with custom dates, notes, and dynamic categories.",
        tag: "Core Logging"
      },
      {
        id: "analytics",
        title: "Visual Spending Breakdowns",
        description: "Interactive categorical donut and bar charts showing expenditure distribution across housing, groceries, tech, and leisure.",
        tag: "Analytics"
      },
      {
        id: "budgeting",
        title: "Monthly Budget Thresholds",
        description: "Set target monthly spending caps with visual progress meters that alert users before exceeding allocations.",
        tag: "Budgeting"
      },
      {
        id: "filters",
        title: "Multi-parameter Search & Filtering",
        description: "Filter transactions by date ranges, categories, amounts, or custom search terms with instant query response.",
        tag: "Search"
      },
      {
        id: "export",
        title: "Data Persistence & Export",
        description: "Local storage persistence guarantees instant offline access without latency or cloud down-time.",
        tag: "Storage"
      }
    ],
    techStack: [
      { category: "Frontend", name: "React", role: "Reactive dashboard state and interactive UI components" },
      { category: "Styling", name: "Tailwind CSS", role: "High-contrast dark theme and glassmorphic card layouts" },
      { category: "Visualizations", name: "Custom SVG & Charts", role: "Lightweight, responsive financial graphs" },
      { category: "Animations", name: "Framer Motion", role: "Smooth transitions for transaction addition and modal views" },
      { category: "Deployment", name: "Vercel", role: "Continuous delivery and edge hosting" }
    ],
    architecture: {
      title: "FinTrack Data & State Architecture",
      description: "A fast, client-side transactional store with reactive recalculation hooks.",
      layers: [
        {
          name: "User Interface",
          detail: "React Components + Tailwind CSS",
          subItems: ["Dynamic Dashboard cards", "Transaction modal forms", "Interactive category legends"]
        },
        {
          name: "Computation Engine",
          detail: "Custom Financial Hooks",
          subItems: ["Balance aggregation algorithms", "Category sum reducers", "Monthly trend calculations"]
        },
        {
          name: "Storage Layer",
          detail: "Persistent Client Storage",
          subItems: ["Fast structured JSON storage", "Validation checks", "Export/Import capabilities"]
        }
      ]
    },
    gallery: [
      {
        title: "Financial Dashboard Overview",
        caption: "High-level summary displaying total balance, monthly income, expense totals, and recent activity.",
        type: "analytics",
        color: "#06b6d4"
      },
      {
        title: "Transaction Ledger & Search",
        caption: "Searchable transaction records with filterable categories and quick deletion controls.",
        type: "kanban",
        color: "#3b82f6"
      }
    ],
    timelineEvents: [
      { phase: "Phase 1: Concept & Wireframes", duration: "Weeks 1-2", description: "Identified pain points in personal finance logging and formulated the minimal UI prototype." },
      { phase: "Phase 2: Core Ledger & Calculations", duration: "Weeks 3-4", description: "Built transaction schemas, balance algorithms, and custom category management." },
      { phase: "Phase 3: Visual Analytics & Polishing", duration: "Weeks 5-6", description: "Integrated interactive charts, responsive mobile styling, and deployed to Vercel." }
    ],
    challenges: [
      {
        challenge: "Rendering Large Historical Transaction Lists Without Lag",
        solution: "Structured transaction state with indexed data structures and memoized ledger rows to guarantee smooth scrolling on low-end mobile devices."
      },
      {
        challenge: "Accurate Floating-Point Currency Calculations",
        solution: "Implemented precise cent-based integer math for internal balance additions to prevent Javascript floating point arithmetic quirks."
      }
    ],
    learnings: [
      "Deepened practical knowledge of React state reducers and complex mathematical aggregations.",
      "Refined skills in creating intuitive data visualizations that communicate key metrics at a glance."
    ],
    nextProjectSlug: "healthconnect",
    nextProjectTitle: "HealthConnect"
  },
  healthconnect: {
    slug: "healthconnect",
    title: "HealthConnect",
    subtitle: "Healthcare Discovery & Patient Appointment Portal",
    tagline: "Connecting patients with verified medical practitioners and streamlining the clinical consultation journey.",
    category: "HealthTech UI",
    status: "Live & Deployed",
    timeline: "4 Weeks",
    role: "Frontend Developer",
    liveUrl: "https://healthconnectcare.lovable.app/",
    githubUrl: null, // Configurable
    accentColor: "#10b981",
    accentGlow: "rgba(16, 185, 129, 0.25)",
    badgeText: "Healthcare Portal",
    overview: "HealthConnect is an accessible, human-centered healthcare platform designed to make finding trusted physicians and scheduling clinical consultations effortless. It emphasizes clarity, empathy, and intuitive navigation for patients of all technical proficiencies.",
    problem: "Navigating traditional healthcare appointment systems is often frustrating and cumbersome, with outdated doctor listings, lack of specialty filtering, and confusing booking steps.",
    solution: "HealthConnect provides a modern medical portal featuring clear specialty categorizations, detailed practitioner profiles, availability slots, and an easy step-by-step appointment scheduling experience.",
    coreFeatures: [
      {
        id: "search",
        title: "Specialty & Doctor Discovery",
        description: "Browse verified doctors across cardiology, neurology, pediatrics, dermatology, and general medicine with instant search.",
        tag: "Discovery"
      },
      {
        id: "profile",
        title: "Practitioner Profiles & Credentials",
        description: "Comprehensive physician detail cards showcasing clinical experience, patient reviews, qualifications, and clinic locations.",
        tag: "Doctor Info"
      },
      {
        id: "booking",
        title: "Interactive Appointment Booking",
        description: "Intuitive date and time slot selector guiding patients through a seamless 3-step appointment confirmation process.",
        tag: "Booking"
      },
      {
        id: "a11y",
        title: "Accessible, High-Contrast Interface",
        description: "Designed with large typography, clear focus states, and high-contrast color pairings for maximum accessibility.",
        tag: "Accessibility"
      }
    ],
    techStack: [
      { category: "Frontend Framework", name: "React", role: "Component architecture and state management" },
      { category: "Styling", name: "Tailwind CSS", role: "Clean healthcare aesthetic with responsive layouts" },
      { category: "Icons & Assets", name: "Lucide & React Icons", role: "Medical and navigational iconography" },
      { category: "Hosting", name: "Cloud Edge Hosting", role: "Fast global asset delivery" }
    ],
    architecture: {
      title: "HealthConnect Application Flow",
      description: "A patient-centric navigation hierarchy structured for quick doctor discovery and low-friction booking.",
      layers: [
        {
          name: "Patient Interface",
          detail: "Responsive React Views",
          subItems: ["Doctor catalog & filters", "Specialty landing cards", "Interactive time-slot selector"]
        },
        {
          name: "Booking Controller",
          detail: "Form State & Validation Layer",
          subItems: ["Patient details validation", "Appointment slot reservation", "Confirmation dialogs"]
        },
        {
          name: "Service Directory",
          detail: "Structured Medical Data",
          subItems: ["Doctor profiles & credentials", "Specialty taxonomies", "Clinic operational hours"]
        }
      ]
    },
    gallery: [
      {
        title: "Doctor Directory & Filters",
        caption: "Specialty-based physician catalog with ratings, availability, and consultation fees.",
        type: "kanban",
        color: "#10b981"
      },
      {
        title: "Appointment Booking Flow",
        caption: "Step-by-step booking interface for selecting time slots and entering patient notes.",
        type: "docs",
        color: "#14b8a6"
      }
    ],
    timelineEvents: [
      { phase: "Phase 1: Healthcare UX Research", duration: "Week 1", description: "Analyzed patient booking drop-off rates and designed accessible wireframes." },
      { phase: "Phase 2: Doctor Directory & Filters", duration: "Weeks 2-3", description: "Built dynamic physician listing components and specialty tag search." },
      { phase: "Phase 3: Booking Flow & Deployment", duration: "Week 4", description: "Implemented multi-step booking modal, accessibility testing, and deployment." }
    ],
    challenges: [
      {
        challenge: "Designing for Diverse Age Groups and Accessibility Standards",
        solution: "Enforced WCAG AA contrast standards, large interactive tap targets (minimum 48px), and plain-language validation prompts."
      }
    ],
    learnings: [
      "Deepened appreciation for human-first UI design in mission-critical industries like healthcare.",
      "Mastered clear multi-step modal workflows that reduce user cognitive load."
    ],
    nextProjectSlug: "techshop",
    nextProjectTitle: "TechShop"
  },
  techshop: {
    slug: "techshop",
    title: "TechShop",
    subtitle: "Modern React + Supabase E-Commerce Platform",
    tagline: "A scalable, high-performance online electronics storefront featuring real-time inventory, secure auth, and fluid cart flows.",
    category: "Full Stack Commerce",
    status: "Configurable / Architecture Ready",
    timeline: "5 Weeks",
    role: "Full Stack Developer",
    liveUrl: null, // Configurable in data
    githubUrl: null, // Configurable in data
    accentColor: "#f59e0b",
    accentGlow: "rgba(245, 158, 11, 0.25)",
    badgeText: "E-Commerce System",
    overview: "TechShop is an e-commerce platform built to demonstrate scalable storefront architecture. Powered by React and Supabase, it handles dynamic product cataloging, category filtering, persistent shopping carts, user authentication, and administrative inventory controls.",
    problem: "Many small-to-medium e-commerce sites suffer from clunky navigation, slow product filtering, and cart state synchronization issues between devices and page refreshes.",
    solution: "TechShop delivers instant catalog search, responsive category filters, and an optimized cart state engine. Supabase handles user sessions and PostgreSQL product tables seamlessly.",
    coreFeatures: [
      {
        id: "catalog",
        title: "Dynamic Product Catalog",
        description: "Browse hardware and electronics with category sorting, price range filters, and instant keyword search.",
        tag: "Catalog"
      },
      {
        id: "cart",
        title: "Persistent Shopping Cart",
        description: "Real-time cart quantity adjustments, discount calculations, and persistent state across browser reloads.",
        tag: "Cart & Checkout"
      },
      {
        id: "auth",
        title: "User Accounts & Authentication",
        description: "Secure customer authentication with order history view, saved addresses, and profile management.",
        tag: "Auth"
      },
      {
        id: "db",
        title: "Relational Supabase Backend",
        description: "Structured PostgreSQL database schema storing product variants, inventory quantities, and customer orders.",
        tag: "Database"
      }
    ],
    techStack: [
      { category: "Frontend", name: "React", role: "Component hierarchy and reactive cart state" },
      { category: "Backend & Database", name: "Supabase (PostgreSQL)", role: "Product catalog tables and user auth" },
      { category: "Styling", name: "Tailwind CSS", role: "Modern e-commerce product grids and drawer components" },
      { category: "Icons", name: "Lucide React", role: "Commerce iconography (cart, badge, heart, checkout)" }
    ],
    architecture: {
      title: "TechShop E-Commerce Architecture",
      description: "Decoupled frontend client communicating with Supabase PostgreSQL via typed queries.",
      layers: [
        {
          name: "Storefront UI",
          detail: "React + Tailwind CSS",
          subItems: ["Product grid & card components", "Slide-out cart drawer", "Checkout summary view"]
        },
        {
          name: "Cart State Engine",
          detail: "React Context & Local Persistence",
          subItems: ["Cart item calculation", "Stock limit validation", "Local cache sync"]
        },
        {
          name: "Supabase Backend",
          detail: "PostgreSQL + Auth",
          subItems: ["Products & inventory schema", "User profiles & order history", "RLS security policies"]
        }
      ]
    },
    gallery: [
      {
        title: "Product Catalog & Grid",
        caption: "Responsive product grid featuring badges, pricing, stock indicators, and quick-add actions.",
        type: "kanban",
        color: "#f59e0b"
      },
      {
        title: "Shopping Cart Drawer & Checkout",
        caption: "Interactive slide-over cart with subtotal calculation, item quantity counters, and checkout button.",
        type: "docs",
        color: "#ea580c"
      }
    ],
    timelineEvents: [
      { phase: "Phase 1: Schema & Data Architecture", duration: "Week 1", description: "Created PostgreSQL tables for products, categories, cart line-items, and users." },
      { phase: "Phase 2: Product Catalog & Filtering", duration: "Weeks 2-3", description: "Developed responsive product cards, search inputs, and category filters." },
      { phase: "Phase 3: Cart Engine & Checkout UI", duration: "Weeks 4-5", description: "Implemented cart state management, quantity selectors, and responsive checkout layout." }
    ],
    challenges: [
      {
        challenge: "Cart State Synchronization Across Navigation",
        solution: "Built a centralized Cart Context with local storage persistence and optimistic inventory validations."
      }
    ],
    learnings: [
      "Mastered end-to-end commerce patterns including catalog pagination, cart manipulation, and Supabase integration."
    ],
    nextProjectSlug: "buildstack",
    nextProjectTitle: "BuildStack 2.0"
  }
};

export const projects = [
  {
    id: "live-data-dashboard",
    title: "Live Data Dashboard",
    tagline: "Real-time analytics and telemetry visualization platform for monitoring key performance metrics.",
    category: "AI & Data Science",
    featured: true,
    date: "2024",
    role: "Frontend Developer",
    client: "Production Web App",
    duration: "3 Months",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Tailwind CSS", "Recharts", "Vite", "WebSockets"],
    metrics: [
      { label: "Update Rate", value: "Real-time" },
      { label: "Data Visualization", value: "Multi-axis Charts" },
      { label: "Deployment", value: "Vercel" }
    ],
    fullDescription: "Live Data Dashboard is a high-performance web application designed for visualizing real-time metrics and data streams. Built with React and Tailwind CSS, it features dynamic charts, filterable metrics, and live status indicators for instant system telemetry analysis.",
    keyFeatures: [
      "Real-time chart updating with smooth data transition animations",
      "Customizable date ranges and metric filtering controls",
      "Responsive layout optimized for desktop command centers and mobile screens",
      "High performance state handling for high-frequency telemetry updates"
    ],
    githubUrl: "https://github.com/rdcapital",
    liveUrl: "https://live-data-dashboard-alpha.vercel.app/"
  },
  {
    id: "task-manager-app",
    title: "Task Manager Workspace",
    tagline: "Productivity task management application with kanban organization and priority tracking.",
    category: "Web Application",
    featured: true,
    date: "2024",
    role: "Full Stack Developer",
    client: "Productivity Tool",
    duration: "2 Months",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Tailwind CSS", "Zustand", "LocalStorage", "Vite"],
    metrics: [
      { label: "State Sync", value: "Instant" },
      { label: "User Rating", value: "4.9 / 5" },
      { label: "Deployment", value: "Vercel" }
    ],
    fullDescription: "Task Manager Workspace helps individuals and teams streamline daily workflows. Users can create, prioritize, filter, and organize tasks across custom status columns with persistent local storage and instant state updates.",
    keyFeatures: [
      "Interactive kanban workflow and status management",
      "Priority badges, due dates, and quick task search filtering",
      "Persistent state management ensuring zero data loss on refresh",
      "Clean dark mode interface styled with Tailwind CSS"
    ],
    githubUrl: "https://github.com/rdcapital",
    liveUrl: "https://task-manager-six-mocha-35.vercel.app/"
  },
  {
    id: "movie-explorer-app",
    title: "CineStream Movie Explorer",
    tagline: "Interactive movie discovery portal with real-time search, ratings, and genre filters.",
    category: "Web Application",
    featured: true,
    date: "2024",
    role: "Frontend Developer",
    client: "Entertainment App",
    duration: "2 Months",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Tailwind CSS", "TMDB REST API", "Vite"],
    metrics: [
      { label: "Catalog Size", value: "10,000+ Movies" },
      { label: "Search Speed", value: "< 100ms" },
      { label: "Deployment", value: "Vercel" }
    ],
    fullDescription: "CineStream allows film enthusiasts to search trending movies, read plot overviews, inspect cast profiles, and filter films by rating and release year. Integrated with live REST APIs for instant updates.",
    keyFeatures: [
      "Live search input with automatic debouncing for smooth API queries",
      "Detailed modal cards featuring trailers, ratings, and synopsis",
      "Responsive movie poster grid with lazy loading image support",
      "Category filters for Trending, Top Rated, and Upcoming releases"
    ],
    githubUrl: "https://github.com/rdcapital",
    liveUrl: "https://movie-app-six-opal-70.vercel.app/"
  },
  {
    id: "weather-forecast-app",
    title: "WeatherPulse Forecast App",
    tagline: "Dynamic weather forecasting web app with location search and hourly climate trends.",
    category: "Web Application",
    featured: false,
    date: "2024",
    role: "Frontend Developer",
    client: "Weather Utility App",
    duration: "1 Month",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "OpenWeather API", "Tailwind CSS", "Vite"],
    metrics: [
      { label: "Forecast Days", value: "7-Day Outlook" },
      { label: "Location Lookup", value: "Global Cities" },
      { label: "Deployment", value: "Vercel" }
    ],
    fullDescription: "WeatherPulse delivers accurate weather forecasts worldwide. Includes current temperature, humidity levels, wind speed, UV index, and multi-day forecast predictions.",
    keyFeatures: [
      "Global city geolocation search with autocomplete",
      "Interactive weather state cards with dynamic weather icons",
      "Hourly temperature curve and 7-day forecast cards",
      "Celsius and Fahrenheit unit toggle"
    ],
    githubUrl: "https://github.com/rdcapital",
    liveUrl: "https://weather-app-six-alpha-49.vercel.app/"
  },
  {
    id: "student-directory-app",
    title: "Student Directory Portal",
    tagline: "Comprehensive student management directory with filterable records and profile search.",
    category: "Web Application",
    featured: false,
    date: "2024",
    role: "Frontend Developer",
    client: "Education Management",
    duration: "2 Months",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Tailwind CSS", "CRUD Operations", "Vite"],
    metrics: [
      { label: "Record Capacity", value: "Unlimited" },
      { label: "Search Filters", value: "Multi-parameter" },
      { label: "Deployment", value: "Vercel" }
    ],
    fullDescription: "Student Directory Portal simplifies student record tracking. School administrators can add, update, search, and organize student records according to academic majors, GPA, and graduation year.",
    keyFeatures: [
      "Real-time search across student names, IDs, and majors",
      "Add and edit student record modal forms with validation",
      "Filter by grade level, department, and academic standing",
      "Clean tabular and card view layout options"
    ],
    githubUrl: "https://github.com/rdcapital",
    liveUrl: "https://studnt-directory.vercel.app/"
  },
  {
    id: "themed-crud-todo",
    title: "Themed CRUD Todo Manager",
    tagline: "Customizable multi-theme todo manager with full CRUD operations and dark mode toggles.",
    category: "Web Application",
    featured: false,
    date: "2024",
    role: "Frontend Developer",
    client: "Productivity App",
    duration: "1 Month",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Tailwind CSS", "Context API", "Vite"],
    metrics: [
      { label: "Themes Available", value: "Multiple Color Schemes" },
      { label: "CRUD Capabilities", value: "Create, Read, Update, Delete" },
      { label: "Deployment", value: "Vercel" }
    ],
    fullDescription: "A sleek todo management app allowing users to organize tasks while switching seamlessly between vibrant color themes. Offers inline task editing, completion checkmarks, and bulk task clearance.",
    keyFeatures: [
      "Multiple color themes (Indigo, Emerald, Cyberpunk, Rose) with instant preview",
      "Inline text editing and priority status tagging",
      "Active, Completed, and All task filter tabs",
      "Local storage persistence for offline use"
    ],
    githubUrl: "https://github.com/rdcapital",
    liveUrl: "https://themed-crud-todo-app-rho.vercel.app/"
  },
  {
    id: "notes-app",
    title: "Notes & Ideas Workspace",
    tagline: "Fast markdown-supported notes application with instant auto-save and category tags.",
    category: "Web Application",
    featured: false,
    date: "2024",
    role: "Frontend Developer",
    client: "Personal Productivity",
    duration: "1 Month",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Tailwind CSS", "Markdown", "Vite"],
    metrics: [
      { label: "Auto-Save", value: "Instant" },
      { label: "Format Support", value: "Markdown & Code Snippets" },
      { label: "Deployment", value: "Vercel" }
    ],
    fullDescription: "Notes & Ideas Workspace provides a distraction-free environment for capturing thoughts, code snippets, and meeting notes. Supports category tagging and search filtering.",
    keyFeatures: [
      "Instant note creation with rich markdown previewing",
      "Tag-based organization and full-text keyword search",
      "Auto-saving edits to browser storage",
      "Export notes in markdown or plain text files"
    ],
    githubUrl: "https://github.com/rdcapital",
    liveUrl: "https://notes-app-beryl-six.vercel.app/"
  },
  {
    id: "form-validator-app",
    title: "Smart Form Validator",
    tagline: "Form validation suite featuring real-time error checking and accessibility standards.",
    category: "Web Application",
    featured: false,
    date: "2024",
    role: "Frontend Developer",
    client: "Form Utility Tool",
    duration: "1 Month",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Tailwind CSS", "Custom Hooks", "Vite"],
    metrics: [
      { label: "Validation Engine", value: "Real-time Regex & Rules" },
      { label: "Accessibility", value: "WCAG Compliant" },
      { label: "Deployment", value: "Vercel" }
    ],
    fullDescription: "Smart Form Validator demonstrates robust client-side validation for complex form fields, including password strength indicators, email format checks, and custom field constraints.",
    keyFeatures: [
      "Real-time inline field error highlighting and validation feedback",
      "Dynamic password strength meter with security requirement checklist",
      "Accessible form controls adhering to ARIA standards",
      "Reusable custom form hook architecture"
    ],
    githubUrl: "https://github.com/rdcapital",
    liveUrl: "https://valid-form-snowy.vercel.app/"
  },
  {
    id: "rcalcs-app",
    title: "R-Calcs Smart Calculator",
    tagline: "Precision web calculator featuring calculation history logging and keypress support.",
    category: "Utility App",
    featured: false,
    date: "2024",
    role: "Frontend Developer",
    client: "Utility Web App",
    duration: "1 Month",
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Tailwind CSS", "Math Engine", "Vite"],
    metrics: [
      { label: "Precision", value: "Double Precision Floating Point" },
      { label: "History Log", value: "Saved Calculations" },
      { label: "Deployment", value: "Vercel" }
    ],
    fullDescription: "R-Calcs is a clean, interactive calculator web application equipped with basic and scientific operators, calculation history logs, and physical keyboard input handling.",
    keyFeatures: [
      "Physical keyboard Numpad listener for seamless desktop typing",
      "Calculation history drawer with one-click recall of past equations",
      "Responsive touch-friendly key layout for mobile devices",
      "Error prevention for divide-by-zero and malformed mathematical expressions"
    ],
    githubUrl: "https://github.com/rdcapital",
    liveUrl: "https://rcalcs.vercel.app/"
  },
  {
    id: "team-card-gallery",
    title: "Team Card Gallery",
    tagline: "Interactive team member showcase with modal profile popups and role filtering.",
    category: "Web Application",
    featured: false,
    date: "2024",
    role: "Frontend Developer",
    client: "UI Component Showcase",
    duration: "1 Month",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Tailwind CSS", "Vite"],
    metrics: [
      { label: "Interactions", value: "Card Hover & Modal Popups" },
      { label: "Filter Options", value: "Department & Skills" },
      { label: "Deployment", value: "Vercel" }
    ],
    fullDescription: "Team Card Gallery is an elegant component gallery for highlighting team members, complete with social profiles, skills tags, and detailed contact popups.",
    keyFeatures: [
      "Department and role filter tabs for instant team browsing",
      "Interactive card flip/hover animations styled with Tailwind CSS",
      "Detailed profile modal with contact links and bio highlights",
      "Fully responsive grid adapting to mobile, tablet, and desktop screens"
    ],
    githubUrl: "https://github.com/rdcapital",
    liveUrl: "https://team-card-gallery-three.vercel.app/"
  }
];

export const getProjectById = (id) => {
  return projects.find((project) => project.id === id);
};

export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured);
};

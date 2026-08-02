import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  FolderGit2,
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  Zap,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { getFeaturedProjects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  const skills = [
    {
      title: "Frontend Architecture",
      icon: Code2,
      description: "Building fast, reactive UIs with React 19, Vite, Next.js, and TypeScript.",
    },
    {
      title: "Modern Styling & UI",
      icon: Layers,
      description: "Custom design systems using Tailwind CSS v4, dynamic animations, and dark themes.",
    },
    {
      title: "State & API Integration",
      icon: Cpu,
      description: "RESTful APIs, WebSockets, GraphQL, and client state management with Zustand & React Query.",
    },
    {
      title: "Performance & SEO",
      icon: Zap,
      description: "Sub-second load times, core web vitals optimization, accessible HTML5, and SSR patterns.",
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative pt-6 pb-12 overflow-hidden">
        {/* Glow backdrop decorative elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-purple-600/10 blur-3xl rounded-full pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto text-center space-y-8">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-indigo-300 text-xs font-medium shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span>Senior React & Full-Stack Developer</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Designing & Building{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Scalable Web Experiences
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Welcome to my multi-page portfolio! I specialize in crafting clean, accessible, and high-performance applications with modern React, Tailwind CSS, and cloud platforms.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02]"
            >
              <FolderGit2 className="w-5 h-5" />
              Explore My Projects
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold transition-all hover:border-slate-600"
            >
              <Mail className="w-5 h-5 text-indigo-400" />
              Get In Touch
            </Link>
          </div>

          {/* Tech stack ticker */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
            <span className="text-slate-500 font-medium uppercase tracking-wider">
              Primary Stack:
            </span>
            <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono">
              React 19
            </span>
            <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono">
              React Router 7
            </span>
            <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono">
              Tailwind CSS v4
            </span>
            <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono">
              JavaScript
            </span>
            <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono">
              Vite
            </span>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" /> Showcase
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 font-semibold text-sm transition-colors group"
          >
            View All Projects ({featuredProjects.length}+)
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid of Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Core Skills & Capabilities */}
      <section className="space-y-8 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 sm:p-10 backdrop-blur-sm">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Capabilities
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Technical Expertise & Solutions
          </h2>
          <p className="text-slate-400 text-sm">
            Proven track record of delivering user-centric applications from concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-indigo-500/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-lg">{skill.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900/50 via-purple-900/40 to-slate-900 border border-indigo-500/30 p-8 sm:p-12 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Have a project in mind?
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            I am currently open to freelance opportunities, consulting, and full-time frontend roles. Let’s build something extraordinary together.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-100 shadow-xl transition-all hover:scale-[1.03]"
            >
              Start A Conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

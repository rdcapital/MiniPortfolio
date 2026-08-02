import { useParams, Link, useNavigate } from "react-router-dom";
import { getProjectById, projects } from "../data/projects";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  UserCheck,
  Building,
  Clock,
  ChevronRight,
  ChevronLeft,
  AlertCircle,
} from "lucide-react";
import { GithubIcon } from "../components/SocialIcons";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = getProjectById(id);

  // If project is not found
  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-6 max-w-lg mx-auto py-12">
        <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
          <AlertCircle className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-white">Project Not Found</h1>
          <p className="text-slate-400 text-sm">
            We couldn't find a project with the identifier{" "}
            <code className="text-indigo-300 font-mono bg-slate-900 px-2 py-0.5 rounded">
              "{id}"
            </code>
            . It may have been renamed or moved.
          </p>
        </div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-600/30 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>
    );
  }

  // Find next & previous projects for pagination
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="space-y-12">
      {/* Top Navigation */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-6">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Projects
        </Link>

        <span className="text-xs font-mono text-slate-400">
          Project ID: <span className="text-indigo-400 font-semibold">{project.id}</span>
        </span>
      </div>

      {/* Main Header */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-600/20 text-indigo-300 border border-indigo-500/30">
            {project.category}
          </span>
          <span className="text-slate-400 text-xs font-mono flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {project.date}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {project.title}
        </h1>

        <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
          {project.tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02]"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              View Source Code
            </a>
          )}
        </div>
      </div>

      {/* Hero Cover Image */}
      <div className="relative h-72 sm:h-96 md:h-[420px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
      </div>

      {/* Overview & Metadata Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column: Full Description & Features */}
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Project Overview
            </h2>
            <p className="text-slate-300 text-base leading-relaxed whitespace-pre-line">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Features Checklist */}
          {project.keyFeatures && (
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" /> Key Features & Capabilities
              </h3>
              <ul className="grid grid-cols-1 gap-3">
                {project.keyFeatures.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 bg-slate-900/50 border border-slate-800/60 p-4 rounded-xl text-slate-300 text-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Column: Metadata Sidebar */}
        <div className="space-y-6">
          {/* Details Card */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-4">
              Project Information
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <UserCheck className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-slate-500 font-medium uppercase block">Role</span>
                  <span className="text-slate-200 font-semibold">{project.role}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-slate-500 font-medium uppercase block">Type / Client</span>
                  <span className="text-slate-200 font-semibold">{project.client}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-slate-500 font-medium uppercase block">Duration</span>
                  <span className="text-slate-200 font-semibold">{project.duration}</span>
                </div>
              </div>
            </div>

            {/* Tech Stack List */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <span className="text-xs text-slate-500 font-medium uppercase block">Technologies Used</span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-950 text-indigo-300 border border-indigo-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Metrics Highlight Card */}
          {project.metrics && (
            <div className="bg-gradient-to-br from-indigo-950/40 to-slate-900 border border-indigo-500/30 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-indigo-300 uppercase tracking-wider">
                Impact & Metrics
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                    <span className="text-2xl font-extrabold text-white font-mono">{m.value}</span>
                    <span className="text-xs text-slate-400 block mt-0.5">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Prev / Next Project Footer Navigation */}
      <div className="pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevProject ? (
          <Link
            to={`/projects/${prevProject.id}`}
            className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 transition-all group"
          >
            <ChevronLeft className="w-6 h-6 text-slate-500 group-hover:text-indigo-400 transition-colors" />
            <div>
              <span className="text-xs text-slate-500 uppercase font-semibold block">Previous Project</span>
              <span className="text-white font-bold text-sm group-hover:text-indigo-400 transition-colors">
                {prevProject.title}
              </span>
            </div>
          </Link>
        ) : (
          <div></div>
        )}

        {nextProject && (
          <Link
            to={`/projects/${nextProject.id}`}
            className="flex items-center justify-end text-right gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 transition-all group sm:col-start-2"
          >
            <div>
              <span className="text-xs text-slate-500 uppercase font-semibold block">Next Project</span>
              <span className="text-white font-bold text-sm group-hover:text-indigo-400 transition-colors">
                {nextProject.title}
              </span>
            </div>
            <ChevronRight className="w-6 h-6 text-slate-500 group-hover:text-indigo-400 transition-colors" />
          </Link>
        )}
      </div>
    </div>
  );
}

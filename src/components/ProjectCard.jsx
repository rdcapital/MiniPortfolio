import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export default function ProjectCard({ project }) {
  return (
    <div className="group relative bg-slate-900/70 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col h-full">
      {/* Project Image Container */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

        {/* Category Pill */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-indigo-300">
            {project.category}
          </span>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3">
            <span className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-full bg-indigo-600/90 text-white shadow-md">
              <Sparkles className="w-3 h-3" /> Featured
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3">
          <Link
            to={`/projects/${project.id}`}
            className="group-hover:text-indigo-400 text-white font-bold text-xl tracking-tight transition-colors line-clamp-1 flex items-center justify-between"
          >
            <span>{project.title}</span>
            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-indigo-400 shrink-0 ml-2" />
          </Link>
          <p className="text-slate-400 text-sm mt-2 line-clamp-2 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-slate-800/60">
          {project.tags.slice(0, 4).map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 text-xs font-mono rounded-md bg-slate-800/40 text-slate-400">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Card Footer Action Links */}
        <div className="mt-5 pt-3 flex items-center justify-between text-xs">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-1 font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            View Details &rarr;
          </Link>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label={`View source code for ${project.title}`}
                onClick={(e) => e.stopPropagation()}
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label={`Visit live demo for ${project.title}`}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

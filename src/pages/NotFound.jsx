import { Link } from "react-router-dom";
import { ArrowLeft, Home, FolderGit2, Compass, AlertOctagon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[65vh] flex flex-col items-center justify-center text-center space-y-8 max-w-xl mx-auto py-12">
      {/* 404 Badge & Icon */}
      <div className="relative">
        <div className="w-24 h-24 rounded-3xl bg-indigo-600/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mx-auto shadow-2xl">
          <Compass className="w-12 h-12 animate-spin-slow" />
        </div>
        <span className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-rose-600 text-white font-mono font-bold text-xs shadow-lg">
          404 ERROR
        </span>
      </div>

      <div className="space-y-3">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Page Not Found
        </h1>
        <p className="text-slate-400 text-base max-w-md mx-auto leading-relaxed">
          Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
      </div>

      {/* Action Navigation Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto">
        <Link
          to="/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02]"
        >
          <Home className="w-4 h-4" />
          Go Back Home
        </Link>
        <Link
          to="/projects"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold transition-all"
        >
          <FolderGit2 className="w-4 h-4 text-indigo-400" />
          Browse Projects
        </Link>
      </div>
    </div>
  );
}

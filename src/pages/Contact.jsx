import { useState } from "react";
import {
  Mail,
  Send,
  MapPin,
  Clock,
  CheckCircle2,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/SocialIcons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <div className="space-y-12">
      {/* Header Banner */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-medium">
          <Mail className="w-3.5 h-3.5" />
          <span>Get In Touch</span>
        </div>
        <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
          Let's Work Together
        </h1>
        <p className="text-slate-400 text-base leading-relaxed">
          Have a project, job opportunity, or technical question? Feel free to reach out using the form below or connect via GitHub and LinkedIn.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Contact Form Column */}
        <div className="lg:col-span-2 bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-indigo-400" /> Send A Message
            </h2>
            <span className="text-xs text-slate-500 font-mono">Response time: ~24 hours</span>
          </div>

          {submitted && (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 flex items-start gap-3 text-emerald-300 animate-in fade-in duration-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="space-y-1 text-sm">
                <p className="font-semibold">Thank you for your message!</p>
                <p className="text-slate-300 text-xs">
                  Your inquiry has been received successfully. I will get back to you shortly.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Your Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Your Email <span className="text-rose-400">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>
            </div>

            {/* Subject Input */}
            <div className="space-y-2">
              <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Subject
              </label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                placeholder="Project Inquiry / Job Opportunity"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Message <span className="text-rose-400">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project goals, timeline, or requirements..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.01]"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Sidebar Direct Info Column */}
        <div className="space-y-6">
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 space-y-6">
            <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-4">
              Direct Contact & Links
            </h2>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium uppercase block">GitHub Account</span>
                  <a
                    href="https://github.com/rdcapital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 font-semibold hover:text-indigo-400 transition-colors"
                  >
                    github.com/rdcapital
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium uppercase block">Location</span>
                  <span className="text-slate-200 font-semibold">Remote Worldwide</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium uppercase block">Availability Status</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Open for New Projects
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <span className="text-xs text-slate-500 font-medium uppercase block">Connect Online</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/rdcapital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center gap-2 text-slate-300 hover:text-white hover:border-indigo-500 transition-all text-xs font-semibold"
                >
                  <GithubIcon className="w-4 h-4" /> GitHub Profile
                </a>
                <a
                  href="https://www.linkedin.com/in/rodney-a-4839a7376/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center gap-2 text-slate-300 hover:text-white hover:border-indigo-500 transition-all text-xs font-semibold"
                >
                  <LinkedinIcon className="w-4 h-4" /> LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Quick FAQ / Note */}
          <div className="bg-gradient-to-br from-indigo-950/30 to-slate-900 border border-indigo-500/20 rounded-3xl p-6 space-y-3">
            <h3 className="text-sm font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-indigo-400" /> Live Demo Showcase
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Explore all live web applications hosted directly on Vercel from the Projects showcase page!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

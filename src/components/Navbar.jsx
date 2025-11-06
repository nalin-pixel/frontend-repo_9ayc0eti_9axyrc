import { Gift, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-pink-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-pink-200 via-sky-200 to-violet-200 flex items-center justify-center shadow-sm">
            <Gift className="h-5 w-5 text-sky-600" />
          </div>
          <span className="font-serif text-xl font-semibold text-slate-800 tracking-tight">
            Go Gram ’em!
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#how" className="hover:text-sky-700 transition-colors">How it works</a>
          <a href="#seasonal" className="hover:text-sky-700 transition-colors">Seasonal</a>
          <a href="#year" className="hover:text-sky-700 transition-colors">Year‑round</a>
          <a href="#testimonials" className="hover:text-sky-700 transition-colors">Love notes</a>
        </div>
        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-full bg-sky-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-sky-700 transition-colors">
            <Sparkles className="h-4 w-4" /> Send a Sparkle
          </button>
        </div>
      </nav>
    </header>
  );
}

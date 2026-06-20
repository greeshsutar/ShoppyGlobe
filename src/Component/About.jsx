

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 text-white p-8 md:p-12 shadow-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.35),transparent_45%)]" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-semibold text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            ShoppyGlobe • Premium E-commerce Experience
          </div>

          <h1 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight">
            Designed for discovery. Built for speed.
          </h1>
          <p className="mt-3 max-w-2xl text-slate-200/90 text-sm md:text-base leading-relaxed">
            ShoppyGlobe brings a modern shopping flow with glassmorphic UI, structured browsing, quick cart actions,
            and a clean checkout experience—so you spend less time searching and more time finding what you love.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 shadow-md shadow-indigo-500/20 hover:from-indigo-700 hover:to-violet-700 transition font-bold"
            >
              Shop Products
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-white/10 border border-white/15 text-white/95 font-semibold">
              Premium UI • Subtle Animations • Responsive Layout
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="rounded-3xl border border-slate-100 bg-white/80 backdrop-blur p-6 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M12 2v4" />
              <path d="M12 18v4" />
              <path d="M4.93 4.93l2.83 2.83" />
              <path d="M16.24 16.24l2.83 2.83" />
              <path d="M2 12h4" />
              <path d="M18 12h4" />
              <path d="M4.93 19.07l2.83-2.83" />
              <path d="M16.24 7.76l2.83-2.83" />
            </svg>
          </div>
          <h3 className="font-extrabold text-slate-900">Glassmorphic Layout</h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            High-end UI styling with subtle depth, blur, and consistent spacing across pages.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white/80 backdrop-blur p-6 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-violet-50 border border-violet-100 text-violet-600 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2z" />
              <path d="M8 9h8" />
              <path d="M8 13h5" />
            </svg>
          </div>
          <h3 className="font-extrabold text-slate-900">Structured Browsing</h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Responsive product grids for clean discovery on mobile, tablet, and desktop.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white/80 backdrop-blur p-6 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <h3 className="font-extrabold text-slate-900">Fast Checkout Flow</h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Clear summaries, premium form focus rings, and an animated order confirmation.
          </p>
        </div>
      </div>

      {/* Closing */}
      <div className="mt-8 rounded-3xl border border-slate-100 bg-white/70 backdrop-blur p-6 shadow-sm">
        <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">Built with modern UX details</h2>
        <p className="mt-2 text-sm md:text-base text-slate-600 leading-relaxed">
          ShoppyGlobe focuses on consistency: glass headers, tidy grids, clean iconography, and subtle interactions that feel premium.
          Enjoy the shopping experience.
        </p>
      </div>
    </div>
  );
};

export default About;


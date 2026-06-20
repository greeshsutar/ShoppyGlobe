import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();

  const status = error?.status || 404;
  const statusText = error?.statusText || "Not Found";
  const data = error?.data || "The page you're looking for doesn't exist.";

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full rounded-3xl border border-slate-100 bg-white/70 backdrop-blur shadow-sm p-8 md:p-10 text-center">
        <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 shadow-md shadow-indigo-500/20 flex items-center justify-center text-white mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
          </svg>
        </div>

        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-amber-400 mb-2">
          {status}
        </h1>
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{statusText}</h2>
        <p className="text-sm text-slate-600 mb-7">
          {typeof data === "string" ? data : JSON.stringify(data)}
        </p>

        <a
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow-md shadow-indigo-500/15 hover:from-indigo-700 hover:to-violet-700 transition active:scale-[0.98]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back to Home
        </a>

        <div className="mt-6 text-xs text-slate-500">
          Tip: Try going back to the product listing to continue browsing.
        </div>
      </div>
    </div>
  );
}



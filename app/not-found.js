import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mt-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        <div className="relative mb-8">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rose-500/20 blur-[100px] rounded-full pointer-events-none" />
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-brand-400 to-rose-600 relative z-10 tracking-tighter">
            404
          </h1>
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-4 z-10">
          Page Not Found
        </h2>
        
        <p className="text-slate-400 max-w-md mb-10 z-10">
          Sorry, the page you are looking for does not exist, has been removed, or is temporarily unavailable.
        </p>

        <Link
          href="/"
          className="group relative z-10 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:scale-105 hover:shadow-brand-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Return to Homepage
        </Link>
      </main>
      <Footer />
    </>
  );
}

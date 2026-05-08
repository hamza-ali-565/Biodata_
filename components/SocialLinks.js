import { Mail } from "lucide-react";

export function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=61589515107640"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/50 text-slate-300 hover:border-brand-400 hover:text-brand-400 hover:scale-110 transition-all duration-300 shadow-md"
        aria-label="Visit our Facebook page"
      >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      </a>

      {/* Pinterest */}
      <a
        href="https://www.pinterest.com/marriagebiodatahub/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/50 text-slate-300 hover:border-rose-400 hover:text-rose-400 hover:scale-110 transition-all duration-300 shadow-md"
        aria-label="Visit our Pinterest profile"
      >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.176-4.068-2.845 0-4.515 2.133-4.515 4.339 0 .859.331 1.781.745 2.281a.345.345 0 01.082.326c-.059.245-.189.765-.216.874-.038.144-.128.177-.28.106-1.047-.488-1.701-2.023-1.701-3.252 0-2.647 1.922-5.084 5.552-5.084 2.912 0 5.176 2.077 5.176 4.845 0 2.896-1.823 5.225-4.354 5.225-1.124 0-2.18-.584-2.542-1.274l-.691 2.63c-.25.952-.926 2.14-1.38 2.864 1.04.305 2.143.468 3.275.468 5.523 0 10-4.477 10-10S17.523 2 12 2z" clipRule="evenodd" />
        </svg>
      </a>

      {/* Email / Gmail */}
      <a
        href="mailto:marriagebiodatahub@gmail.com"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/50 text-slate-300 hover:border-amber-400 hover:text-amber-400 hover:scale-110 transition-all duration-300 shadow-md"
        aria-label="Send us an Email"
      >
        <Mail className="h-5 w-5" />
      </a>
    </div>
  );
}

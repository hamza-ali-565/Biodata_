export function BlogPageDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -right-28 top-[8%] h-[380px] w-[380px] rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="absolute -left-24 bottom-[12%] h-[340px] w-[340px] rounded-full bg-sky-500/10 blur-[110px]" />
      <div className="absolute left-1/3 top-1/2 h-48 w-48 rounded-full bg-brand-500/8 blur-[90px]" />

      <svg
        viewBox="0 0 200 200"
        className="absolute right-[6%] top-[18%] h-32 w-32 opacity-[0.04] text-emerald-300/80 sm:h-40 sm:w-40"
        fill="none"
      >
        <polygon
          points="100,15 185,55 185,145 100,185 15,145 15,55"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <polygon
          points="100,40 155,65 155,135 100,160 45,135 45,65"
          stroke="currentColor"
          strokeWidth="0.4"
          strokeDasharray="4 4"
        />
      </svg>

      <svg
        viewBox="0 0 100 100"
        className="absolute bottom-[20%] left-[8%] h-24 w-24 opacity-[0.03] sm:h-32 sm:w-32"
        fill="none"
      >
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" className="text-white" />
        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="text-white" />
        <path
          d="M50 20 C65 20 65 35 50 50 C35 35 35 20 50 20 Z"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-white"
        />
      </svg>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />
    </div>
  );
}

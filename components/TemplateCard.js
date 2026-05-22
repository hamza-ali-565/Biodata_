export function TemplateCard({ template, isActive, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`premium-card flex h-full flex-col p-4 text-left text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
        isActive ? "border-emerald-500/30 shadow-[0_12px_40px_rgba(16,185,129,0.15)]" : ""
      }`}
      aria-pressed={isActive}
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="text-[13px] font-semibold text-slate-50">
          {template.name}
        </p>
        <span
          className="inline-flex items-center rounded-full bg-slate-900 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-300"
          aria-label={`${template.style} style template`}
        >
          {template.style}
        </span>
      </div>
      <div className="relative mb-3 flex flex-1 items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-900/80 p-2">
        <div
          className="h-20 w-full rounded-lg border bg-slate-950/90"
          style={{
            borderColor: template.accentSoft,
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-4 top-2 h-2 rounded-full"
          style={{ background: template.accentSoft }}
        />
      </div>
      <p className="mt-auto text-[11px] text-slate-400">
        Includes photo, personal, family &amp; contact sections.
      </p>
    </button>
  );
}


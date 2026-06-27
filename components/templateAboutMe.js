/**
 * Shared About Me block for all biodata templates.
 * Renders only when text is present. Adapts to any template's accent + typography.
 */
export function AboutMeSection({ text, accent, headingStyle, className = "" }) {
  if (!text?.trim()) return null;

  return (
    <section className={className}>
      <div className="flex items-center gap-2 mb-2">
        <div
          className="text-[11px] font-semibold uppercase tracking-wider"
          style={{ ...headingStyle, color: accent }}
          data-typography="heading"
        >
          About Me
        </div>
        <div className="h-px flex-1 opacity-40" style={{ backgroundColor: accent }} />
      </div>
      <p className="text-[11px] leading-relaxed text-slate-700 whitespace-pre-wrap break-words">
        {text}
      </p>
    </section>
  );
}

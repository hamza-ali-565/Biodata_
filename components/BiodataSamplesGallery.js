"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { communityFilters, professionFilters, situationFilters } from "../data/biodataSamples";

function FilterGroup({ label, options, active, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mr-1">{label}</span>
      <button
        onClick={() => onChange(null)}
        className={`text-xs rounded-full border px-3 py-1.5 transition-all ${
          active === null
            ? "border-brand-500 bg-brand-500/20 text-white"
            : "border-slate-700 text-slate-300 hover:border-brand-500/50 hover:text-white"
        }`}
      >
        All
      </button>
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`text-xs rounded-full border px-3 py-1.5 transition-all ${
            active === opt.value
              ? "border-brand-500 bg-brand-500/20 text-white"
              : "border-slate-700 text-slate-300 hover:border-brand-500/50 hover:text-white"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export function BiodataSamplesGallery({ samples }) {
  const [community, setCommunity] = useState(null);
  const [profession, setProfession] = useState(null);
  const [situation, setSituation] = useState(null);

  const filtered = useMemo(() => {
    return samples.filter((s) => {
      if (community && s.tags.community !== community) return false;
      if (profession && s.tags.profession !== profession) return false;
      if (situation && s.tags.situation !== situation) return false;
      return true;
    });
  }, [samples, community, profession, situation]);

  const hasFilters = community || profession || situation;

  return (
    <div>
      <div className="space-y-4 mb-8 rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
        <FilterGroup label="Community" options={communityFilters} active={community} onChange={setCommunity} />
        <FilterGroup label="Profession" options={professionFilters} active={profession} onChange={setProfession} />
        <FilterGroup label="Life Situation" options={situationFilters} active={situation} onChange={setSituation} />
        {hasFilters && (
          <button
            onClick={() => {
              setCommunity(null);
              setProfession(null);
              setSituation(null);
            }}
            className="text-xs text-brand-300 hover:text-brand-200 underline"
          >
            Clear all filters
          </button>
        )}
      </div>

      <p className="text-xs text-slate-500 mb-6">
        Showing {filtered.length} of {samples.length} samples
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((sample) => (
          <article key={sample.id} className="premium-card-static p-6 flex flex-col">
            <div className="flex flex-wrap gap-2 mb-4">
              {sample.tagLabels.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] rounded-full border border-slate-700 px-2.5 py-1 text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="font-semibold text-white text-base mb-3">{sample.title}</h3>

            <pre className="whitespace-pre-wrap font-sans text-xs leading-relaxed text-slate-300 bg-slate-950/60 border border-slate-800 rounded-xl p-4 mb-4">
              {sample.fields.join("\n")}
            </pre>

            <p className="text-sm text-slate-300 leading-relaxed mb-5 flex-1">
              <span className="font-semibold text-slate-400">About Me: </span>
              &ldquo;{sample.about}&rdquo;
            </p>

            <Link
              href={sample.ctaHref}
              className="text-xs font-semibold text-brand-300 hover:text-brand-200 underline underline-offset-4"
            >
              Use this style →
            </Link>
          </article>
        ))}

        {filtered.length === 0 && (
          <p className="text-slate-400 text-sm col-span-full text-center py-12">
            No samples match these filters. Try clearing one.
          </p>
        )}
      </div>
    </div>
  );
}

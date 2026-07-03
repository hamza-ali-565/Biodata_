"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Copy, Check, AlertTriangle } from "lucide-react";
import { computeSiderealLongitudes } from "../lib/astro/ephemeris";
import {
  rashiFromLongitude,
  nakshatraFromLongitude,
  houseFromRashi,
  manglikStatus,
} from "../lib/astro/vedicTables";
import cities from "../data/indian-cities-coordinates.json";
import { navigateToForm } from "../lib/navigationUtils";

const STATE_CAPITAL_FALLBACK = { lat: 22.9734, lon: 78.6569 }; // geographic centre of India

// Must match components/BiodataForm.js
const FORM_STORAGE_KEY = "biodata-for-marriage:data";

const MANGLIK_TO_FORM_OPTION = {
  Manglik: "Yes — Manglik",
  "Non-Manglik": "No — Not Manglik",
  "Partial Manglik": "Partial Manglik",
};

/** Writes the calculated fields into the biodata form's saved draft so they
 * appear pre-filled when the user lands on the form. Merges with (does not
 * overwrite) any data the user has already entered. */
function prefillBiodataForm(result) {
  if (typeof window === "undefined") return;
  let existing = {};
  try {
    const stored = window.localStorage.getItem(FORM_STORAGE_KEY);
    if (stored) existing = JSON.parse(stored);
  } catch {
    existing = {};
  }

  const nakshatraValue = `${result.nakshatra.name}, Pada ${result.nakshatra.pada}`;
  const existingPersonal = existing.personal || {};
  const existingCustomFields = Array.isArray(existingPersonal.customFields)
    ? existingPersonal.customFields
    : [];

  // Nadi and Gan have no dedicated field in the biodata form — add/update them as custom fields.
  const extras = [
    { label: "Nadi", value: result.nakshatra.nadi },
    { label: "Gan", value: result.nakshatra.gan },
  ];
  const customFields = [...existingCustomFields];
  extras.forEach(({ label, value }) => {
    const idx = customFields.findIndex((f) => f.label === label);
    const entry = { id: idx >= 0 ? customFields[idx].id : `personal-${crypto.randomUUID()}`, label, value };
    if (idx >= 0) customFields[idx] = entry;
    else customFields.push(entry);
  });

  const next = {
    ...existing,
    personal: {
      ...existingPersonal,
      rashi: result.rashi.sanskrit,
      nakshatra: nakshatraValue,
      manglik: MANGLIK_TO_FORM_OPTION[result.manglik] || "",
      customFields,
    },
  };

  window.localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(next));
}

function findCity(query) {
  const q = query.trim().toLowerCase();
  if (!q) return null;
  return (
    cities.find((c) => c.city.toLowerCase() === q) ||
    cities.find((c) => c.city.toLowerCase().startsWith(q)) ||
    cities.find((c) => c.city.toLowerCase().includes(q)) ||
    null
  );
}

function parseTime(timeStr) {
  if (!timeStr) return { hours: 12, minutes: 0, assumed: true };
  const match = timeStr.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i);
  if (!match) return { hours: 12, minutes: 0, assumed: true };
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const meridian = match[3]?.toUpperCase();
  if (meridian === "PM" && hours !== 12) hours += 12;
  if (meridian === "AM" && hours === 12) hours = 0;
  return { hours, minutes, assumed: false };
}

function CopyButton({ value, label }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const el = document.createElement("textarea");
      el.value = value;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy ${label}`}
      className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-brand-400 hover:bg-brand-500/10 transition-colors"
    >
      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
    </button>
  );
}

function ResultCard({ label, value, subtext, copyValue }) {
  return (
    <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-4 flex items-start justify-between gap-3">
      <div>
        <p className="text-xs uppercase tracking-wide text-slate-500 mb-1">{label}</p>
        <p className="text-lg font-bold text-white">{value}</p>
        {subtext && <p className="text-xs text-slate-400 mt-1 leading-relaxed">{subtext}</p>}
      </div>
      <CopyButton value={copyValue ?? value} label={label} />
    </div>
  );
}

export function HoroscopeCalculator() {
  const router = useRouter();
  const [dob, setDob] = useState("");
  const [tob, setTob] = useState("");
  const [placeInput, setPlaceInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const cityMatches = useMemo(() => {
    const q = placeInput.trim().toLowerCase();
    if (q.length < 2) return [];
    return cities.filter((c) => c.city.toLowerCase().includes(q)).slice(0, 6);
  }, [placeInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!dob) {
      setError("Please enter a valid date of birth.");
      return;
    }
    const dobDate = new Date(`${dob}T00:00:00`);
    if (Number.isNaN(dobDate.getTime())) {
      setError("Please enter a valid date of birth.");
      return;
    }
    const today = new Date();
    if (dobDate > today) {
      setError("Date of birth cannot be in the future.");
      return;
    }
    if (dobDate < new Date("1930-01-01")) {
      setError("Please enter a date of birth after 01/01/1930.");
      return;
    }

    let city = findCity(placeInput);
    let cityNotFound = false;
    if (!city) {
      cityNotFound = true;
      city = { city: placeInput.trim() || "Unknown", lat: STATE_CAPITAL_FALLBACK.lat, lon: STATE_CAPITAL_FALLBACK.lon };
    }

    const { hours, minutes, assumed } = parseTime(tob);
    const [year, month, day] = dob.split("-").map(Number);
    // Approximate Indian birthplaces as IST (UTC+5:30) for the ephemeris instant.
    const utcDate = new Date(Date.UTC(year, month - 1, day, hours - 5, minutes - 30));

    const { moonSidereal, marsSidereal, ascendantSidereal } = computeSiderealLongitudes(
      utcDate,
      city.lat,
      city.lon
    );

    const rashi = rashiFromLongitude(moonSidereal);
    const nakshatra = nakshatraFromLongitude(moonSidereal);
    const marsRashi = rashiFromLongitude(marsSidereal);
    const ascRashi = rashiFromLongitude(ascendantSidereal);
    const marsHouse = houseFromRashi(marsRashi.index, ascRashi.index);
    const manglik = manglikStatus(marsHouse);

    setResult({
      rashi,
      nakshatra,
      manglik,
      timeAssumed: assumed,
      cityNotFound,
      cityUsed: city.city,
    });
  };

  const copyAll = async () => {
    if (!result) return;
    const text = [
      `Rashi: ${result.rashi.sanskrit} (${result.rashi.english})`,
      `Nakshatra: ${result.nakshatra.name} · Pada ${result.nakshatra.pada}`,
      `Nadi: ${result.nakshatra.nadi}`,
      `Gan: ${result.nakshatra.gan}`,
      `Manglik: ${result.manglik}`,
    ].join("\n");
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      /* clipboard unavailable — copy buttons above still work individually */
    }
  };

  const handleCreateBiodata = () => {
    if (!result) return;
    prefillBiodataForm(result);
    navigateToForm(router, null, "personal-details-section", "biodata-form-wrapper");
  };

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-6 sm:p-8 mb-10">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="dob" className="block text-sm font-semibold text-white mb-2">
            Date of Birth
          </label>
          <input
            id="dob"
            type="date"
            required
            min="1930-01-01"
            max={new Date().toISOString().slice(0, 10)}
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white focus:outline-none focus:border-brand-500"
          />
        </div>

        <div>
          <label htmlFor="tob" className="block text-sm font-semibold text-white mb-2">
            Time of Birth (optional but recommended)
          </label>
          <input
            id="tob"
            type="text"
            placeholder="HH:MM AM/PM"
            value={tob}
            onChange={(e) => setTob(e.target.value)}
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-500"
          />
          <p className="text-xs text-slate-500 mt-1.5">
            If unknown, leave blank — we use 12:00 noon. Rashi is usually correct. Nakshatra may vary slightly.
          </p>
        </div>

        <div className="relative">
          <label htmlFor="pob" className="block text-sm font-semibold text-white mb-2">
            Place of Birth
          </label>
          <input
            id="pob"
            type="text"
            required
            autoComplete="off"
            placeholder="Enter city name (e.g., Lucknow, Hyderabad, Patna)"
            value={placeInput}
            onChange={(e) => {
              setPlaceInput(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-500"
          />
          <p className="text-xs text-slate-500 mt-1.5">Required for accurate latitude/longitude calculation</p>
          {showSuggestions && cityMatches.length > 0 && (
            <ul className="absolute z-20 mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 shadow-xl overflow-hidden">
              {cityMatches.map((c) => (
                <li key={c.city}>
                  <button
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setPlaceInput(c.city);
                      setShowSuggestions(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
                  >
                    {c.city}, {c.state}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {error && (
          <p className="text-sm text-rose-400 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 flex-shrink-0" /> {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-[1.02]"
        >
          Calculate My Horoscope Details
        </button>
      </form>

      {result && (
        <div className="mt-8 pt-8 border-t border-slate-800">
          <h2 className="text-xl font-bold text-white mb-1">Your Horoscope Details for Marriage Biodata</h2>

          {result.cityNotFound && (
            <p className="text-xs text-amber-400 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              We couldn&apos;t find that city in our list — using an approximate central-India location. Try a nearby major city for more accuracy.
            </p>
          )}
          {result.timeAssumed && (
            <p className="text-xs text-amber-400 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              Without exact birth time, Rashi is usually accurate. Nakshatra may vary — we&apos;ve used 12:00 noon as default.
            </p>
          )}

          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <ResultCard
              label="Rashi (Moon Sign)"
              value={`${result.rashi.sanskrit} (${result.rashi.english})`}
              copyValue={result.rashi.sanskrit}
              subtext={`Write "${result.rashi.sanskrit}" in your biodata — not "${result.rashi.english}"`}
            />
            <ResultCard
              label="Nakshatra (Birth Star)"
              value={result.timeAssumed ? `${result.nakshatra.name}*` : result.nakshatra.name}
            />
            <ResultCard
              label="Pada (Quarter)"
              value={`Pada ${result.nakshatra.pada}`}
              subtext="Used for baby name selection (Akshar); not always in biodata"
            />
            <ResultCard label="Nadi" value={result.nakshatra.nadi} subtext="Nadi carries 8 points in Gun Milan — highest weight" />
            <ResultCard label="Gan" value={result.nakshatra.gan} />
            <ResultCard
              label="Manglik Status"
              value={result.manglik}
              subtext={
                result.manglik === "Non-Manglik"
                  ? "Mars is not in houses 1, 4, 7, 8, or 12."
                  : "Both partners being Manglik cancels the dosha. Consult a Jyotishi for cancellations in your specific chart."
              }
            />
          </div>

          {result.timeAssumed && (
            <p className="text-xs text-slate-500 mt-3">
              * Birth time unknown — verify Nakshatra with your family purohit if exact matching is required.
            </p>
          )}

          <button
            type="button"
            onClick={copyAll}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 hover:border-brand-500/50 hover:text-white transition-all"
          >
            <Copy className="w-4 h-4" /> Copy All to Biodata
          </button>

          <button
            type="button"
            onClick={handleCreateBiodata}
            className="mt-4 w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-[1.02]"
          >
            Now Create My Biodata with These Details →
          </button>

          <p className="text-xs text-slate-600 mt-6 leading-relaxed">
            This calculator provides results for informational purposes to help fill in your marriage biodata.
            Results are based on Vedic astrology calculations using the Lahiri Ayanamsha. For formal horoscope
            matching (Kundali Milan), please consult a qualified Jyotishi with the complete birth chart.
          </p>
        </div>
      )}
    </div>
  );
}

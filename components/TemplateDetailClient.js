"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { toCanvas } from "html-to-image";
import jsPDF from "jspdf";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { TemplatePreview } from "./TemplatePreview";
import {
  STORAGE_KEY,
  TEMPLATE_DEFINITIONS,
  FONT_OPTIONS,
  THEME_OPTIONS,
} from "./templatesConfig";

export function TemplateDetailClient({ templateId }) {
  const initialTemplate = TEMPLATE_DEFINITIONS.find((t) => t.id === templateId) || TEMPLATE_DEFINITIONS[0];
  const [selectedTemplateId, setSelectedTemplateId] = useState(initialTemplate.id);
  const template = TEMPLATE_DEFINITIONS.find((t) => t.id === selectedTemplateId) || TEMPLATE_DEFINITIONS[0];
  const [data, setData] = useState(null);
  const [fontId, setFontId] = useState(FONT_OPTIONS[0].id);
  const [themeId, setThemeId] = useState(
    template?.defaultThemeId || THEME_OPTIONS[0].id
  );
  const [isExporting, setIsExporting] = useState(null);
  const previewRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setData(JSON.parse(stored));
      } catch {
        setData(null);
      }
    }
  }, []);

  const selectedFont = useMemo(
    () => FONT_OPTIONS.find((f) => f.id === fontId) || FONT_OPTIONS[0],
    [fontId]
  );
  const selectedTheme = useMemo(
    () => THEME_OPTIONS.find((t) => t.id === themeId) || THEME_OPTIONS[0],
    [themeId]
  );

  const handleExport = async (type) => {
    if (!previewRef.current || !data) return;
    setIsExporting(type);

    await new Promise(resolve => setTimeout(resolve, 100));

    try {
      const element = previewRef.current.querySelector("[data-preview-root]") || previewRef.current;
      const canvas = await toCanvas(element, {
        pixelRatio: 2,
        backgroundColor: "#ffffff",
      });
      const imageData = canvas.toDataURL("image/jpeg", 1.0);
      const fileName = `biodata-${data.personal?.name ? data.personal.name.replace(/\\s+/g, '-').toLowerCase() : "marriage"}`;

      if (type === "jpeg") {
        const link = document.createElement("a");
        link.href = imageData;
        link.download = `${fileName}.jpeg`;
        link.click();
      } else {
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        const pdf = new jsPDF({
          orientation: imgHeight > imgWidth ? "portrait" : "landscape",
          unit: "mm",
          format: "a4",
        });

        pdf.addImage(
          imageData,
          "JPEG",
          0,
          0,
          imgWidth,
          imgHeight,
          undefined,
          "FAST"
        );
        pdf.save(`${fileName}.pdf`);
      }
    } catch (err) {
      console.error("Export failed:", err);
      alert("Export failed. Please check the console for details.");
    } finally {
      setIsExporting(null);
    }
  };

  if (!template) {
    return (
      <>
        <Header />
        <main className="mt-2 flex-1">
          <section className="rounded-3xl border border-white/10 bg-slate-900/80 px-6 py-16 text-center text-sm text-slate-200 sm:px-10">
            <p>Template not found.</p>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="mt-2 flex-1 flex flex-col lg:flex-row gap-6 p-4 md:px-10">
        <aside className="w-full lg:w-[320px] flex-shrink-0 bg-slate-900/60 rounded-3xl border border-white/10 p-5 shadow-2xl h-[calc(100vh-140px)] flex flex-col">
          <h2 className="text-lg font-bold text-white mb-4 tracking-tight">Select Template</h2>
          <div className="grid gap-4 overflow-y-auto pr-2 pb-10 styled-scrollbar">
            {TEMPLATE_DEFINITIONS.map((tpl) => (
              <button
                key={tpl.id}
                onClick={() => setSelectedTemplateId(tpl.id)}
                className={`text-left p-4 rounded-2xl border transition-all duration-300 ${selectedTemplateId === tpl.id
                  ? "border-brand-500 bg-brand-500/10 shadow-[0_0_15px_rgba(244,63,94,0.15)]"
                  : "border-white/5 bg-slate-950/50 hover:border-white/20 hover:bg-slate-800/50"
                  }`}
              >
                <h3 className="text-sm font-semibold text-white">{tpl.name}</h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">{tpl.description}</p>
                <div className="mt-2 flex gap-2">
                  <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {tpl.style}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </aside>

        <section className="flex-1 flex flex-col bg-slate-900/60 rounded-3xl border border-white/10 px-6 py-8 shadow-2xl relative overflow-hidden min-h-[calc(100vh-140px)]">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-brand-500/5 blur-[100px] pointer-events-none" />

          <div className="flex flex-wrap items-start justify-between gap-6 relative z-10 mb-8">
            <div className="max-w-xl space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Live Preview
              </p>
              <h1 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                {template.name}
              </h1>
            </div>
            <div className="flex flex-wrap gap-4 text-xs">
              <div className="space-y-1">
                <label className="block text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  Font family
                </label>
                <select
                  value={fontId}
                  onChange={(e) => setFontId(e.target.value)}
                  className="min-w-[160px] rounded-xl border border-white/10 bg-slate-950 px-3 py-2 text-xs text-slate-50 appearance-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 shadow-inner"
                >
                  {FONT_OPTIONS.map((font) => (
                    <option key={font.id} value={font.id}>
                      {font.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <label className="block text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  Colour theme
                </label>
                <select
                  value={themeId}
                  onChange={(e) => setThemeId(e.target.value)}
                  className="min-w-[160px] rounded-xl border border-white/10 bg-slate-950 px-3 py-2 text-xs text-slate-50 appearance-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 shadow-inner"
                >
                  {THEME_OPTIONS.map((theme) => (
                    <option key={theme.id} value={theme.id}>
                      {theme.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center bg-slate-950/40 rounded-2xl border border-white/5 p-8 overflow-y-auto relative z-10 shadow-inner">
            <TemplatePreview
              ref={previewRef}
              data={data}
              template={template}
              theme={selectedTheme}
              fontFamily={selectedFont.css}
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-xs relative z-10 border-t border-white/10 pt-6">
            <a
              href="/#biodata-form"
              className="inline-flex text-xs font-medium text-brand-300 underline-offset-4 hover:underline transition-colors"
            >
              ← Back to Edit Details
            </a>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => handleExport("pdf")}
                disabled={!data || isExporting !== null}
                className="inline-flex items-center rounded-full bg-gradient-to-r from-slate-100 to-white px-6 py-2.5 text-xs font-semibold text-slate-900 shadow-[0_0_15px_rgba(255,255,255,0.1)] transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isExporting === "pdf" ? "Processing PDF…" : "Download PDF"}
              </button>
              <button
                type="button"
                onClick={() => handleExport("jpeg")}
                disabled={!data || isExporting !== null}
                className="inline-flex items-center rounded-full border border-slate-500 bg-slate-900/50 px-6 py-2.5 text-xs font-semibold text-slate-100 transition hover:border-slate-300 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isExporting === "jpeg" ? "Processing JPEG…" : "Download JPEG"}
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


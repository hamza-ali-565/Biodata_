"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { TemplatePreview } from "./TemplatePreview";
import { ResponsivePreviewScaler } from "./ResponsivePreviewScaler";
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
  const [headingFontId, setHeadingFontId] = useState(FONT_OPTIONS[0].id);
  const [bodyFontId, setBodyFontId] = useState(
    FONT_OPTIONS.find(f => f.category === "Sans-Serif")?.id || FONT_OPTIONS[0].id
  );
  const [themeId, setThemeId] = useState(
    template?.defaultThemeId || THEME_OPTIONS[0].id
  );
  const [isExporting, setIsExporting] = useState(null);
  const previewRef = useRef(null);

  // Load saved data
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

  const selectedHeadingFont = useMemo(
    () => FONT_OPTIONS.find((f) => f.id === headingFontId) || FONT_OPTIONS[0],
    [headingFontId]
  );
  const selectedBodyFont = useMemo(
    () => FONT_OPTIONS.find((f) => f.id === bodyFontId) || FONT_OPTIONS.find(f => f.category === "Sans-Serif") || FONT_OPTIONS[0],
    [bodyFontId]
  );
  const selectedTheme = useMemo(
    () => THEME_OPTIONS.find((t) => t.id === themeId) || THEME_OPTIONS[0],
    [themeId]
  );

  const fontCategories = useMemo(() => {
    return FONT_OPTIONS.reduce((acc, font) => {
      if (!acc[font.category]) acc[font.category] = [];
      acc[font.category].push(font);
      return acc;
    }, {});
  }, []);

  const resetCustomization = () => {
    setHeadingFontId(FONT_OPTIONS[0].id);
    setBodyFontId(FONT_OPTIONS.find(f => f.category === "Sans-Serif")?.id || FONT_OPTIONS[0].id);
    setThemeId(THEME_OPTIONS[0].id);
  };

  const handleTemplateChange = (tplId) => {
    resetCustomization();
    setSelectedTemplateId(tplId);
    
    // Asynchronously update theme to the new template's default after state has reset
    setTimeout(() => {
      const newTemplate = TEMPLATE_DEFINITIONS.find((t) => t.id === tplId);
      if (newTemplate?.defaultThemeId) {
        setThemeId(newTemplate.defaultThemeId);
      }
    }, 0);
  };

  const handleReset = () => {
    resetCustomization();
    setTimeout(() => {
      setThemeId(template?.defaultThemeId || THEME_OPTIONS[0].id);
    }, 0);
  };

  const handleExport = async (type) => {
    if (!previewRef.current || !data) return;
    setIsExporting(type);

    await new Promise(resolve => setTimeout(resolve, 100));

    try {
      const { toCanvas } = await import("html-to-image");
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
        const a4Width = 210;
        const a4Height = 297;

        // Initially scale width to A4 width
        let imgWidth = a4Width;
        let imgHeight = (canvas.height * imgWidth) / canvas.width;

        // If the scaled height exceeds A4 height, scale it down to fit perfectly on A4
        if (imgHeight > a4Height) {
          imgHeight = a4Height;
          imgWidth = (canvas.width * imgHeight) / canvas.height;
        }

        // Center horizontally if scaled down by height
        const xOffset = (a4Width - imgWidth) / 2;

        const { default: jsPDF } = await import("jspdf");
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4",
        });

        pdf.addImage(
          imageData,
          "JPEG",
          xOffset,
          0, // Top aligned
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
      <main className="mt-2 flex-1 flex flex-col lg:flex-row gap-6 p-4 md:px-10 overflow-x-hidden min-w-0">
        <aside className="w-full lg:w-[320px] flex-shrink-0 bg-slate-900/60 rounded-3xl border border-white/10 p-5 shadow-2xl h-auto max-h-[38vh] lg:max-h-none lg:h-[calc(100vh-140px)] flex flex-col min-w-0">
          <h2 className="text-lg font-bold text-white mb-4 tracking-tight">Select Template</h2>
          <div className="grid gap-4 overflow-y-auto pr-2 pb-10 styled-scrollbar">
            {TEMPLATE_DEFINITIONS.map((tpl) => (
              <button
                key={tpl.id}
                onClick={() => handleTemplateChange(tpl.id)}
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

        <section className="flex-1 flex flex-col bg-slate-900/60 rounded-3xl border border-white/10 px-4 py-6 sm:px-6 sm:py-8 shadow-2xl relative overflow-hidden min-h-0 min-w-0 lg:min-h-[calc(100vh-140px)]">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-brand-500/5 blur-[100px] pointer-events-none" />

          <div className="relative z-10 mb-6 bg-slate-900/40 p-5 rounded-2xl border border-white/5 backdrop-blur-sm shadow-xl flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
              <div className="space-y-1">
                <h1 className="text-xl font-bold tracking-tight text-white sm:text-2xl flex items-center gap-3">
                  {template.name}
                  <span className="text-[10px] uppercase tracking-widest bg-brand-500/20 text-brand-300 px-2 py-0.5 rounded-full border border-brand-500/20">Preview</span>
                </h1>
                <p className="text-xs text-slate-400">
                  Customise typography and accent colours to match your style.
                </p>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-slate-800/50 px-3 py-1.5 text-[11px] font-medium text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
              >
                Reset Customization
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Heading Font */}
              <div className="space-y-2">
                <label className="block text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  Heading Font
                </label>
                <select
                  value={headingFontId}
                  onChange={(e) => setHeadingFontId(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2.5 text-xs text-slate-100 appearance-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 shadow-inner transition-colors hover:border-white/20"
                >
                  {Object.entries(fontCategories).map(([category, fonts]) => (
                    <optgroup key={category} label={category} className="bg-slate-900 text-slate-400 font-semibold text-[10px] uppercase tracking-wider">
                      {fonts.map((font) => (
                        <option key={font.id} value={font.id} className="text-xs text-slate-100 normal-case tracking-normal">
                          {font.label}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              {/* Body Font */}
              <div className="space-y-2">
                <label className="block text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  Body Font
                </label>
                <select
                  value={bodyFontId}
                  onChange={(e) => setBodyFontId(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2.5 text-xs text-slate-100 appearance-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 shadow-inner transition-colors hover:border-white/20"
                >
                  {Object.entries(fontCategories).map(([category, fonts]) => (
                    <optgroup key={category} label={category} className="bg-slate-900 text-slate-400 font-semibold text-[10px] uppercase tracking-wider">
                      {fonts.map((font) => (
                        <option key={font.id} value={font.id} className="text-xs text-slate-100 normal-case tracking-normal">
                          {font.label}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              {/* Accent Color */}
              <div className="space-y-2 md:col-span-2 lg:col-span-1">
                <label className="block text-[11px] font-semibold uppercase tracking-wide text-slate-400 mb-1">
                  Accent Color
                </label>
                <div className="flex flex-wrap gap-2">
                  {THEME_OPTIONS.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => setThemeId(theme.id)}
                      title={theme.label}
                      className={`h-7 w-7 rounded-full shadow-md transition-all duration-300 ${themeId === theme.id ? 'scale-125 ring-2 ring-white ring-offset-2 ring-offset-slate-900' : 'hover:scale-110 hover:ring-2 hover:ring-white/50 hover:ring-offset-1 hover:ring-offset-slate-900 opacity-80 hover:opacity-100'}`}
                      style={{ backgroundColor: theme.previewColor }}
                      aria-label={`Select ${theme.label} color`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 min-h-0 flex flex-col bg-slate-950/60 lg:bg-slate-950/40 rounded-2xl border border-white/5 w-full max-w-full h-auto overflow-x-hidden overflow-y-auto overscroll-contain max-h-[min(72dvh,920px)] lg:max-h-none relative z-10 shadow-inner backdrop-blur-[2px] lg:backdrop-blur-none">
            <ResponsivePreviewScaler>
              <TemplatePreview
                ref={previewRef}
                data={data}
                template={template}
                theme={selectedTheme}
                headingFont={selectedHeadingFont.css}
                bodyFont={selectedBodyFont.css}
              />
            </ResponsivePreviewScaler>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs relative z-10 border-t border-white/10 pt-6 w-full">
            <button
              onClick={() => {
                sessionStorage.setItem("scrollToForm", "true");
                window.location.href = "/";
              }}
              className="inline-flex text-xs font-medium text-brand-300 underline-offset-4 hover:underline transition-colors whitespace-nowrap"
            >
              ← Back to Edit Details
            </button>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => handleExport("pdf")}
                disabled={!data || isExporting !== null}
                className="inline-flex justify-center items-center rounded-full bg-gradient-to-r from-slate-100 to-white px-6 py-3 sm:py-2.5 text-xs font-semibold text-slate-900 shadow-[0_0_15px_rgba(255,255,255,0.1)] transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60 w-full sm:w-auto"
              >
                {isExporting === "pdf" ? "Processing PDF…" : "Download PDF"}
              </button>
              <button
                type="button"
                onClick={() => handleExport("jpeg")}
                disabled={!data || isExporting !== null}
                className="inline-flex justify-center items-center rounded-full border border-slate-500 bg-slate-900/50 px-6 py-3 sm:py-2.5 text-xs font-semibold text-slate-100 transition hover:border-slate-300 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 w-full sm:w-auto"
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


import { forwardRef } from "react";
import * as Templates from "./templates";

export const TemplatePreview = forwardRef(function TemplatePreview(
  { data, template, theme, headingFont, bodyFont },
  ref
) {
  if (!data || !template) {
    return (
      <div className="flex h-full min-h-[360px] items-center justify-center rounded-3xl border border-dashed border-slate-700 bg-slate-950/80 px-6 text-center text-sm text-slate-400">
        Fill in your biodata on the home page and then choose a template to see
        a live preview here.
      </div>
    );
  }

  const TemplateComponent = Templates[template.layout];

  if (!TemplateComponent) {
    return <div className="p-4 text-red-500">Template component not found</div>;
  }

  return (
    <div
      ref={ref}
      data-preview-root="true"
      style={{
        "--font-heading": headingFont || "inherit",
        "--font-body": bodyFont || "inherit",
        fontFamily: "var(--font-body), system-ui, -apple-system, BlinkMacSystemFont",
      }}
      className="biodata-preview bg-white"
    >
      <TemplateComponent data={data} theme={theme} headingFont={headingFont} bodyFont={bodyFont} />
    </div>
  );
});


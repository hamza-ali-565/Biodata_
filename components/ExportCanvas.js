import { forwardRef } from "react";
import * as Templates from "./templates";

// Renders the selected template at its natural fixed width, permanently
// off-screen. This is the single render both PDF and JPEG export capture
// from — it never sees the responsive preview's viewport-based scaling,
// so export output never depends on the browser window size.
export const ExportCanvas = forwardRef(function ExportCanvas(
  { data, template, theme, headingFont, bodyFont },
  ref
) {
  if (!data || !template) return null;

  const TemplateComponent = Templates[template.layout];
  if (!TemplateComponent) return null;

  return (
    <div
      aria-hidden="true"
      style={{ position: "fixed", top: 0, left: "-99999px", zIndex: -1, pointerEvents: "none" }}
    >
      <div
        ref={ref}
        data-export-root="true"
        style={{
          "--font-heading": headingFont || "inherit",
          "--font-body": bodyFont || "inherit",
          fontFamily: "var(--font-body), system-ui, -apple-system, BlinkMacSystemFont",
        }}
        className="biodata-preview bg-white inline-block"
      >
        <TemplateComponent data={data} theme={theme} headingFont={headingFont} bodyFont={bodyFont} />
      </div>
    </div>
  );
});

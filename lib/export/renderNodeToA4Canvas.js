// Single source of truth for export dimensions: both PDF and JPEG exports
// derive their raster data from this one function, so they are always
// pixel-for-pixel the same A4-width render regardless of viewport/zoom.

export const A4_WIDTH_MM = 210;
// 210mm at 96 CSS px/inch (96 / 25.4), rounded — the fixed export width.
export const A4_WIDTH_PX = 794;

// Extra raster resolution on top of the fixed A4 width, for print sharpness.
const SUPERSAMPLE = 2;

export async function renderNodeToA4Canvas(node) {
  const { toCanvas } = await import("html-to-image");

  // Capture the node at its own natural size first. The node is expected to
  // come from a fixed-layout, off-screen export container (see
  // components/ExportCanvas.js) so this never depends on the current
  // viewport width or any responsive preview scaling.
  const rawCanvas = await toCanvas(node, {
    backgroundColor: "#ffffff",
    pixelRatio: 2,
  });

  const targetWidth = A4_WIDTH_PX * SUPERSAMPLE;
  const scale = targetWidth / rawCanvas.width;
  const targetHeight = Math.round(rawCanvas.height * scale);

  const a4Canvas = document.createElement("canvas");
  a4Canvas.width = targetWidth;
  a4Canvas.height = targetHeight;

  const ctx = a4Canvas.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, targetWidth, targetHeight);
  // A single uniform scale on both axes — never stretches or distorts,
  // just resamples the natural render onto the fixed A4-width canvas.
  ctx.drawImage(rawCanvas, 0, 0, targetWidth, targetHeight);

  return a4Canvas;
}

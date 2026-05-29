export function createTypographyStyles(headingFont, bodyFont) {
  return {
    headingStyle: { fontFamily: headingFont || "inherit" },
    bodyStyle: { fontFamily: bodyFont || "inherit" },
  };
}

export function getPrimaryHeading(personal) {
  return personal?.name || "Your Name";
}

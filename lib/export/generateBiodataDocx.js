import {
  AlignmentType,
  BorderStyle,
  Document,
  ImageRun,
  Packer,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
  convertMillimetersToTwip,
} from "docx";

// Map font IDs to Word-safe equivalents
const WORD_FONT = {
  playfair:             "Palatino Linotype",
  merriweather:         "Georgia",
  lora:                 "Georgia",
  "libre-baskerville":  "Georgia",
  "cormorant-garamond": "Garamond",
  "dm-serif-display":   "Book Antiqua",
  "roboto-slab":        "Cambria",
  cinzel:               "Times New Roman",
  poppins:              "Century Gothic",
  inter:                "Calibri",
  lato:                 "Arial",
  montserrat:           "Gill Sans MT",
  nunito:               "Century Gothic",
  raleway:              "Trebuchet MS",
  "source-sans-pro":    "Trebuchet MS",
};

const wf = (id) => WORD_FONT[id] || "Calibri";

// Strip # from hex color for docx API
const dc = (hex) => (hex || "#374151").replace("#", "").toUpperCase();

// Convert base64 data URL to ArrayBuffer
function dataUrlToArrayBuffer(dataUrl) {
  const base64 = dataUrl.split(",")[1];
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes.buffer;
}

// Thin horizontal rule paragraph
function rule(color) {
  return new Paragraph({
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: dc(color) } },
    spacing: { before: 60, after: 60 },
    children: [],
  });
}

// Section heading paragraph
function sectionHeading(text, accentColor, headingFont) {
  return new Paragraph({
    spacing: { before: 240, after: 80 },
    children: [
      new TextRun({
        text: text.toUpperCase(),
        bold: true,
        size: 22,
        color: dc(accentColor),
        font: headingFont,
        characterSpacing: 60,
      }),
    ],
  });
}

// Two-column label:value table for a section
function detailsTable(rows, accentColor, bodyFont) {
  const noBorder = { style: BorderStyle.NIL, size: 0, color: "FFFFFF" };
  const rowBorder = { style: BorderStyle.SINGLE, size: 1, color: "E5E7EB" };

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: noBorder, bottom: noBorder, left: noBorder, right: noBorder,
      insideH: noBorder, insideV: noBorder,
    },
    rows: rows.map(({ label, value }, i) =>
      new TableRow({
        children: [
          new TableCell({
            width: { size: 32, type: WidthType.PERCENTAGE },
            shading: { type: ShadingType.SOLID, color: "F8F9FA" },
            borders: {
              top: noBorder, left: noBorder, right: noBorder,
              bottom: i < rows.length - 1 ? rowBorder : noBorder,
            },
            margins: {
              top: convertMillimetersToTwip(1.5),
              bottom: convertMillimetersToTwip(1.5),
              left: convertMillimetersToTwip(2),
              right: convertMillimetersToTwip(1),
            },
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: label,
                    bold: true,
                    size: 18,
                    color: "374151",
                    font: bodyFont,
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            width: { size: 68, type: WidthType.PERCENTAGE },
            borders: {
              top: noBorder, left: noBorder, right: noBorder,
              bottom: i < rows.length - 1 ? rowBorder : noBorder,
            },
            margins: {
              top: convertMillimetersToTwip(1.5),
              bottom: convertMillimetersToTwip(1.5),
              left: convertMillimetersToTwip(2),
              right: convertMillimetersToTwip(1),
            },
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: String(value),
                    size: 18,
                    color: "1F2937",
                    font: bodyFont,
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    ),
  });
}

// Community-specific field labels based on template
function getFieldLabels(templateId) {
  if (templateId === "udayam") return { religion: "Denomination", caste: "Diocese" };
  return {};
}

// Fields excluded for specific community templates
function getExcludedPersonalKeys(templateId) {
  const sikh = new Set(["gotra", "rashi", "nakshatra", "manglik"]);
  const christian = new Set(["gotra", "rashi", "nakshatra", "manglik"]);
  const muslim = new Set(["gotra", "rashi", "nakshatra", "manglik"]);
  if (templateId === "shilp") return sikh;
  if (templateId === "udayam") return christian;
  if (templateId === "rishta-nikah" || templateId === "TemplateBeautifulTraditional"
      || templateId === "TemplateRishtaNikah") return muslim;
  return new Set();
}

export async function generateBiodataDocx({ data, theme, headingFontId, bodyFontId, templateId = "" }) {
  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data || {};

  const accentColor  = theme?.accent      || "#3b82f6";
  const headingColor = theme?.textHeading || "#1e3a8a";
  const hf = wf(headingFontId);
  const bf = wf(bodyFontId);

  const labels    = getFieldLabels(templateId);
  const excluded  = getExcludedPersonalKeys(templateId);

  // ── Personal rows ──────────────────────────────────────────────────────────
  const allPersonalRows = [
    { key: "dateOfBirth",   label: "Date of Birth",   value: personal?.dateOfBirth },
    { key: "timeOfBirth",   label: "Time of Birth",   value: personal?.timeOfBirth },
    { key: "placeOfBirth",  label: "Place of Birth",  value: personal?.placeOfBirth },
    { key: "height",        label: "Height",           value: personal?.height },
    { key: "complexion",    label: "Complexion",       value: personal?.complexion },
    { key: "bloodGroup",    label: "Blood Group",      value: personal?.bloodGroup },
    { key: "religion",      label: labels.religion || "Religion", value: personal?.religion },
    { key: "caste",         label: labels.caste    || "Caste",    value: personal?.caste },
    { key: "gotra",         label: "Gotra",            value: personal?.gotra },
    { key: "rashi",         label: "Rashi",            value: personal?.rashi },
    { key: "nakshatra",     label: "Nakshatra",        value: personal?.nakshatra },
    { key: "manglik",       label: "Manglik",          value: personal?.manglik },
    { key: "motherTongue",  label: "Mother Tongue",    value: personal?.motherTongue },
    { key: "nationality",   label: "Nationality",      value: personal?.nationality },
    { key: "maritalStatus", label: "Marital Status",   value: personal?.maritalStatus },
    { key: "education",     label: "Education",        value: personal?.bachelors || personal?.education },
    { key: "occupation",    label: "Occupation",       value: personal?.occupation },
  ]
    .filter(r => r.value && !excluded.has(r.key))
    .concat(
      (personal?.customFields || [])
        .filter(f => f?.value)
        .map(f => ({ label: f.label, value: f.value }))
    );

  const familyRows = [
    { label: "Father's Name",       value: family?.fatherName },
    { label: "Father's Occupation", value: family?.fatherOccupation },
    { label: "Mother's Name",       value: family?.motherName },
    { label: "Mother's Occupation", value: family?.motherOccupation },
    { label: "Siblings",            value: family?.siblings },
    { label: "Family Type",         value: family?.familyType },
    { label: "Native Place",        value: family?.nativePlace },
  ]
    .filter(r => r.value)
    .concat(
      (family?.customFields || [])
        .filter(f => f?.value)
        .map(f => ({ label: f.label, value: f.value }))
    );

  const contactRows = [
    { label: "Contact Person", value: contact?.contactPerson },
    { label: "Phone",          value: contact?.contactNumber },
    { label: "Email",          value: contact?.email },
    { label: "Address",        value: contact?.address },
  ]
    .filter(r => r.value)
    .concat(
      (contact?.customFields || [])
        .filter(f => f?.value)
        .map(f => ({ label: f.label, value: f.value }))
    );

  // ── Build document children ─────────────────────────────────────────────────
  const children = [];

  // Photo
  if (photoDataUrl) {
    try {
      const imgBuffer = dataUrlToArrayBuffer(photoDataUrl);
      children.push(
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 0, after: 160 },
          children: [
            new ImageRun({
              data: imgBuffer,
              transformation: { width: 110, height: 140 },
              type: "jpg",
            }),
          ],
        })
      );
    } catch {
      // Photo embedding failed — skip silently
    }
  }

  // Name
  const displayName = personal?.name || "Marriage Biodata";
  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 0, after: 80 },
      children: [
        new TextRun({
          text: displayName,
          bold: true,
          size: 52,
          color: dc(headingColor),
          font: hf,
        }),
      ],
    })
  );

  // Subtitle: occupation · place
  const subtitleParts = [personal?.occupation, personal?.placeOfBirth].filter(Boolean);
  if (subtitleParts.length) {
    children.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 120 },
        children: [
          new TextRun({
            text: subtitleParts.join("  ·  "),
            size: 20,
            color: "6B7280",
            font: bf,
          }),
        ],
      })
    );
  }

  children.push(rule(accentColor));

  // Personal Details
  if (allPersonalRows.length) {
    children.push(sectionHeading("Personal Details", accentColor, hf));
    children.push(detailsTable(allPersonalRows, accentColor, bf));
  }

  // Family Details
  if (familyRows.length) {
    children.push(sectionHeading("Family Details", accentColor, hf));
    children.push(detailsTable(familyRows, accentColor, bf));
  }

  // Contact Details
  if (contactRows.length) {
    children.push(sectionHeading("Contact", accentColor, hf));
    children.push(detailsTable(contactRows, accentColor, bf));
  }

  // About Me
  const aboutMeText = personal?.aboutMe?.trim();
  if (aboutMeText) {
    children.push(sectionHeading("About Me", accentColor, hf));
    children.push(
      new Paragraph({
        spacing: { before: 40, after: 80 },
        children: [
          new TextRun({
            text: aboutMeText,
            size: 18,
            color: "374151",
            font: bf,
          }),
        ],
      })
    );
  }

  // Footer note
  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 320, after: 0 },
      children: [
        new TextRun({
          text: "Generated via Marriage Biodata Hub · marriagebiodatahub.com",
          size: 14,
          color: "9CA3AF",
          font: bf,
          italics: true,
        }),
      ],
    })
  );

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top:    convertMillimetersToTwip(18),
              right:  convertMillimetersToTwip(18),
              bottom: convertMillimetersToTwip(18),
              left:   convertMillimetersToTwip(18),
            },
          },
        },
        children,
      },
    ],
  });

  return Packer.toBlob(doc);
}

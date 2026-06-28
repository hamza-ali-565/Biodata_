import { createTypographyStyles, getPrimaryHeading } from "../templateTypography";
import { AboutMeSection } from "../templateAboutMe";

const DEVANAGARI_FONT = "'Noto Sans Devanagari', 'Hind', sans-serif";

const HINDI_LABELS = {
  "Name":          { hi: "नाम",         en: "Name" },
  "Date of Birth": { hi: "जन्म तिथि",   en: "Date of Birth" },
  "Time of Birth": { hi: "जन्म समय",    en: "Time of Birth" },
  "Native Place":  { hi: "मूल निवास",   en: "Native Place" },
  "Religion":      { hi: "धर्म",        en: "Religion" },
  "Caste":         { hi: "जाति",        en: "Caste" },
  "Height":        { hi: "कद",          en: "Height" },
  "Gotra":         { hi: "गोत्र",       en: "Gotra" },
  "Occupation":    { hi: "व्यवसाय",     en: "Occupation" },
  "Education":     { hi: "शिक्षा",      en: "Education" },
  "Father":        { hi: "पिता",        en: "Father's Name" },
  "Mother":        { hi: "माता",        en: "Mother's Name" },
};

function BilingualLabel({ labelKey, terracotta }) {
  const entry = HINDI_LABELS[labelKey];
  if (!entry) {
    return <span style={{ color: terracotta, opacity: 0.75, fontSize: "10px", fontWeight: 600 }}>{labelKey}</span>;
  }
  return (
    <span style={{ display: "inline-flex", flexDirection: "column", lineHeight: 1.1 }}>
      <span style={{ fontFamily: DEVANAGARI_FONT, fontSize: "9px", color: terracotta, opacity: 0.7 }}>
        {entry.hi}
      </span>
      <span style={{ fontSize: "9.5px", color: terracotta, opacity: 0.75, fontWeight: 600, letterSpacing: "0.02em" }}>
        {entry.en}
      </span>
    </span>
  );
}

export function TemplateGharDwaar({ data, theme, headingFont, bodyFont }) {
  const { headingStyle, bodyStyle } = createTypographyStyles(headingFont, bodyFont);
  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const terracotta = theme?.accent      || "#A0522D";
  const fieldGreen = theme?.accentSoft  ? theme.accentSoft : "#4A7C59";
  const heading    = theme?.textHeading || "#A0522D";
  const bg         = "#FAF3E0";

  const allPersonalCustom = personal?.customFields || [];

  const familyHeritageField = allPersonalCustom.find(
    (f) =>
      f?.label?.toLowerCase() === "family heritage" ||
      f?.label?.toLowerCase() === "parivaar ka parichay" ||
      f?.label?.toLowerCase() === "parivar ka parichay"
  );

  const remainingCustom = allPersonalCustom.filter(
    (f) => f?.value &&
      f?.label?.toLowerCase() !== "family heritage" &&
      f?.label?.toLowerCase() !== "parivaar ka parichay" &&
      f?.label?.toLowerCase() !== "parivar ka parichay"
  );

  const personalRows = [
    ["Date of Birth",  personal?.dateOfBirth],
    ["Time of Birth",  personal?.timeOfBirth],
    ["Place of Birth", personal?.placeOfBirth],
    ["Height",         personal?.height],
    ["Complexion",     personal?.complexion],
    ["Blood Group",    personal?.bloodGroup],
    ["Rashi",          personal?.rashi],
    ["Nakshatra",      personal?.nakshatra],
    ["Gotra",          personal?.gotra],
    ["Manglik",        personal?.manglik],
    ["Religion",       personal?.religion],
    ["Caste",          personal?.caste],
    ["Nationality",    personal?.nationality],
  ];

  const familyRows = [
    ["Father's Name",  family?.fatherName],
    ["Father's Occ.",  family?.fatherOccupation],
    ["Mother's Name",  family?.motherName],
    ["Mother's Occ.",  family?.motherOccupation],
    ["Siblings",       family?.siblings],
    ["Family Type",    family?.familyType],
    ["Native Place",   family?.nativePlace],
  ];

  const educationRows = [
    ["Education",  personal?.bachelors || personal?.education],
    ["Masters",    personal?.masters],
    ["Occupation", personal?.occupation],
    ["Employer",   personal?.employer],
    ["Income",     personal?.income],
    ["City",       personal?.city],
  ];

  const contactRows = [
    ["Contact",    contact?.contactPerson],
    ["Phone",      contact?.contactNumber],
    ["WhatsApp",   contact?.whatsappIndia || contact?.contactNumber],
    ["Email",      contact?.email],
    ["Address",    contact?.address],
  ];

  return (
    <div
      data-preview-root="true"
      className="relative mx-auto w-[600px] overflow-hidden"
      style={{ backgroundColor: bg, color: "#2C1A0E", minHeight: "800px", ...bodyStyle }}
    >
      {/* Block-print border SVG — left + top edges */}
      <BlockPrintBorder terracotta={terracotta} />

      {/* Header */}
      <div className="pt-7 pb-3 px-8" style={{ paddingLeft: "30px" }}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div
              className="text-[26px] font-bold leading-tight"
              style={{ ...headingStyle, color: heading }}
              data-typography="heading"
            >
              {getPrimaryHeading(personal)}
            </div>
            {/* Native place — elevated, prominent */}
            {(family?.nativePlace || personal?.placeOfBirth) && (
              <div
                className="text-[14px] font-bold mt-1"
                style={{ color: terracotta }}
              >
                {family?.nativePlace || personal?.placeOfBirth}
              </div>
            )}
            {personal?.city && personal?.city !== (family?.nativePlace || personal?.placeOfBirth) && (
              <div className="text-[11px] mt-0.5" style={{ color: "#666" }}>
                {personal.city}
              </div>
            )}
            <div className="text-[11px] mt-1" style={{ color: "#777" }}>
              {[personal?.dateOfBirth, personal?.caste || personal?.religion, personal?.gotra ? `Gotra: ${personal.gotra}` : null].filter(Boolean).join(" · ")}
            </div>
          </div>

          {/* Photo */}
          <div
            className="flex-shrink-0"
            style={{
              width: 100,
              height: 120,
              border: `2px solid ${terracotta}`,
              overflow: "hidden",
              backgroundColor: `${terracotta}12`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {photoDataUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={photoDataUrl}
                alt={personal?.name || "Profile"}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <span style={{ fontSize: "9px", color: terracotta, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Photo
              </span>
            )}
          </div>
        </div>
      </div>

      <DiamondDivider terracotta={terracotta} />

      <div className="px-6 py-2" style={{ paddingLeft: "24px" }}>
        {/* Personal + Family two-column */}
        <div className="flex gap-5">
          <div style={{ flex: "0 0 55%" }}>
            <BilingualSectionTitle
              hindi="व्यक्तिगत विवरण"
              english="Personal Details"
              terracotta={terracotta}
              headingStyle={headingStyle}
            />
            <div className="mt-2 space-y-1">
              {personalRows.map(([l, v]) =>
                v ? <RowBilingual key={l} labelKey={l} value={v} terracotta={terracotta} /> : null
              )}
              {remainingCustom.map((f) =>
                f?.value ? (
                  <div key={f.id || f.label} className="flex items-start leading-relaxed" style={{ fontSize: "11px" }}>
                    <div className="flex-shrink-0 font-semibold" style={{ color: terracotta, opacity: 0.75, width: "100px", fontSize: "10px" }}>
                      {f.label}
                    </div>
                    <div className="w-3 text-center opacity-40">:</div>
                    <div className="flex-1 break-words">{f.value}</div>
                  </div>
                ) : null
              )}
            </div>
          </div>

          <div style={{ flex: "0 0 42%" }}>
            <BilingualSectionTitle
              hindi="पारिवारिक विवरण"
              english="Family Details"
              terracotta={terracotta}
              headingStyle={headingStyle}
            />
            <div className="mt-2 space-y-1">
              {familyRows.map(([l, v]) =>
                v ? <SimpleRow key={l} label={l} value={v} terracotta={terracotta} /> : null
              )}
              {/* Native place in family context */}
              {family?.nativePlace && (
                <div className="mt-1 text-[10.5px]" style={{ color: terracotta, fontWeight: 600 }}>
                  <span style={{ fontFamily: DEVANAGARI_FONT, fontSize: "9px", opacity: 0.7 }}>मूल नगर:</span>{" "}
                  {family.nativePlace}
                </div>
              )}
              {family?.customFields?.map((f) =>
                f?.value ? <SimpleRow key={f.id || f.label} label={f.label} value={f.value} terracotta={terracotta} /> : null
              )}
            </div>
          </div>
        </div>

        <DiamondDivider terracotta={terracotta} />

        {/* Education & Career */}
        <div>
          <BilingualSectionTitle
            hindi="शिक्षा एवं व्यवसाय"
            english="Education & Career"
            terracotta={terracotta}
            headingStyle={headingStyle}
          />
          <div className="flex gap-5 mt-2">
            <div className="flex-1 space-y-1">
              {educationRows.slice(0, 3).map(([l, v]) =>
                v ? <SimpleRow key={l} label={l} value={v} terracotta={terracotta} /> : null
              )}
            </div>
            <div className="flex-1 space-y-1">
              {educationRows.slice(3).map(([l, v]) =>
                v ? <SimpleRow key={l} label={l} value={v} terracotta={terracotta} /> : null
              )}
            </div>
          </div>
        </div>

        <DiamondDivider terracotta={terracotta} />

        {/* Family Heritage / About Me */}
        {familyHeritageField?.value ? (
          <div>
            <BilingualSectionTitle
              hindi="परिवार का परिचय"
              english="Family Heritage"
              terracotta={terracotta}
              headingStyle={headingStyle}
            />
            <div
              className="mt-2 px-3 py-3 text-[12px] leading-relaxed italic rounded"
              style={{
                backgroundColor: `${terracotta}0D`,
                borderLeft: `2px solid ${terracotta}`,
                color: "#3C1A0E",
              }}
            >
              &ldquo;{familyHeritageField.value}&rdquo;
            </div>
            {personal?.aboutMe && (
              <div className="mt-3">
                <AboutMeSection text={personal.aboutMe} accent={terracotta} headingStyle={headingStyle} />
              </div>
            )}
          </div>
        ) : (
          <AboutMeSection text={personal?.aboutMe} accent={terracotta} headingStyle={headingStyle} />
        )}

        {personal?.partnerPreferences && (
          <>
            <DiamondDivider terracotta={terracotta} />
            <div>
              <BilingualSectionTitle hindi="" english="Partner Preferences" terracotta={terracotta} headingStyle={headingStyle} />
              <p className="mt-2 text-[12px] leading-relaxed" style={{ color: "#555" }}>
                {personal.partnerPreferences}
              </p>
            </div>
          </>
        )}

        <DiamondDivider terracotta={terracotta} />

        {/* Contact footer */}
        <div className="rounded px-3 py-3" style={{ backgroundColor: `${terracotta}0D` }}>
          <BilingualSectionTitle hindi="" english="Contact Details" terracotta={terracotta} headingStyle={headingStyle} />
          <div className="flex gap-5 mt-2">
            <div className="flex-1 space-y-1">
              {contactRows.slice(0, 3).map(([l, v]) =>
                v ? <SimpleRow key={l} label={l} value={v} terracotta={terracotta} /> : null
              )}
            </div>
            <div className="flex-1 space-y-1">
              {contactRows.slice(3).map(([l, v]) =>
                v ? <SimpleRow key={l} label={l} value={v} terracotta={terracotta} /> : null
              )}
            </div>
          </div>
          {contact?.customFields?.map((f) =>
            f?.value ? <SimpleRow key={f.id || f.label} label={f.label} value={f.value} terracotta={terracotta} /> : null
          )}
        </div>

        <p className="text-center text-[9px] mt-4 mb-3 opacity-30">Created with ♥ by Marriage Biodata Hub</p>
      </div>
    </div>
  );
}

function BlockPrintBorder({ terracotta }) {
  // Repeating diamond-dot block-print pattern via inline SVG
  const unitSize = 18;
  return (
    <svg
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <defs>
        <pattern id="blockPrint" x="0" y="0" width={unitSize} height={unitSize} patternUnits="userSpaceOnUse">
          <rect width={unitSize} height={unitSize} fill="none" />
          <polygon
            points={`${unitSize / 2},2 ${unitSize - 2},${unitSize / 2} ${unitSize / 2},${unitSize - 2} 2,${unitSize / 2}`}
            fill="none"
            stroke={terracotta}
            strokeWidth="1"
            opacity="0.5"
          />
          <circle cx={unitSize / 2} cy={unitSize / 2} r="1.5" fill={terracotta} opacity="0.5" />
        </pattern>
      </defs>
      {/* Left edge strip */}
      <rect x="0" y="0" width={unitSize} height="100%" fill="url(#blockPrint)" />
      {/* Top edge strip */}
      <rect x="0" y="0" width="100%" height={unitSize} fill="url(#blockPrint)" />
    </svg>
  );
}

function DiamondDivider({ terracotta }) {
  return (
    <div className="flex items-center gap-2 my-3">
      <div className="h-px flex-1" style={{ backgroundColor: `${terracotta}40` }} />
      <span style={{ color: terracotta, fontSize: "10px" }}>◆</span>
      <div className="h-px flex-1" style={{ backgroundColor: `${terracotta}40` }} />
    </div>
  );
}

function BilingualSectionTitle({ hindi, english, terracotta, headingStyle }) {
  return (
    <div className="mb-1">
      {hindi && (
        <div
          className="text-[10px] leading-tight"
          style={{ fontFamily: DEVANAGARI_FONT, color: terracotta, opacity: 0.65 }}
        >
          {hindi}
        </div>
      )}
      <div
        className="text-[12px] font-bold uppercase tracking-[0.12em]"
        style={{ ...headingStyle, color: terracotta }}
        data-typography="heading"
      >
        {english}
      </div>
    </div>
  );
}

function RowBilingual({ labelKey, value, terracotta }) {
  if (!value) return null;
  return (
    <div className="flex items-start leading-relaxed" style={{ fontSize: "11px" }}>
      <div className="flex-shrink-0" style={{ width: "108px" }}>
        <BilingualLabel labelKey={labelKey} terracotta={terracotta} />
      </div>
      <div className="w-3 text-center opacity-40">:</div>
      <div className="flex-1 break-words">{value}</div>
    </div>
  );
}

function SimpleRow({ label, value, terracotta }) {
  if (!value) return null;
  return (
    <div className="flex items-start text-[11px] leading-relaxed">
      <div className="flex-shrink-0 font-semibold" style={{ color: terracotta, opacity: 0.75, width: "100px", fontSize: "10px" }}>
        {label}
      </div>
      <div className="w-3 text-center opacity-40">:</div>
      <div className="flex-1 break-words">{value}</div>
    </div>
  );
}

import { createTypographyStyles, getPrimaryHeading } from "../templateTypography";
import { AboutMeSection } from "../templateAboutMe";

const HINDI_FONT = "'Noto Serif Devanagari', 'Noto Serif', serif";

export function TemplateSanskaarSaathi({ data, theme, headingFont, bodyFont }) {
  const { headingStyle, bodyStyle } = createTypographyStyles(headingFont, bodyFont);
  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const burgundy = theme?.accent      || "#6B1C1C";
  const gold     = theme?.accentSoft  ? theme.accentSoft : "#B8860B";
  const heading  = theme?.textHeading || "#6B1C1C";
  const bg       = "#F5ECD7";

  const allPersonalCustom = personal?.customFields || [];

  const familyNameField = allPersonalCustom.find(
    (f) => f?.label?.toLowerCase() === "family name" || f?.label?.toLowerCase() === "khandaan"
  );
  const grandfatherField = allPersonalCustom.find(
    (f) => f?.label?.toLowerCase().includes("grandfather")
  );
  const ancestralVillageField = allPersonalCustom.find(
    (f) => f?.label?.toLowerCase().includes("ancestral village") || f?.label?.toLowerCase().includes("mool niwas")
  );
  const familyLegacyField = allPersonalCustom.find(
    (f) => f?.label?.toLowerCase() === "family legacy" || f?.label?.toLowerCase() === "khandaan ki virasat"
  );

  const remainingCustom = allPersonalCustom.filter(
    (f) => f?.value &&
      f?.label?.toLowerCase() !== "family name" &&
      f?.label?.toLowerCase() !== "khandaan" &&
      !f?.label?.toLowerCase().includes("grandfather") &&
      !f?.label?.toLowerCase().includes("ancestral village") &&
      !f?.label?.toLowerCase().includes("mool niwas") &&
      f?.label?.toLowerCase() !== "family legacy" &&
      f?.label?.toLowerCase() !== "khandaan ki virasat"
  );

  const hasLineageStrip = !!(grandfatherField?.value || family?.fatherName || ancestralVillageField?.value);

  const mainWidth = hasLineageStrip ? 540 : 600;
  const mainPadding = hasLineageStrip ? "0 20px 0 12px" : "0 20px";

  const personalRows = [
    ["Date of Birth",  personal?.dateOfBirth],
    ["Time of Birth",  personal?.timeOfBirth],
    ["Place of Birth", personal?.placeOfBirth],
    ["Height",         personal?.height],
    ["Complexion",     personal?.complexion],
    ["Blood Group",    personal?.bloodGroup],
    ["Religion",       personal?.religion],
    ["Caste",          personal?.caste],
    ["Rashi",          personal?.rashi],
    ["Nakshatra",      personal?.nakshatra],
    ["Gotra",          personal?.gotra],
    ["Manglik",        personal?.manglik],
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
    ["Contact Person", contact?.contactPerson],
    ["Phone",          contact?.contactNumber],
    ["WhatsApp",       contact?.whatsappIndia || contact?.contactNumber],
    ["Email",          contact?.email],
    ["Address",        contact?.address],
  ];

  return (
    <div
      data-preview-root="true"
      className="relative mx-auto w-[600px] overflow-hidden"
      style={{ backgroundColor: bg, color: "#2C1A0E", minHeight: "800px", ...bodyStyle, display: "flex", flexDirection: "row" }}
    >
      {/* Left lineage strip */}
      {hasLineageStrip && (
        <div
          className="flex-shrink-0"
          style={{
            width: "60px",
            backgroundColor: `${burgundy}1A`,
            borderRight: `1px solid ${burgundy}30`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            padding: "24px 4px",
          }}
        >
          {grandfatherField?.value && (
            <div
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontSize: "9px",
                color: burgundy,
                fontWeight: 600,
                letterSpacing: "0.06em",
                textAlign: "center",
                maxHeight: "140px",
                overflow: "hidden",
              }}
            >
              {grandfatherField.value}
            </div>
          )}
          {family?.fatherName && (
            <div
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontSize: "9px",
                color: burgundy,
                fontWeight: 600,
                letterSpacing: "0.06em",
                textAlign: "center",
                maxHeight: "120px",
                overflow: "hidden",
              }}
            >
              {family.fatherName}
            </div>
          )}
          {ancestralVillageField?.value && (
            <div
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontSize: "8px",
                color: gold,
                letterSpacing: "0.05em",
                textAlign: "center",
                maxHeight: "100px",
                overflow: "hidden",
              }}
            >
              {ancestralVillageField.value}
            </div>
          )}
        </div>
      )}

      {/* Main content */}
      <div style={{ flex: 1, padding: mainPadding, paddingTop: 0, paddingBottom: 0 }}>

        {/* Header */}
        <div className="pt-5 pb-3">
          {/* Family Crest Shield */}
          <div className="flex flex-col items-center mb-2">
            <ShieldSVG burgundy={burgundy} gold={gold} headingStyle={headingStyle}
              surname={familyNameField?.value || personal?.gotra || ""} />
          </div>

          {/* Family name banner */}
          {familyNameField?.value && (
            <div
              className="text-center py-2 mb-3"
              style={{ backgroundColor: burgundy, borderRadius: 2 }}
            >
              <span
                className="text-[22px] font-bold text-white"
                style={{ ...headingStyle }}
                data-typography="heading"
              >
                {familyNameField.value}
              </span>
            </div>
          )}

          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 text-center">
              <div
                className="text-[24px] font-bold"
                style={{ ...headingStyle, color: heading }}
                data-typography="heading"
              >
                {getPrimaryHeading(personal)}
              </div>
              <div className="text-[11px] mt-1" style={{ color: "#5C3D2E" }}>
                {[personal?.gotra ? `Gotra: ${personal.gotra}` : null, personal?.dateOfBirth, personal?.caste || personal?.religion].filter(Boolean).join(" · ")}
              </div>
            </div>

            {/* Formal photo frame */}
            <div className="flex-shrink-0" style={{ position: "relative" }}>
              <div
                style={{
                  width: 120,
                  height: 150,
                  border: `2px solid ${burgundy}`,
                  padding: 4,
                  backgroundColor: bg,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    border: `1px solid ${burgundy}80`,
                    overflow: "hidden",
                    backgroundColor: `${burgundy}12`,
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
                    <span style={{ fontSize: "9px", color: burgundy, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Photo
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <DoubleRule burgundy={burgundy} />

        {/* Family Heritage — FIRST section */}
        <div className="py-3">
          <BilingualSectionTitle
            hindi="पारिवारिक परिचय"
            english="Family Heritage"
            burgundy={burgundy}
            headingStyle={headingStyle}
          />
          <DoubleRule burgundy={burgundy} />
          <div className="mt-2 space-y-1">
            {familyRows.map(([l, v]) => <Row key={l} label={l} value={v} burgundy={burgundy} />)}
          </div>

          {familyLegacyField?.value && (
            <div
              className="mt-3 px-3 py-2 text-[11.5px] leading-relaxed italic rounded"
              style={{
                backgroundColor: `${burgundy}0A`,
                border: `1px solid ${burgundy}40`,
                color: "#3C1A0E",
              }}
            >
              &ldquo;{familyLegacyField.value}&rdquo;
            </div>
          )}

          {family?.customFields?.map((f) =>
            f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} burgundy={burgundy} /> : null
          )}
        </div>

        <DoubleRule burgundy={burgundy} />

        {/* Personal + Education two-column */}
        <div className="flex gap-4 py-3">
          <div style={{ flex: "0 0 54%" }}>
            <BilingualSectionTitle
              hindi="व्यक्तिगत विवरण"
              english="Personal Details"
              burgundy={burgundy}
              headingStyle={headingStyle}
            />
            <DoubleRule burgundy={burgundy} />
            <div className="mt-2 space-y-1">
              {personalRows.map(([l, v]) => <Row key={l} label={l} value={v} burgundy={burgundy} />)}
              {remainingCustom.map((f) =>
                f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} burgundy={burgundy} /> : null
              )}
            </div>
          </div>

          <div style={{ flex: "0 0 43%" }}>
            <BilingualSectionTitle
              hindi="शिक्षा एवं व्यवसाय"
              english="Education & Career"
              burgundy={burgundy}
              headingStyle={headingStyle}
            />
            <DoubleRule burgundy={burgundy} />
            <div className="mt-2 space-y-1">
              {educationRows.map(([l, v]) => <Row key={l} label={l} value={v} burgundy={burgundy} />)}
            </div>
          </div>
        </div>

        <DoubleRule burgundy={burgundy} />

        {/* About Me */}
        <div className="py-3">
          <AboutMeSection text={personal?.aboutMe} accent={burgundy} headingStyle={headingStyle} />
          {personal?.partnerPreferences && (
            <div className="mt-3">
              <BilingualSectionTitle hindi="" english="Partner Preferences" burgundy={burgundy} headingStyle={headingStyle} />
              <p className="mt-1 text-[11.5px] leading-relaxed" style={{ color: "#444" }}>
                {personal.partnerPreferences}
              </p>
            </div>
          )}
        </div>

        <DoubleRule burgundy={burgundy} />

        {/* Contact footer */}
        <div className="py-3 px-2 rounded" style={{ backgroundColor: `${burgundy}0A` }}>
          <BilingualSectionTitle hindi="" english="Contact Details" burgundy={burgundy} headingStyle={headingStyle} />
          <div className="flex gap-4 mt-2">
            <div className="flex-1 space-y-1">
              {contactRows.slice(0, 3).map(([l, v]) => <Row key={l} label={l} value={v} burgundy={burgundy} />)}
            </div>
            <div className="flex-1 space-y-1">
              {contactRows.slice(3).map(([l, v]) => <Row key={l} label={l} value={v} burgundy={burgundy} />)}
            </div>
          </div>
          {contact?.customFields?.map((f) =>
            f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} burgundy={burgundy} /> : null
          )}
        </div>

      </div>
    </div>
  );
}

function ShieldSVG({ burgundy, gold, headingStyle, surname }) {
  return (
    <div className="relative" style={{ width: 80, height: 100 }}>
      <svg width="80" height="100" viewBox="0 0 80 100" fill="none" aria-hidden="true">
        {/* Oval outer */}
        <ellipse cx="40" cy="50" rx="38" ry="48" stroke={burgundy} strokeWidth="1.5" fill="none" />
        {/* Diamond inner */}
        <polygon points="40,8 72,50 40,92 8,50" stroke={burgundy} strokeWidth="1.5" fill="none" />
        {/* Corner ornaments */}
        <circle cx="40" cy="8"  r="3" fill={gold} />
        <circle cx="72" cy="50" r="3" fill={gold} />
        <circle cx="40" cy="92" r="3" fill={gold} />
        <circle cx="8"  cy="50" r="3" fill={gold} />
      </svg>
      {surname && (
        <div
          className="absolute inset-0 flex items-center justify-center text-center"
          style={{
            fontSize: surname.length > 8 ? "9px" : "12px",
            fontWeight: 700,
            color: burgundy,
            padding: "20px 10px",
            lineHeight: 1.2,
            ...headingStyle,
          }}
        >
          {surname}
        </div>
      )}
    </div>
  );
}

function DoubleRule({ burgundy }) {
  return (
    <div className="my-2">
      <div style={{ height: 2, backgroundColor: burgundy, opacity: 0.7 }} />
      <div style={{ height: 3 }} />
      <div style={{ height: 1, backgroundColor: burgundy, opacity: 0.4 }} />
    </div>
  );
}

function BilingualSectionTitle({ hindi, english, burgundy, headingStyle }) {
  return (
    <div>
      {hindi && (
        <div
          className="text-[11px] leading-tight"
          style={{ fontFamily: HINDI_FONT, color: burgundy, opacity: 0.7 }}
        >
          {hindi}
        </div>
      )}
      <div
        className="text-[12px] font-bold uppercase tracking-[0.13em]"
        style={{ ...headingStyle, color: burgundy }}
        data-typography="heading"
      >
        {english}
      </div>
    </div>
  );
}

function Row({ label, value, burgundy }) {
  if (!value) return null;
  return (
    <div className="flex items-start text-[11px] leading-relaxed">
      <div className="flex-shrink-0 font-semibold" style={{ color: burgundy, opacity: 0.75, width: "100px", fontSize: "10px" }}>
        {label}
      </div>
      <div className="w-3 text-center opacity-40">:</div>
      <div className="flex-1 break-words">{value}</div>
    </div>
  );
}

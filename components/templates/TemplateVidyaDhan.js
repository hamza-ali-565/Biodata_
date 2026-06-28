import { createTypographyStyles, getPrimaryHeading } from "../templateTypography";
import { AboutMeSection } from "../templateAboutMe";

export function TemplateVidyaDhan({ data, theme, headingFont, bodyFont }) {
  const { headingStyle, bodyStyle } = createTypographyStyles(headingFont, bodyFont);
  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const blue    = theme?.accent      || "#1A237E";
  const gold    = theme?.accentSoft  ? theme.accentSoft : "#FFD600";
  const heading = theme?.textHeading || "#1A237E";

  const allPersonalCustom = personal?.customFields || [];

  const distinctionField = allPersonalCustom.find(
    (f) => f?.label?.toLowerCase() === "distinction" || f?.label?.toLowerCase() === "achievement"
  );

  const remainingCustom = allPersonalCustom.filter(
    (f) => f?.value &&
      f?.label?.toLowerCase() !== "distinction" &&
      f?.label?.toLowerCase() !== "achievement"
  );

  const highestQual = personal?.masters || personal?.bachelors || personal?.education || "";
  const institution  = allPersonalCustom.find((f) => f?.label?.toLowerCase().includes("institution") || f?.label?.toLowerCase().includes("college") || f?.label?.toLowerCase().includes("university"))?.value || "";
  const currentRole  = personal?.occupation || "";
  const employer     = personal?.employer || "";

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

  const educationRows = [
    ["Masters / PG",    personal?.masters],
    ["Bachelors / UG",  personal?.bachelors || personal?.education],
    ["Occupation",      personal?.occupation],
    ["Employer",        personal?.employer],
    ["City",            personal?.city],
    ["Income",          personal?.income],
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
      style={{ backgroundColor: "#FFFFFF", color: "#1A1A1A", minHeight: "800px", ...bodyStyle }}
    >
      {/* Header */}
      <div className="px-7 pt-6 pb-4" style={{ borderBottom: `2px solid ${blue}` }}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div
              className="text-[28px] font-bold leading-tight"
              style={{ ...headingStyle, color: heading }}
              data-typography="heading"
            >
              {getPrimaryHeading(personal)}
            </div>
            {(currentRole || employer) && (
              <div className="text-[12px] mt-1" style={{ color: "#555" }}>
                {[currentRole, employer].filter(Boolean).join(" · ")}
              </div>
            )}
            <div className="text-[11px] mt-1" style={{ color: "#777" }}>
              {[personal?.city, personal?.dateOfBirth].filter(Boolean).join(" · ")}
            </div>
          </div>

          {/* Formal rectangular photo */}
          <div
            className="flex-shrink-0"
            style={{
              width: 110,
              height: 140,
              borderRadius: 4,
              border: `2px solid ${blue}`,
              overflow: "hidden",
              backgroundColor: `${blue}12`,
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
              <span style={{ fontSize: "9px", color: blue, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Photo
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Credential Banner — the defining structural element */}
      <div
        className="flex items-center px-5 gap-0"
        style={{
          backgroundColor: blue,
          minHeight: "48px",
          padding: "10px 20px",
        }}
      >
        <div className="flex items-center flex-1 gap-0 overflow-hidden">
          {highestQual && (
            <>
              <span
                className="text-[15px] font-bold text-white flex-shrink-0"
                style={{ ...headingStyle, fontFamily: headingStyle.fontFamily }}
              >
                {highestQual}
              </span>
              {(institution || currentRole) && (
                <div className="mx-4 flex-shrink-0" style={{ width: 1, height: 32, backgroundColor: gold, opacity: 0.7 }} />
              )}
            </>
          )}
          {institution && (
            <>
              <span className="text-[13px] text-white flex-shrink-0">{institution}</span>
              {currentRole && (
                <div className="mx-4 flex-shrink-0" style={{ width: 1, height: 32, backgroundColor: gold, opacity: 0.7 }} />
              )}
            </>
          )}
          {currentRole && (
            <span className="text-[13px] text-white flex-shrink-0">{currentRole}</span>
          )}
          {!highestQual && !institution && !currentRole && (
            <span className="text-[13px] text-white opacity-50">—</span>
          )}
        </div>
        {distinctionField?.value && (
          <div className="flex-shrink-0 ml-4 text-right">
            <span className="text-[12px] font-bold" style={{ color: gold }}>
              {distinctionField.value}
            </span>
          </div>
        )}
      </div>

      <div className="px-7 py-4">
        {/* Education & Career — FIRST, before personal/family */}
        <div>
          <SectionTitle blue={blue} headingStyle={headingStyle}>Education & Career</SectionTitle>
          <GoldDivider gold={gold} />

          {/* Achievement highlight box */}
          {distinctionField?.value && (
            <div
              className="mb-3 mt-2 px-3 py-2 rounded text-[12px]"
              style={{ border: `1px solid ${gold}`, backgroundColor: `${gold}0D` }}
            >
              <span className="font-semibold" style={{ color: blue }}>Achievement: </span>
              {distinctionField.value}
            </div>
          )}

          <div className="flex gap-5 mt-2">
            <div className="flex-1 space-y-1">
              {educationRows.slice(0, 3).map(([l, v]) => <Row key={l} label={l} value={v} blue={blue} />)}
            </div>
            <div className="flex-1 space-y-1">
              {educationRows.slice(3).map(([l, v]) => <Row key={l} label={l} value={v} blue={blue} />)}
            </div>
          </div>
        </div>

        <GoldDivider gold={gold} className="my-4" />

        {/* Personal + Family two-column */}
        <div className="flex gap-5">
          <div style={{ flex: "0 0 50%" }}>
            <SectionTitle blue={blue} headingStyle={headingStyle}>Personal Details</SectionTitle>
            <GoldDivider gold={gold} />
            <div className="mt-2 space-y-1">
              {personalRows.map(([l, v]) => <Row key={l} label={l} value={v} blue={blue} />)}
              {remainingCustom.map((f) =>
                f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} blue={blue} /> : null
              )}
            </div>
          </div>

          <div style={{ flex: "0 0 47%" }}>
            <SectionTitle blue={blue} headingStyle={headingStyle}>Family Details</SectionTitle>
            <GoldDivider gold={gold} />
            <div className="mt-2 space-y-1">
              {familyRows.map(([l, v]) => <Row key={l} label={l} value={v} blue={blue} />)}
              {family?.customFields?.map((f) =>
                f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} blue={blue} /> : null
              )}
            </div>
          </div>
        </div>

        <GoldDivider gold={gold} className="my-4" />

        <AboutMeSection text={personal?.aboutMe} accent={blue} headingStyle={headingStyle} />

        {personal?.partnerPreferences && (
          <>
            <GoldDivider gold={gold} className="my-4" />
            <div>
              <SectionTitle blue={blue} headingStyle={headingStyle}>Partner Preferences</SectionTitle>
              <GoldDivider gold={gold} />
              <p className="mt-2 text-[12px] leading-relaxed" style={{ color: "#444" }}>
                {personal.partnerPreferences}
              </p>
            </div>
          </>
        )}

        <GoldDivider gold={gold} className="my-4" />

        {/* Contact footer */}
        <div className="rounded px-3 py-3" style={{ backgroundColor: `${blue}0D` }}>
          <SectionTitle blue={blue} headingStyle={headingStyle}>Contact Details</SectionTitle>
          <div className="flex gap-5 mt-2">
            <div className="flex-1 space-y-1">
              {contactRows.slice(0, 3).map(([l, v]) => <Row key={l} label={l} value={v} blue={blue} />)}
            </div>
            <div className="flex-1 space-y-1">
              {contactRows.slice(3).map(([l, v]) => <Row key={l} label={l} value={v} blue={blue} />)}
            </div>
          </div>
          {contact?.customFields?.map((f) =>
            f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} blue={blue} /> : null
          )}
        </div>

        <p className="text-center text-[9px] mt-4 opacity-30">Created with ♥ by Marriage Biodata Hub</p>
      </div>
    </div>
  );
}

function SectionTitle({ blue, headingStyle, children }) {
  return (
    <div
      className="text-[12px] font-bold uppercase tracking-[0.14em]"
      style={{ ...headingStyle, color: blue }}
      data-typography="heading"
    >
      {children}
    </div>
  );
}

function Row({ label, value, blue }) {
  if (!value) return null;
  return (
    <div className="flex items-start text-[11.5px] leading-relaxed">
      <div className="flex-shrink-0 font-semibold" style={{ color: blue, opacity: 0.75, width: "108px", fontSize: "10.5px" }}>
        {label}
      </div>
      <div className="w-3 text-center opacity-40">:</div>
      <div className="flex-1 break-words">{value}</div>
    </div>
  );
}

function GoldDivider({ gold, className = "" }) {
  return <div className={`h-px ${className}`} style={{ backgroundColor: `${gold}BB` }} />;
}

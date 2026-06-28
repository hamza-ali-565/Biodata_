import { createTypographyStyles, getPrimaryHeading } from "../templateTypography";
import { AboutMeSection } from "../templateAboutMe";

const SIBLING_MARITAL_LABELS = ["marital status", "children", "bachche"];

export function TemplateDujiVaari({ data, theme, headingFont, bodyFont }) {
  const { headingStyle, bodyStyle } = createTypographyStyles(headingFont, bodyFont);
  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const green  = theme?.accent      || "#2D4A3E";
  const sage   = theme?.accentSoft  ? theme.accentSoft : "#7A9E8E";
  const heading = theme?.textHeading || "#2D4A3E";

  const allPersonalCustom = personal?.customFields || [];

  const maritalStatusField = allPersonalCustom.find(
    (f) => f?.label?.toLowerCase() === "marital status"
  );
  const childrenField = allPersonalCustom.find(
    (f) => f?.label?.toLowerCase() === "children" || f?.label?.toLowerCase() === "bachche"
  );

  const remainingCustom = allPersonalCustom.filter(
    (f) => f?.value &&
      f?.label?.toLowerCase() !== "marital status" &&
      f?.label?.toLowerCase() !== "children" &&
      f?.label?.toLowerCase() !== "bachche"
  );

  const personalRows = [
    ["Date of Birth",  personal?.dateOfBirth],
    ["Age",            personal?.age],
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
    ["Education",    personal?.bachelors || personal?.education],
    ["Masters",      personal?.masters],
    ["Occupation",   personal?.occupation],
    ["Employer",     personal?.employer],
    ["Income",       personal?.income],
    ["City",         personal?.city],
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
      style={{ backgroundColor: "#F8F4EE", color: "#1C1C1C", minHeight: "800px", ...bodyStyle }}
    >
      {/* Header */}
      <div className="px-7 pt-7 pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div
              className="text-[28px] font-bold leading-tight"
              style={{ ...headingStyle, color: heading }}
              data-typography="heading"
            >
              {getPrimaryHeading(personal)}
            </div>
            <div
              className="text-[13px] italic mt-1"
              style={{ color: sage }}
            >
              A Fresh Beginning
            </div>
            <div className="text-[11.5px] mt-2" style={{ color: "#555" }}>
              {[personal?.city, personal?.occupation].filter(Boolean).join(" · ")}
            </div>
          </div>

          {/* Oval photo */}
          <div
            className="flex-shrink-0"
            style={{
              width: 100,
              height: 120,
              borderRadius: "50% / 40%",
              border: `2px solid ${green}`,
              overflow: "hidden",
              backgroundColor: `${green}18`,
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
              <span style={{ fontSize: "9px", color: green, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Photo
              </span>
            )}
          </div>
        </div>
      </div>

      <LeafDivider green={green} />

      <div className="px-7 py-4">
        {/* Marital Status — first-class */}
        {maritalStatusField?.value && (
          <div
            className="flex items-center gap-3 mb-4 px-3 py-2 rounded"
            style={{ backgroundColor: `${green}0D`, borderLeft: `3px solid ${green}` }}
          >
            <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: green }}>
              Marital Status
            </span>
            <span className="text-[13px] font-semibold" style={{ color: "#1C1C1C" }}>
              {maritalStatusField.value}
            </span>
          </div>
        )}

        {/* Personal + Family two-column */}
        <div className="flex gap-5">
          <div style={{ flex: "0 0 55%" }}>
            <SectionTitle green={green} headingStyle={headingStyle}>Personal Details</SectionTitle>
            <LeafDividerSmall green={green} />
            <div className="mt-2 space-y-1">
              {personalRows.map(([l, v]) => <Row key={l} label={l} value={v} green={green} />)}

              {/* Children sub-section */}
              {childrenField?.value && (
                <div className="mt-2">
                  <Row label="Children" value={childrenField.value} green={green} />
                </div>
              )}

              {remainingCustom.map((f) =>
                f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} green={green} /> : null
              )}
            </div>
          </div>

          <div style={{ flex: "0 0 42%" }}>
            <SectionTitle green={green} headingStyle={headingStyle}>Family Details</SectionTitle>
            <LeafDividerSmall green={green} />
            <div className="mt-2 space-y-1">
              {familyRows.map(([l, v]) => <Row key={l} label={l} value={v} green={green} />)}
              {family?.customFields?.map((f) =>
                f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} green={green} /> : null
              )}
            </div>
          </div>
        </div>

        <LeafDivider green={green} />

        {/* Education & Career */}
        <div>
          <SectionTitle green={green} headingStyle={headingStyle}>Education & Career</SectionTitle>
          <LeafDividerSmall green={green} />
          <div className="flex gap-5 mt-2">
            <div className="flex-1 space-y-1">
              {educationRows.slice(0, 3).map(([l, v]) => <Row key={l} label={l} value={v} green={green} />)}
            </div>
            <div className="flex-1 space-y-1">
              {educationRows.slice(3).map(([l, v]) => <Row key={l} label={l} value={v} green={green} />)}
            </div>
          </div>
        </div>

        <LeafDivider green={green} />

        {/* About Me — elevated */}
        <div>
          <SectionTitle green={green} headingStyle={headingStyle} size={16}>About Me</SectionTitle>
          <LeafDividerSmall green={green} />
          {personal?.aboutMe && (
            <div
              className="mt-3 px-4 py-3 rounded text-[12px] leading-relaxed"
              style={{
                backgroundColor: `${green}0F`,
                borderLeft: `2px solid ${green}`,
                color: "#1C1C1C",
              }}
            >
              {personal.aboutMe}
            </div>
          )}
        </div>

        {personal?.partnerPreferences && (
          <>
            <LeafDivider green={green} />
            <div>
              <SectionTitle green={green} headingStyle={headingStyle}>Looking For</SectionTitle>
              <LeafDividerSmall green={green} />
              <p className="mt-2 text-[12px] leading-relaxed" style={{ color: "#444" }}>
                {personal.partnerPreferences}
              </p>
            </div>
          </>
        )}

        <LeafDivider green={green} />

        {/* Contact footer */}
        <div className="rounded px-3 py-3" style={{ backgroundColor: `${green}0D` }}>
          <SectionTitle green={green} headingStyle={headingStyle}>Contact Details</SectionTitle>
          <div className="flex gap-5 mt-2">
            <div className="flex-1 space-y-1">
              {contactRows.slice(0, 3).map(([l, v]) => <Row key={l} label={l} value={v} green={green} />)}
            </div>
            <div className="flex-1 space-y-1">
              {contactRows.slice(3).map(([l, v]) => <Row key={l} label={l} value={v} green={green} />)}
            </div>
          </div>
          {contact?.customFields?.map((f) =>
            f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} green={green} /> : null
          )}
        </div>

        <p className="text-center text-[9px] mt-4 opacity-30">Created with ♥ by Marriage Biodata Hub</p>
      </div>
    </div>
  );
}

function SectionTitle({ green, headingStyle, children, size = 13 }) {
  return (
    <div
      className="font-bold uppercase tracking-[0.13em]"
      style={{ ...headingStyle, color: green, fontSize: `${size}px` }}
      data-typography="heading"
    >
      {children}
    </div>
  );
}

function Row({ label, value, green }) {
  if (!value) return null;
  return (
    <div className="flex items-start text-[11.5px] leading-relaxed">
      <div className="flex-shrink-0 font-semibold" style={{ color: green, opacity: 0.8, width: "108px", fontSize: "10.5px" }}>
        {label}
      </div>
      <div className="w-3 text-center opacity-40">:</div>
      <div className="flex-1 break-words">{value}</div>
    </div>
  );
}

function LeafSVG({ green }) {
  return (
    <svg width="12" height="18" viewBox="0 0 12 18" fill="none" aria-hidden="true">
      <path
        d="M6 1 C6 1, 11 5, 11 10 C11 14, 8 17, 6 17 C4 17, 1 14, 1 10 C1 5, 6 1, 6 1Z"
        fill={green}
        opacity="0.7"
      />
      <line x1="6" y1="17" x2="6" y2="7" stroke={green} strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function LeafDivider({ green }) {
  return (
    <div className="flex items-center gap-2 my-4 px-7">
      <div className="h-px flex-1" style={{ backgroundColor: `${green}30` }} />
      <LeafSVG green={green} />
      <div className="h-px flex-1" style={{ backgroundColor: `${green}30` }} />
    </div>
  );
}

function LeafDividerSmall({ green }) {
  return <div className="mt-1 mb-1 h-px" style={{ backgroundColor: `${green}25` }} />;
}

import { createTypographyStyles, getPrimaryHeading } from "../templateTypography";
import { AboutMeSection } from "../templateAboutMe";

export function TemplateKonkanKiran({ data, theme, headingFont, bodyFont }) {
  const { headingStyle, bodyStyle } = createTypographyStyles(headingFont, bodyFont);
  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const blue    = theme?.accent      || "#1E4D8C";
  const silver  = theme?.accentSoft  ? theme.accentSoft : "#8A9BB0";
  const heading = theme?.textHeading || "#1A2744";

  const personalRows = [
    ["Date of Birth",  personal?.dateOfBirth],
    ["Time of Birth",  personal?.timeOfBirth],
    ["Place of Birth", personal?.placeOfBirth],
    ["Height",         personal?.height],
    ["Complexion",     personal?.complexion],
    ["Blood Group",    personal?.bloodGroup],
    ["Religion",       personal?.religion],
    ["Nationality",    personal?.nationality],
    ["Education",      personal?.bachelors || personal?.education],
    ["Occupation",     personal?.occupation],
    ["Income",         personal?.income],
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
    ["Education",   personal?.bachelors || personal?.education],
    ["Masters",     personal?.masters],
    ["Occupation",  personal?.occupation],
    ["Income",      personal?.income],
  ];

  const contactRows = [
    ["Contact Person", contact?.contactPerson],
    ["Phone",          contact?.contactNumber],
    ["Email",          contact?.email],
    ["Address",        contact?.address],
  ];

  return (
    <div
      data-preview-root="true"
      className="relative mx-auto w-[600px] overflow-hidden"
      style={{ backgroundColor: "#FFFFFF", color: heading, minHeight: "800px", ...bodyStyle }}
    >
      {/* Page border */}
      <div className="absolute inset-[12px] pointer-events-none" style={{ border: `1.5px solid ${blue}`, zIndex: 2 }} />

      {/* Corner flourishes */}
      <AzulejoCorner blue={blue} position="top-[8px] left-[8px]" />
      <AzulejoCorner blue={blue} position="top-[8px] right-[8px]" rotate />
      <AzulejoCorner blue={blue} position="bottom-[8px] left-[8px]" flipY />
      <AzulejoCorner blue={blue} position="bottom-[8px] right-[8px]" rotate flipY />

      {/* Subtle tile background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Crect width='20' height='20' fill='none'/%3E%3Crect x='9' y='0' width='2' height='2' fill='%231E4D8C' opacity='0.04'/%3E%3Crect x='0' y='9' width='2' height='2' fill='%231E4D8C' opacity='0.04'/%3E%3C/svg%3E")`,
        zIndex: 0,
      }} />

      <div className="relative px-9 py-7" style={{ zIndex: 1 }}>
        {/* Cross */}
        <div className="flex justify-center mb-1">
          <CrossSVG blue={blue} />
        </div>

        {/* Motto */}
        <p className="text-center italic text-[11px] mb-3" style={{ color: silver }}>
          In God We Trust
        </p>

        {/* Name */}
        <div className="text-[28px] font-bold text-center"
             style={{ ...headingStyle, color: blue }} data-typography="heading">
          {getPrimaryHeading(personal)}
        </div>

        {/* Sub-details */}
        <div className="text-center text-[11px] mt-1" style={{ color: silver }}>
          {[personal?.religion, personal?.denomination, personal?.dateOfBirth].filter(Boolean).join(" · ")}
        </div>

        {/* Oval photo centred */}
        {photoDataUrl ? (
          <div className="flex justify-center mt-4 mb-4">
            <OvalPhoto photoDataUrl={photoDataUrl} blue={blue} name={personal?.name} />
          </div>
        ) : (
          <div className="flex justify-center mt-3 mb-3">
            <SmallCross blue={blue} size={14} />
          </div>
        )}

        <CrossDivider blue={blue} className="mb-4" />

        {/* Personal Details — single column */}
        <div>
          <SectionTitle blue={blue} headingStyle={headingStyle}>Personal Details</SectionTitle>
          <CrossDivider blue={blue} small className="my-1" />
          <div className="mt-2 space-y-1.5">
            {personalRows.map(([l, v]) => <Row key={l} label={l} value={v} blue={blue} />)}
            {personal?.customFields?.map((f) =>
              f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} blue={blue} /> : null
            )}
          </div>
        </div>

        <CrossDivider blue={blue} className="my-4" />

        {/* Family Details — single column */}
        <div>
          <SectionTitle blue={blue} headingStyle={headingStyle}>Family Details</SectionTitle>
          <CrossDivider blue={blue} small className="my-1" />
          <div className="mt-2 space-y-1.5">
            {familyRows.map(([l, v]) => <Row key={l} label={l} value={v} blue={blue} />)}
            {family?.customFields?.map((f) =>
              f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} blue={blue} /> : null
            )}
          </div>
        </div>

        <CrossDivider blue={blue} className="my-4" />

        {/* Education & Career — single column */}
        <div>
          <SectionTitle blue={blue} headingStyle={headingStyle}>Education & Career</SectionTitle>
          <CrossDivider blue={blue} small className="my-1" />
          <div className="mt-2 space-y-1.5">
            {educationRows.map(([l, v]) => <Row key={l} label={l} value={v} blue={blue} />)}
          </div>
        </div>

        <CrossDivider blue={blue} className="my-4" />

        {/* Contact */}
        <div className="rounded px-3 py-3" style={{ backgroundColor: `${blue}0F` }}>
          <SectionTitle blue={blue} headingStyle={headingStyle}>Contact Details</SectionTitle>
          <div className="mt-2 space-y-1.5">
            {contactRows.map(([l, v]) => <Row key={l} label={l} value={v} blue={blue} />)}
            {contact?.customFields?.map((f) =>
              f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} blue={blue} /> : null
            )}
          </div>
        </div>

        <AboutMeSection text={personal?.aboutMe} accent={blue} headingStyle={headingStyle} className="mt-4" />

      
      </div>
    </div>
  );
}

function SectionTitle({ blue, headingStyle, children }) {
  return (
    <div className="text-[11.5px] font-bold uppercase tracking-[0.14em]"
         style={{ ...headingStyle, color: blue }} data-typography="heading">
      {children}
    </div>
  );
}

function Row({ label, value, blue }) {
  if (!value) return null;
  return (
    <div className="flex items-start text-[12px] leading-relaxed">
      <div className="w-[130px] flex-shrink-0 font-semibold" style={{ color: blue, opacity: 0.8, fontSize: "11px" }}>{label}</div>
      <div className="w-3 text-center opacity-50">:</div>
      <div className="flex-1 break-words">{value}</div>
    </div>
  );
}

function CrossDivider({ blue, small, className = "" }) {
  const crossSize = small ? 7 : 9;
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <SmallCross blue={blue} size={crossSize} />
      <div className="h-px flex-1" style={{ backgroundColor: `${blue}45` }} />
      <SmallCross blue={blue} size={crossSize} />
    </div>
  );
}

function SmallCross({ blue, size }) {
  return (
    <svg width={size} height={size * 1.15} viewBox="0 0 8 10" fill="none" aria-hidden="true">
      <rect x="3" y="0" width="2" height="10" rx="0.5" fill={blue} />
      <rect x="0" y="3" width="8" height="2" rx="0.5" fill={blue} />
    </svg>
  );
}

function CrossSVG({ blue }) {
  return (
    <svg width="40" height="48" viewBox="0 0 40 48" fill="none" aria-hidden="true">
      <rect x="16" y="0" width="8" height="48" rx="2" stroke={blue} strokeWidth="3" fill="none" />
      <rect x="0" y="14" width="40" height="8" rx="2" stroke={blue} strokeWidth="3" fill="none" />
    </svg>
  );
}

function AzulejoCorner({ blue, position, rotate, flipY }) {
  let transform = "";
  if (rotate && flipY) transform = "rotate(180deg)";
  else if (rotate) transform = "rotate(90deg)";
  else if (flipY) transform = "rotate(-90deg)";
  return (
    <div className={`absolute pointer-events-none ${position}`} style={{ zIndex: 3, transform }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="3" stroke={blue} strokeWidth="1.2" fill="none" />
        <line x1="8" y1="0" x2="8" y2="5" stroke={blue} strokeWidth="1" />
        <line x1="0" y1="8" x2="5" y2="8" stroke={blue} strokeWidth="1" />
        <line x1="5" y1="5" x2="3" y2="3" stroke={blue} strokeWidth="0.8" />
        <line x1="11" y1="5" x2="13" y2="3" stroke={blue} strokeWidth="0.8" />
        <line x1="5" y1="11" x2="3" y2="13" stroke={blue} strokeWidth="0.8" />
      </svg>
    </div>
  );
}

function OvalPhoto({ photoDataUrl, blue, name }) {
  return (
    <div
      style={{
        width: 120, height: 150,
        borderRadius: "50%",
        border: `2.5px solid ${blue}`,
        boxShadow: `0 2px 8px rgba(30,77,140,0.15)`,
        overflow: "hidden",
        backgroundColor: `${blue}18`,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photoDataUrl} alt={name || "Profile"} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
  );
}

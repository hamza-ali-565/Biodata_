import { createTypographyStyles, getPrimaryHeading } from "../templateTypography";
import { AboutMeSection } from "../templateAboutMe";

const GURMUKHI_FONT = "'Noto Sans Gurmukhi', 'Mukta Mahee', sans-serif";

export function TemplateGuruNanak({ data, theme, headingFont, bodyFont }) {
  const { headingStyle, bodyStyle } = createTypographyStyles(headingFont, bodyFont);
  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const saffron = theme?.accent      || "#FF6B00";
  const blue    = theme?.textHeading || "#1B3A6B";
  const bg      = "#FFFFFF";
  const navy    = "#1A2744";

  const personalRows = [
    ["Date of Birth",  personal?.dateOfBirth],
    ["Time of Birth",  personal?.timeOfBirth],
    ["Place of Birth", personal?.placeOfBirth],
    ["Height",         personal?.height],
    ["Complexion",     personal?.complexion],
    ["Blood Group",    personal?.bloodGroup],
    ["Religion",       personal?.religion],
    ["Caste",          personal?.caste],
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
    ["Native Village", family?.nativePlace],
  ];

  const educationRows = [
    ["Education",  personal?.bachelors || personal?.education],
    ["Masters",    personal?.masters],
    ["Occupation", personal?.occupation],
    ["Income",     personal?.income],
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
      className="mx-auto w-[600px] overflow-hidden"
      style={{ backgroundColor: bg, color: navy, minHeight: "800px", ...bodyStyle }}
    >
      {/* Top header — full width above three panels */}
      <div className="text-center px-6 pt-5 pb-3" style={{ borderBottom: `2px solid ${saffron}` }}>
        <div style={{ fontFamily: GURMUKHI_FONT, fontSize: "34px", color: blue, lineHeight: 1.2 }}>ੴ</div>
        <div style={{ fontFamily: GURMUKHI_FONT, fontSize: "13px", color: blue, marginTop: "2px" }}>ਸਤਿ ਨਾਮੁ</div>
        <div className="text-[26px] font-bold mt-1"
             style={{ ...headingStyle, color: blue }} data-typography="heading">
          {getPrimaryHeading(personal)}
        </div>
        <div className="text-[11px] mt-1" style={{ color: blue, opacity: 0.7 }}>
          {[personal?.religion || "Sikh", personal?.caste, personal?.dateOfBirth].filter(Boolean).join(" · ")}
        </div>
      </div>

      {/* Three-panel body */}
      <div style={{ display: "flex", flexDirection: "row", minHeight: "700px" }}>

        {/* Left saffron panel */}
        <div style={{ flexShrink: 0, width: "80px", backgroundColor: saffron, display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 0" }}>
          {/* Circular photo */}
          <div style={{
            width: 60, height: 60, borderRadius: "50%",
            border: "3px solid white",
            outline: `2px solid ${blue}`,
            overflow: "hidden",
            backgroundColor: `${blue}33`,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            {photoDataUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={photoDataUrl} alt={personal?.name || "Profile"} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <span style={{ fontSize: "8px", color: "white", textAlign: "center", padding: "2px" }}>Photo</span>
            )}
          </div>

          {/* Vertical name */}
          <div style={{
            flex: 1,
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontFamily: GURMUKHI_FONT,
            fontSize: "10px",
            color: "rgba(255,255,255,0.85)",
            overflow: "hidden",
            maxHeight: "240px",
            marginTop: "12px",
            marginBottom: "12px",
            letterSpacing: "0.04em",
          }}>
            {getPrimaryHeading(personal)}
          </div>

          {/* Khanda at bottom */}
          <KhandaSVG color="white" size={20} />
        </div>

        {/* Centre panel — personal */}
        <div style={{ flex: "1 1 0", padding: "16px 14px", borderRight: `1px solid ${saffron}33` }}>
          <GurmukhiSectionTitle gurmukhi="ਨਿੱਜੀ ਜਾਣਕਾਰੀ" en="Personal Details" blue={blue} saffron={saffron} headingStyle={headingStyle} />
          <KhandaDivider saffron={saffron} className="my-1" />
          <div className="space-y-1 mt-1.5">
            {personalRows.map(([l, v]) => <Row key={l} label={l} value={v} accent={blue} />)}
            {personal?.customFields?.map((f) =>
              f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} accent={blue} /> : null
            )}
          </div>
        </div>

        {/* Right panel — family + education */}
        <div style={{ flexShrink: 0, width: "230px", padding: "16px 14px" }}>
          <GurmukhiSectionTitle gurmukhi="ਪਰਿਵਾਰਕ ਜਾਣਕਾਰੀ" en="Family Details" blue={blue} saffron={saffron} headingStyle={headingStyle} />
          <KhandaDivider saffron={saffron} className="my-1" />
          <div className="space-y-1 mt-1.5">
            {familyRows.map(([l, v]) => <Row key={l} label={l} value={v} accent={blue} />)}
            {family?.customFields?.map((f) =>
              f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} accent={blue} /> : null
            )}
          </div>

          <KhandaDivider saffron={saffron} className="my-3" />

          <GurmukhiSectionTitle gurmukhi="ਸਿੱਖਿਆ ਤੇ ਕਿੱਤਾ" en="Education & Career" blue={blue} saffron={saffron} headingStyle={headingStyle} />
          <KhandaDivider saffron={saffron} className="my-1" />
          <div className="space-y-1 mt-1.5">
            {educationRows.map(([l, v]) => <Row key={l} label={l} value={v} accent={blue} />)}
          </div>
        </div>
      </div>

      {/* Footer contact band — full width */}
      <div style={{ borderTop: `2px solid ${saffron}`, backgroundColor: `${saffron}14`, padding: "12px 24px" }}>
        <GurmukhiSectionTitle gurmukhi="ਸੰਪਰਕ ਵੇਰਵੇ" en="Contact Details" blue={blue} saffron={saffron} headingStyle={headingStyle} />
        <div style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
          <div style={{ flex: 1 }}>
            {contactRows.slice(0, 2).map(([l, v]) => <Row key={l} label={l} value={v} accent={blue} />)}
          </div>
          <div style={{ flex: 1 }}>
            {contactRows.slice(2).map(([l, v]) => <Row key={l} label={l} value={v} accent={blue} />)}
          </div>
        </div>
        {contact?.customFields?.map((f) =>
          f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} accent={blue} /> : null
        )}
      </div>

      <AboutMeSection text={personal?.aboutMe} accent={blue} headingStyle={headingStyle} className="px-6 py-3" />
    </div>
  );
}

function GurmukhiSectionTitle({ gurmukhi, en, blue, saffron, headingStyle }) {
  return (
    <div>
      <div style={{ fontFamily: GURMUKHI_FONT, fontSize: "13px", color: blue, lineHeight: 1.4 }}>{gurmukhi}</div>
      <div className="text-[10px] font-bold uppercase tracking-[0.12em]"
           style={{ ...headingStyle, color: saffron }} data-typography="heading">
        {en}
      </div>
    </div>
  );
}

function Row({ label, value, accent }) {
  if (!value) return null;
  return (
    <div className="flex items-start text-[11px] leading-relaxed">
      <div className="flex-shrink-0 font-semibold" style={{ color: accent, opacity: 0.8, width: "90px", fontSize: "10px" }}>{label}</div>
      <div className="w-2 text-center opacity-40">:</div>
      <div className="flex-1 break-words text-[11px]">{value}</div>
    </div>
  );
}

function KhandaDivider({ saffron, className = "" }) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="h-px flex-1" style={{ backgroundColor: `${saffron}55` }} />
      <KhandaSVG color={saffron} size={14} />
      <div className="h-px flex-1" style={{ backgroundColor: `${saffron}55` }} />
    </div>
  );
}

function KhandaSVG({ color, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      {/* Double-edged sword (vertical) */}
      <path d="M10 2 L11.5 14 L10 16 L8.5 14 Z" stroke={color} strokeWidth="1.2" fill="none" />
      {/* Chakkar (ring) */}
      <circle cx="10" cy="10" r="5" stroke={color} strokeWidth="1.2" fill="none" />
      {/* Left kirpan */}
      <path d="M5 5 L2 18" stroke={color} strokeWidth="1" fill="none" strokeLinecap="round" />
      {/* Right kirpan */}
      <path d="M15 5 L18 18" stroke={color} strokeWidth="1" fill="none" strokeLinecap="round" />
    </svg>
  );
}

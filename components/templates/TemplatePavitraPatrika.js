import { createTypographyStyles, getPrimaryHeading } from "../templateTypography";
import { AboutMeSection } from "../templateAboutMe";

export function TemplatePavitraPatrika({ data, theme, headingFont, bodyFont }) {
  const { headingStyle, bodyStyle } = createTypographyStyles(headingFont, bodyFont);
  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const accent  = theme?.accent      || "#B5451B";
  const gold    = theme?.accentSoft  ? theme.accentSoft : "#D4920A";
  const heading = theme?.textHeading || "#B5451B";
  const bg      = "#FBF5E6";
  const charcoal = "#2C1810";

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
    ["Native Place",   family?.nativePlace || personal?.placeOfBirth],
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
      style={{ backgroundColor: bg, fontFamily: bodyFont || "serif", color: charcoal, minHeight: "800px" }}
    >
      {/* Outer double-line border */}
      <div className="absolute inset-[10px] pointer-events-none" style={{ border: `2px solid ${accent}`, zIndex: 2 }} />
      <div className="absolute inset-[14px] pointer-events-none" style={{ border: `1px solid ${accent}`, zIndex: 2 }} />

      {/* Corner diamond ornaments */}
      <CornerOrnament accent={accent} position="top-[6px] left-[6px]" />
      <CornerOrnament accent={accent} position="top-[6px] right-[6px]" />
      <CornerOrnament accent={accent} position="bottom-[6px] left-[6px]" />
      <CornerOrnament accent={accent} position="bottom-[6px] right-[6px]" />

      <div className="relative px-9 py-6" style={{ zIndex: 1 }}>
        {/* Invocation */}
        <p className="text-center text-[15px] font-medium mb-2"
           style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", color: accent }}>
          ।। श्री गणेशाय नमः ।।
        </p>

        {/* Header: Kalash + Name + Photo */}
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-1 flex flex-col items-center">
            <KalashSVG accent={accent} />
            <div className="mt-2 text-[28px] font-bold text-center leading-tight"
                 style={{ ...headingStyle, color: heading }} data-typography="heading">
              {getPrimaryHeading(personal)}
            </div>
            <div className="mt-1 text-[11px] text-center" style={{ color: charcoal, opacity: 0.7 }}>
              {[personal?.religion, personal?.caste, personal?.dateOfBirth].filter(Boolean).join(" · ")}
            </div>
          </div>
          {/* Lotus photo frame */}
          <div className="flex-shrink-0 mt-2">
            <LotusPhotoFrame photoDataUrl={photoDataUrl} accent={accent} name={personal?.name} />
          </div>
        </div>

        <BindiDivider accent={accent} />

        {/* Personal + Family two-column */}
        <div className="flex gap-5 mt-4">
          {/* Personal - 55% */}
          <div style={{ flex: "0 0 55%" }}>
            <SectionTitle accent={accent} headingStyle={headingStyle}>
              व्यक्तिगत विवरण / Personal Details
            </SectionTitle>
            <BindiDivider accent={accent} small />
            <div className="mt-2 space-y-1">
              {personalRows.map(([l, v]) => <Row key={l} label={l} value={v} accent={accent} />)}
              {personal?.customFields?.map((f) =>
                f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} accent={accent} /> : null
              )}
            </div>
          </div>

          {/* Family - 45% */}
          <div style={{ flex: "0 0 42%" }}>
            <SectionTitle accent={accent} headingStyle={headingStyle}>
              पारिवारिक विवरण / Family Details
            </SectionTitle>
            <BindiDivider accent={accent} small />
            <div className="mt-2 space-y-1">
              {familyRows.map(([l, v]) => <Row key={l} label={l} value={v} accent={accent} />)}
              {family?.customFields?.map((f) =>
                f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} accent={accent} /> : null
              )}
            </div>
          </div>
        </div>

        <BindiDivider accent={accent} className="mt-4" />

        {/* Education & Career - full width two sub-columns */}
        <div className="mt-4">
          <SectionTitle accent={accent} headingStyle={headingStyle}>
            शिक्षा एवं व्यवसाय / Education & Career
          </SectionTitle>
          <BindiDivider accent={accent} small />
          <div className="flex gap-5 mt-2">
            <div className="flex-1 space-y-1">
              {educationRows.slice(0, 2).map(([l, v]) => <Row key={l} label={l} value={v} accent={accent} />)}
            </div>
            <div className="flex-1 space-y-1">
              {educationRows.slice(2).map(([l, v]) => <Row key={l} label={l} value={v} accent={accent} />)}
            </div>
          </div>
          <div className="mt-1 space-y-1">
            {personal?.customFields?.filter(f => f?.value && ["education","occupation","income","qualification"].some(k => f.label?.toLowerCase().includes(k))).map((f) =>
              <Row key={f.id || f.label} label={f.label} value={f.value} accent={accent} />
            )}
          </div>
        </div>

        <BindiDivider accent={accent} className="mt-4" />

        {/* Contact - footer band */}
        <div className="mt-4 rounded px-3 py-3" style={{ backgroundColor: `${accent}18` }}>
          <SectionTitle accent={accent} headingStyle={headingStyle}>
            संपर्क / Contact Details
          </SectionTitle>
          <div className="flex gap-5 mt-2">
            <div className="flex-1 space-y-1">
              {contactRows.slice(0, 2).map(([l, v]) => <Row key={l} label={l} value={v} accent={accent} />)}
            </div>
            <div className="flex-1 space-y-1">
              {contactRows.slice(2).map(([l, v]) => <Row key={l} label={l} value={v} accent={accent} />)}
            </div>
          </div>
          {contact?.customFields?.map((f) =>
            f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} accent={accent} /> : null
          )}
        </div>

        <AboutMeSection text={personal?.aboutMe} accent={accent} headingStyle={headingStyle} className="mt-4" />

        <p className="text-center text-[9px] mt-4 opacity-40" style={{ color: charcoal }}>
          Created with ♥ by Marriage Biodata Hub
        </p>
      </div>
    </div>
  );
}

function SectionTitle({ accent, headingStyle, children }) {
  return (
    <div className="text-[11px] font-bold uppercase tracking-[0.12em]"
         style={{ ...headingStyle, color: accent }} data-typography="heading">
      {children}
    </div>
  );
}

function Row({ label, value, accent }) {
  if (!value) return null;
  return (
    <div className="flex items-start text-[11.5px] leading-relaxed">
      <div className="w-[108px] flex-shrink-0 font-semibold" style={{ color: accent, fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.04em" }}>{label}</div>
      <div className="w-3 text-center font-bold opacity-50">:</div>
      <div className="flex-1 break-words">{value}</div>
    </div>
  );
}

function BindiDivider({ accent, small, className = "" }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="h-px flex-1" style={{ backgroundColor: `${accent}55` }} />
      <div className="rounded-full" style={{ width: small ? "6px" : "8px", height: small ? "6px" : "8px", backgroundColor: accent }} />
      <div className="h-px flex-1" style={{ backgroundColor: `${accent}55` }} />
    </div>
  );
}

function CornerOrnament({ accent, position }) {
  return (
    <div className={`absolute pointer-events-none ${position}`} style={{ zIndex: 3 }}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="10" height="10" stroke={accent} strokeWidth="1" transform="rotate(45 7 7)" />
        <rect x="4" y="4" width="6" height="6" stroke={accent} strokeWidth="0.7" transform="rotate(45 7 7)" />
      </svg>
    </div>
  );
}

function KalashSVG({ accent }) {
  return (
    <svg width="52" height="68" viewBox="0 0 52 68" fill="none" aria-hidden="true">
      {/* Pot body */}
      <ellipse cx="26" cy="48" rx="18" ry="16" fill={accent} fillOpacity="0.85" stroke={accent} strokeWidth="1.5" />
      {/* Neck */}
      <rect x="20" y="30" width="12" height="10" rx="2" fill={accent} stroke={accent} strokeWidth="1.2" />
      {/* Coconut */}
      <ellipse cx="26" cy="27" rx="7" ry="6" fill={accent} fillOpacity="0.7" stroke={accent} strokeWidth="1.2" />
      {/* Mango leaves */}
      <ellipse cx="14" cy="22" rx="4" ry="9" fill={accent} fillOpacity="0.55" stroke={accent} strokeWidth="1" transform="rotate(-35 14 22)" />
      <ellipse cx="19" cy="18" rx="3.5" ry="8" fill={accent} fillOpacity="0.55" stroke={accent} strokeWidth="1" transform="rotate(-15 19 18)" />
      <ellipse cx="26" cy="16" rx="3" ry="8" fill={accent} fillOpacity="0.55" stroke={accent} strokeWidth="1" />
      <ellipse cx="33" cy="18" rx="3.5" ry="8" fill={accent} fillOpacity="0.55" stroke={accent} strokeWidth="1" transform="rotate(15 33 18)" />
      <ellipse cx="38" cy="22" rx="4" ry="9" fill={accent} fillOpacity="0.55" stroke={accent} strokeWidth="1" transform="rotate(35 38 22)" />
      {/* Base */}
      <ellipse cx="26" cy="63" rx="12" ry="4" fill={accent} fillOpacity="0.6" stroke={accent} strokeWidth="1.2" />
    </svg>
  );
}

function LotusPhotoFrame({ photoDataUrl, accent, name }) {
  const size = 150;
  const cx = size / 2;
  const cy = size / 2;
  const r = 52;
  const petalCount = 8;
  const petalLength = 26;
  const petalWidth = 14;

  const petals = Array.from({ length: petalCount }, (_, i) => {
    const angle = (i * 360) / petalCount - 90;
    const rad = (angle * Math.PI) / 180;
    const x = cx + (r + petalLength / 2) * Math.cos(rad);
    const y = cy + (r + petalLength / 2) * Math.sin(rad);
    return { x, y, angle };
  });

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        width={size} height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0"
        aria-hidden="true"
      >
        {petals.map((p, i) => (
          <ellipse
            key={i}
            cx={p.x} cy={p.y}
            rx={petalWidth / 2} ry={petalLength / 2}
            fill={accent} fillOpacity="0.75"
            stroke={`${accent}99`} strokeWidth="1"
            transform={`rotate(${p.angle + 90}, ${p.x}, ${p.y})`}
          />
        ))}
        <circle cx={cx} cy={cy} r={r} fill="#e8e0d0" stroke={accent} strokeWidth="2" />
      </svg>
      <div
        className="absolute rounded-full overflow-hidden"
        style={{ top: cy - r, left: cx - r, width: r * 2, height: r * 2 }}
      >
        {photoDataUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photoDataUrl} alt={name || "Profile"} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[9px] uppercase tracking-wider"
               style={{ backgroundColor: `${accent}22`, color: accent }}>
            Photo
          </div>
        )}
      </div>
    </div>
  );
}

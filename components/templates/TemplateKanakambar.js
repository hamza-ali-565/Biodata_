import { createTypographyStyles, getPrimaryHeading } from "../templateTypography";

export function TemplateKanakambar({ data, theme, headingFont, bodyFont }) {
  const { headingStyle, bodyStyle } = createTypographyStyles(headingFont, bodyFont);

  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const hasPhoto = !!photoDataUrl;
  const accent     = theme?.accent      || "#92400e";
  const accentSoft = theme?.accentSoft  || "#fef3c7";
  const heading    = theme?.textHeading || "#451a03";

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
    ["Marital Status", personal?.maritalStatus],
    ["Education",      personal?.bachelors || personal?.education],
    ["Occupation",     personal?.occupation],
  ];

  const familyRows = [
    ["Father's Name", family?.fatherName],
    ["Father's Occ.", family?.fatherOccupation],
    ["Mother's Name", family?.motherName],
    ["Mother's Occ.", family?.motherOccupation],
    ["Siblings",      family?.siblings],
    ["Family Type",   family?.familyType],
  ];

  const contactRows = [
    ["Contact Person", contact?.contactPerson],
    ["Phone",          contact?.contactNumber],
    ["Email",          contact?.email],
    ["Address",        contact?.address],
  ];

  return (
    <div
      className="relative mx-auto flex min-h-[800px] w-[600px] flex-col overflow-hidden bg-[#fffbf3] shadow-2xl"
      style={bodyStyle}
    >
      {/* Top Kanakambar band */}
      <div
        className="relative h-[44px] w-full flex-shrink-0 flex items-center"
        style={{ background: `linear-gradient(90deg, ${accentSoft} 0%, #fde68a 50%, ${accentSoft} 100%)` }}
      >
        <KanakambarBand color={accent} />
      </div>

      <div className="relative z-10 px-8 py-5 flex-1">

        {/* Invocation + Name */}
        <div className="text-center mb-4">
          <p className="text-[11px] font-medium tracking-[0.2em] mb-1" style={{ color: accent }}>
            ॥ श्री ॥
          </p>
          <div
            className="text-[30px] font-bold leading-tight"
            style={{ ...headingStyle, color: heading }}
            data-typography="heading"
          >
            {getPrimaryHeading(personal)}
          </div>
          <div className="mt-1 flex justify-center items-center gap-2 text-[11px] text-slate-500">
            {personal?.occupation && <span>{personal.occupation}</span>}
            {personal?.placeOfBirth && (
              <><span style={{ color: accent }}>·</span><span>{personal.placeOfBirth}</span></>
            )}
          </div>
          <DoubleOrnamentRule color={accent} className="mt-3" />
        </div>

        {/* Photo + Personal row */}
        <div className="flex gap-6 items-start">

          {hasPhoto && (
            <div className="flex-shrink-0 relative">
              <div className="relative h-[192px] w-[152px]">
                <CornerBracket pos="top-left"     c={accent} />
                <CornerBracket pos="top-right"    c={accent} />
                <CornerBracket pos="bottom-left"  c={accent} />
                <CornerBracket pos="bottom-right" c={accent} />
                <div className="absolute inset-[10px] overflow-hidden rounded-[2px] bg-[#e5ddd0]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={photoDataUrl} alt={personal?.name || "Profile"}
                       className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          )}

          {/* Personal details */}
          <div className="flex-1">
            <KSection title="Personal Details" accent={accent} headingStyle={headingStyle}>
              {personalRows.map(([l, v]) => <Row key={l} label={l} value={v} />)}
              {personal?.customFields?.map(f =>
                f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} /> : null
              )}
            </KSection>
          </div>
        </div>

        {/* Family */}
        <div className="mt-4">
          <KSection title="Family Details" accent={accent} headingStyle={headingStyle}>
            {familyRows.map(([l, v]) => <Row key={l} label={l} value={v} />)}
            {family?.customFields?.map(f =>
              f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} /> : null
            )}
          </KSection>
        </div>

        {/* Contact */}
        <div className="mt-4">
          <KSection title="Contact Details" accent={accent} headingStyle={headingStyle}>
            {contactRows.map(([l, v]) => <Row key={l} label={l} value={v} />)}
            {contact?.customFields?.map(f =>
              f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} /> : null
            )}
          </KSection>
        </div>

        {/* About Me */}
        {personal?.aboutMe?.trim() && (
          <div className="mt-4">
            <KSection title="About Me" accent={accent} headingStyle={headingStyle}>
              <p className="text-[12px] leading-relaxed text-[#2f2820] whitespace-pre-wrap break-words">
                {personal.aboutMe}
              </p>
            </KSection>
          </div>
        )}

      </div>

      {/* Bottom Kanakambar band */}
      <div
        className="relative h-[44px] w-full flex-shrink-0 flex items-center"
        style={{ background: `linear-gradient(90deg, ${accentSoft} 0%, #fde68a 50%, ${accentSoft} 100%)` }}
      >
        <KanakambarBand color={accent} />
      </div>
    </div>
  );
}

function KSection({ title, accent, headingStyle, children }) {
  return (
    <div>
      <p className="text-[12px] font-bold uppercase tracking-[0.15em]"
         style={{ ...headingStyle, color: accent }} data-typography="heading">
        {title}
      </p>
      <div className="my-1.5 flex items-center gap-2">
        <div className="h-[1.5px] w-[20px]" style={{ backgroundColor: accent }} />
        <div className="h-px flex-1 opacity-30" style={{ backgroundColor: accent }} />
      </div>
      <div className="space-y-1.5">{children}</div>
    </div>
  );
}

function Row({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex items-start text-[12px] leading-relaxed">
      <div className="w-[124px] flex-shrink-0 pr-2 font-semibold text-[#2a2218]">{label}</div>
      <div className="w-4 text-center text-[#9a8870]">:</div>
      <div className="flex-1 break-words text-[#2f2820]">{value}</div>
    </div>
  );
}

function KanakambarBand({ color }) {
  const units = Array.from({ length: 12 }, (_, i) => i);
  return (
    <svg width="600" height="40" viewBox="0 0 600 40" fill="none" aria-hidden="true">
      <line x1="0" y1="20" x2="600" y2="20" stroke={color} strokeWidth="0.7" opacity="0.4" />
      {units.map(i => {
        const cx = 25 + i * 50;
        return (
          <g key={i} transform={`translate(${cx} 20)`}>
            <path d="M0 -9 L5.5 0 L0 9 L-5.5 0Z" fill={color} opacity="0.9" />
            <ellipse cx="-14" cy="0" rx="6.5" ry="3" fill={color} opacity="0.32" />
            <ellipse cx="14"  cy="0" rx="6.5" ry="3" fill={color} opacity="0.32" />
            <circle cx="0" cy="0" r="1.8" fill={color} opacity="0.6" />
          </g>
        );
      })}
    </svg>
  );
}

function DoubleOrnamentRule({ color, className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="h-px flex-1" style={{ backgroundColor: `${color}40` }} />
      <span className="text-[10px]" style={{ color }}>✦</span>
      <div className="h-px w-8" style={{ backgroundColor: `${color}25` }} />
      <span className="text-[10px]" style={{ color }}>✦</span>
      <div className="h-px flex-1" style={{ backgroundColor: `${color}40` }} />
    </div>
  );
}

function CornerBracket({ pos, c }) {
  const map = {
    "top-left":     "top-0 left-0 rotate-0",
    "top-right":    "top-0 right-0 rotate-90",
    "bottom-right": "bottom-0 right-0 rotate-180",
    "bottom-left":  "bottom-0 left-0 -rotate-90",
  };
  return (
    <div className={`absolute z-10 h-[28px] w-[28px] ${map[pos]}`}>
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M2 2H16V5" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M2 2V16H5" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M6 6H14V8" stroke={c} strokeWidth="1.1" strokeLinecap="round" opacity="0.7" />
        <path d="M6 6V14H8" stroke={c} strokeWidth="1.1" strokeLinecap="round" opacity="0.7" />
        <circle cx="18" cy="18" r="2" fill={c} opacity="0.5" />
      </svg>
    </div>
  );
}

import { createTypographyStyles, getPrimaryHeading } from "../templateTypography";

export function TemplateLagnaPatrika({ data, theme, headingFont, bodyFont }) {
  const { headingStyle, bodyStyle } = createTypographyStyles(headingFont, bodyFont);

  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const accent     = theme?.accent      || "#b45309";
  const accentSoft = theme?.accentSoft  || "#fef3c7";
  const heading    = theme?.textHeading || "#1a3a1a";

  const personalRows = [
    ["Name",             personal?.name],
    ["Date of Birth",    personal?.dateOfBirth],
    ["Time of Birth",    personal?.timeOfBirth],
    ["Place of Birth",   personal?.placeOfBirth],
    ["Kul (कुळ)",        personal?.caste],
    ["Gotra",            personal?.gotra],
    ["Rashi",            personal?.rashi],
    ["Nakshatra",        personal?.nakshatra],
    ["Manglik",          personal?.manglik],
    ["Height",           personal?.height],
    ["Complexion",       personal?.complexion],
    ["Blood Group",      personal?.bloodGroup],
    ["Mother Tongue",    personal?.motherTongue],
    ["Nationality",      personal?.nationality],
    ["Marital Status",   personal?.maritalStatus],
    ["Education",        personal?.bachelors || personal?.education],
    ["Occupation",       personal?.occupation],
  ];

  const familyRows = [
    ["Father's Name",    family?.fatherName],
    ["Father's Occ.",    family?.fatherOccupation],
    ["Mother's Name",    family?.motherName],
    ["Mother's Occ.",    family?.motherOccupation],
    ["Siblings",         family?.siblings],
    ["Family Type",      family?.familyType],
    ["Family Status",    family?.familyStatus],
  ];

  const contactRows = [
    ["Contact Person",   contact?.contactPerson],
    ["Phone",            contact?.contactNumber],
    ["Email",            contact?.email],
    ["Address",          contact?.address],
  ];

  return (
    <div
      className="relative mx-auto flex min-h-[800px] w-[600px] flex-col overflow-hidden bg-[#fdf8f0] shadow-2xl"
      style={{
        ...bodyStyle,
        backgroundImage:
          `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E` +
          `%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' ` +
          `numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E` +
          `%3Crect width='300' height='300' filter='url(%23n)' opacity='0.022'/%3E%3C/svg%3E")`,
      }}
    >
      {/* Saffron outer border */}
      <div className="pointer-events-none absolute inset-[8px] border-[2.5px]"
           style={{ borderColor: accent }} />
      {/* Green inner border */}
      <div className="pointer-events-none absolute inset-[15px] border"
           style={{ borderColor: `${heading}60` }} />

      {/* Corner squares */}
      <CornerSquare position="top-left"     color={accent} />
      <CornerSquare position="top-right"    color={accent} />
      <CornerSquare position="bottom-left"  color={accent} />
      <CornerSquare position="bottom-right" color={accent} />

      <div className="relative z-10 px-10 py-8">

        {/* Marathi invocation */}
        <p className="mb-1 text-center text-[13px] font-medium tracking-[0.2em]"
           style={{ color: accent }}>
          ।। श्री ।।
        </p>

        {/* Top double rule */}
        <div className="mx-auto mb-5 flex w-[200px] flex-col items-center gap-[3px]">
          <div className="h-[1.5px] w-full" style={{ backgroundColor: accent }} />
          <div className="h-px w-4/5 opacity-45" style={{ backgroundColor: accent }} />
        </div>

        {/* Name + Photo */}
        <div className="flex items-start gap-6 mb-5">
          <div className="flex-1">
            <div
              className="text-[26px] font-bold leading-tight"
              style={{ ...headingStyle, color: heading }}
              data-typography="heading"
            >
              {getPrimaryHeading(personal)}
            </div>
            {personal?.occupation && (
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                {personal.occupation}
              </p>
            )}
          </div>

          {photoDataUrl && (
            <div
              className="h-[196px] w-[150px] flex-shrink-0 overflow-hidden rounded-[6px] border-2 bg-[#e8e1d5]"
              style={{ borderColor: `${accent}bb` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photoDataUrl} alt={personal?.name || "Profile"}
                   className="h-full w-full object-cover" />
            </div>
          )}
        </div>

        {/* Personal section — bilingual heading */}
        <PatrikaSection
          title="व्यक्तिक माहिती / Personal Details"
          accent={accent} heading={heading} headingStyle={headingStyle}
        >
          {personalRows.map(([l, v]) => <Row key={l} label={l} value={v} />)}
          {personal?.customFields?.map((f) =>
            f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} /> : null
          )}
        </PatrikaSection>

        {/* Family section */}
        <PatrikaSection
          title="कौटुंबिक माहिती / Family Details"
          accent={accent} heading={heading} headingStyle={headingStyle}
          className="mt-5"
        >
          {familyRows.map(([l, v]) => <Row key={l} label={l} value={v} />)}
          {family?.customFields?.map((f) =>
            f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} /> : null
          )}
        </PatrikaSection>

        {/* Contact section */}
        <PatrikaSection
          title="संपर्क / Contact Details"
          accent={accent} heading={heading} headingStyle={headingStyle}
          className="mt-5"
        >
          {contactRows.map(([l, v]) => <Row key={l} label={l} value={v} />)}
          {contact?.customFields?.map((f) =>
            f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} /> : null
          )}
        </PatrikaSection>

      
      </div>
    </div>
  );
}

function PatrikaSection({ title, accent, heading, headingStyle, children, className = "" }) {
  return (
    <section className={className}>
      <p
        className="text-[11.5px] font-bold uppercase tracking-[0.12em]"
        style={{ ...headingStyle, color: heading }}
        data-typography="heading"
      >
        {title}
      </p>
      <div className="mt-1 mb-3 flex items-center gap-2">
        <div className="h-[1.5px] w-[28px]" style={{ backgroundColor: accent }} />
        <div className="h-px flex-1" style={{ backgroundColor: `${heading}28` }} />
      </div>
      <div className="space-y-1.5">{children}</div>
    </section>
  );
}

function Row({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex items-start text-[12.5px] leading-relaxed">
      <div className="w-[138px] flex-shrink-0 pr-2 font-semibold text-[#2a2218]">{label}</div>
      <div className="w-4 text-center font-bold text-[#8a7660]">:</div>
      <div className="flex-1 break-words text-[#2f2820]">{value}</div>
    </div>
  );
}

function CornerSquare({ position, color }) {
  const pos = {
    "top-left":     "top-[6px]    left-[6px]",
    "top-right":    "top-[6px]    right-[6px]",
    "bottom-left":  "bottom-[6px] left-[6px]",
    "bottom-right": "bottom-[6px] right-[6px]",
  }[position];
  return (
    <div className={`pointer-events-none absolute z-20 h-[20px] w-[20px] ${pos}`}>
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="1"   y="1"   width="18" height="18" stroke={color} strokeWidth="1.5" />
        <rect x="4.5" y="4.5" width="11" height="11" stroke={color} strokeWidth="0.8"
              opacity="0.55" />
        <circle cx="10" cy="10" r="2.5" fill={color} opacity="0.5" />
      </svg>
    </div>
  );
}

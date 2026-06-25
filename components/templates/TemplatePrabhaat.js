import { createTypographyStyles, getPrimaryHeading } from "../templateTypography";

export function TemplatePrabhaat({ data, theme, headingFont, bodyFont }) {
  const { headingStyle, bodyStyle } = createTypographyStyles(headingFont, bodyFont);

  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const accent     = theme?.accent      || "#7f1d1d";
  const accentSoft = theme?.accentSoft  || "#fee2e2";
  const heading    = theme?.textHeading || "#3b0a0a";

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
    ["Mother Tongue",  personal?.motherTongue],
    ["Marital Status", personal?.maritalStatus],
  ];

  const jathagamRows = [
    ["Rasi",          personal?.rashi],
    ["Natchathiram",  personal?.nakshatra],
    ["Gotra",         personal?.gotra],
    ["Manglik",       personal?.manglik],
  ];

  const educationRows = [
    ["Education",  personal?.bachelors || personal?.education],
    ["Occupation", personal?.occupation],
    ["Income",     personal?.income],
  ];

  const familyRows = [
    ["Father's Name",  family?.fatherName],
    ["Father's Occ.",  family?.fatherOccupation],
    ["Mother's Name",  family?.motherName],
    ["Mother's Occ.",  family?.motherOccupation],
    ["Siblings",       family?.siblings],
    ["Family Type",    family?.familyType],
  ];

  const contactRows = [
    ["Contact Person", contact?.contactPerson],
    ["Phone",          contact?.contactNumber],
    ["Email",          contact?.email],
    ["Address",        contact?.address],
  ];

  return (
    <div
      className="relative mx-auto flex min-h-[800px] w-[600px] flex-col items-center
                 overflow-hidden bg-[#FAF7F0] shadow-2xl"
      style={bodyStyle}
    >
      {/* Subtle double frame */}
      <div className="pointer-events-none absolute inset-[8px] border"
           style={{ borderColor: `${accent}38` }} />
      <div className="pointer-events-none absolute inset-[14px] border"
           style={{ borderColor: `${accent}18` }} />

      <div className="relative z-10 flex w-full flex-col items-center px-9 py-7">

        {/* Mandala + Photo */}
        <div className="relative mb-3 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <LotusMandala color={accent} size={196} />
          </div>
          <div
            className="relative z-10 h-[118px] w-[118px] overflow-hidden rounded-full border-2 bg-[#e8e4dc]"
            style={{ borderColor: `${accent}cc` }}
          >
            {photoDataUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={photoDataUrl} alt={personal?.name || "Profile"}
                   className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center
                              text-[9px] uppercase tracking-wider text-[#7a6a5a]">
                Photo
              </div>
            )}
          </div>
        </div>

        {/* Name + subtitle */}
        <div
          className="mt-1 text-center text-[26px] font-bold leading-tight"
          style={{ ...headingStyle, color: heading }}
          data-typography="heading"
        >
          {getPrimaryHeading(personal)}
        </div>
        {personal?.occupation && (
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
            {personal.occupation}
          </p>
        )}

        {/* Full-width ornament */}
        <FullOrn color={accent} className="my-4" />

        {/* Two-column body */}
        <div className="grid w-full grid-cols-2 gap-x-7">

          {/* Left col — Personal */}
          <div>
            <PrabSection title="Personal Details" accent={accent} headingStyle={headingStyle}>
              {personalRows.map(([l, v]) => <Row key={l} label={l} value={v} />)}
              {personal?.customFields?.map((f) =>
                f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} /> : null
              )}
            </PrabSection>
          </div>

          {/* Right col — Jathagam + Education + Family */}
          <div className="space-y-4">
            <PrabSection title="Jathagam" accent={accent} headingStyle={headingStyle}>
              {jathagamRows.map(([l, v]) => <Row key={l} label={l} value={v} />)}
            </PrabSection>

            <PrabSection title="Education & Career" accent={accent} headingStyle={headingStyle}>
              {educationRows.map(([l, v]) => <Row key={l} label={l} value={v} />)}
            </PrabSection>

            <PrabSection title="Family Details" accent={accent} headingStyle={headingStyle}>
              {familyRows.map(([l, v]) => <Row key={l} label={l} value={v} />)}
              {family?.customFields?.map((f) =>
                f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} /> : null
              )}
            </PrabSection>
          </div>
        </div>

        {/* Contact full width */}
        <FullOrn color={accent} className="mt-5 mb-4" />
        <PrabSection title="Contact Details" accent={accent}
                     headingStyle={headingStyle} className="w-full">
          {contactRows.map(([l, v]) => <Row key={l} label={l} value={v} />)}
          {contact?.customFields?.map((f) =>
            f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} /> : null
          )}
        </PrabSection>

      
      </div>
    </div>
  );
}

function PrabSection({ title, accent, headingStyle, children, className = "" }) {
  return (
    <section className={className}>
      <p
        className="mb-0.5 text-[10.5px] font-bold uppercase tracking-[0.18em]"
        style={{ ...headingStyle, color: accent }}
        data-typography="heading"
      >
        {title}
      </p>
      <div className="mb-2 flex flex-col gap-[2px]">
        <div className="h-[1.5px] w-full" style={{ backgroundColor: accent }} />
        <div className="mx-3 h-px opacity-35" style={{ backgroundColor: accent }} />
      </div>
      <div className="space-y-1">{children}</div>
    </section>
  );
}

function Row({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex items-start text-[11px] leading-relaxed">
      <div className="w-[102px] flex-shrink-0 pr-1.5 font-semibold text-[#2a2218]">{label}</div>
      <div className="w-3 text-center text-[#9a8870]">:</div>
      <div className="flex-1 break-words text-[#2f2820]">{value}</div>
    </div>
  );
}

function LotusMandala({ color, size }) {
  const petals = Array.from({ length: 12 }, (_, i) => i);
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <circle cx="100" cy="100" r="94"
              stroke={color} strokeWidth="0.7"
              strokeDasharray="3 3" opacity="0.32" />
      <circle cx="100" cy="100" r="68"
              stroke={color} strokeWidth="0.5" opacity="0.22" />
      {petals.map((i) => (
        <ellipse
          key={i}
          cx="100" cy="65"
          rx="7" ry="20"
          stroke={color} strokeWidth="0.9"
          fill={`${color}07`}
          transform={`rotate(${i * 30} 100 100)`}
        />
      ))}
      <circle cx="100" cy="100" r="6.5"
              stroke={color} strokeWidth="1"
              fill={`${color}16`} />
    </svg>
  );
}

function FullOrn({ color, className = "" }) {
  return (
    <div className={`flex w-full items-center gap-3 ${className}`}>
      <div className="h-px flex-1" style={{ backgroundColor: `${color}35` }} />
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="7" stroke={color} strokeWidth="0.8" />
        <path d="M8 1L9.4 5.8H14.4L10.4 8.5L11.8 13.3L8 10.5L4.2 13.3L5.6 8.5L1.6 5.8H6.6Z"
              stroke={color} strokeWidth="0.7" fill="none" />
      </svg>
      <div className="h-px flex-1" style={{ backgroundColor: `${color}35` }} />
    </div>
  );
}

import { createTypographyStyles, getPrimaryHeading } from "../templateTypography";
import { AboutMeSection } from "../templateAboutMe";

export function TemplateRoyalEmerald({ data, theme, headingFont, bodyFont }) {
  const { headingStyle, bodyStyle } = createTypographyStyles(headingFont, bodyFont);

  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const accent     = theme?.accent      || "#065f46";
  const accentSoft = theme?.accentSoft  || "#d1fae5";
  const heading    = theme?.textHeading || "#022c16";

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
    ["Education",      personal?.bachelors || personal?.education],
    ["Occupation",     personal?.occupation],
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
      className="relative mx-auto flex min-h-[800px] w-[600px] overflow-hidden bg-[#faf9f6] shadow-2xl"
      style={bodyStyle}
    >
      {/* Vertical accent pillar */}
      <div
        className="relative flex w-[72px] flex-shrink-0 flex-col items-center justify-between py-7"
        style={{ backgroundColor: accent }}
      >
        <StarOrnament color="rgba(255,255,255,0.7)" />
        <div
          className="text-[10px] font-bold uppercase tracking-[0.28em] text-white opacity-50"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {getPrimaryHeading(personal) || "BIODATA"}
        </div>
        <StarOrnament color="rgba(255,255,255,0.7)" />
      </div>

      {/* Main content */}
      <div className="flex-1 px-7 py-6">

        {/* Invocation */}
        <p className="mb-1 text-center text-[11px] font-medium tracking-[0.2em]"
           style={{ color: accent }}>
          ।। श्री गणेशाय नमः ।।
        </p>

        {/* Thin rule */}
        <div className="mx-auto mb-3 h-px w-[180px] opacity-30"
             style={{ backgroundColor: accent }} />

        {/* Candidate name */}
        <div
          className="text-center text-[28px] font-bold leading-tight"
          style={{ ...headingStyle, color: heading }}
          data-typography="heading"
        >
          {getPrimaryHeading(personal)}
        </div>
        {personal?.occupation && (
          <p className="mt-1 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            {personal.occupation}
          </p>
        )}

        {/* Diamond rule */}
        <DiamondRule color={accent} className="my-4" />

        {/* Personal + Photo row */}
        <div className="flex gap-5">
          <div className="flex-1">
            <SectionTitle title="Personal Details" accent={accent} headingStyle={headingStyle} />
            <div className="mt-2.5 space-y-1.5">
              {personalRows.map(([label, value]) => (
                <Row key={label} label={label} value={value} />
              ))}
              {personal?.customFields?.map((f) =>
                f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} /> : null
              )}
            </div>
          </div>

          <div className="mt-7 flex-shrink-0">
            <div
              className="h-[220px] w-[168px] overflow-hidden rounded-[12px] border-2 bg-[#e8e5df]"
              style={{ borderColor: `${accent}cc` }}
            >
              {photoDataUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={photoDataUrl} alt={personal?.name || "Profile"}
                     className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center
                                text-[10px] uppercase tracking-wider text-[#7a7060]">
                  Photo
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Family */}
        <div className="mt-5">
          <SectionTitle title="Family Details" accent={accent} headingStyle={headingStyle} />
          <div className="mt-2.5 space-y-1.5">
            {familyRows.map(([label, value]) => (
              <Row key={label} label={label} value={value} />
            ))}
            {family?.customFields?.map((f) =>
              f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} /> : null
            )}
          </div>
        </div>

        {/* Contact */}
        <div className="mt-5">
          <SectionTitle title="Contact Details" accent={accent} headingStyle={headingStyle} />
          <div className="mt-2.5 space-y-1.5">
            {contactRows.map(([label, value]) => (
              <Row key={label} label={label} value={value} />
            ))}
            {contact?.customFields?.map((f) =>
              f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} /> : null
            )}
          </div>
        </div>

        <AboutMeSection
          text={personal?.aboutMe}
          accent={accent}
          headingStyle={headingStyle}
          className="mt-5"
        />
      </div>
    </div>
  );
}

function SectionTitle({ title, accent, headingStyle }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="text-[12px] font-bold uppercase tracking-[0.15em]"
        style={{ ...headingStyle, color: accent }}
        data-typography="heading"
      >
        {title}
      </div>
      <span className="text-[8px]" style={{ color: accent }}>◆</span>
      <div className="h-px flex-1" style={{ backgroundColor: `${accent}45` }} />
    </div>
  );
}

function Row({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex items-start text-[12.5px] leading-relaxed">
      <div className="w-[128px] flex-shrink-0 pr-2 font-semibold text-[#2a2520]">{label}</div>
      <div className="w-4 text-center font-bold text-[#8a8070]">:</div>
      <div className="flex-1 break-words text-[#2f2a25]">{value}</div>
    </div>
  );
}

function DiamondRule({ color, className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="h-px flex-1" style={{ backgroundColor: `${color}35` }} />
      <svg width="20" height="10" viewBox="0 0 40 20" fill="none" aria-hidden="true">
        <path d="M20 2L36 10L20 18L4 10Z" stroke={color} strokeWidth="1.4" />
        <circle cx="20" cy="10" r="2.5" fill={color} />
      </svg>
      <div className="h-px flex-1" style={{ backgroundColor: `${color}35` }} />
    </div>
  );
}

function StarOrnament({ color }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M14 2L16.5 10H24L18 15L20.5 23L14 18L7.5 23L10 15L4 10H11.5Z"
        stroke={color} strokeWidth="1" fill="none"
      />
      <circle cx="14" cy="14" r="3" fill={color} opacity="0.7" />
    </svg>
  );
}

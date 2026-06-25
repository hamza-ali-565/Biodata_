import { createTypographyStyles, getPrimaryHeading } from "../templateTypography";

export function TemplateRishtaNikah({ data, theme, headingFont, bodyFont }) {
  const { headingStyle, bodyStyle } = createTypographyStyles(headingFont, bodyFont);

  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const accent     = theme?.accent      || "#b45309";
  const accentSoft = theme?.accentSoft  || "#fef3c7";
  const heading    = theme?.textHeading || "#1c1008";

  const personalRows = [
    ["Name",           personal?.name],
    ["Date of Birth",  personal?.dateOfBirth],
    ["Time of Birth",  personal?.timeOfBirth],
    ["Place of Birth", personal?.placeOfBirth],
    ["Height",         personal?.height],
    ["Complexion",     personal?.complexion],
    ["Blood Group",    personal?.bloodGroup],
    ["Sect / Maslak",  personal?.religion],
    ["Biradari",       personal?.caste],
    ["Mother Tongue",  personal?.motherTongue],
    ["Nationality",    personal?.nationality],
    ["Marital Status", personal?.maritalStatus],
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
      className="relative mx-auto flex min-h-[800px] w-[600px] flex-col overflow-hidden bg-[#fdfaf5] shadow-2xl"
      style={bodyStyle}
    >
      {/* Islamic star watermark */}
      <div className="pointer-events-none absolute right-[-55px] top-[22%] z-0 opacity-[0.04]">
        <svg width="300" height="300" viewBox="0 0 100 100"
             fill={accent} xmlns="http://www.w3.org/2000/svg">
          <rect x="22" y="22" width="56" height="56" />
          <rect x="22" y="22" width="56" height="56"
                transform="rotate(45 50 50)" />
          <circle cx="50" cy="50" r="11" />
        </svg>
      </div>

      {/* Outer borders */}
      <div className="pointer-events-none absolute inset-[10px] border"
           style={{ borderColor: `${accent}50` }} />
      <div className="pointer-events-none absolute inset-[16px] border"
           style={{ borderColor: `${accent}22` }} />

      <div className="relative z-10 px-10 py-7">

        {/* Bismillah */}
        <p
          className="mb-3 text-center text-[17px] font-medium tracking-wide"
          style={{ color: accent, direction: "rtl", fontFamily: "serif" }}
        >
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        </p>

        {/* Star + rules divider */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px flex-1" style={{ backgroundColor: `${accent}55` }} />
          <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 2L14.2 8.6H21L15.4 12.8L17.6 19.4L12 15.2L6.4 19.4L8.6 12.8L3 8.6H9.8Z"
              fill={accent}
            />
          </svg>
          <div className="h-px flex-1" style={{ backgroundColor: `${accent}55` }} />
        </div>

        {/* Photo + Name */}
        <div className="flex items-start gap-6 mb-5">
          {photoDataUrl && (
            <div className="flex-shrink-0 text-center">
              <div
                className="h-[190px] w-[150px] overflow-hidden rounded-[8px] border-2 bg-[#e8e1d5]"
                style={{ borderColor: `${accent}bb` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photoDataUrl} alt={personal?.name || "Profile"}
                     className="h-full w-full object-cover" />
              </div>
              <p className="mt-1 text-[9px] italic text-slate-400">
                Shared for reference
              </p>
            </div>
          )}
          <div className="flex-1">
            <div
              className="text-[26px] font-bold leading-tight"
              style={{ ...headingStyle, color: heading }}
              data-typography="heading"
            >
              {getPrimaryHeading(personal)}
            </div>
            {personal?.occupation && (
              <p className="mt-1 text-[11px] font-medium text-slate-500">
                {personal.occupation}
              </p>
            )}
          </div>
        </div>

        {/* Sections */}
        <RishtaSection title="Personal Details" accent={accent} headingStyle={headingStyle}>
          <div className="space-y-1.5">
            {personalRows.map(([label, value]) => (
              <Row key={label} label={label} value={value} />
            ))}
            {personal?.customFields?.map((f) =>
              f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} /> : null
            )}
          </div>
        </RishtaSection>

        <RishtaSection title="Family Details" accent={accent} headingStyle={headingStyle}
                       className="mt-5">
          <div className="space-y-1.5">
            {familyRows.map(([label, value]) => (
              <Row key={label} label={label} value={value} />
            ))}
            {family?.customFields?.map((f) =>
              f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} /> : null
            )}
          </div>
        </RishtaSection>

        <RishtaSection title="Contact Details" accent={accent} headingStyle={headingStyle}
                       className="mt-5">
          <div className="space-y-1.5">
            {contactRows.map(([label, value]) => (
              <Row key={label} label={label} value={value} />
            ))}
            {contact?.customFields?.map((f) =>
              f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} /> : null
            )}
          </div>
        </RishtaSection>

    
      </div>
    </div>
  );
}

function RishtaSection({ title, accent, headingStyle, children, className = "" }) {
  return (
    <section className={className}>
      <div className="flex items-center gap-2 mb-3">
        <div className="h-px flex-1" style={{ backgroundColor: `${accent}38` }} />
        <p
          className="px-2 text-[11px] font-bold uppercase tracking-[0.18em]"
          style={{ ...headingStyle, color: accent }}
          data-typography="heading"
        >
          ❧ {title} ❧
        </p>
        <div className="h-px flex-1" style={{ backgroundColor: `${accent}38` }} />
      </div>
      {children}
    </section>
  );
}

function Row({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex items-start text-[12.5px] leading-relaxed">
      <div className="w-[138px] flex-shrink-0 pr-2 font-semibold text-[#2a2520]">{label}</div>
      <div className="w-4 text-center font-bold text-[#9a8875]">:</div>
      <div className="flex-1 break-words text-[#2f2a25]">{value}</div>
    </div>
  );
}

import { createTypographyStyles, getPrimaryHeading } from "../templateTypography";

export function TemplateShilp({ data, theme, headingFont, bodyFont }) {
  const { headingStyle, bodyStyle } = createTypographyStyles(headingFont, bodyFont);

  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const accent     = theme?.accent      || "#1d4ed8";
  const accentSoft = theme?.accentSoft  || "#dbeafe";
  const heading    = theme?.textHeading || "#1e3a5f";

  const personalRows = [
    ["Date of Birth",  personal?.dateOfBirth],
    ["Time of Birth",  personal?.timeOfBirth],
    ["Place of Birth", personal?.placeOfBirth],
    ["Height",         personal?.height],
    ["Complexion",     personal?.complexion],
    ["Blood Group",    personal?.bloodGroup],
    ["Religion",       personal?.religion],
    ["Caste",          personal?.caste],
    ["Mother Tongue",  personal?.motherTongue],
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
      className="relative mx-auto flex min-h-[800px] w-[600px] flex-col overflow-hidden bg-[#fafbff] shadow-2xl"
      style={bodyStyle}
    >
      {/* Ik Onkar watermark */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center z-0"
        aria-hidden="true"
      >
        <span
          className="select-none font-bold"
          style={{ fontSize: "220px", color: accent, opacity: 0.055, lineHeight: 1, fontFamily: "serif" }}
        >
          ੴ
        </span>
      </div>

      {/* Top double rule */}
      <div className="h-[4px] w-full flex-shrink-0" style={{ backgroundColor: accent }} />
      <div className="h-[2px] w-full flex-shrink-0 opacity-30" style={{ backgroundColor: accent }} />

      <div className="relative z-10 px-9 py-6">

        {/* Waheguru blessing */}
        <p className="mb-2 text-center text-[14px] font-bold tracking-[0.15em]"
           style={{ color: accent, fontFamily: "serif" }}>
          ਵਾਹਿਗੁਰੂ
        </p>

        {/* Photo + Name header */}
        <div className="flex items-center gap-6 mb-5 p-4 rounded-xl"
             style={{ backgroundColor: `${accent}08`, border: `1px solid ${accent}18` }}>
          <div
            className="h-[110px] w-[110px] overflow-hidden rounded-full border-[3px] flex-shrink-0 bg-slate-200"
            style={{ borderColor: accent }}
          >
            {photoDataUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={photoDataUrl} alt={personal?.name || "Profile"}
                   className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center
                              text-[9px] uppercase tracking-wider text-slate-400">Photo</div>
            )}
          </div>
          <div>
            <div
              className="text-[26px] font-bold leading-tight"
              style={{ ...headingStyle, color: heading }}
              data-typography="heading"
            >
              {getPrimaryHeading(personal)}
            </div>
            <div className="mt-1 flex items-center gap-2 text-[11px] text-slate-500">
              {personal?.occupation && <span>{personal.occupation}</span>}
              {personal?.placeOfBirth && (
                <><span style={{ color: accent }}>·</span><span>{personal.placeOfBirth}</span></>
              )}
            </div>
          </div>
        </div>

        {/* Personal */}
        <ShilpSection title="PERSONAL DETAILS" accent={accent} headingStyle={headingStyle}>
          {personalRows.map(([l, v]) => <Row key={l} label={l} value={v} />)}
          {personal?.customFields?.map(f =>
            f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} /> : null
          )}
        </ShilpSection>

        {/* Family */}
        <ShilpSection title="FAMILY DETAILS" accent={accent} headingStyle={headingStyle} className="mt-5">
          {familyRows.map(([l, v]) => <Row key={l} label={l} value={v} />)}
          {family?.customFields?.map(f =>
            f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} /> : null
          )}
        </ShilpSection>

        {/* Contact */}
        <ShilpSection title="CONTACT" accent={accent} headingStyle={headingStyle} className="mt-5">
          {contactRows.map(([l, v]) => <Row key={l} label={l} value={v} />)}
          {contact?.customFields?.map(f =>
            f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} /> : null
          )}
        </ShilpSection>

        {/* About Me */}
        {personal?.aboutMe?.trim() && (
          <ShilpSection title="ABOUT ME" accent={accent} headingStyle={headingStyle} className="mt-5">
            <p className="text-[12.5px] leading-relaxed text-slate-800 whitespace-pre-wrap break-words">
              {personal.aboutMe}
            </p>
          </ShilpSection>
        )}

      </div>

      {/* Bottom double rule */}
      <div className="mt-auto">
        <div className="h-[2px] w-full opacity-30" style={{ backgroundColor: accent }} />
        <div className="h-[4px] w-full" style={{ backgroundColor: accent }} />
      </div>
    </div>
  );
}

function ShilpSection({ title, accent, headingStyle, children, className = "" }) {
  return (
    <section className={className}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[10px] font-bold" style={{ color: accent }}>══</span>
        <span
          className="text-[11px] font-bold uppercase tracking-[0.18em]"
          style={{ ...headingStyle, color: accent }}
          data-typography="heading"
        >
          {title}
        </span>
        <div className="flex-1 text-[10px] font-bold overflow-hidden whitespace-nowrap"
             style={{ color: `${accent}55` }}>
          {'═'.repeat(30)}
        </div>
      </div>
      <div className="space-y-1.5">{children}</div>
    </section>
  );
}

function Row({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex items-start text-[12.5px] leading-relaxed">
      <div className="w-[134px] flex-shrink-0 pr-2 font-semibold text-[#1e2a40]">{label}</div>
      <div className="w-4 text-center text-slate-400">:</div>
      <div className="flex-1 break-words text-slate-800">{value}</div>
    </div>
  );
}

import { createTypographyStyles, getPrimaryHeading } from "../templateTypography";

export function TemplateUdayam({ data, theme, headingFont, bodyFont }) {
  const { headingStyle, bodyStyle } = createTypographyStyles(headingFont, bodyFont);

  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const accent     = theme?.accent      || "#1e3a5f";
  const heading    = theme?.textHeading || "#0c1a2e";

  const blessingField = (personal?.customFields || []).find(f => f.label === "Blessing");
  const blessingLine  = blessingField?.value || "To God Be The Glory";

  const personalRows = [
    ["Date of Birth",  personal?.dateOfBirth],
    ["Time of Birth",  personal?.timeOfBirth],
    ["Place of Birth", personal?.placeOfBirth],
    ["Height",         personal?.height],
    ["Complexion",     personal?.complexion],
    ["Blood Group",    personal?.bloodGroup],
    ["Denomination",   personal?.religion],
    ["Diocese",        personal?.caste],
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

  const otherCustom = (personal?.customFields || []).filter(
    f => f.label !== "Blessing" && f.value
  );

  return (
    <div
      className="relative mx-auto flex min-h-[800px] w-[600px] flex-col overflow-hidden bg-white shadow-2xl"
      style={bodyStyle}
    >
      {/* Watermark cross */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0"
           aria-hidden="true">
        <CrossWatermark color={accent} />
      </div>

      {/* Top accent rule */}
      <div className="h-[3px] w-full flex-shrink-0" style={{ backgroundColor: accent }} />

      <div className="relative z-10 px-9 py-6">

        {/* Header */}
        <div className="text-center mb-5">
          <div className="flex justify-center mb-2">
            <CrossOrnament color={accent} />
          </div>
          <p className="text-[11px] italic font-medium tracking-wide text-slate-500 mb-2">
            {blessingLine}
          </p>
          <div
            className="text-[28px] font-bold leading-tight"
            style={{ ...headingStyle, color: heading }}
            data-typography="heading"
          >
            {getPrimaryHeading(personal)}
          </div>
          <div className="mt-1 flex items-center justify-center gap-2 text-[11px] text-slate-500">
            {personal?.religion && <span>{personal.religion}</span>}
            {personal?.placeOfBirth && (
              <><span style={{ color: accent }}>·</span><span>{personal.placeOfBirth}</span></>
            )}
          </div>
          <div className="mt-3 flex items-center gap-2">
            <div className="h-px flex-1" style={{ backgroundColor: `${accent}40` }} />
            <CrossOrnament color={accent} small />
            <div className="h-px flex-1" style={{ backgroundColor: `${accent}40` }} />
          </div>
        </div>

        {/* Personal + Photo */}
        <div className="flex gap-5 items-start mb-4">
          {photoDataUrl && (
            <div
              className="h-[188px] w-[148px] flex-shrink-0 overflow-hidden rounded-[4px] border bg-slate-100"
              style={{ borderColor: `${accent}55` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photoDataUrl} alt={personal?.name || "Profile"}
                   className="h-full w-full object-cover" />
            </div>
          )}
          <div className="flex-1">
            <USection title="Personal Details" accent={accent} headingStyle={headingStyle}>
              {personalRows.map(([l, v]) => <Row key={l} label={l} value={v} />)}
              {otherCustom.map(f => <Row key={f.id || f.label} label={f.label} value={f.value} />)}
            </USection>
          </div>
        </div>

        {/* Family */}
        <USection title="Family Details" accent={accent} headingStyle={headingStyle} className="mb-4">
          {familyRows.map(([l, v]) => <Row key={l} label={l} value={v} />)}
          {family?.customFields?.map(f =>
            f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} /> : null
          )}
        </USection>

        {/* Contact */}
        <USection title="Contact" accent={accent} headingStyle={headingStyle}>
          {contactRows.map(([l, v]) => <Row key={l} label={l} value={v} />)}
          {contact?.customFields?.map(f =>
            f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} /> : null
          )}
        </USection>

        {/* About Me */}
        {personal?.aboutMe?.trim() && (
          <USection title="About Me" accent={accent} headingStyle={headingStyle} className="mt-4">
            <p className="text-[12px] leading-relaxed text-slate-800 whitespace-pre-wrap break-words">
              {personal.aboutMe}
            </p>
          </USection>
        )}

      </div>

      {/* Bottom accent rule */}
      <div className="mt-auto h-[3px] w-full" style={{ backgroundColor: accent }} />
    </div>
  );
}

function USection({ title, accent, headingStyle, children, className = "" }) {
  return (
    <section className={className}>
      <p className="text-[12px] font-bold uppercase tracking-[0.15em]"
         style={{ ...headingStyle, color: accent }} data-typography="heading">
        {title}
      </p>
      <div className="mt-1 mb-2.5 h-px" style={{ backgroundColor: `${accent}35` }} />
      <div className="space-y-1.5">{children}</div>
    </section>
  );
}

function Row({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex items-start text-[12px] leading-relaxed">
      <div className="w-[126px] flex-shrink-0 pr-2 font-semibold text-[#1e2a40]">{label}</div>
      <div className="w-4 text-center text-slate-400">:</div>
      <div className="flex-1 break-words text-slate-800">{value}</div>
    </div>
  );
}

function CrossOrnament({ color, small = false }) {
  const s = small ? 12 : 20;
  return (
    <svg width={s} height={s} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="8.5" y="2"  width="3" height="16" rx="1" fill={color} opacity="0.7" />
      <rect x="2"   y="7"  width="16" height="3" rx="1" fill={color} opacity="0.7" />
    </svg>
  );
}

function CrossWatermark({ color }) {
  return (
    <svg width="300" height="400" viewBox="0 0 300 400" fill="none" aria-hidden="true">
      <rect x="130" y="20"  width="40" height="360" rx="8" fill={color} opacity="0.04" />
      <rect x="20"  y="130" width="260" height="40" rx="8" fill={color} opacity="0.04" />
    </svg>
  );
}

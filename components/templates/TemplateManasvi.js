import { createTypographyStyles, getPrimaryHeading } from "../templateTypography";

export function TemplateManasvi({ data, theme, headingFont, bodyFont }) {
  const { headingStyle, bodyStyle } = createTypographyStyles(headingFont, bodyFont);

  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const hasPhoto = !!photoDataUrl;
  const accent     = theme?.accent      || "#0f766e";
  const accentSoft = theme?.accentSoft  || "#ccfbf1";
  const heading    = theme?.textHeading || "#0c1a18";

  const personalFields = [
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
    ["Mother Tongue",  personal?.motherTongue],
    ["Education",      personal?.bachelors || personal?.education],
    ["Occupation",     personal?.occupation],
    ["Income",         personal?.income],
  ];

  const familyFields = [
    ["Father",   family?.fatherName
                   ? `${family.fatherName}${family.fatherOccupation ? ` — ${family.fatherOccupation}` : ""}`
                   : null],
    ["Mother",   family?.motherName
                   ? `${family.motherName}${family.motherOccupation ? ` — ${family.motherOccupation}` : ""}`
                   : null],
    ["Siblings", family?.siblings],
    ["Family",   family?.familyType],
  ];

  const contactFields = [
    ["Phone",   contact?.contactNumber],
    ["Email",   contact?.email],
    ["Address", contact?.address],
    ["Contact", contact?.contactPerson],
  ];

  return (
    <div
      className="relative mx-auto flex min-h-[800px] w-[600px] flex-col overflow-hidden bg-white shadow-2xl"
      style={bodyStyle}
    >
      <div className="px-10 py-8">

        {/* Name + Photo header */}
        <div className={hasPhoto ? "flex items-start justify-between gap-6 mb-1" : "mb-1"}>
          <div className="flex-1">
            <div
              className={hasPhoto ? "text-[32px] font-bold leading-none" : "text-[36px] font-bold leading-none"}
              style={{ ...headingStyle, color: heading }}
              data-typography="heading"
            >
              {getPrimaryHeading(personal)}
            </div>
            {/* Single accent underline — the only decorative element */}
            <div className="mt-2 h-[3px] w-[56px] rounded-full" style={{ backgroundColor: accent }} />
            <div className="mt-2 flex items-center gap-2 text-[11px] text-slate-500">
              {personal?.occupation && <span>{personal.occupation}</span>}
              {personal?.placeOfBirth && (
                <><span className="text-slate-300">·</span><span>{personal.placeOfBirth}</span></>
              )}
            </div>
          </div>

          {hasPhoto && (
            <div className="flex-shrink-0 h-[96px] w-[76px] overflow-hidden rounded-[4px] bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photoDataUrl} alt={personal?.name || "Profile"}
                   className="h-full w-full object-cover" />
            </div>
          )}
        </div>

        <div className="mt-5 mb-6 h-px w-full bg-slate-200" />

        {/* Personal */}
        <MSection title="Personal" accent={accent}>
          {personalFields.map(([l, v]) => <MRow key={l} label={l} value={v} />)}
          {personal?.customFields?.map(f =>
            f?.value ? <MRow key={f.id || f.label} label={f.label} value={f.value} /> : null
          )}
        </MSection>

        <div className="my-5 h-px w-full bg-slate-100" />

        {/* Family */}
        <MSection title="Family" accent={accent}>
          {familyFields.map(([l, v]) => <MRow key={l} label={l} value={v} />)}
          {family?.customFields?.map(f =>
            f?.value ? <MRow key={f.id || f.label} label={f.label} value={f.value} /> : null
          )}
        </MSection>

        <div className="my-5 h-px w-full bg-slate-100" />

        {/* Contact */}
        <MSection title="Contact" accent={accent}>
          {contactFields.map(([l, v]) => <MRow key={l} label={l} value={v} />)}
          {contact?.customFields?.map(f =>
            f?.value ? <MRow key={f.id || f.label} label={f.label} value={f.value} /> : null
          )}
        </MSection>

        {personal?.aboutMe?.trim() && (
          <>
            <div className="my-5 h-px w-full bg-slate-100" />
            <MSection title="About Me" accent={accent}>
              <p className="text-[13px] font-medium text-slate-900 whitespace-pre-wrap break-words leading-relaxed">
                {personal.aboutMe}
              </p>
            </MSection>
          </>
        )}

      </div>
    </div>
  );
}

function MSection({ title, accent, children }) {
  return (
    <div>
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em]"
         style={{ color: accent }} data-typography="heading">
        {title}
      </p>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function MRow({ label, value }) {
  if (!value) return null;
  return (
    <div className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
      <span className="text-[10.5px] uppercase tracking-widest text-slate-400 font-medium">
        {label}
      </span>
      <span className="text-[13px] font-medium text-slate-900 break-words">
        {value}
      </span>
    </div>
  );
}

import { createTypographyStyles, getPrimaryHeading } from "../templateTypography";

export function TemplateAkashdeep({ data, theme, headingFont, bodyFont }) {
  const { headingStyle, bodyStyle } = createTypographyStyles(headingFont, bodyFont);

  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const accent     = theme?.accent      || "#4338ca";
  const accentSoft = theme?.accentSoft  || "#e0e7ff";
  const heading    = theme?.textHeading || "#1e1b4b";

  const NRI_LABELS = ["Visa Type", "Passport Country", "Country of Residence", "PR Status", "Annual Income (Foreign)", "Citizenship"];

  const nriFields = (personal?.customFields || []).filter(
    f => NRI_LABELS.includes(f.label) && f.value
  );
  const otherCustom = (personal?.customFields || []).filter(
    f => !NRI_LABELS.includes(f.label) && f.value
  );

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
    ["Education",      personal?.bachelors || personal?.education],
    ["Occupation",     personal?.occupation],
  ];

  const familyRows = [
    ["Father",        family?.fatherName],
    ["Father's Occ.", family?.fatherOccupation],
    ["Mother",        family?.motherName],
    ["Mother's Occ.", family?.motherOccupation],
    ["Siblings",      family?.siblings],
  ];

  const contactRows = [
    ["Contact Person", contact?.contactPerson],
    ["Phone",          contact?.contactNumber],
    ["Email",          contact?.email],
    ["Address",        contact?.address],
  ];

  return (
    <div
      className="relative mx-auto flex min-h-[800px] w-[600px] flex-col overflow-hidden bg-white shadow-2xl"
      style={bodyStyle}
    >
      {/* Full-bleed photo header */}
      <div className="relative h-[220px] w-full overflow-hidden bg-slate-700 flex-shrink-0">
        {photoDataUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photoDataUrl}
            alt={personal?.name || "Profile"}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-slate-800">
            <svg viewBox="0 0 24 24" className="w-16 h-16 text-slate-600" fill="currentColor">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
        )}

        {/* Gradient scrim */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)" }}
        />

        {/* Name over photo */}
        <div className="absolute bottom-0 left-0 px-6 pb-4">
          <div
            className="text-[28px] font-bold leading-tight text-white drop-shadow-sm"
            style={headingStyle}
            data-typography="heading"
          >
            {getPrimaryHeading(personal)}
          </div>
          <div className="mt-1 flex items-center gap-2 text-[11px] text-white/75">
            {personal?.occupation && <span>{personal.occupation}</span>}
            {personal?.nationality && (
              <><span className="opacity-50">·</span><span>{personal.nationality}</span></>
            )}
          </div>
        </div>

        <div className="absolute top-0 right-0 h-[4px] w-[120px]" style={{ backgroundColor: accent }} />
      </div>

      {/* Accent divider */}
      <div className="h-[3px] w-full flex-shrink-0" style={{ backgroundColor: accent }} />

      {/* Two-column body */}
      <div className="flex flex-1">

        {/* Left — Personal */}
        <div className="flex-1 px-6 py-5">
          <AkColSection title="Personal Details" accent={accent} headingStyle={headingStyle}>
            {personalRows.map(([l, v]) => <Row key={l} label={l} value={v} />)}
            {otherCustom.map(f => <Row key={f.id || f.label} label={f.label} value={f.value} />)}
          </AkColSection>
        </div>

        <div className="my-5 w-px self-stretch" style={{ backgroundColor: `${accent}18` }} />

        {/* Right — NRI + Family */}
        <div className="w-[220px] flex-shrink-0 px-5 py-5 space-y-5">
          {nriFields.length > 0 && (
            <AkColSection title="NRI Details" accent={accent} headingStyle={headingStyle}>
              {nriFields.map(f => <Row key={f.id || f.label} label={f.label} value={f.value} compact />)}
            </AkColSection>
          )}
          <AkColSection title="Family Details" accent={accent} headingStyle={headingStyle}>
            {familyRows.map(([l, v]) => <Row key={l} label={l} value={v} compact />)}
            {family?.customFields?.map(f =>
              f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} compact /> : null
            )}
          </AkColSection>
        </div>
      </div>

      {/* About Me — full-width below two-column body */}
      {personal?.aboutMe?.trim() && (
        <div className="border-t px-6 py-4" style={{ borderColor: `${accent}18` }}>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.15em]"
             style={{ ...headingStyle, color: accent }} data-typography="heading">About Me</p>
          <p className="text-[11px] leading-relaxed text-slate-700 whitespace-pre-wrap break-words">{personal.aboutMe}</p>
        </div>
      )}

      {/* Contact chips */}
      <div className="border-t px-6 py-4" style={{ borderColor: `${accent}18` }}>
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em]"
           style={{ color: accent }} data-typography="heading">Contact</p>
        <div className="flex flex-wrap gap-2">
          {contactRows.map(([l, v]) =>
            v ? (
              <div key={l}
                   className="flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-medium"
                   style={{ backgroundColor: accentSoft, color: accent }}>
                {v}
              </div>
            ) : null
          )}
          {contact?.customFields?.map(f =>
            f?.value ? (
              <div key={f.id || f.label}
                   className="flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-medium"
                   style={{ backgroundColor: accentSoft, color: accent }}>
                {f.label}: {f.value}
              </div>
            ) : null
          )}
        </div>
      </div>

    </div>
  );
}

function AkColSection({ title, accent, headingStyle, children }) {
  return (
    <div>
      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em]"
         style={{ ...headingStyle, color: accent }} data-typography="heading">{title}</p>
      <div className="mb-2.5 h-px" style={{ backgroundColor: `${accent}28` }} />
      <div className="space-y-1.5">{children}</div>
    </div>
  );
}

function Row({ label, value, compact = false }) {
  if (!value) return null;
  return (
    <div className="flex items-start text-[11px] leading-relaxed">
      <div className={`flex-shrink-0 pr-1.5 font-semibold text-slate-600 ${compact ? "w-[86px]" : "w-[108px]"}`}>
        {label}
      </div>
      <div className="w-3 text-center text-slate-400">:</div>
      <div className="flex-1 break-words text-slate-800">{value}</div>
    </div>
  );
}

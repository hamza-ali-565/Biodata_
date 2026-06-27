import { createTypographyStyles, getPrimaryHeading } from "../templateTypography";
import { AboutMeSection } from "../templateAboutMe";

export function TemplateNightSky({ data, theme, headingFont, bodyFont }) {
  const { headingStyle, bodyStyle } = createTypographyStyles(headingFont, bodyFont);

  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const accent     = theme?.accent      || "#1e40af";
  const accentSoft = theme?.accentSoft  || "#dbeafe";
  const heading    = theme?.textHeading || "#0f172a";

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
    ["Marital Status", personal?.maritalStatus],
    ["Education",      personal?.bachelors || personal?.education],
    ["Occupation",     personal?.occupation],
  ];

  const familyRows = [
    ["Father",         family?.fatherName],
    ["Father's Occ.",  family?.fatherOccupation],
    ["Mother",         family?.motherName],
    ["Mother's Occ.",  family?.motherOccupation],
    ["Siblings",       family?.siblings],
    ["Family Type",    family?.familyType],
  ];

  return (
    <div
      className="relative mx-auto flex min-h-[800px] w-[600px] flex-col overflow-hidden bg-white shadow-2xl"
      style={bodyStyle}
    >
      {/* Dark star-field hero header */}
      <div
        className="relative flex items-center gap-5 px-7 py-7"
        style={{
          background: [
            `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.14) 1px, transparent 0)`,
            `linear-gradient(135deg, #0f172a 0%, ${heading} 100%)`,
          ].join(", "),
          backgroundSize: "20px 20px, 100% 100%",
        }}
      >
        {/* Hexagonal photo */}
        <div className="flex-shrink-0">
          <div
            className="h-[138px] w-[120px] overflow-hidden bg-slate-700"
            style={{
              clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
            }}
          >
            {photoDataUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={photoDataUrl} alt={personal?.name || "Profile"}
                   className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center
                              text-[9px] uppercase tracking-wider text-slate-400">
                Photo
              </div>
            )}
          </div>
        </div>

        {/* Name block */}
        <div className="min-w-0 flex-1">
          <div
            className="text-[27px] font-bold leading-tight text-white"
            style={headingStyle}
            data-typography="heading"
          >
            {getPrimaryHeading(personal)}
          </div>
          <div className="mt-1.5 flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
            {personal?.occupation && (
              <span className="font-medium text-slate-300">{personal.occupation}</span>
            )}
            {personal?.placeOfBirth && (
              <>
                <span className="text-slate-600">·</span>
                <span>{personal.placeOfBirth}</span>
              </>
            )}
          </div>
          {/* Accent bar */}
          <div className="mt-3 h-[3px] w-[48px] rounded-full"
               style={{ backgroundColor: accent }} />
        </div>
      </div>

      {/* Accent divider */}
      <div className="h-[3px] w-full" style={{ backgroundColor: accent }} />

      {/* Two-column body */}
      <div className="flex flex-1">

        {/* Left — Personal */}
        <div className="flex-1 px-6 py-5">
          <NightSkySection title="Personal Details" accent={accent} headingStyle={headingStyle}>
            {personalRows.map(([label, value]) => (
              <Row key={label} label={label} value={value} />
            ))}
            {personal?.customFields?.map((f) =>
              f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} /> : null
            )}
          </NightSkySection>
        </div>

        {/* Vertical separator */}
        <div className="my-5 w-px self-stretch"
             style={{ backgroundColor: `${accent}18` }} />

        {/* Right — Family */}
        <div className="w-[210px] flex-shrink-0 px-5 py-5">
          <NightSkySection title="Family Details" accent={accent} headingStyle={headingStyle}>
            {familyRows.map(([label, value]) => (
              <Row key={label} label={label} value={value} compact />
            ))}
            {family?.customFields?.map((f) =>
              f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} compact /> : null
            )}
          </NightSkySection>
        </div>
      </div>

      {/* Contact chips */}
      <div className="border-t px-6 py-4" style={{ borderColor: `${accent}18` }}>
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em]"
           style={{ color: accent }}
           data-typography="heading">
          Contact
        </p>
        <div className="flex flex-wrap gap-2">
          {contact?.contactNumber && (
            <ContactChip icon="📞" value={contact.contactNumber}
                         accent={accent} soft={accentSoft} />
          )}
          {contact?.email && (
            <ContactChip icon="✉" value={contact.email}
                         accent={accent} soft={accentSoft} />
          )}
          {contact?.address && (
            <ContactChip icon="📍" value={contact.address}
                         accent={accent} soft={accentSoft} />
          )}
          {contact?.customFields?.map((f) =>
            f?.value ? (
              <ContactChip key={f.id || f.label} icon="·"
                           value={`${f.label}: ${f.value}`}
                           accent={accent} soft={accentSoft} />
            ) : null
          )}
        </div>
      </div>

      {/* About Me */}
      {personal?.aboutMe?.trim() && (
        <div className="border-t px-6 py-4" style={{ borderColor: `${accent}18` }}>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.15em]"
             style={{ ...headingStyle, color: accent }} data-typography="heading">About Me</p>
          <p className="text-[11px] leading-relaxed text-slate-700 whitespace-pre-wrap break-words">{personal.aboutMe}</p>
        </div>
      )}

    </div>
  );
}

function NightSkySection({ title, accent, headingStyle, children }) {
  return (
    <div>
      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em]"
         style={{ ...headingStyle, color: accent }}
         data-typography="heading">
        {title}
      </p>
      <div className="mb-3 h-px" style={{ backgroundColor: `${accent}28` }} />
      <div className="space-y-1.5">{children}</div>
    </div>
  );
}

function Row({ label, value, compact = false }) {
  if (!value) return null;
  return (
    <div className="flex items-start text-[11px] leading-relaxed">
      <div className={`flex-shrink-0 pr-1.5 font-semibold text-slate-600
                       ${compact ? "w-[86px]" : "w-[108px]"}`}>
        {label}
      </div>
      <div className="w-3 text-center text-slate-400">:</div>
      <div className="flex-1 break-words text-slate-800">{value}</div>
    </div>
  );
}

function ContactChip({ icon, value, accent, soft }) {
  return (
    <div
      className="flex items-center gap-1.5 rounded-full px-3 py-1 text-[10.5px] font-medium"
      style={{ backgroundColor: soft, color: accent }}
    >
      <span>{icon}</span>
      <span>{value}</span>
    </div>
  );
}

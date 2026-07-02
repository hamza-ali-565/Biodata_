import { createTypographyStyles, getPrimaryHeading } from "../templateTypography";
import { AboutMeSection } from "../templateAboutMe";

const NRI_COUNTRIES = {
  "india": "🇮🇳", "canada": "🇨🇦", "uk": "🇬🇧", "united kingdom": "🇬🇧",
  "usa": "🇺🇸", "united states": "🇺🇸", "uae": "🇦🇪", "dubai": "🇦🇪",
  "australia": "🇦🇺", "singapore": "🇸🇬", "new zealand": "🇳🇿", "nz": "🇳🇿",
  "germany": "🇩🇪", "netherlands": "🇳🇱",
};

function getCountryEmoji(country) {
  if (!country) return "";
  return NRI_COUNTRIES[country.toLowerCase().trim()] || "";
}

const NRI_LABELS = ["country of residence", "visa", "open to", "income", "immigration"];

function findNRIField(customFields, keyword) {
  return customFields?.find((f) => f?.label?.toLowerCase().includes(keyword));
}

export function TemplateVivahVarta({ data, theme, headingFont, bodyFont }) {
  const { headingStyle, bodyStyle } = createTypographyStyles(headingFont, bodyFont);
  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const navy    = theme?.accent      || "#1E2D4A";
  const gold    = theme?.accentSoft  ? theme.accentSoft : "#C9A84C";
  const heading = theme?.textHeading || "#1E2D4A";

  const personalCustom = personal?.customFields || [];
  const nriFields = personalCustom.filter((f) =>
    f?.value && NRI_LABELS.some((k) => f?.label?.toLowerCase().includes(k))
  );
  const nonNriCustom = personalCustom.filter((f) =>
    f?.value && !NRI_LABELS.some((k) => f?.label?.toLowerCase().includes(k))
  );

  const countryField = findNRIField(personalCustom, "country");
  const countryValue = countryField?.value;
  const countryEmoji = getCountryEmoji(countryValue);

  const hasNriSection = nriFields.length > 0;

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
    ["Nationality",    personal?.nationality],
  ];

  const familyRows = [
    ["Father's Name",  family?.fatherName],
    ["Father's Occ.",  family?.fatherOccupation],
    ["Mother's Name",  family?.motherName],
    ["Mother's Occ.",  family?.motherOccupation],
    ["Siblings",       family?.siblings],
    ["Family Type",    family?.familyType],
    ["Based In",       family?.nativePlace],
  ];

  const educationRows = [
    ["Education",      personal?.bachelors || personal?.education],
    ["Masters",        personal?.masters],
    ["Occupation",     personal?.occupation],
    ["Income",         personal?.income],
  ];

  const contactRows = [
    ["Contact Person", contact?.contactPerson],
    ["Phone",          contact?.contactNumber],
    ["WhatsApp (IN)",  contact?.whatsappIndia || contact?.contactNumber],
    ["WhatsApp (Abr)", contact?.whatsappAbroad],
    ["Email",          contact?.email],
    ["Address",        contact?.address],
  ];

  return (
    <div
      data-preview-root="true"
      className="relative mx-auto w-[600px] overflow-hidden"
      style={{ backgroundColor: "#FFFFFF", color: "#1A1A1A", minHeight: "800px", ...bodyStyle }}
    >
      {/* Header */}
      <div className="relative px-7 pt-6 pb-4" style={{ borderBottom: `1px solid ${gold}` }}>
        {/* Globe watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 0, opacity: 0.03 }}>
          <GlobeSVG navy={navy} />
        </div>

        <div className="relative flex items-start justify-between gap-4" style={{ zIndex: 1 }}>
          {/* Left: name + details */}
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="text-[28px] font-bold leading-tight"
                   style={{ ...headingStyle, color: heading }} data-typography="heading">
                {getPrimaryHeading(personal)}
              </div>
              {countryValue && (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: gold, color: navy, whiteSpace: "nowrap" }}>
                  Based in: {countryEmoji} {countryValue}
                </span>
              )}
            </div>
            <div className="text-[11px] mt-1" style={{ color: "#555" }}>
              {[personal?.caste || personal?.religion, personal?.dateOfBirth, personal?.placeOfBirth].filter(Boolean).join(" · ")}
            </div>
          </div>

          {/* Right: rounded rectangle photo */}
          <div className="flex-shrink-0"
               style={{
                 width: 100, height: 120,
                 borderRadius: 8,
                 border: `2px solid ${navy}`,
                 boxShadow: "0 2px 8px rgba(30,45,74,0.15)",
                 overflow: "hidden",
                 backgroundColor: `${navy}18`,
                 display: "flex", alignItems: "center", justifyContent: "center",
               }}>
            {photoDataUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={photoDataUrl} alt={personal?.name || "Profile"} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <span style={{ fontSize: "9px", color: navy, textTransform: "uppercase", letterSpacing: "0.05em" }}>Photo</span>
            )}
          </div>
        </div>

        {/* Gold rule below header */}
        <div className="mt-3 h-px" style={{ backgroundColor: gold }} />
      </div>

      <div className="px-7 py-4">
        {/* NRI Details sub-section */}
        {hasNriSection && (
          <div className="rounded mb-4 px-3 py-3" style={{ backgroundColor: `${gold}14` }}>
            <div className="text-[10.5px] font-bold uppercase tracking-[0.14em] mb-2"
                 style={{ ...headingStyle, color: navy }} data-typography="heading">
              NRI Details
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 12px" }}>
              {nriFields.map((f) => (
                <div key={f.id || f.label} className="flex items-start text-[11.5px]">
                  <span className="font-semibold flex-shrink-0" style={{ color: navy, opacity: 0.75, minWidth: "90px", fontSize: "10.5px" }}>{f.label}</span>
                  <span className="mx-1 opacity-40">:</span>
                  <span className="flex-1 break-words">{f.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Personal + Family two-column */}
        <div className="flex gap-5">
          <div style={{ flex: "0 0 55%" }}>
            <SectionTitle navy={navy} gold={gold} headingStyle={headingStyle}>Personal Details</SectionTitle>
            <div className="mt-2 space-y-1">
              {personalRows.map(([l, v]) => <Row key={l} label={l} value={v} navy={navy} />)}
              {nonNriCustom.map((f) =>
                f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} navy={navy} /> : null
              )}
            </div>
          </div>

          <div style={{ flex: "0 0 42%" }}>
            <SectionTitle navy={navy} gold={gold} headingStyle={headingStyle}>Family Details</SectionTitle>
            <div className="mt-2 space-y-1">
              {familyRows.map(([l, v]) => <Row key={l} label={l} value={v} navy={navy} />)}
              {family?.customFields?.map((f) =>
                f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} navy={navy} /> : null
              )}
            </div>
          </div>
        </div>

        <GoldDivider gold={gold} className="my-4" />

        {/* Education & Career */}
        <div>
          <SectionTitle navy={navy} gold={gold} headingStyle={headingStyle}>Education & Career</SectionTitle>
          <div className="flex gap-5 mt-2">
            <div className="flex-1 space-y-1">
              {educationRows.slice(0, 2).map(([l, v]) => <Row key={l} label={l} value={v} navy={navy} />)}
            </div>
            <div className="flex-1 space-y-1">
              {educationRows.slice(2).map(([l, v]) => <Row key={l} label={l} value={v} navy={navy} />)}
            </div>
          </div>
        </div>

        <GoldDivider gold={gold} className="my-4" />

        {/* Contact */}
        <div className="rounded px-3 py-3" style={{ backgroundColor: `${navy}0F` }}>
          <SectionTitle navy={navy} gold={gold} headingStyle={headingStyle}>Contact Details</SectionTitle>
          <div className="flex gap-5 mt-2">
            <div className="flex-1 space-y-1">
              {contactRows.slice(0, 3).map(([l, v]) => <Row key={l} label={l} value={v} navy={navy} />)}
            </div>
            <div className="flex-1 space-y-1">
              {contactRows.slice(3).map(([l, v]) => <Row key={l} label={l} value={v} navy={navy} />)}
            </div>
          </div>
          {contact?.customFields?.map((f) =>
            f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} navy={navy} /> : null
          )}
        </div>

        <AboutMeSection text={personal?.aboutMe} accent={navy} headingStyle={headingStyle} className="mt-4" />

      </div>
    </div>
  );
}

function SectionTitle({ navy, gold, headingStyle, children }) {
  return (
    <div className="flex items-center gap-2">
      <div className="text-[11px] font-bold uppercase tracking-[0.13em]"
           style={{ ...headingStyle, color: navy }} data-typography="heading">
        {children}
      </div>
      <span style={{ color: gold, fontSize: "10px" }}>◆</span>
      <div className="h-px flex-1" style={{ backgroundColor: `${navy}25` }} />
    </div>
  );
}

function Row({ label, value, navy }) {
  if (!value) return null;
  return (
    <div className="flex items-start text-[11.5px] leading-relaxed">
      <div className="flex-shrink-0 font-semibold" style={{ color: navy, opacity: 0.75, width: "110px", fontSize: "10.5px" }}>{label}</div>
      <div className="w-3 text-center opacity-40">:</div>
      <div className="flex-1 break-words">{value}</div>
    </div>
  );
}

function GoldDivider({ gold, className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="h-px flex-1" style={{ backgroundColor: `${gold}55` }} />
      <span style={{ color: gold, fontSize: "8px" }}>◆</span>
      <div className="h-px flex-1" style={{ backgroundColor: `${gold}55` }} />
    </div>
  );
}

function GlobeSVG({ navy }) {
  return (
    <svg width="280" height="140" viewBox="0 0 280 140" fill="none" aria-hidden="true">
      {/* Simplified continent silhouettes */}
      {/* North America */}
      <path d="M30 40 L55 35 L70 45 L65 70 L50 80 L35 75 L25 60 Z" fill={navy} />
      {/* South America */}
      <path d="M55 85 L70 82 L75 100 L65 120 L50 118 L45 100 Z" fill={navy} />
      {/* Europe */}
      <path d="M115 30 L135 28 L140 42 L130 50 L115 48 L110 38 Z" fill={navy} />
      {/* Africa */}
      <path d="M118 55 L140 52 L148 80 L140 110 L120 112 L110 85 L112 60 Z" fill={navy} />
      {/* Asia */}
      <path d="M148 25 L210 22 L220 45 L215 65 L190 70 L160 68 L148 50 Z" fill={navy} />
      {/* Australia */}
      <path d="M195 90 L225 88 L232 108 L218 118 L198 115 L190 100 Z" fill={navy} />
    </svg>
  );
}

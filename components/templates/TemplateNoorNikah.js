import { createTypographyStyles, getPrimaryHeading } from "../templateTypography";
import { AboutMeSection } from "../templateAboutMe";

export function TemplateNoorNikah({ data, theme, headingFont, bodyFont }) {
  const { headingStyle, bodyStyle } = createTypographyStyles(headingFont, bodyFont);
  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const hasPhoto = !!photoDataUrl;
  const teal    = theme?.accent      || "#0F4C5C";
  const gold    = theme?.accentSoft  ? theme.accentSoft : "#C9A84C";
  const heading = theme?.textHeading || "#0F4C5C";
  const bg      = "#FBF5E6";

  const personalRows = [
    ["Date of Birth",  personal?.dateOfBirth],
    ["Time of Birth",  personal?.timeOfBirth],
    ["Place of Birth", personal?.placeOfBirth],
    ["Height",         personal?.height],
    ["Complexion",     personal?.complexion],
    ["Blood Group",    personal?.bloodGroup],
    ["Religion",       personal?.religion],
    ["Sect",           personal?.sect || personal?.caste],
    ["Biradari",       personal?.biradari || personal?.gotra],
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
    ["Native Place",   family?.nativePlace],
  ];

  const educationRows = [
    ["Education",   personal?.bachelors || personal?.education],
    ["Masters",     personal?.masters],
    ["Occupation",  personal?.occupation],
    ["Income",      personal?.income],
  ];

  const contactRows = [
    ["Contact Person", contact?.contactPerson],
    ["Phone",          contact?.contactNumber],
    ["Email",          contact?.email],
    ["Address",        contact?.address],
  ];

  return (
    <div
      data-preview-root="true"
      className="relative mx-auto w-[600px] overflow-hidden"
      style={{ backgroundColor: bg, color: "#1A1A1A", minHeight: "800px", ...bodyStyle }}
    >
      {/* Outer border */}
      <div className="absolute inset-[8px] pointer-events-none rounded" style={{ border: `1.5px solid ${teal}55`, zIndex: 2 }} />

      <div className="relative px-8 py-6" style={{ zIndex: 1 }}>
        {/* Header */}
        <div className="relative">
          {/* 8-star watermark behind header */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 0 }}>
            <IslamicStar size={200} color={teal} opacity={0.04} filled />
          </div>

          <div className="relative flex items-start gap-4" style={{ zIndex: 1 }}>
            {/* Left: Bismillah + Name */}
            <div className="flex-1">
              <p className="text-[20px] text-center mb-1"
                 style={{ fontFamily: "'Noto Nastaliq Urdu', 'Scheherazade New', serif", color: teal, lineHeight: 1.8 }}>
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
              </p>
              <div className={hasPhoto ? "text-[26px] font-bold text-center mt-1" : "text-[30px] font-bold text-center mt-1"}
                   style={{ ...headingStyle, color: heading }} data-typography="heading">
                {getPrimaryHeading(personal)}
              </div>
              <div className="text-[11px] text-center mt-1" style={{ color: teal, opacity: 0.75 }}>
                {[personal?.sect || personal?.caste, personal?.biradari || personal?.gotra, personal?.dateOfBirth].filter(Boolean).join(" · ")}
              </div>
            </div>

            {/* Right: Hexagonal photo */}
            {hasPhoto && (
              <div className="flex-shrink-0">
                <HexPhoto photoDataUrl={photoDataUrl} teal={teal} name={personal?.name} />
              </div>
            )}
          </div>
        </div>

        <StarDivider teal={teal} className="mt-4 mb-4" />

        {/* Personal + Family two-column */}
        <div className="flex gap-5">
          <div style={{ flex: "0 0 55%" }}>
            <BilingualSectionTitle urdu="ذاتی معلومات" en="Personal Details" teal={teal} headingStyle={headingStyle} />
            <StarDivider teal={teal} small className="my-1" />
            <div className="space-y-1 mt-2">
              {personalRows.map(([l, v]) => <Row key={l} label={l} value={v} accent={teal} />)}
              {personal?.customFields?.map((f) =>
                f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} accent={teal} /> : null
              )}
            </div>
          </div>

          <div style={{ flex: "0 0 42%" }}>
            <BilingualSectionTitle urdu="خاندانی تفصیل" en="Family Details" teal={teal} headingStyle={headingStyle} />
            <StarDivider teal={teal} small className="my-1" />
            <div className="space-y-1 mt-2">
              {familyRows.map(([l, v]) => <Row key={l} label={l} value={v} accent={teal} />)}
              {family?.customFields?.map((f) =>
                f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} accent={teal} /> : null
              )}
            </div>
          </div>
        </div>

        <StarDivider teal={teal} className="mt-4 mb-3" />

        {/* Education & Career */}
        <div>
          <BilingualSectionTitle urdu="تعلیم و پیشہ" en="Education & Career" teal={teal} headingStyle={headingStyle} />
          <StarDivider teal={teal} small className="my-1" />
          <div className="flex gap-5 mt-2">
            <div className="flex-1 space-y-1">
              {educationRows.slice(0, 2).map(([l, v]) => <Row key={l} label={l} value={v} accent={teal} />)}
            </div>
            <div className="flex-1 space-y-1">
              {educationRows.slice(2).map(([l, v]) => <Row key={l} label={l} value={v} accent={teal} />)}
            </div>
          </div>
        </div>

        <StarDivider teal={teal} className="mt-4 mb-3" />

        {/* Contact */}
        <div className="rounded px-3 py-3" style={{ backgroundColor: `${teal}0D` }}>
          <BilingualSectionTitle urdu="رابطہ" en="Contact Details" teal={teal} headingStyle={headingStyle} />
          <div className="flex gap-5 mt-2">
            <div className="flex-1 space-y-1">
              {contactRows.slice(0, 2).map(([l, v]) => <Row key={l} label={l} value={v} accent={teal} />)}
            </div>
            <div className="flex-1 space-y-1">
              {contactRows.slice(2).map(([l, v]) => <Row key={l} label={l} value={v} accent={teal} />)}
            </div>
          </div>
          {contact?.customFields?.map((f) =>
            f?.value ? <Row key={f.id || f.label} label={f.label} value={f.value} accent={teal} /> : null
          )}
        </div>

        <AboutMeSection text={personal?.aboutMe} accent={teal} headingStyle={headingStyle} className="mt-4" />
      </div>
    </div>
  );
}

function BilingualSectionTitle({ urdu, en, teal, headingStyle }) {
  return (
    <div>
      <span className="text-[12px] font-semibold" dir="rtl"
            style={{ fontFamily: "'Noto Nastaliq Urdu', 'Scheherazade New', serif", color: teal }}>
        {urdu}
      </span>
      <span className="mx-1 text-[11px]" style={{ color: teal, opacity: 0.5 }}>/</span>
      <span className="text-[11px] font-bold uppercase tracking-[0.12em]"
            style={{ ...headingStyle, color: teal }} data-typography="heading">
        {en}
      </span>
    </div>
  );
}

function Row({ label, value, accent }) {
  if (!value) return null;
  return (
    <div className="flex items-start text-[11.5px] leading-relaxed">
      <div className="w-[108px] flex-shrink-0 font-semibold" style={{ color: accent, opacity: 0.85, fontSize: "10.5px" }}>{label}</div>
      <div className="w-3 text-center opacity-50">:</div>
      <div className="flex-1 break-words">{value}</div>
    </div>
  );
}

function StarDivider({ teal, small, className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="h-px flex-1" style={{ backgroundColor: `${teal}40` }} />
      <IslamicStar size={small ? 12 : 16} color={teal} opacity={1} />
      <div className="h-px flex-1" style={{ backgroundColor: `${teal}40` }} />
    </div>
  );
}

function IslamicStar({ size, color, opacity, filled }) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.42;

  const pts1 = Array.from({ length: 4 }, (_, i) => {
    const a = (i * 90 - 90) * Math.PI / 180;
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  }).join(" ");

  const pts2 = Array.from({ length: 4 }, (_, i) => {
    const a = (i * 90 - 45) * Math.PI / 180;
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  }).join(" ");

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true" style={{ opacity }}>
      <polygon points={pts1} fill={filled ? color : "none"} stroke={color} strokeWidth={size * 0.08} fillOpacity={filled ? 1 : 0} />
      <polygon points={pts2} fill={filled ? color : "none"} stroke={color} strokeWidth={size * 0.08} fillOpacity={filled ? 1 : 0} />
    </svg>
  );
}

function HexPhoto({ photoDataUrl, teal, name }) {
  const size = 130;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute inset-0" aria-hidden="true">
        <polygon
          points={`${size/2},0 ${size},${size*0.25} ${size},${size*0.75} ${size/2},${size} 0,${size*0.75} 0,${size*0.25}`}
          fill="none" stroke={teal} strokeWidth="2"
        />
      </svg>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photoDataUrl}
        alt={name || "Profile"}
        style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover",
          clipPath: `polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)`,
        }}
      />
    </div>
  );
}

import { createTypographyStyles, getPrimaryHeading } from "../templateTypography";

export function TemplateGreenBorderArt({ data, theme, headingFont, bodyFont }) {
  const { headingStyle, bodyStyle } = createTypographyStyles(headingFont, bodyFont);

  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const accent = theme?.accent || "#4d6225";
  const heading = theme?.textHeading || "#1e3a22";

  const personalRows = [
    ["Name", personal?.name],
    ["Date of Birth", personal?.dateOfBirth],
    ["Time of Birth", personal?.timeOfBirth],
    ["Place of Birth", personal?.placeOfBirth],
    ["Religion", personal?.religion],
    ["Caste", personal?.caste],
    ["Height", personal?.height],
    ["Blood Group", personal?.bloodGroup],
    ["Complexion", personal?.complexion],
    ["Education", personal?.education || personal?.bachelors],
    ["Occupation", personal?.occupation],
    ["Rashi", personal?.rashi],
    ["Nakshatra", personal?.nakshatra],
    ["Gotra", personal?.gotra],
    ["Manglik", personal?.manglik],
    ["Marital Status", personal?.maritalStatus],
    ["Nationality", personal?.nationality],
  ];

  const familyRows = [
    ["Father's Name", family?.fatherName],
    ["Mother's Name", family?.motherName],
    ["Brothers", family?.brothers],
    ["Sisters", family?.sisters],
    ["Father's Occupation", family?.fatherOccupation],
    ["Mother's Occupation", family?.motherOccupation],
    ["Siblings", family?.siblings],
  ];

  const contactRows = [
    ["Contact Person", contact?.contactPerson],
    ["Phone No.", contact?.contactNumber],
    ["Email", contact?.email],
    ["Address", contact?.address],
  ];

  const hasPersonal = personalRows.some(([, v]) => v) || personal?.customFields?.some((f) => f?.value);
  const hasFamily = familyRows.some(([, v]) => v) || family?.customFields?.some((f) => f?.value);
  const hasContact = contactRows.some(([, v]) => v) || contact?.customFields?.some((f) => f?.value);

  return (
    <div
      className="relative mx-auto flex min-h-[800px] w-[600px] flex-col overflow-hidden bg-[#f8f8f4] p-6 text-[#1f1f1f] shadow-2xl"
      style={bodyStyle}
    >
      <div className="pointer-events-none absolute inset-[8px] border-2" style={{ borderColor: `${accent}cc` }} />
      <div className="pointer-events-none absolute inset-[14px] border" style={{ borderColor: `${accent}88` }} />

      <CornerLeaf position="top-left" color={accent} />
      <CornerLeaf position="top-right" color={accent} />
      <CornerLeaf position="bottom-left" color={accent} />
      <CornerLeaf position="bottom-right" color={accent} />
      <SideVine side="left" color={accent} />
      <SideVine side="right" color={accent} />

      <div className="relative z-10 px-8 pt-4">
        <div className="text-center text-[46px] font-bold uppercase tracking-wide" style={{ ...headingStyle, color: heading }} data-typography="heading">
          {getPrimaryHeading(personal)}
        </div>
        <OrnamentLine color={accent} className="mt-1" />

        <div className="mt-4 grid grid-cols-[1.15fr_0.85fr] gap-6">
          <div>
            {hasPersonal ? (
              <Section title="Personal Details" color={heading} lineColor={accent} headingStyle={headingStyle}>
                {personalRows.map(([label, value]) => (
                  <Row key={label} label={label} value={value} bodyStyle={bodyStyle} />
                ))}
                {personal?.customFields?.map((field) =>
                  field?.value ? (
                    <Row key={field.id || field.label} label={field.label} value={field.value} bodyStyle={bodyStyle} />
                  ) : null
                )}
              </Section>
            ) : null}
          </div>

          <div className="pt-2">
            <div className="mx-auto h-[270px] w-[202px] overflow-hidden rounded-[16px] border-2 bg-[#e5e5df]" style={{ borderColor: `${accent}cc` }}>
              {photoDataUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={photoDataUrl}
                  alt={personal?.name || "Profile"}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-[10px] uppercase tracking-wider text-[#7a7a70]">
                  Photo
                </div>
              )}
            </div>
          </div>
        </div>

        {hasFamily ? (
          <Section title="Family Details" color={heading} lineColor={accent} className="mt-5" headingStyle={headingStyle}>
            {familyRows.map(([label, value]) => (
              <Row key={label} label={label} value={value} bodyStyle={bodyStyle} />
            ))}
            {family?.customFields?.map((field) =>
              field?.value ? (
                <Row key={field.id || field.label} label={field.label} value={field.value} bodyStyle={bodyStyle} />
              ) : null
            )}
          </Section>
        ) : null}

        {hasContact ? (
          <Section title="Contact Details" color={heading} lineColor={accent} className="mt-5" headingStyle={headingStyle}>
            {contactRows.map(([label, value]) => (
              <Row key={label} label={label} value={value} bodyStyle={bodyStyle} />
            ))}
            {contact?.customFields?.map((field) =>
              field?.value ? (
                <Row key={field.id || field.label} label={field.label} value={field.value} bodyStyle={bodyStyle} />
              ) : null
            )}
          </Section>
        ) : null}
      </div>
    </div>
  );
}

function Section({ title, color, lineColor, className = "", children, headingStyle }) {
  return (
    <section className={className}>
      <div className="text-[17px] font-bold uppercase tracking-wide" style={{ ...headingStyle, color }} data-typography="heading">
        {title}
      </div>
      <OrnamentLine color={lineColor} short className="mt-1" />
      <div className="mt-2.5 space-y-1.5">{children}</div>
    </section>
  );
}

function Row({ label, value, bodyStyle }) {
  if (!value) return null;
  return (
    <div className="flex items-start text-[13px] leading-relaxed" style={bodyStyle} data-typography="body">
      <div className="w-[118px] pr-2 font-bold text-[#1f1f1f]">{label}</div>
      <div className="w-4 text-center font-bold">:</div>
      <div className="flex-1 break-words text-[#282828]">{value}</div>
    </div>
  );
}

function OrnamentLine({ color, className = "", short = false }) {
  return (
    <div className={`flex ${short ? "max-w-[150px]" : "mx-auto max-w-[220px]"} items-center gap-2 ${className}`}>
      <div className="h-px flex-1" style={{ backgroundColor: `${color}88` }} />
      <svg width="22" height="10" viewBox="0 0 44 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M1 10H15" stroke={color} strokeWidth="1.5" />
        <path d="M29 10H43" stroke={color} strokeWidth="1.5" />
        <path d="M16 10C19 8 20 6 22 4C24 6 25 8 28 10C25 12 24 14 22 16C20 14 19 12 16 10Z" stroke={color} strokeWidth="1.5" />
        <circle cx="22" cy="10" r="1.6" fill={color} />
      </svg>
      <div className="h-px flex-1" style={{ backgroundColor: `${color}88` }} />
    </div>
  );
}

function CornerLeaf({ position, color }) {
  const positions = {
    "top-left": "top-[9px] left-[9px] rotate-0",
    "top-right": "top-[9px] right-[9px] rotate-90",
    "bottom-right": "bottom-[9px] right-[9px] rotate-180",
    "bottom-left": "bottom-[9px] left-[9px] -rotate-90",
  };

  return (
    <div className={`pointer-events-none absolute z-20 h-[80px] w-[80px] ${positions[position]}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M6 10C24 8 42 18 50 34C58 18 76 8 94 10" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <path d="M8 96C8 70 16 44 34 26" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
        <path d="M14 78C22 74 28 66 30 58" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M18 62C26 58 32 50 34 42" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M24 47C31 44 36 37 38 31" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <circle cx="54" cy="26" r="3" fill={color} />
      </svg>
    </div>
  );
}

function SideVine({ side, color }) {
  return (
    <div className={`pointer-events-none absolute top-[250px] ${side === "left" ? "left-[12px]" : "right-[12px] scale-x-[-1]"}`}>
      <svg width="24" height="260" viewBox="0 0 24 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 4C4 40 4 86 12 122C20 158 20 208 12 252" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M11 60C4 64 3 72 8 77" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M13 102C20 106 21 114 16 119" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M11 170C4 174 3 182 8 187" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </div>
  );
}

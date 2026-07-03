import { AboutMeSection } from "../templateAboutMe";

export function TemplateBeautifulGoldenBorder({ data, theme, headingFont, bodyFont }) {
  const headingStyle = { fontFamily: headingFont || "inherit" };
  const bodyStyle = { fontFamily: bodyFont || "inherit" };

  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const accent = theme?.accent || "#a8732a";
  const textHeading = theme?.textHeading || "#5f381c";

  const personalRows = [
    ["Name", personal?.name],
    ["Date of Birth", personal?.dateOfBirth],
    ["Time of Birth", personal?.timeOfBirth],
    ["Place of Birth", personal?.placeOfBirth],
    ["Rashi", personal?.rashi],
    ["Nakshatra", personal?.nakshatra],
    ["Gotra", personal?.gotra],
    ["Manglik", personal?.manglik],
    ["Religion", personal?.religion],
    ["Caste", personal?.caste],
    ["Height", personal?.height],
    ["Complexion", personal?.complexion],
    ["Education", personal?.bachelors],
    ["Occupation", personal?.occupation],
    ["Marital Status", personal?.maritalStatus],
    ["Nationality", personal?.nationality],
  ];

  const familyRows = [
    ["Father's Name", personal?.fatherName || family?.fatherName],
    ["Mother's Name", personal?.motherName || family?.motherName],
    ["Brothers", personal?.brothers || family?.brothers],
    ["Sisters", personal?.sisters || family?.sisters],
  ];

  const contactRows = [
    ["Phone No.", contact?.contactNumber],
    ["Email", contact?.email],
    ["Address", contact?.address],
  ];

  return (
    <div
      className="relative mx-auto flex min-h-[800px] w-[600px] flex-col overflow-hidden bg-[#f9f5ee] p-6 text-[#2f2a25] shadow-2xl"
      style={bodyStyle}
    >
      <div
        className="pointer-events-none absolute inset-[10px] border-4"
        style={{ borderColor: accent }}
      />
      <div
        className="pointer-events-none absolute inset-[16px] border"
        style={{ borderColor: `${accent}99` }}
      />

      <CornerOrnament position="top-left" color={accent} />
      <CornerOrnament position="top-right" color={accent} />
      <CornerOrnament position="bottom-left" color={accent} />
      <CornerOrnament position="bottom-right" color={accent} />

      <div className="relative z-10 mt-2 px-6">
        {photoDataUrl ? (
          <div className="grid grid-cols-[1.45fr_0.95fr] gap-6">
            <div className="pt-5">
              <OrnamentDivider color={accent} compact />
              <OrnamentDivider color={accent} className="mt-3" />
            </div>

            <div>
              <div
                className="mx-auto h-[252px] w-[192px] overflow-hidden rounded-[20px] border-2 bg-[#e8e1d7]"
                style={{ borderColor: "#8c5e36" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photoDataUrl}
                  alt={personal?.name || "Profile"}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="pt-5">
            <OrnamentDivider color={accent} />
            <OrnamentDivider color={accent} className="mt-3" />
          </div>
        )}

        <TemplateSection title="Personal Details" color={textHeading} lineColor={accent} className="mt-4">
          {personalRows.map(([label, value]) => (
            <Row key={label} label={label} value={value} />
          ))}
          {personal?.customFields?.map((field) =>
            field?.value ? (
              <Row key={field.id || field.label} label={field.label} value={field.value} />
            ) : null
          )}
        </TemplateSection>

        <TemplateSection title="Family Details" color={textHeading} lineColor={accent} className="mt-6">
          {familyRows.map(([label, value]) => (
            <Row key={label} label={label} value={value} />
          ))}
          {family?.fatherOccupation ? <Row label="Father's Occupation" value={family.fatherOccupation} /> : null}
          {family?.motherOccupation ? <Row label="Mother's Occupation" value={family.motherOccupation} /> : null}
          {family?.siblings ? <Row label="Siblings" value={family.siblings} /> : null}
          {family?.customFields?.map((field) =>
            field?.value ? (
              <Row key={field.id || field.label} label={field.label} value={field.value} />
            ) : null
          )}
        </TemplateSection>

        <TemplateSection title="Contact Details" color={textHeading} lineColor={accent} className="mt-6">
          {contactRows.map(([label, value], index) => (
            <Row
              key={label}
              label={label}
              value={value}
              icon={index === 0 ? "phone" : index === 1 ? "email" : "location"}
            />
          ))}
          {contact?.contactPerson ? <Row label="Contact Person" value={contact.contactPerson} /> : null}
          {contact?.customFields?.map((field) =>
            field?.value ? (
              <Row key={field.id || field.label} label={field.label} value={field.value} />
            ) : null
          )}
        </TemplateSection>

        <AboutMeSection
          text={personal?.aboutMe}
          accent={accent}
          headingStyle={{ fontFamily: headingFont || "inherit" }}
          className="mt-6"
        />
      </div>
    </div>
  );
}

function TemplateSection({ title, color, lineColor, className = "", children }) {
  return (
    <section className={className}>
      <div
        className="text-[17px] font-bold uppercase tracking-wide"
        style={{ color }}
      >
        {title}
      </div>
      <div className="mb-3 mt-1 flex max-w-[190px] items-center gap-2">
        <div className="h-px flex-1" style={{ backgroundColor: `${lineColor}80` }} />
        <svg
          width="22"
          height="10"
          viewBox="0 0 44 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M1 10H15" stroke={lineColor} strokeWidth="1.5" />
          <path d="M29 10H43" stroke={lineColor} strokeWidth="1.5" />
          <path d="M16 10C19 8 20 5 22 3C24 5 25 8 28 10C25 12 24 15 22 17C20 15 19 12 16 10Z" stroke={lineColor} strokeWidth="1.5" />
          <circle cx="22" cy="10" r="1.8" fill={lineColor} />
        </svg>
        <div className="h-px flex-1" style={{ backgroundColor: `${lineColor}80` }} />
      </div>
      <div className="space-y-1.5">{children}</div>
    </section>
  );
}

function Row({ label, value, icon }) {
  if (!value) return null;

  return (
    <div className="flex items-start text-[13px] leading-relaxed">
      <div className="flex w-[140px] items-start gap-1.5 pr-2 font-semibold text-[#2a2520]">
        {icon ? (
          <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#8d5f31] text-white">
            <ContactIcon type={icon} />
          </span>
        ) : null}
        <span>{label}</span>
      </div>
      <span className="w-4 text-center font-semibold">:</span>
      <span className="flex-1 break-words text-[#2f2a25]">{value}</span>
    </div>
  );
}

function OrnamentDivider({ color, compact = false, className = "" }) {
  return (
    <div className={`mx-auto flex w-full max-w-[300px] items-center gap-2 ${className}`}>
      <div className="h-px flex-1" style={{ backgroundColor: `${color}88` }} />
      <svg
        width={compact ? "34" : "40"}
        height={compact ? "18" : "20"}
        viewBox="0 0 108 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M54 5C55.5 11 60 14 67 14C66 20 70 23 76 23C73 29 75 34 81 37C75 40 73 45 76 51C70 51 66 54 67 60C60 60 55.5 63 54 69C52.5 63 48 60 41 60C42 54 38 51 32 51C35 45 33 40 27 37C33 34 35 29 32 23C38 23 42 20 41 14C48 14 52.5 11 54 5Z" stroke={color} strokeWidth="2" transform="translate(0 -8)" />
        <circle cx="54" cy="28" r="3" fill={color} />
      </svg>
      <div className="h-px flex-1" style={{ backgroundColor: `${color}88` }} />
    </div>
  );
}

function CornerOrnament({ position, color }) {
  const positions = {
    "top-left": "top-[14px] left-[14px] rotate-0",
    "top-right": "top-[14px] right-[14px] rotate-90",
    "bottom-right": "bottom-[14px] right-[14px] rotate-180",
    "bottom-left": "bottom-[14px] left-[14px] -rotate-90",
  };

  return (
    <div className={`pointer-events-none absolute z-20 h-[64px] w-[64px] ${positions[position]}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M6 6H35C54 6 67 17 67 35V37" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
        <path d="M6 6V35C6 56 17 67 35 67H37" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
        <path d="M15 15H34C46 15 55 22 55 34V36" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M15 15V34C15 47 22 55 34 55H36" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M42 18C48 10 58 10 64 18" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M18 42C10 48 10 58 18 64" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="28" cy="28" r="2.8" fill={color} />
        <circle cx="55" cy="28" r="2.2" fill={color} />
        <circle cx="28" cy="55" r="2.2" fill={color} />
      </svg>
    </div>
  );
}

function ContactIcon({ type }) {
  if (type === "phone") {
    return (
      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7.2 4.5C7.9 3.8 9 3.8 9.7 4.5L11.8 6.6C12.5 7.3 12.5 8.4 11.8 9.1L10.7 10.2C11.3 11.4 12.1 12.4 13.2 13.3C14.1 14.4 15.1 15.2 16.3 15.8L17.4 14.7C18.1 14 19.2 14 19.9 14.7L22 16.8C22.7 17.5 22.7 18.6 22 19.3L20.8 20.5C19.8 21.5 18.3 22 16.9 21.7C13.7 21 10.7 19.2 8.1 16.6C5.5 14 3.7 11 3 7.8C2.7 6.4 3.2 4.9 4.2 3.9L5.4 2.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "email") {
    return (
      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4.5 7L12 12.2L19.5 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21C15.8 16.8 18.5 13.8 18.5 10.4C18.5 6.8 15.6 4 12 4C8.4 4 5.5 6.8 5.5 10.4C5.5 13.8 8.2 16.8 12 21Z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="10.5" r="2.2" fill="currentColor" />
    </svg>
  );
}

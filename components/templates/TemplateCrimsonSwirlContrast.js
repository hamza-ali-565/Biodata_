import { AboutMeSection } from "../templateAboutMe";

export function TemplateCrimsonSwirlContrast({ data, theme, headingFont, bodyFont }) {
  const headingStyle = { fontFamily: headingFont || "inherit" };
  const bodyStyle = { fontFamily: bodyFont || "inherit" };

  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const accent = theme?.accent || "#cc3a36";
  const heading = theme?.textHeading || "#b12625";

  const personalRows = [
    ["Name", personal?.name],
    ["Gender", personal?.gender],
    ["Date of Birth", personal?.dateOfBirth],
    ["Age", personal?.age],
    ["Height", personal?.height],
    ["Weight", personal?.weight],
    ["Complexion", personal?.complexion],
    ["Nationality", personal?.nationality],
    ["Religion", personal?.religion],
    ["Marital Status", personal?.maritalStatus],
    ["Mother Tongue", personal?.motherTongue],
    ["Education", personal?.bachelors],
    ["Occupation", personal?.occupation],
    ["Rashi", personal?.rashi],
    ["Nakshatra", personal?.nakshatra],
    ["Gotra", personal?.gotra],
    ["Manglik", personal?.manglik],
    ["Place of Birth", personal?.placeOfBirth],
    ["Time of Birth", personal?.timeOfBirth],
    ["Contact No.", contact?.contactNumber],
    ["Email", contact?.email],
    ["Address", contact?.address],
  ];

  const familyRows = [
    ["Father", family?.fatherName],
    ["Mother", family?.motherName],
    ["Brothers", family?.brothers],
    ["Sisters", family?.sisters],
    ["Father's Occupation", family?.fatherOccupation],
    ["Mother's Occupation", family?.motherOccupation],
    ["Siblings", family?.siblings],
  ];

  const contactRows = [
    ["Phone", contact?.contactNumber],
    ["Email", contact?.email],
    ["Address", contact?.address],
    ["Contact Person", contact?.contactPerson],
  ];

  return (
    <div
      className="relative mx-auto flex min-h-[800px] w-[600px] flex-col overflow-hidden bg-[#f8f7f5] p-6 text-[#242424] shadow-2xl"
      style={bodyStyle}
    >
      <div className="pointer-events-none absolute inset-[8px] border" style={{ borderColor: `${accent}cc` }} />

      <TopSwirl color={accent} />
      <BottomSwirl color={accent} />
      <SideSwirls side="left" color={accent} />
      <SideSwirls side="right" color={accent} />

      <div className="relative z-10 px-8 pt-4">
        <Section title="Personal Details" color={heading}>
          <div className="grid grid-cols-[1.1fr_0.9fr] gap-4">
            <div className="space-y-1.5">
              {personalRows.map(([label, value]) => (
                <Row key={label} label={label} value={value} />
              ))}
              {personal?.customFields?.map((field) =>
                field?.value ? <Row key={field.id || field.label} label={field.label} value={field.value} /> : null
              )}
            </div>
            <div className="flex justify-end pt-1">
              <div className="h-[252px] w-[198px] overflow-hidden rounded-[999px] border-2 bg-[#e4e3df]" style={{ borderColor: `${accent}cc` }}>
                {photoDataUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={photoDataUrl} alt={personal?.name || "Profile"} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-[10px] uppercase tracking-wider text-[#7d7d72]">Photo</div>
                )}
              </div>
            </div>
          </div>
        </Section>

        <Section title="Family Details" color={heading} className="mt-5">
          <div className="space-y-1.5">
            {familyRows.map(([label, value]) => (
              <Row key={label} label={label} value={value} />
            ))}
            {family?.customFields?.map((field) =>
              field?.value ? <Row key={field.id || field.label} label={field.label} value={field.value} /> : null
            )}
          </div>
        </Section>

        <Section title="Contact Details" color={heading} className="mt-5">
          <div className="space-y-1.5">
            {contactRows.map(([label, value], idx) => (
              <Row key={label} label={label} value={value} icon={idx < 3 ? ["phone", "email", "location"][idx] : null} />
            ))}
            {contact?.customFields?.map((field) =>
              field?.value ? <Row key={field.id || field.label} label={field.label} value={field.value} /> : null
            )}
          </div>
        </Section>

        <AboutMeSection
          text={personal?.aboutMe}
          accent={accent}
          headingStyle={{ fontFamily: headingFont || "inherit" }}
          className="mt-5"
        />
      </div>
    </div>
  );
}

function Section({ title, color, className = "", children }) {
  return (
    <section className={className}>
      <div className="text-[17px] font-bold" style={{ color }}>
        {title}
      </div>
      <div className="mt-1 flex max-w-[150px] items-center gap-1.5">
        <div className="h-px flex-1" style={{ backgroundColor: `${color}66` }} />
        <svg width="22" height="8" viewBox="0 0 44 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 8H16M28 8H43" stroke={color} strokeWidth="1.3" />
          <path d="M17 8C19 6 20 4 22 3C24 4 25 6 27 8C25 10 24 12 22 13C20 12 19 10 17 8Z" stroke={color} strokeWidth="1.2" />
        </svg>
        <div className="h-px flex-1" style={{ backgroundColor: `${color}66` }} />
      </div>
      <div className="mt-2.5">{children}</div>
    </section>
  );
}

function Row({ label, value, icon }) {
  if (!value) return null;
  return (
    <div className="flex items-start text-[13px] leading-relaxed">
      <div className="flex w-[122px] items-start gap-1.5 pr-2 font-bold text-[#202020]">
        {icon ? <span className="mt-0.5 text-[#b12625]"><ContactIcon type={icon} /></span> : null}
        <span>{label}</span>
      </div>
      <div className="w-4 text-center font-bold">:</div>
      <div className="flex-1 break-words text-[#2b2b2b]">{value}</div>
    </div>
  );
}

function ContactIcon({ type }) {
  if (type === "phone") return <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M7.2 4.5C7.9 3.8 9 3.8 9.7 4.5L11.8 6.6C12.5 7.3 12.5 8.4 11.8 9.1L10.7 10.2C11.3 11.4 12.1 12.4 13.2 13.3C14.1 14.4 15.1 15.2 16.3 15.8L17.4 14.7C18.1 14 19.2 14 19.9 14.7L22 16.8C22.7 17.5 22.7 18.6 22 19.3L20.8 20.5C19.8 21.5 18.3 22 16.9 21.7C13.7 21 10.7 19.2 8.1 16.6C5.5 14 3.7 11 3 7.8C2.7 6.4 3.2 4.9 4.2 3.9L5.4 2.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (type === "email") return <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" /><path d="M4.5 7L12 12.2L19.5 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 21C15.8 16.8 18.5 13.8 18.5 10.4C18.5 6.8 15.6 4 12 4C8.4 4 5.5 6.8 5.5 10.4C5.5 13.8 8.2 16.8 12 21Z" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="10.5" r="2.2" fill="currentColor" /></svg>;
}

function TopSwirl({ color }) {
  return (
    <div className="pointer-events-none absolute left-[18px] right-[18px] top-[2px] z-0 opacity-90">
      <svg viewBox="0 0 564 86" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 28H248" stroke={color} strokeWidth="1.2" strokeOpacity="0.9" />
        <path d="M548 22V84" stroke={color} strokeWidth="1.2" strokeOpacity="0.85" />
        <path d="M74 44C98 10 136 10 166 38C194 64 224 56 238 34" stroke={color} strokeWidth="2.1" />
        <path d="M242 34C260 8 296 6 332 22C382 43 420 76 482 60C522 49 540 22 528 8C516 -2 498 8 504 24" stroke={color} strokeWidth="5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function BottomSwirl({ color }) {
  return (
    <div className="pointer-events-none absolute bottom-[6px] left-[18px] right-[18px] z-0 opacity-90">
      <svg viewBox="0 0 564 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 84C36 46 90 36 150 62C200 84 260 88 312 74C350 64 364 46 352 34C340 22 318 30 320 48C322 66 346 72 390 62" stroke={color} strokeWidth="4.8" strokeLinecap="round" />
        <path d="M390 62C430 54 458 34 480 12C488 4 504 2 510 12C516 22 508 36 496 36C484 36 478 24 486 16" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
        <path d="M420 84H548V10" stroke={color} strokeWidth="1.2" strokeOpacity="0.85" />
      </svg>
    </div>
  );
}

function SideSwirls({ side, color }) {
  if (side === "left") {
    return (
      <div className="pointer-events-none absolute bottom-[70px] left-0 z-0 opacity-18">
        <svg width="96" height="240" viewBox="0 0 96 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 8C40 30 40 72 10 94C0 102 0 116 12 124C40 140 42 178 14 204C8 210 6 220 10 234" stroke={color} strokeWidth="4" />
          <path d="M26 22C46 38 46 64 28 78" stroke={color} strokeWidth="2.4" />
        </svg>
      </div>
    );
  }
  return (
    <div className="pointer-events-none absolute bottom-[44px] right-0 z-0 opacity-18">
      <svg width="160" height="250" viewBox="0 0 160 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 244C52 204 62 160 40 126C26 104 28 74 56 58C82 44 112 54 124 76C136 98 132 124 108 136C88 146 64 140 56 122C50 108 56 94 70 90C82 86 94 94 94 106" stroke={color} strokeWidth="6" />
        <path d="M90 234C120 210 126 184 112 166" stroke={color} strokeWidth="3" />
      </svg>
    </div>
  );
}

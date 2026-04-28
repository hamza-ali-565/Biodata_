export function TemplateSoberBlueGold({ data, theme = {}, fontFamily }) {
  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const navy = theme?.textHeading || "#1b2f58";
  const gold = theme?.accent || "#c5923a";

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
    ["Phone", contact?.contactNumber],
    ["Email", contact?.email],
    ["Address", contact?.address],
  ];

  return (
    <div
      className="relative mx-auto flex min-h-[800px] w-[600px] flex-col overflow-hidden bg-[#f8f8f6] p-6 text-[#252525] shadow-2xl"
      style={{ fontFamily: fontFamily || '"Times New Roman", serif' }}
    >
      <div className="pointer-events-none absolute inset-[8px] border" style={{ borderColor: `${navy}cc` }} />
      <div className="pointer-events-none absolute inset-[14px] border" style={{ borderColor: `${navy}55` }} />
      <CornerBracket position="top-left" color={navy} />
      <CornerBracket position="top-right" color={navy} />
      <CornerBracket position="bottom-left" color={navy} />
      <CornerBracket position="bottom-right" color={navy} />

      <div className="relative z-10 px-8 pt-3">
        <h1 className="text-center text-[46px] font-bold uppercase tracking-wide" style={{ color: navy }}>
          Biodata
        </h1>
        <OrnamentLine color={gold} className="mt-1" />

        <div className="mt-3 grid grid-cols-[1.12fr_0.88fr] gap-5">
          <Section title="Personal Details" headingColor={navy} lineColor={gold}>
            {personalRows.map(([label, value]) => (
              <Row key={label} label={label} value={value} />
            ))}
            {personal?.customFields?.map((field) =>
              field?.value ? <Row key={field.id || field.label} label={field.label} value={field.value} /> : null
            )}
          </Section>

          <div className="pt-1">
            <div className="mx-auto h-[296px] w-[210px] overflow-hidden rounded-[22px] border-2 bg-[#e3e1dd]" style={{ borderColor: `${gold}dd` }}>
              {photoDataUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={photoDataUrl} alt={personal?.name || "Profile"} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-[10px] uppercase tracking-wider text-[#77726b]">Photo</div>
              )}
            </div>
          </div>
        </div>

        <Section title="Family Details" headingColor={navy} lineColor={gold} className="mt-5">
          {familyRows.map(([label, value]) => (
            <Row key={label} label={label} value={value} />
          ))}
          {family?.customFields?.map((field) =>
            field?.value ? <Row key={field.id || field.label} label={field.label} value={field.value} /> : null
          )}
        </Section>

        <Section title="Contact Details" headingColor={navy} lineColor={gold} className="mt-5">
          {contactRows.map(([label, value], idx) => (
            <Row key={label} label={label} value={value} icon={idx > 0 ? ["phone", "email", "location"][idx - 1] : null} iconColor={gold} />
          ))}
          {contact?.customFields?.map((field) =>
            field?.value ? <Row key={field.id || field.label} label={field.label} value={field.value} /> : null
          )}
        </Section>
      </div>
    </div>
  );
}

function Section({ title, headingColor, lineColor, className = "", children }) {
  return (
    <section className={className}>
      <h2 className="text-[17px] font-bold uppercase tracking-wide" style={{ color: headingColor }}>
        {title}
      </h2>
      <OrnamentLine color={lineColor} short className="mt-1" />
      <div className="mt-2.5 space-y-1.5">{children}</div>
    </section>
  );
}

function Row({ label, value, icon, iconColor = "#c5923a" }) {
  if (!value) return null;
  return (
    <div className="flex items-start text-[13px] leading-relaxed">
      <div className="flex w-[122px] items-start gap-1.5 pr-2 font-bold text-[#1f2b4b]">
        {icon ? <span className="mt-0.5" style={{ color: iconColor }}><ContactIcon type={icon} /></span> : null}
        <span>{label}</span>
      </div>
      <div className="w-4 text-center font-bold">:</div>
      <div className="flex-1 break-words text-[#2b2b2b]">{value}</div>
    </div>
  );
}

function OrnamentLine({ color, short = false, className = "" }) {
  return (
    <div className={`flex ${short ? "max-w-[190px]" : "mx-auto max-w-[240px]"} items-center gap-2 ${className}`}>
      <div className="h-px flex-1" style={{ backgroundColor: `${color}77` }} />
      <svg width="22" height="10" viewBox="0 0 44 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 10H15" stroke={color} strokeWidth="1.5" />
        <path d="M29 10H43" stroke={color} strokeWidth="1.5" />
        <path d="M16 10C19 8 20 6 22 4C24 6 25 8 28 10C25 12 24 14 22 16C20 14 19 12 16 10Z" stroke={color} strokeWidth="1.4" />
        <circle cx="22" cy="10" r="1.5" fill={color} />
      </svg>
      <div className="h-px flex-1" style={{ backgroundColor: `${color}77` }} />
    </div>
  );
}

function CornerBracket({ position, color }) {
  const cls = {
    "top-left": "top-[8px] left-[8px] rotate-0",
    "top-right": "top-[8px] right-[8px] rotate-90",
    "bottom-right": "bottom-[8px] right-[8px] rotate-180",
    "bottom-left": "bottom-[8px] left-[8px] -rotate-90",
  }[position];
  return (
    <div className={`pointer-events-none absolute z-20 h-[22px] w-[22px] ${cls}`}>
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2H26V5.5" stroke={color} strokeWidth="1.4" />
        <path d="M2 2V26H5.5" stroke={color} strokeWidth="1.4" />
        <path d="M6 6H22V8.5" stroke={color} strokeWidth="1" strokeOpacity="0.8" />
        <path d="M6 6V22H8.5" stroke={color} strokeWidth="1" strokeOpacity="0.8" />
      </svg>
    </div>
  );
}

function ContactIcon({ type }) {
  if (type === "phone") return <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M7.2 4.5C7.9 3.8 9 3.8 9.7 4.5L11.8 6.6C12.5 7.3 12.5 8.4 11.8 9.1L10.7 10.2C11.3 11.4 12.1 12.4 13.2 13.3C14.1 14.4 15.1 15.2 16.3 15.8L17.4 14.7C18.1 14 19.2 14 19.9 14.7L22 16.8C22.7 17.5 22.7 18.6 22 19.3L20.8 20.5C19.8 21.5 18.3 22 16.9 21.7C13.7 21 10.7 19.2 8.1 16.6C5.5 14 3.7 11 3 7.8C2.7 6.4 3.2 4.9 4.2 3.9L5.4 2.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (type === "email") return <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" /><path d="M4.5 7L12 12.2L19.5 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 21C15.8 16.8 18.5 13.8 18.5 10.4C18.5 6.8 15.6 4 12 4C8.4 4 5.5 6.8 5.5 10.4C5.5 13.8 8.2 16.8 12 21Z" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="10.5" r="2.2" fill="currentColor" /></svg>;
}

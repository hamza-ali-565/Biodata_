export function TemplateBeautifulTraditional({ data, theme = {}, fontFamily }) {
  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const gold = theme?.accent || "#d4af37";
  const darkGreen = "#022c22"; // Very dark emerald
  const midGreen = "#064e3b"; // Dark emerald
  
  const personalRows = [
    ["Date of Birth", personal?.dateOfBirth],
    ["Place of Birth", personal?.placeOfBirth],
    ["Height", personal?.height],
    ["Weight", personal?.weight],
    ["Complexion", personal?.complexion],
    ["Religion", personal?.religion],
    ["Nationality", personal?.nationality],
    ["Marital Status", personal?.maritalStatus],
    ["Mother Tongue", personal?.motherTongue],
    ["Occupation", personal?.occupation],
    ["Rashi", personal?.rashi],
    ["Nakshatra", personal?.nakshatra],
    ["Gotra", personal?.gotra],
    ["Time of Birth", personal?.timeOfBirth],
    ["Education", personal?.education || personal?.bachelors],
  ];

  const familyRows = [
    ["Father's Name", family?.fatherName],
    ["Mother's Name", family?.motherName],
    ["No. of Brothers", family?.brothers],
    ["No. of Sisters", family?.sisters],
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
      className="relative mx-auto flex min-h-[800px] w-[600px] flex-col overflow-hidden text-[#f3f4f6] shadow-2xl"
      style={{
        fontFamily: fontFamily || '"Playfair Display", "Cinzel", serif',
        background: `linear-gradient(135deg, ${midGreen} 0%, ${darkGreen} 100%)`,
      }}
    >
      <GeometricTopPattern color={gold} />
      <MosqueArch color={gold} />
      <SideFloralPattern side="left" color={gold} />
      <SideFloralPattern side="right" color={gold} />

      <div className="relative z-10 flex flex-col items-center px-8 pb-12 pt-[110px]">
        {/* Profile Picture */}
        <div className="relative flex justify-center">
          <div 
            className="relative z-10 h-[140px] w-[140px] overflow-hidden rounded-full border-[3px] shadow-lg"
            style={{ borderColor: gold, backgroundColor: '#0f3a2c' }}
          >
            {photoDataUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={photoDataUrl}
                alt={personal?.name || "Profile"}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-[11px] uppercase tracking-wider text-[#9aa7a1]">
                Photo
              </div>
            )}
          </div>
          <GoldenSparkles color={gold} />
        </div>

        {/* Name */}
        <h1 className="mt-4 max-w-[480px] text-center text-[36px] font-bold leading-tight tracking-wide" style={{ color: gold }}>
          {personal?.name || "Your Name"}
        </h1>

        <div className="mt-6 flex w-full flex-col space-y-6">
          <Section title="Personal Details" color={gold}>
            <div className="space-y-1.5 px-4">
              {personalRows.map(([label, value]) => (
                <DataRow key={label} label={label} value={value} />
              ))}
              {personal?.customFields?.map((field) =>
                field?.value ? <DataRow key={field.id || field.label} label={field.label} value={field.value} /> : null
              )}
            </div>
          </Section>

          <Section title="Family Details" color={gold}>
            <div className="space-y-1.5 px-4">
              {familyRows.map(([label, value]) => (
                <DataRow key={label} label={label} value={value} />
              ))}
              {family?.customFields?.map((field) =>
                field?.value ? <DataRow key={field.id || field.label} label={field.label} value={field.value} /> : null
              )}
            </div>
          </Section>

          <Section title="Contact Details" color={gold}>
            <div className="space-y-1.5 px-4">
              {contactRows.map(([label, value], idx) => (
                <DataRow key={label} label={label} value={value} icon={idx < 3 ? ["phone", "email", "location"][idx] : null} />
              ))}
              {contact?.customFields?.map((field) =>
                field?.value ? <DataRow key={field.id || field.label} label={field.label} value={field.value} /> : null
              )}
            </div>
          </Section>
        </div>
      </div>

      {/* Footer Gold Strip */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[18px]" style={{ backgroundColor: gold }} />
      {/* Footer inner border */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[22px] h-px opacity-60" style={{ backgroundColor: gold }} />
    </div>
  );
}

function Section({ title, color, children }) {
  return (
    <section className="w-full">
      <div className="mb-3 flex items-center justify-center">
        <DecorativeLine color={color} />
        <h2 className="mx-4 text-[17px] font-bold uppercase tracking-widest" style={{ color }}>
          {title}
        </h2>
        <DecorativeLine color={color} reversed />
      </div>
      {children}
    </section>
  );
}

function DecorativeLine({ color, reversed }) {
  return (
    <div className={`flex items-center ${reversed ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className="h-px w-16" style={{ backgroundColor: color, opacity: 0.6 }} />
      <div className="mx-1 h-2 w-2 rotate-45" style={{ backgroundColor: color }} />
      <div className="h-px w-6" style={{ backgroundColor: color, opacity: 0.6 }} />
    </div>
  );
}

function DataRow({ label, value, icon }) {
  if (!value) return null;
  return (
    <div className="flex items-start text-[14px] leading-relaxed text-[#f3f4f6]">
      <div className="flex w-[160px] shrink-0 items-start gap-2 pr-2 font-semibold text-[#e5e7eb]">
        {icon ? (
          <span
            className="mt-0.5 inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full"
            style={{ backgroundColor: '#d4af37', color: '#022c22' }}
          >
            <ContactIcon type={icon} />
          </span>
        ) : (
          <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rotate-45 opacity-80" style={{ backgroundColor: '#d4af37' }} />
        )}
        <span className="whitespace-nowrap">{label}</span>
      </div>
      <div className="w-4 shrink-0 text-center font-bold" style={{ color: '#d4af37' }}>:</div>
      <div className="flex-1 break-words font-medium text-[#f9fafb]">{value}</div>
    </div>
  );
}

function ContactIcon({ type }) {
  if (type === "phone") return <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M7.2 4.5C7.9 3.8 9 3.8 9.7 4.5L11.8 6.6C12.5 7.3 12.5 8.4 11.8 9.1L10.7 10.2C11.3 11.4 12.1 12.4 13.2 13.3C14.1 14.4 15.1 15.2 16.3 15.8L17.4 14.7C18.1 14 19.2 14 19.9 14.7L22 16.8C22.7 17.5 22.7 18.6 22 19.3L20.8 20.5C19.8 21.5 18.3 22 16.9 21.7C13.7 21 10.7 19.2 8.1 16.6C5.5 14 3.7 11 3 7.8C2.7 6.4 3.2 4.9 4.2 3.9L5.4 2.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (type === "email") return <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M4.5 7L12 12.2L19.5 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  return <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 21C15.8 16.8 18.5 13.8 18.5 10.4C18.5 6.8 15.6 4 12 4C8.4 4 5.5 6.8 5.5 10.4C5.5 13.8 8.2 16.8 12 21Z" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="10.5" r="2.2" fill="currentColor" /></svg>;
}

function GeometricTopPattern({ color }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-[260px] opacity-[0.25]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="islamic-star" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30 0 L40 20 L60 30 L40 40 L30 60 L20 40 L0 30 L20 20 Z" fill="none" stroke={color} strokeWidth="1.5" />
            <path d="M15 15 L30 25 L45 15 L35 30 L45 45 L30 35 L15 45 L25 30 Z" fill="none" stroke={color} strokeWidth="0.8" />
          </pattern>
          <linearGradient id="fade-out" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#064e3b" stopOpacity="0" />
            <stop offset="100%" stopColor="#064e3b" stopOpacity="1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamic-star)" />
        <rect width="100%" height="100%" fill="url(#fade-out)" />
      </svg>
    </div>
  );
}

function MosqueArch({ color }) {
  return (
    <div className="pointer-events-none absolute inset-0">
      <svg width="600" height="800" viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        {/* Outer Arch */}
        <path
          d="M 22 770 L 22 250 C 22 200, 102 180, 182 150 C 252 120, 282 80, 300 35 C 318 80, 348 120, 418 150 C 498 180, 578 200, 578 250 L 578 770"
          stroke={color}
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Inner Arch */}
        <path
          d="M 32 770 L 32 254 C 32 210, 106 190, 182 162 C 248 134, 276 98, 300 60 C 324 98, 352 134, 418 162 C 494 190, 568 210, 568 254 L 568 770"
          stroke={color}
          strokeWidth="1.2"
          opacity="0.7"
          strokeLinejoin="round"
        />
        {/* Inner corner flourishes */}
        <path d="M 22 250 Q 70 250, 70 200" stroke={color} strokeWidth="1.2" fill="none" opacity="0.7" />
        <path d="M 578 250 Q 530 250, 530 200" stroke={color} strokeWidth="1.2" fill="none" opacity="0.7" />
      </svg>
    </div>
  );
}

function SideFloralPattern({ side, color }) {
  const isLeft = side === "left";
  const xOffset = isLeft ? "-30px" : "calc(100% - 70px)";
  
  return (
    <div 
      className="pointer-events-none absolute top-[300px] h-[300px] w-[100px] opacity-[0.12]"
      style={{ left: xOffset }}
    >
      <svg width="100" height="300" viewBox="0 0 100 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {[...Array(6)].map((_, i) => (
          <g key={i} transform={`translate(50, ${25 + i * 50})`}>
            <path d="M 0 0 Q 20 -20, 0 -40 Q -20 -20, 0 0" fill={color} />
            <path d="M 0 -20 Q 20 0, 40 -20 Q 20 -40, 0 -20" fill={color} />
            <path d="M 0 -20 Q -20 0, -40 -20 Q -20 -40, 0 -20" fill={color} />
            <circle cx="0" cy="-20" r="4" fill="#ffffff" opacity="0.8" />
          </g>
        ))}
      </svg>
    </div>
  );
}

function GoldenSparkles({ color }) {
  return (
    <div className="pointer-events-none absolute -inset-8 z-0">
      <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Star x={40} y={40} s={8} color={color} />
        <Star x={160} y={30} s={10} color={color} />
        <Star x={30} y={150} s={9} color={color} />
        <Star x={170} y={160} s={7} color={color} />
      </svg>
    </div>
  );
}

function Star({ x, y, s, color }) {
  const d = `M${x} ${y - s} L${x + s * 0.25} ${y - s * 0.25} L${x + s} ${y} L${x + s * 0.25} ${y + s * 0.25} L${x} ${y + s} L${x - s * 0.25} ${y + s * 0.25} L${x - s} ${y} L${x - s * 0.25} ${y - s * 0.25} Z`;
  return <path d={d} fill={color} opacity="0.9" />;
}

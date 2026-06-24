export function TemplateLeafsEffect({ data, theme, headingFont, bodyFont }) {
  const headingStyle = { fontFamily: headingFont || "inherit" };
  const bodyStyle = { fontFamily: bodyFont || "inherit" };

  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const accent = theme?.accent || "#596533";
  const heading = theme?.textHeading || "#303820";

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
    ["Phone", contact?.contactNumber],
    ["Email", contact?.email],
    ["Address", contact?.address],
  ];

  return (
    <div
      className="relative mx-auto flex min-h-[800px] w-[600px] flex-col overflow-hidden bg-[#f7f7f4] p-6 text-[#242424] shadow-2xl"
      style={bodyStyle}
    >
      <div className="pointer-events-none absolute inset-[8px] border" style={{ borderColor: `${accent}cc` }} />
      <div className="pointer-events-none absolute inset-[14px] border" style={{ borderColor: `${accent}88` }} />

      <LeafCluster position="top-left" />
      <LeafCluster position="bottom-left" />
      <RightBottomLeaf />
      <ThinCorner side="top-right" color={accent} />
      <ThinCorner side="bottom-right" color={accent} />

      <div className="relative z-10 px-8 pt-4">
        <Section title="Personal Information" color={heading} lineColor={accent} className="mt-2">
          <div className="grid grid-cols-[1.1fr_0.9fr] gap-4">
            <div className="space-y-1.5">
              {personalRows.map(([label, value]) => (
                <Row key={label} label={label} value={value} />
              ))}
              {personal?.customFields?.map((field) =>
                field?.value ? (
                  <Row key={field.id || field.label} label={field.label} value={field.value} />
                ) : null
              )}
            </div>

            <div className="flex justify-end pt-2">
              <div className="h-[250px] w-[190px] overflow-hidden rounded-[999px] border-[3px] bg-[#e5e5df]" style={{ borderColor: `${accent}bb` }}>
                {photoDataUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={photoDataUrl}
                    alt={personal?.name || "Profile"}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-[10px] uppercase tracking-wider text-[#7d7d72]">
                    Photo
                  </div>
                )}
              </div>
            </div>
          </div>
        </Section>

        <Section title="Family Information" color={heading} lineColor={accent} className="mt-5">
          <div className="space-y-1.5">
            {familyRows.map(([label, value]) => (
              <Row key={label} label={label} value={value} />
            ))}
            {family?.customFields?.map((field) =>
              field?.value ? (
                <Row key={field.id || field.label} label={field.label} value={field.value} />
              ) : null
            )}
          </div>
        </Section>

        <Section title="Contact Details" color={heading} lineColor={accent} className="mt-5">
          <div className="space-y-1.5">
            {contactRows.map(([label, value]) => (
              <Row key={label} label={label} value={value} />
            ))}
            {contact?.customFields?.map((field) =>
              field?.value ? (
                <Row key={field.id || field.label} label={field.label} value={field.value} />
              ) : null
            )}
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, color, lineColor, className = "", children }) {
  return (
    <section className={className}>
      <div className="text-[17px] font-bold uppercase tracking-wide text-center" style={{ color }}>
        {title}
      </div>
      <OrnamentLine color={lineColor} className="mt-1" />
      <div className="mt-3">{children}</div>
    </section>
  );
}

function Row({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex items-start text-[13px] leading-relaxed">
      <div className="w-[122px] pr-2 font-bold text-[#222]">{label}</div>
      <div className="w-4 text-center font-bold">:</div>
      <div className="flex-1 break-words text-[#2b2b2b]">{value}</div>
    </div>
  );
}

function OrnamentLine({ color, className = "" }) {
  return (
    <div className={`mx-auto flex max-w-[220px] items-center gap-2 ${className}`}>
      <div className="h-px flex-1" style={{ backgroundColor: `${color}55` }} />
      <svg width="24" height="10" viewBox="0 0 44 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M1 10H15" stroke={color} strokeWidth="1.4" />
        <path d="M29 10H43" stroke={color} strokeWidth="1.4" />
        <path d="M16 10C18.5 8 20 6 22 4C24 6 25.5 8 28 10C25.5 12 24 14 22 16C20 14 18.5 12 16 10Z" stroke={color} strokeWidth="1.4" />
        <circle cx="22" cy="10" r="1.5" fill={color} />
      </svg>
      <div className="h-px flex-1" style={{ backgroundColor: `${color}55` }} />
    </div>
  );
}

function LeafCluster({ position }) {
  const map = {
    "top-left": "top-0 left-0 rotate-0",
    "bottom-left": "bottom-0 left-0 rotate-180",
  };
  return (
    <div className={`pointer-events-none absolute z-0 h-[156px] w-[220px] opacity-45 ${map[position]}`}>
      <svg viewBox="0 0 220 156" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* olive branch */}
        <path d="M38 32C82 15 132 17 198 40" stroke="#8a9566" strokeWidth="4.2" strokeLinecap="round" />
        <path d="M28 45C76 28 124 31 188 54" stroke="#97a278" strokeWidth="3" strokeLinecap="round" />
        {[
          [52, 27, 76, 18, 94, 34],
          [74, 25, 98, 16, 116, 34],
          [96, 24, 122, 15, 140, 36],
          [118, 25, 144, 17, 164, 39],
          [140, 28, 166, 21, 186, 44],
        ].map((d, i) => (
          <path
            key={`leaf-up-${i}`}
            d={`M${d[0]} ${d[1]}C${d[2]} ${d[2] - 2} ${d[3]} ${d[3] + 4} ${d[4]} ${d[5]}C${d[3]} ${d[5] + 2} ${d[2] - 2} ${d[2] + 8} ${d[0]} ${d[1]}Z`}
            fill="#9ca886"
            stroke="#79845a"
            strokeWidth="0.9"
          />
        ))}
        {[
          [46, 40, 70, 34, 86, 50],
          [68, 40, 92, 34, 108, 50],
          [90, 40, 116, 35, 132, 52],
          [112, 42, 138, 37, 154, 54],
          [134, 45, 160, 40, 178, 58],
        ].map((d, i) => (
          <path
            key={`leaf-down-${i}`}
            d={`M${d[0]} ${d[1]}C${d[2]} ${d[2] - 1} ${d[3]} ${d[3] + 6} ${d[4]} ${d[5]}C${d[3]} ${d[5] + 3} ${d[2]} ${d[2] + 9} ${d[0]} ${d[1]}Z`}
            fill="#a3ad8f"
            stroke="#7e8961"
            strokeWidth="0.9"
          />
        ))}

        {/* blue flower */}
        <g transform="translate(30 66)">
          <ellipse cx="0" cy="0" rx="26" ry="11" fill="#a9c3ca" stroke="#708d98" strokeWidth="1.2" transform="rotate(0)" />
          <ellipse cx="0" cy="0" rx="26" ry="11" fill="#b2cbd2" stroke="#708d98" strokeWidth="1.2" transform="rotate(38)" />
          <ellipse cx="0" cy="0" rx="26" ry="11" fill="#b7d0d7" stroke="#708d98" strokeWidth="1.2" transform="rotate(76)" />
          <ellipse cx="0" cy="0" rx="26" ry="11" fill="#a7c1c9" stroke="#708d98" strokeWidth="1.2" transform="rotate(114)" />
          <ellipse cx="0" cy="0" rx="26" ry="11" fill="#b4cdd4" stroke="#708d98" strokeWidth="1.2" transform="rotate(152)" />
          <circle cx="0" cy="0" r="5" fill="#6e8891" />
          <circle cx="0" cy="0" r="2.2" fill="#edd59a" />
          {[...Array(18)].map((_, i) => {
            const a = (i * Math.PI * 2) / 18;
            const x1 = Math.cos(a) * 4;
            const y1 = Math.sin(a) * 4;
            const x2 = Math.cos(a) * 10;
            const y2 = Math.sin(a) * 10;
            return <line key={`st-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#deb97a" strokeWidth="0.9" />;
          })}
        </g>

        {/* saffron twig with buds */}
        <path d="M16 74C20 90 18 106 10 124" stroke="#d4ab6f" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M24 84C28 99 27 114 20 132" stroke="#ddb97e" strokeWidth="2.1" strokeLinecap="round" />
        <path d="M8 86C14 92 18 100 20 109" stroke="#ddb97e" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 98C18 104 22 111 24 121" stroke="#ddb97e" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="88" r="2.2" fill="#e4c794" />
        <circle cx="17" cy="96" r="2.1" fill="#e4c794" />
        <circle cx="22" cy="104" r="2.1" fill="#e4c794" />
        <circle cx="26" cy="112" r="2" fill="#e4c794" />
        <circle cx="28" cy="121" r="1.9" fill="#e4c794" />
      </svg>
    </div>
  );
}

function ThinCorner({ side, color }) {
  const cls = side === "top-right" ? "top-[8px] right-[8px]" : "bottom-[8px] right-[8px] rotate-180";
  return (
    <div className={`pointer-events-none absolute z-0 h-[30px] w-[30px] opacity-60 ${cls}`}>
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M1.5 1.5H34.5V6" stroke={color} strokeWidth="1.5" />
        <path d="M1.5 1.5V34.5H6" stroke={color} strokeWidth="1.5" />
        <path d="M5.5 5.5H31V9" stroke={color} strokeWidth="1.1" strokeOpacity="0.8" />
        <path d="M5.5 5.5V31H9" stroke={color} strokeWidth="1.1" strokeOpacity="0.8" />
      </svg>
    </div>
  );
}

function RightBottomLeaf() {
  return (
    <div className="pointer-events-none absolute bottom-[2px] right-[2px] z-0 h-[128px] w-[168px] opacity-45">
      <svg viewBox="0 0 168 128" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M162 112C136 110 108 99 86 79" stroke="#8c9768" strokeWidth="3.6" strokeLinecap="round" />
        <path d="M150 114C126 111 100 102 80 84" stroke="#9da884" strokeWidth="2.6" strokeLinecap="round" />
        {[
          [132, 103, 146, 90, 160, 94],
          [118, 97, 132, 84, 146, 89],
          [104, 91, 118, 79, 132, 84],
          [90, 85, 104, 73, 118, 78],
        ].map((d, i) => (
          <path
            key={`rb-l-${i}`}
            d={`M${d[0]} ${d[1]}C${d[1]} ${d[1] - 8} ${d[2]} ${d[2] - 6} ${d[3]} ${d[3]}C${d[2]} ${d[3] + 5} ${d[1] - 5} ${d[1] + 4} ${d[0]} ${d[1]}Z`}
            fill="#a3ad8f"
            stroke="#7f8962"
            strokeWidth="0.85"
          />
        ))}
        <path d="M72 84C86 90 98 99 110 112" stroke="#dbba83" strokeWidth="2.1" strokeLinecap="round" />
        <circle cx="83" cy="91" r="2.1" fill="#e6cd9f" />
        <circle cx="91" cy="97" r="2" fill="#e6cd9f" />
        <circle cx="99" cy="103" r="1.9" fill="#e6cd9f" />
      </svg>
    </div>
  );
}

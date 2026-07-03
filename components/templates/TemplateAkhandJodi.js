import { createTypographyStyles, getPrimaryHeading } from "../templateTypography";

const SIBLING_KEYS = [
  "sibling name", "sibling dob", "sibling education", "sibling occupation",
  "sibling about me", "sibling photo", "sibling seeking", "family name",
];

function isSiblingField(label) {
  const l = label?.toLowerCase() || "";
  return SIBLING_KEYS.some((k) => l === k || l.startsWith("sibling "));
}

function isFamilyNameField(label) {
  const l = label?.toLowerCase() || "";
  return l === "family name" || l === "parivar" || l === "khandaan";
}

export function TemplateAkhandJodi({ data, theme, headingFont, bodyFont }) {
  const { headingStyle, bodyStyle } = createTypographyStyles(headingFont, bodyFont);
  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const gold   = theme?.accent      || "#C69B2A";
  const cream  = theme?.accentSoft  ? theme.accentSoft : "#E8D5A3";
  const heading = theme?.textHeading || "#7A6010";
  const bg     = "#FAF6EE";

  const allPersonalCustom = personal?.customFields || [];

  const familyNameField = allPersonalCustom.find((f) => isFamilyNameField(f?.label));

  // Sibling data
  const siblingName       = allPersonalCustom.find((f) => f?.label?.toLowerCase() === "sibling name")?.value;
  const siblingDOB        = allPersonalCustom.find((f) => f?.label?.toLowerCase() === "sibling dob")?.value;
  const siblingEducation  = allPersonalCustom.find((f) => f?.label?.toLowerCase() === "sibling education")?.value;
  const siblingOccupation = allPersonalCustom.find((f) => f?.label?.toLowerCase() === "sibling occupation")?.value;
  const siblingAboutMe    = allPersonalCustom.find((f) => f?.label?.toLowerCase() === "sibling about me")?.value;
  const siblingSeekingField = allPersonalCustom.find((f) => f?.label?.toLowerCase() === "sibling seeking")?.value;
  const candidate1Seeking = allPersonalCustom.find((f) => f?.label?.toLowerCase() === "seeking")?.value;

  const hasSiblingData = !!(siblingName || siblingDOB || siblingEducation);

  // Candidate 1 custom fields — filter out sibling and family-name fields
  const candidate1Custom = allPersonalCustom.filter(
    (f) => f?.value && !isSiblingField(f?.label) && !isFamilyNameField(f?.label) && f?.label?.toLowerCase() !== "seeking"
  );

  // Extra sibling-prefixed fields beyond the named ones
  const siblingExtraCustom = allPersonalCustom.filter((f) => {
    const l = f?.label?.toLowerCase() || "";
    return (
      f?.value &&
      l.startsWith("sibling ") &&
      l !== "sibling name" &&
      l !== "sibling dob" &&
      l !== "sibling education" &&
      l !== "sibling occupation" &&
      l !== "sibling about me" &&
      l !== "sibling photo" &&
      l !== "sibling seeking"
    );
  });

  const contactRows = [
    ["Contact", contact?.contactPerson],
    ["Phone",   contact?.contactNumber],
    ["WhatsApp", contact?.whatsappIndia || contact?.contactNumber],
    ["Email",   contact?.email],
    ["Address", contact?.address],
  ];

  return (
    <div
      data-preview-root="true"
      className="relative mx-auto w-[600px] overflow-hidden"
      style={{ backgroundColor: bg, color: "#1A1A1A", minHeight: "800px", ...bodyStyle }}
    >
      {/* Family header */}
      <div className="px-7 pt-5 pb-3 text-center">
        {familyNameField?.value && (
          <div
            className="text-[24px] font-bold"
            style={{ ...headingStyle, color: gold }}
            data-typography="heading"
          >
            {familyNameField.value}
          </div>
        )}
        <div className="text-[12px] italic mt-1" style={{ color: "#888" }}>
          Presenting Our Children
        </div>
        <div className="mt-3 h-px" style={{ backgroundColor: gold }} />
      </div>

      {/* Shared family section */}
      <div className="mx-7 mb-3 rounded px-4 py-3" style={{ backgroundColor: `${gold}0D` }}>
        <div
          className="text-[11px] font-bold uppercase tracking-[0.13em] mb-2 text-center"
          style={{ ...headingStyle, color: gold }}
          data-typography="heading"
        >
          Our Family
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-1">
          {[
            family?.fatherName && `Father: ${family.fatherName}${family.fatherOccupation ? ` (${family.fatherOccupation})` : ""}`,
            family?.motherName && `Mother: ${family.motherName}${family.motherOccupation ? ` (${family.motherOccupation})` : ""}`,
            family?.familyType && `Family: ${family.familyType}`,
            family?.nativePlace && `Native Place: ${family.nativePlace}`,
            personal?.gotra && `Gotra: ${personal.gotra}`,
          ].filter(Boolean).map((item, i) => (
            <div key={i} className="text-[11px]" style={{ color: "#2A2A2A" }}>{item}</div>
          ))}
        </div>
        {family?.customFields?.map((f) =>
          f?.value ? (
            <div key={f.id || f.label} className="text-[11px] text-center mt-1" style={{ color: "#2A2A2A" }}>
              {f.label}: {f.value}
            </div>
          ) : null
        )}
        <div className="mt-2 h-px" style={{ backgroundColor: gold }} />
      </div>

      {/* Dual candidate columns */}
      <div className="flex px-4 gap-0" style={{ minHeight: "480px" }}>
        {/* Candidate 1 */}
        <div style={{ flex: "0 0 260px", padding: "0 8px 0 4px" }}>
          <CandidateColumn
            photoDataUrl={photoDataUrl}
            name={getPrimaryHeading(personal)}
            dob={personal?.dateOfBirth}
            gender={personal?.gender}
            education={personal?.masters || personal?.bachelors || personal?.education}
            occupation={personal?.occupation}
            employer={personal?.employer}
            aboutMe={personal?.aboutMe}
            seeking={candidate1Seeking}
            customFields={candidate1Custom}
            gold={gold}
            headingStyle={headingStyle}
            bodyStyle={bodyStyle}
            isPlaceholder={false}
          />
        </div>

        {/* Ornamental vertical divider */}
        <OrnamentalDivider gold={gold} />

        {/* Candidate 2 */}
        <div style={{ flex: "0 0 260px", padding: "0 4px 0 8px" }}>
          {hasSiblingData ? (
            <CandidateColumn
              photoDataUrl={null}
              name={siblingName || "—"}
              dob={siblingDOB}
              gender={null}
              education={siblingEducation}
              occupation={siblingOccupation}
              employer={null}
              aboutMe={siblingAboutMe}
              seeking={siblingSeekingField}
              customFields={siblingExtraCustom.map((f) => ({
                ...f,
                label: f.label.replace(/^sibling\s+/i, ""),
              }))}
              gold={gold}
              headingStyle={headingStyle}
              bodyStyle={bodyStyle}
              isPlaceholder={false}
              isCandidate2
            />
          ) : (
            /* Placeholder state */
            <div
              className="flex flex-col items-center justify-center h-full rounded text-center"
              style={{ border: `1px solid ${gold}55`, backgroundColor: `${gold}06`, minHeight: "300px" }}
            >
              <div className="text-[11px] leading-relaxed" style={{ color: gold, opacity: 0.7, padding: "16px" }}>
                Second Candidate Details Coming Soon
              </div>
              <div className="text-[10px] mt-2" style={{ color: "#888" }}>
                Add sibling details via Custom Fields using labels like "Sibling Name", "Sibling DOB", "Sibling Education"
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Shared contact footer */}
      <div className="mx-7 mt-4 mb-2 rounded px-4 py-3" style={{ backgroundColor: `${gold}0D` }}>
        <div className="text-[10px] italic text-center mb-2" style={{ color: "#888" }}>
          For both enquiries, please contact:
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
          {contactRows.filter(([, v]) => v).map(([l, v]) => (
            <div key={l} className="text-[11px]">
              <span className="font-semibold" style={{ color: gold, opacity: 0.85 }}>{l}:</span>{" "}
              <span>{v}</span>
            </div>
          ))}
        </div>
        {contact?.customFields?.map((f) =>
          f?.value ? (
            <div key={f.id || f.label} className="text-[11px] text-center mt-1">
              <span className="font-semibold" style={{ color: gold, opacity: 0.85 }}>{f.label}:</span>{" "}
              <span>{f.value}</span>
            </div>
          ) : null
        )}
      </div>

    </div>
  );
}

function CandidateColumn({
  photoDataUrl, name, dob, gender, education, occupation, employer,
  aboutMe, seeking, customFields, gold, headingStyle, isCandidate2,
}) {
  const hasPhoto = !!photoDataUrl;

  return (
    <div className="flex flex-col items-center pt-2">
      {hasPhoto ? (
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            border: `2px solid ${gold}`,
            overflow: "hidden",
            backgroundColor: `${gold}20`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoDataUrl}
            alt={name || "Profile"}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      ) : (
        <span style={{ color: gold, fontSize: "13px", lineHeight: 1 }}>❖</span>
      )}

      {/* Name */}
      <div
        className={`font-bold text-center ${hasPhoto ? "text-[16px] mt-2" : "text-[19px] mt-2"}`}
        style={{ ...headingStyle, color: gold }}
        data-typography="heading"
      >
        {name}
      </div>

      {/* Seeking */}
      {seeking && (
        <div className="text-[10px] mt-0.5 italic" style={{ color: "#888" }}>
          Seeking: {seeking}
        </div>
      )}

      {/* Key details */}
      <div className="mt-2 w-full space-y-1">
        {dob && (
          <MiniRow label="DOB" value={dob} gold={gold} />
        )}
        {gender && (
          <MiniRow label="Gender" value={gender} gold={gold} />
        )}
        {education && (
          <MiniRow label="Education" value={education} gold={gold} />
        )}
        {occupation && (
          <MiniRow label="Occupation" value={occupation} gold={gold} />
        )}
        {employer && (
          <MiniRow label="Employer" value={employer} gold={gold} />
        )}
        {customFields?.map((f) =>
          f?.value ? <MiniRow key={f.id || f.label} label={f.label} value={f.value} gold={gold} /> : null
        )}
      </div>

      {/* About Me */}
      {aboutMe && (
        <div
          className="mt-3 w-full text-[11px] leading-relaxed"
          style={{ color: "#333", borderTop: `1px solid ${gold}40`, paddingTop: 8 }}
        >
          {aboutMe}
        </div>
      )}
    </div>
  );
}

function MiniRow({ label, value, gold }) {
  if (!value) return null;
  return (
    <div className="flex items-start text-[11px]">
      <span className="flex-shrink-0 font-semibold" style={{ color: gold, opacity: 0.8, width: "72px", fontSize: "10px" }}>
        {label}
      </span>
      <span className="opacity-40 mx-1">:</span>
      <span className="flex-1 break-words">{value}</span>
    </div>
  );
}

function OrnamentalDivider({ gold }) {
  const diamonds = Array.from({ length: 28 }, (_, i) => i);
  return (
    <div
      className="flex-shrink-0 flex flex-col items-center"
      style={{ width: "24px", paddingTop: "8px", paddingBottom: "8px" }}
    >
      {/* Top cap */}
      <div
        style={{
          width: 12, height: 12, borderRadius: "50%",
          backgroundColor: gold, flexShrink: 0, marginBottom: 4,
        }}
      />
      {/* Diamond chain */}
      <div className="flex-1 flex flex-col items-center" style={{ gap: "3px" }}>
        {diamonds.map((i) => (
          <span key={i} style={{ color: gold, fontSize: "8px", lineHeight: 1 }}>◆</span>
        ))}
      </div>
      {/* Bottom cap */}
      <div
        style={{
          width: 12, height: 12, borderRadius: "50%",
          backgroundColor: gold, flexShrink: 0, marginTop: 4,
        }}
      />
    </div>
  );
}

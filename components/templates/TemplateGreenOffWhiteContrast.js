import { createTypographyStyles, getPrimaryHeading } from "../templateTypography";

export function TemplateGreenOffWhiteContrast({ data, theme, headingFont, bodyFont }) {
  const { headingStyle, bodyStyle } = createTypographyStyles(headingFont, bodyFont);

  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const deepGreen = theme?.textHeading || "#173d2a";
  const forest = theme?.accent || "#1e4d35";

  const headerRows = [
    ["Gender", personal?.gender],
    ["Date of Birth", personal?.dateOfBirth],
    ["Time of Birth", personal?.timeOfBirth],
    ["Place of Birth", personal?.placeOfBirth],
    ["Rashi", personal?.rashi],
    ["Nakshatra", personal?.nakshatra],
    ["Gotra", personal?.gotra],
    ["Complexion", personal?.complexion],
    ["Nationality", personal?.nationality],
    ["Religion", personal?.religion],
    ["Height", personal?.height],
    ["Education", personal?.bachelors],
    ["Occupation", personal?.occupation],
    ["Weight", personal?.weight],
    ["Marital Status", personal?.maritalStatus],
    ["Mother Tongue", personal?.motherTongue],
    ["Personality", personal?.personality],
  ];

  const familyRows = [
    ["Father", family?.fatherName],
    ["Mother", family?.motherName],
    ["Brothers", family?.brothers],
    ["Sisters", family?.sisters],
  ];

  return (
    <div
      className="relative mx-auto flex min-h-[800px] w-[600px] flex-col overflow-hidden bg-[#efefec] text-[#212121] shadow-2xl"
      style={bodyStyle}
    >
      <section className="relative h-[408px] overflow-hidden px-8 py-8 text-white">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 40%, #255f3f 0%, #0c2d1f 38%, #051b12 100%)",
          }}
        />
        <div className="relative z-10 grid h-full grid-cols-[240px_1fr] gap-7">
          <div className="flex items-start pt-1">
            <div className="h-[240px] w-[240px] overflow-hidden rounded-full border-4 border-[#e6e6de] bg-[#dbdbd7]">
              {photoDataUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={photoDataUrl}
                  alt={personal?.name || "Profile"}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-[10px] uppercase tracking-wider text-[#5f5f5f]">
                  Photo
                </div>
              )}
            </div>
          </div>

          <div className="pt-1">
            <div className="text-[50px] font-semibold leading-none" style={headingStyle} data-typography="heading">
              {getPrimaryHeading(personal)}
            </div>
            <div className="mt-2 h-[2px] w-[82px] bg-[#d7ddd5]" />

            <div className="mt-4 space-y-1.5 text-[13px] leading-relaxed text-[#edf2eb]">
              {headerRows.map(([label, value]) =>
                value ? (
                  <HeaderRow key={label} label={label} value={value} />
                ) : null
              )}
              {personal?.customFields?.map((field) =>
                field?.value ? (
                  <HeaderRow
                    key={field.id || field.label}
                    label={field.label}
                    value={field.value}
                  />
                ) : null
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="flex-1 px-8 pb-8 pt-5 text-[#1f1f1f]">
        <SectionTitle title="Contact Details" color={deepGreen} icon="contact" headingStyle={headingStyle} />
        <div className="mt-3 space-y-1.5 pl-0.5 text-[13px] leading-relaxed">
          {contact?.contactNumber ? (
            <BodyRow icon="phone" label="Phone" value={contact.contactNumber} />
          ) : null}
          {contact?.email ? (
            <BodyRow icon="email" label="Email" value={contact.email} />
          ) : null}
          {contact?.address ? (
            <BodyRow icon="location" label="Address" value={contact.address} />
          ) : null}
          {contact?.contactPerson ? (
            <BodyRow label="Contact Person" value={contact.contactPerson} />
          ) : null}
          {contact?.customFields?.map((field) =>
            field?.value ? (
              <BodyRow
                key={field.id || field.label}
                label={field.label}
                value={field.value}
              />
            ) : null
          )}
        </div>

        <div className="mt-4 h-px w-full bg-[#747474]" />

        <SectionTitle
          title="Family Details"
          color={deepGreen}
          icon="family"
          className="mt-4"
          headingStyle={headingStyle}
        />
        <div className="mt-3 space-y-1.5 text-[13px] leading-relaxed">
          {familyRows.map(([label, value]) =>
            value ? <BodyRow key={label} label={label} value={value} /> : null
          )}
          {family?.fatherOccupation ? (
            <BodyRow label="Father's Occupation" value={family.fatherOccupation} />
          ) : null}
          {family?.motherOccupation ? (
            <BodyRow label="Mother's Occupation" value={family.motherOccupation} />
          ) : null}
          {family?.siblings ? <BodyRow label="Siblings" value={family.siblings} /> : null}
          {family?.customFields?.map((field) =>
            field?.value ? (
              <BodyRow
                key={field.id || field.label}
                label={field.label}
                value={field.value}
              />
            ) : null
          )}
        </div>
      </section>

      <div className="pointer-events-none absolute inset-0 border border-black/5" />
      <div className="pointer-events-none absolute inset-[8px] border border-black/5" />
      <div className="pointer-events-none absolute inset-x-0 top-[408px] h-px bg-black/10" />
    </div>
  );
}

function HeaderRow({ label, value }) {
  return (
    <div className="flex">
      <span className="font-bold text-[#f4f6f2]">{label}:</span>
      <span className="ml-2 break-words text-[#ecf1ea]">{value}</span>
    </div>
  );
}

function SectionTitle({ title, icon, color, className = "", headingStyle }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2" style={{ color, borderColor: color }}>
        <SectionIcon type={icon} />
      </span>
      <div className="text-[17px] font-bold uppercase tracking-wide" style={{ ...headingStyle, color }} data-typography="heading">
        {title}
      </div>
    </div>
  );
}

function BodyRow({ label, value, icon }) {
  if (!value) return null;
  return (
    <div className="flex items-start">
      <div className="flex w-[118px] items-start gap-2 pr-2 font-bold text-[#212121]">
        {icon ? (
          <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center text-[#173d2a]">
            <SectionIcon type={icon} small />
          </span>
        ) : null}
        <span>{label}</span>
      </div>
      <span className="w-4 text-center font-bold">:</span>
      <span className="flex-1 break-words text-[#2b2b2b]">{value}</span>
    </div>
  );
}

function SectionIcon({ type, small = false }) {
  const size = small ? 13 : 18;
  if (type === "contact") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M16.5 14C19.2 13.9 21.4 16.1 21.5 18.8V20H2.5V18.8C2.6 16.1 4.8 13.9 7.5 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }
  if (type === "family") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="6.5" cy="8.5" r="2.5" fill="currentColor" />
        <circle cx="17.5" cy="8.5" r="2.5" fill="currentColor" />
        <circle cx="12" cy="6.5" r="3" fill="currentColor" />
        <path d="M2.5 19C2.7 16.8 4.2 15.2 6.5 15.2C8.8 15.2 10.3 16.8 10.5 19" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M13.5 19C13.7 16.8 15.2 15.2 17.5 15.2C19.8 15.2 21.3 16.8 21.5 19" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M8.5 19C8.8 16.2 10.3 14.6 12 14.6C13.7 14.6 15.2 16.2 15.5 19" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "phone") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7.2 4.5C7.9 3.8 9 3.8 9.7 4.5L11.8 6.6C12.5 7.3 12.5 8.4 11.8 9.1L10.7 10.2C11.3 11.4 12.1 12.4 13.2 13.3C14.1 14.4 15.1 15.2 16.3 15.8L17.4 14.7C18.1 14 19.2 14 19.9 14.7L22 16.8C22.7 17.5 22.7 18.6 22 19.3L20.8 20.5C19.8 21.5 18.3 22 16.9 21.7C13.7 21 10.7 19.2 8.1 16.6C5.5 14 3.7 11 3 7.8C2.7 6.4 3.2 4.9 4.2 3.9L5.4 2.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "email") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4.5 7L12 12.2L19.5 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21C15.8 16.8 18.5 13.8 18.5 10.4C18.5 6.8 15.6 4 12 4C8.4 4 5.5 6.8 5.5 10.4C5.5 13.8 8.2 16.8 12 21Z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="10.5" r="2.2" fill="currentColor" />
    </svg>
  );
}

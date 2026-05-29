import { createTypographyStyles, getPrimaryHeading } from "../templateTypography";

export function TemplateSeaGreenContrast({ data, theme, headingFont, bodyFont }) {
  const { headingStyle, bodyStyle } = createTypographyStyles(headingFont, bodyFont);

  if (!data) return null;

  const { personal = {}, family = {}, contact = {}, photoDataUrl } = data;
  const sea = theme?.accent || "#6f8785";
  const heading = theme?.textHeading || "#4f6664";

  const heroRows = [
    ["Gender", personal?.gender],
    ["Date of Birth", personal?.dateOfBirth],
    ["Time of Birth", personal?.timeOfBirth],
    ["Place of Birth", personal?.placeOfBirth],
    ["Height & Weight", [personal?.height, personal?.weight].filter(Boolean).join(", ")],
    ["Nationality", personal?.nationality],
    ["Religion", personal?.religion],
    ["Marital Status", personal?.maritalStatus],
    ["Mother Tongue", personal?.motherTongue],
    ["Education", personal?.education || personal?.bachelors],
    ["Occupation", personal?.occupation],
    ["Complexion", personal?.complexion],
    ["Rashi", personal?.rashi],
    ["Nakshatra", personal?.nakshatra],
    ["Gotra", personal?.gotra],
    ["Contact Information", [contact?.contactNumber, contact?.email].filter(Boolean).join(", ")],
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
    ["Contact Person", contact?.contactPerson],
    ["Phone", contact?.contactNumber],
    ["Email", contact?.email],
    ["Address", contact?.address],
  ];

  return (
    <div
      className="relative mx-auto flex min-h-[800px] w-[600px] flex-col overflow-hidden bg-[#f3f3f1] text-[#2a2a2a] shadow-2xl"
      style={bodyStyle}
    >
      <section className="relative h-[430px] overflow-hidden px-8 py-8 text-[#eef1ee]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 18% 28%, #8ea2a0 0%, #78908e 38%, #6e8684 100%)",
          }}
        />

        <div className="relative z-10 grid h-full grid-cols-[1.15fr_0.85fr] gap-5">
          <div className="pt-1">
            <div className="text-[30px] font-semibold leading-none text-[#f2f4f3]">-</div>
            <div className="mt-2 text-[50px] font-bold leading-none text-[#f7f9f8]" style={headingStyle} data-typography="heading">
              {getPrimaryHeading(personal)}
            </div>

            <div className="mt-6 space-y-2 text-[13px] leading-relaxed">
              {heroRows.map(([label, value]) =>
                value ? (
                  <HeroRow key={label} label={label} value={value} />
                ) : null
              )}
              {personal?.customFields?.map((field) =>
                field?.value ? (
                  <HeroRow
                    key={field.id || field.label}
                    label={field.label}
                    value={field.value}
                  />
                ) : null
              )}
            </div>
          </div>

          <div className="flex items-center justify-end">
            <div className="h-[264px] w-[200px] overflow-hidden rounded-[999px] border-2 border-[#d8ddd8] bg-[#d9ddda]">
              {photoDataUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={photoDataUrl}
                  alt={personal?.name || "Profile"}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-[10px] uppercase tracking-wider text-[#6a7370]">
                  Photo
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="flex-1 bg-[#f7f7f6] px-8 pb-8 pt-6">
        <div className="text-[17px] font-bold" style={{ ...headingStyle, color: heading }} data-typography="heading">
          Family Background
        </div>
        <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-[#454545]">
          {familyRows.map(([label, value]) =>
            value ? (
              <li key={label} className="flex items-start">
                <span className="mr-3 mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-[#535353]" />
                <span className="w-[122px] pr-2 font-bold">{label}:</span>
                <span className="flex-1 break-words">{value}</span>
              </li>
            ) : null
          )}
          {family?.customFields?.map((field) =>
            field?.value ? (
              <li key={field.id || field.label} className="flex items-start">
                <span className="mr-3 mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-[#535353]" />
                <span className="w-[122px] pr-2 font-bold">{field.label}:</span>
                <span className="flex-1 break-words">{field.value}</span>
              </li>
            ) : null
          )}
        </ul>

        <div className="mt-6 text-[17px] font-bold" style={{ ...headingStyle, color: heading }} data-typography="heading">
          Contact Details
        </div>
        <div className="mt-3 space-y-1.5 text-[13px] leading-relaxed">
          {contactRows.map(([label, value]) =>
            value ? <SimpleRow key={label} label={label} value={value} /> : null
          )}
          {contact?.customFields?.map((field) =>
            field?.value ? (
              <SimpleRow key={field.id || field.label} label={field.label} value={field.value} />
            ) : null
          )}
        </div>
      </section>
    </div>
  );
}

function HeroRow({ label, value }) {
  return (
    <div className="flex items-start">
      <span className="font-bold text-[#f3f5f4]">{label}:</span>
      <span className="ml-2 flex-1 break-words text-[#edf0ee]">{value}</span>
    </div>
  );
}

function SimpleRow({ label, value }) {
  return (
    <div className="flex items-start">
      <div className="w-[122px] pr-2 font-bold text-[#2e2e2e]">{label}</div>
      <div className="w-4 text-center font-bold">:</div>
      <div className="flex-1 break-words text-[#444]">{value}</div>
    </div>
  );
}

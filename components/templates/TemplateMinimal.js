import { createTypographyStyles, getPrimaryHeading } from "../templateTypography";
import { AboutMeSection } from "../templateAboutMe";

export function TemplateMinimal({ data, theme, headingFont, bodyFont }) {
  const { headingStyle, bodyStyle } = createTypographyStyles(headingFont, bodyFont);

  if (!data) return null;
  const { personal, family, contact, photoDataUrl } = data;
  const accent = theme?.accent || "#b45309";
  const accentSoft = theme?.accentSoft || "#fef3c7";
  const textHeading = theme?.textHeading || "#1f2937";

  return (
    <div
      className="relative mx-auto flex min-h-[600px] w-[450px] flex-col overflow-hidden bg-white text-slate-900 shadow-2xl "
      style={{ ...bodyStyle, }}
    >

      <div className="p-8 pb-4 text-center">

        <div className="text-3xl font-serif" style={{ ...headingStyle, color: textHeading }} data-typography="heading">{getPrimaryHeading(personal)}</div>
      </div>


      <div className="p-6 pt-2 grid gap-5 flex-1 text-[11px] leading-relaxed">
        <section>
          <div className="flex items-center gap-2 mb-3">
            <div className="font-semibold uppercase tracking-wider" style={{ ...headingStyle, color: accent }} data-typography="heading">Personal Details</div>
            <div className="h-px flex-1 opacity-50" style={{ backgroundColor: accentSoft }}></div>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {personal?.dateOfBirth ? <p><span className="font-semibold opacity-70">Date of Birth:</span> {personal.dateOfBirth}</p> : null}
            {personal?.timeOfBirth ? <p><span className="font-semibold opacity-70">Time of Birth:</span> {personal.timeOfBirth}</p> : null}
            {personal?.placeOfBirth ? <p><span className="font-semibold opacity-70">Place of Birth:</span> {personal.placeOfBirth}</p> : null}
            {personal?.rashi ? <p><span className="font-semibold opacity-70">Rashi:</span> {personal.rashi}</p> : null}
            {personal?.nakshatra ? <p><span className="font-semibold opacity-70">Nakshatra:</span> {personal.nakshatra}</p> : null}
            {personal?.gotra ? <p><span className="font-semibold opacity-70">Gotra:</span> {personal.gotra}</p> : null}
            {personal?.manglik ? <p><span className="font-semibold opacity-70">Manglik:</span> {personal.manglik}</p> : null}
            {personal?.complexion ? <p><span className="font-semibold opacity-70">Complexion:</span> {personal.complexion}</p> : null}
            {personal?.height ? <p><span className="font-semibold opacity-70">Height:</span> {personal.height}</p> : null}
            {personal?.bachelors ? <p><span className="font-semibold opacity-70">Education:</span> {personal.bachelors}</p> : null}
            {personal?.occupation ? <p className="col-span-2"><span className="font-semibold opacity-70">Occupation:</span> {personal.occupation}</p> : null}
            {personal?.customFields?.map(f => f.value ? <p key={f.id}><span className="font-semibold opacity-70">{f.label}:</span> {f.value}</p> : null)}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-3">
            <div className="font-semibold uppercase tracking-wider" style={{ ...headingStyle, color: accent }} data-typography="heading">Family Details</div>
            <div className="h-px flex-1 opacity-50" style={{ backgroundColor: accentSoft }}></div>
          </div>
          <div className="grid gap-2">
            {family?.fatherName ? <p><span className="font-semibold opacity-70">Father's Name:</span> {family.fatherName}</p> : null}
            {family?.fatherOccupation ? <p><span className="font-semibold opacity-70">Father's Occ.:</span> {family.fatherOccupation}</p> : null}
            {family?.motherName ? <p><span className="font-semibold opacity-70">Mother's Name:</span> {family.motherName}</p> : null}
            {family?.motherOccupation ? <p><span className="font-semibold opacity-70">Mother's Occ.:</span> {family.motherOccupation}</p> : null}
            {family?.siblings ? <p><span className="font-semibold opacity-70">Siblings:</span> {family.siblings}</p> : null}
            {family?.customFields?.map(f => f.value ? <p key={f.id}><span className="font-semibold opacity-70">{f.label}:</span> {f.value}</p> : null)}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-3">
            <div className="font-semibold uppercase tracking-wider" style={{ ...headingStyle, color: accent }} data-typography="heading">Contact Details</div>
            <div className="h-px flex-1 opacity-50" style={{ backgroundColor: accentSoft }}></div>
          </div>
          <div className="grid gap-2">
            {contact?.contactPerson ? <p><span className="font-semibold opacity-70">Contact Person:</span> {contact.contactPerson}</p> : null}
            {contact?.contactNumber ? <p><span className="font-semibold opacity-70">Phone:</span> {contact.contactNumber}</p> : null}
            {contact?.email ? <p><span className="font-semibold opacity-70">Email:</span> {contact.email}</p> : null}
            {contact?.address ? <p><span className="font-semibold opacity-70">Address:</span> {contact.address}</p> : null}
            {contact?.customFields?.map(f => f.value ? <p key={f.id}><span className="font-semibold opacity-70">{f.label}:</span> {f.value}</p> : null)}
          </div>
        </section>

        <AboutMeSection
          text={personal?.aboutMe}
          accent={accent}
          headingStyle={headingStyle}
          className="mt-5"
        />
      </div>



    </div>
  );
}
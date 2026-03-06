export function TemplateTwoColumn({ data, theme, fontFamily }) {
  if (!data) return null;
  const { personal, family, contact, photoDataUrl } = data;
  const accent = theme?.accent || "#b45309";
  const accentSoft = theme?.accentSoft || "#fef3c7";
  const textHeading = theme?.textHeading || "#1f2937";

  return (
    <div 
      className="relative mx-auto flex min-h-[600px] w-[450px] flex-col overflow-hidden bg-white text-slate-900 shadow-2xl "
      style={{ fontFamily: fontFamily || "inherit",  }}
    >
      
      <div className="flex flex-1">
        <div className="w-1/3 p-4 flex flex-col items-center text-center" style={{ backgroundColor: accentSoft }}>
          
        {photoDataUrl ? (
          <img src={photoDataUrl} alt="Profile" className="w-32 h-40 rounded-xl object-cover mb-4 shadow-lg" style={{ borderColor: accent }} />
        ) : (
          <div className="w-32 h-40 rounded-xl object-cover mb-4 shadow-lg bg-slate-100 flex items-center justify-center text-[10px] text-slate-400 border border-dashed border-slate-300">Photo</div>
        )}
    
          <h1 className="text-lg font-bold mt-2" style={{ color: textHeading }}>{personal.name}</h1>
          <p className="text-[10px] uppercase tracking-widest text-slate-600 mt-2">Marriage Biodata</p>
        </div>
        <div className="w-2/3 p-6">
      

      <div className=" grid gap-5 flex-1 text-[11px] leading-relaxed">
        <section>
          <div className="flex items-center gap-2 mb-3">
            <h2 className="font-semibold uppercase tracking-wider" style={{ color: accent }}>Personal Details</h2>
            <div className="h-px flex-1 opacity-50" style={{ backgroundColor: accentSoft }}></div>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {personal?.dateOfBirth ? <p><span className="font-semibold opacity-70">Date of Birth:</span> {personal.dateOfBirth}</p> : null}
            {personal?.timeOfBirth ? <p><span className="font-semibold opacity-70">Time of Birth:</span> {personal.timeOfBirth}</p> : null}
            {personal?.placeOfBirth ? <p><span className="font-semibold opacity-70">Place of Birth:</span> {personal.placeOfBirth}</p> : null}
            {personal?.rashi ? <p><span className="font-semibold opacity-70">Rashi:</span> {personal.rashi}</p> : null}
            {personal?.nakshatra ? <p><span className="font-semibold opacity-70">Nakshatra:</span> {personal.nakshatra}</p> : null}
            {personal?.gotra ? <p><span className="font-semibold opacity-70">Gotra:</span> {personal.gotra}</p> : null}
            {personal?.complexion ? <p><span className="font-semibold opacity-70">Complexion:</span> {personal.complexion}</p> : null}
            {personal?.height ? <p><span className="font-semibold opacity-70">Height:</span> {personal.height}</p> : null}
            {personal?.bachelors ? <p><span className="font-semibold opacity-70">Education:</span> {personal.bachelors}</p> : null}
            {personal?.occupation ? <p className="col-span-2"><span className="font-semibold opacity-70">Occupation:</span> {personal.occupation}</p> : null}
            {personal?.customFields?.map(f => f.value ? <p key={f.id}><span className="font-semibold opacity-70">{f.label}:</span> {f.value}</p> : null)}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-3">
            <h2 className="font-semibold uppercase tracking-wider" style={{ color: accent }}>Family Details</h2>
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
            <h2 className="font-semibold uppercase tracking-wider" style={{ color: accent }}>Contact</h2>
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
      </div>
      
      </div></div>
      
      <div className="p-3 text-center text-[9px] opacity-40 uppercase tracking-widest bg-slate-50/50 mt-auto">
        Created with Antigravity
      </div>
    </div>
  );
}
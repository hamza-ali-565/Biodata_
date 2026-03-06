export function TemplateMinimal({ data, theme, fontFamily }) {
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
      
      <div className="p-8 pb-4 text-center">
        
        <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">Marriage Biodata</p>
        <h1 className="text-3xl font-serif" style={{ color: textHeading }}>{personal.name || "Your Name"}</h1>
      </div>
      

      <div className="p-6 pt-2 grid gap-5 flex-1 text-[11px] leading-relaxed">
        <section>
          <div className="flex items-center gap-2 mb-3">
            <h2 className="font-semibold uppercase tracking-wider" style={{ color: accent }}>Personal Details</h2>
            <div className="h-px flex-1 opacity-50" style={{ backgroundColor: accentSoft }}></div>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <p><span className="font-semibold opacity-70">DOB:</span> {personal.dateOfBirth}</p>
            <p><span className="font-semibold opacity-70">Time:</span> {personal.timeOfBirth}</p>
            <p><span className="font-semibold opacity-70">Height:</span> {personal.height}</p>
            <p><span className="font-semibold opacity-70">Education:</span> {personal.bachelors}</p>
            <p className="col-span-2"><span className="font-semibold opacity-70">Occupation:</span> {personal.occupation}</p>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-3">
            <h2 className="font-semibold uppercase tracking-wider" style={{ color: accent }}>Family Details</h2>
            <div className="h-px flex-1 opacity-50" style={{ backgroundColor: accentSoft }}></div>
          </div>
          <div className="grid gap-2">
            <p><span className="font-semibold opacity-70">Father:</span> {family.fatherName} {family.fatherOccupation ? `(${family.fatherOccupation})` : ''}</p>
            <p><span className="font-semibold opacity-70">Mother:</span> {family.motherName} {family.motherOccupation ? `(${family.motherOccupation})` : ''}</p>
            <p><span className="font-semibold opacity-70">Siblings:</span> {family.siblings}</p>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-3">
            <h2 className="font-semibold uppercase tracking-wider" style={{ color: accent }}>Contact</h2>
            <div className="h-px flex-1 opacity-50" style={{ backgroundColor: accentSoft }}></div>
          </div>
          <div className="grid gap-2">
            <p><span className="font-semibold opacity-70">Phone:</span> {contact.contactNumber}</p>
            <p><span className="font-semibold opacity-70">Email:</span> {contact.email}</p>
            <p><span className="font-semibold opacity-70">Address:</span> {contact.address}</p>
          </div>
        </section>
      </div>
      
      
      
      <div className="p-3 text-center text-[9px] opacity-40 uppercase tracking-widest bg-slate-50/50 mt-auto">
        Created with Antigravity
      </div>
    </div>
  );
}
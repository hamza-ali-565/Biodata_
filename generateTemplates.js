const fs = require('fs');

const templates = [
    { name: "TemplateModern", layout: "modern", photo: "right", border: "left" },
    { name: "TemplateClassic", layout: "traditional", photo: "center", border: "top" },
    { name: "TemplateElegant", layout: "elegant", photo: "left", border: "all" },
    { name: "TemplateMinimal", layout: "minimal", photo: "none", border: "none" },
    { name: "TemplateFloral", layout: "floral", photo: "right", border: "corners" },
    { name: "TemplateGeometric", layout: "geometric", photo: "left", border: "bottom" },
    { name: "TemplateCard", layout: "card", photo: "center", border: "rounded" },
    { name: "TemplateTwoColumn", layout: "twocol", photo: "sidebar", border: "none" },
    { name: "TemplateSidebar", layout: "sidebar", photo: "sidebar-top", border: "none" },
    { name: "TemplateCentered", layout: "centered", photo: "center", border: "box" },
    { name: "TemplateGold", layout: "luxury", photo: "right", border: "gold-frame" },
    { name: "TemplateDark", layout: "dark", photo: "left", border: "none" },
    { name: "TemplateVintage", layout: "vintage", photo: "center", border: "dashed" },
    { name: "TemplateLuxury", layout: "luxury-bold", photo: "left", border: "double" },
    { name: "TemplateRoyal", layout: "royal", photo: "center", border: "arch" },
];

templates.forEach(({ name, photo, border, layout }) => {
    const isDark = layout === "dark";
    const bgClass = isDark ? "bg-slate-900 text-slate-100" : "bg-white text-slate-900";
    const borderStyle = border === "top" ? "borderTop: `8px solid ${accent}`" :
        border === "left" ? "borderLeft: `12px solid ${accent}`" :
            border === "double" ? "border: `4px double ${accent}`" :
                border === "all" ? "border: `2px solid ${accentSoft}`" :
                    "";

    let photoMarkup = ``;
    if (photo !== "none") {
        let photoWrapperClass = "w-24 h-32 rounded-lg object-cover overflow-hidden";
        if (photo === "center") photoWrapperClass += " mx-auto mb-4 border-2";
        if (photo === "sidebar" || photo === "sidebar-top") photoWrapperClass = "w-32 h-40 rounded-xl object-cover mb-4 shadow-lg";

        photoMarkup = `
        {photoDataUrl ? (
          <img src={photoDataUrl} alt="Profile" className="${photoWrapperClass}" style={{ borderColor: accent }} />
        ) : (
          <div className="${photoWrapperClass} bg-slate-100 flex items-center justify-center text-[10px] text-slate-400 border border-dashed border-slate-300">Photo</div>
        )}
    `;
    }

    const content = `
export function ${name}({ data, theme, fontFamily }) {
  if (!data) return null;
  const { personal, family, contact, photoDataUrl } = data;
  const accent = theme?.accent || "#b45309";
  const accentSoft = theme?.accentSoft || "#fef3c7";
  const textHeading = theme?.textHeading || "#1f2937";

  return (
    <div 
      className="relative mx-auto flex min-h-[600px] w-[450px] flex-col overflow-hidden ${bgClass} shadow-2xl ${border === 'rounded' ? 'rounded-[2rem]' : ''}"
      style={{ fontFamily: fontFamily || "inherit", ${borderStyle} }}
    >
      ${photo === 'left' || photo === 'right' ? `
      <div className="p-6 flex ${photo === 'right' ? 'flex-row-reverse' : 'flex-row'} gap-6 items-center bg-slate-50/50">
        ${photoMarkup}
        <div className="flex-1 ${photo === 'right' ? 'text-right' : 'text-left'}">
          <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Marriage Biodata</p>
          <h1 className="text-2xl font-bold" style={{ color: textHeading }}>{personal.name || "Your Name"}</h1>
          <p className="text-xs text-slate-600 mt-1">{personal.occupation || "Occupation"}</p>
        </div>
      </div>
      ` : photo === 'sidebar' ? `
      <div className="flex flex-1">
        <div className="w-1/3 p-4 flex flex-col items-center text-center" style={{ backgroundColor: accentSoft }}>
          ${photoMarkup}
          <h1 className="text-lg font-bold mt-2" style={{ color: textHeading }}>{personal.name}</h1>
          <p className="text-[10px] uppercase tracking-widest text-slate-600 mt-2">Marriage Biodata</p>
        </div>
        <div className="w-2/3 p-6">
      ` : `
      <div className="p-8 pb-4 text-center">
        ${photo === 'center' ? photoMarkup : ''}
        <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">Marriage Biodata</p>
        <h1 className="text-3xl font-serif" style={{ color: textHeading }}>{personal.name || "Your Name"}</h1>
      </div>
      `}

      <div className="${photo === 'sidebar' ? '' : 'p-6 pt-2'} grid gap-5 flex-1 text-[11px] leading-relaxed">
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
            <p><span className="font-semibold opacity-70">Father:</span> {family.fatherName} {family.fatherOccupation ? \`(\${family.fatherOccupation})\` : ''}</p>
            <p><span className="font-semibold opacity-70">Mother:</span> {family.motherName} {family.motherOccupation ? \`(\${family.motherOccupation})\` : ''}</p>
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
      
      ${photo === 'sidebar' ? '</div></div>' : ''}
      
      <div className="p-3 text-center text-[9px] opacity-40 uppercase tracking-widest bg-slate-50/50 mt-auto">
        Created with Antigravity
      </div>
    </div>
  );
}
`;
    fs.writeFileSync('components/templates/' + name + '.js', content.trim());
});

fs.writeFileSync('components/templates/index.js',
    templates.map(t => 'export { ' + t.name + ' } from "./' + t.name + '";').join('\\n')
);
console.log("All templates created successfully.");

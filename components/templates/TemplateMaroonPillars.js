export function TemplateMaroonPillars({ data, theme = {}, fontFamily }) {
    const { personal, family, contact } = data || {};

    // High contrast maroon and gold/yellow
    const bgColor = theme?.accent || "#6b2c2c"; // Deep maroon red
    const accentColor = theme?.textHeading || "#d4b04c"; // Gold/Mustard yellow
    const textColor = "#ffffff";

    return (
        <div
            className="relative mx-auto flex min-h-[600px] min-w-[700px] flex-col overflow-hidden shadow-2xl"
            style={{ fontFamily: fontFamily || "inherit", backgroundColor: bgColor }}
        >
            <div className="relative w-full min-h-full p-8 sm:p-12">

                {/* Subtle Right Aligned Mandala Watermark */}
                <div className="absolute right-[-150px] top-[10%] opacity-10 pointer-events-none">
                    <svg width="600" height="600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="45" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 3" />
                        <circle cx="50" cy="50" r="35" stroke="#ffffff" strokeWidth="2" />
                        <circle cx="50" cy="50" r="25" stroke="#ffffff" strokeWidth="1" />
                        <circle cx="50" cy="50" r="10" fill="#ffffff" />
                        {[...Array(12)].map((_, i) => (
                            <path
                                key={i}
                                d="M50 5 C55 20 65 25 50 40 C35 25 45 20 50 5"
                                fill="#ffffff"
                                transform={`rotate(${i * 30} 50 50)`}
                            />
                        ))}
                    </svg>
                </div>

                <div className="relative z-10 flex flex-col md:flex-row gap-8">

                    {/* Main Details Column */}
                    <div className="flex-1 space-y-12">

                        {/* Header section with Name hidden here if photo is present, or shown if no photo */}
                        {!data?.photoDataUrl && (
                            <div className="text-center md:text-left mb-8">
                                <h1 className="text-4xl font-bold uppercase tracking-wider text-white">
                                    {personal?.name || "Your Name"}
                                </h1>
                            </div>
                        )}

                        <Section title="PERSONAL DETAILS" accentColor={accentColor}>
                            {personal?.dateOfBirth ? <Row label="Date of Birth" value={personal.dateOfBirth} textColor={textColor} /> : null}
                            {personal?.timeOfBirth ? <Row label="Time of Birth" value={personal.timeOfBirth} textColor={textColor} /> : null}
                            {personal?.placeOfBirth ? <Row label="Place of Birth" value={personal.placeOfBirth} textColor={textColor} /> : null}
                            {personal?.rashi ? <Row label="Rashi" value={personal.rashi} textColor={textColor} /> : null}
                            {personal?.nakshatra ? <Row label="Nakshatra" value={personal.nakshatra} textColor={textColor} /> : null}
                            {personal?.gotra ? <Row label="Gotra" value={personal.gotra} textColor={textColor} /> : null}
                            {personal?.complexion ? <Row label="Complexion" value={personal.complexion} textColor={textColor} /> : null}
                            {personal?.height ? <Row label="Height" value={personal.height} textColor={textColor} /> : null}
                            {personal?.bachelors ? <Row label="Education" value={personal.bachelors} textColor={textColor} /> : null}
                            {personal?.occupation ? <Row label="Occupation" value={personal.occupation} textColor={textColor} /> : null}
                            {personal?.customFields?.map(f => f.value ? <Row key={f.id} label={f.label} value={f.value} textColor={textColor} /> : null)}
                        </Section>

                        <Section title="FAMILY DETAILS" accentColor={accentColor}>
                            {family?.fatherName ? <Row label="Father's Name" value={family.fatherName} textColor={textColor} /> : null}
                            {family?.fatherOccupation ? <Row label="Father's Occ." value={family.fatherOccupation} textColor={textColor} /> : null}
                            {family?.motherName ? <Row label="Mother's Name" value={family.motherName} textColor={textColor} /> : null}
                            {family?.motherOccupation ? <Row label="Mother's Occ." value={family.motherOccupation} textColor={textColor} /> : null}
                            {family?.siblings ? <Row label="Siblings" value={family.siblings} textColor={textColor} /> : null}
                            {family?.customFields?.map(f => f.value ? <Row key={f.id} label={f.label} value={f.value} textColor={textColor} /> : null)}
                        </Section>

                        <Section title="CONTACT DETAILS" accentColor={accentColor}>
                            {contact?.contactPerson ? <Row label="Contact Person" value={contact.contactPerson} textColor={textColor} /> : null}
                            {contact?.contactNumber ? <Row label="Phone" value={contact.contactNumber} textColor={textColor} /> : null}
                            {contact?.email ? <Row label="Email" value={contact.email} textColor={textColor} /> : null}
                            {contact?.address ? <Row label="Address" value={contact.address} textColor={textColor} /> : null}
                            {contact?.customFields?.map(f => f.value ? <Row key={f.id} label={f.label} value={f.value} textColor={textColor} /> : null)}
                        </Section>

                    </div>

                    {/* Photo Column */}
                    {data?.photoDataUrl && (
                        <div className="md:w-[280px] flex-shrink-0 flex flex-col items-center mb-8 md:mb-0">
                            <div className="w-[180px] h-[180px] rounded-full overflow-hidden border-[4px] shadow-2xl mb-6 relative z-10" style={{ borderColor: accentColor }}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={data.photoDataUrl}
                                    alt={personal.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h1 className="text-2xl font-bold uppercase tracking-widest text-center text-white drop-shadow-md">
                                {personal?.name || "Your Name"}
                            </h1>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

function Section({ title, children, accentColor }) {
    return (
        <div className="w-full max-w-xl">
            {/* Pill shaped title */}
            <div
                className="inline-block px-8 py-2.5 rounded-full mb-6 shadow-lg shadow-black/20"
                style={{ backgroundColor: accentColor }}
            >
                <h2 className="text-[16px] font-bold text-white tracking-widest font-serif drop-shadow-sm uppercase">
                    {title}
                </h2>
            </div>

            {/* Content */}
            <div className="space-y-4 pl-4 md:pl-8">
                {children}
            </div>
        </div>
    );
}

function Row({ label, value, textColor }) {
    if (!value) return null;
    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-6 text-[15px] leading-tight">
            <div className="sm:w-[140px] flex-shrink-0 font-medium" style={{ color: `${textColor}f0`, textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                {label}
            </div>
            <div className="flex-1 font-bold" style={{ color: textColor, textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                {value || "—"}
            </div>
        </div>
    );
}

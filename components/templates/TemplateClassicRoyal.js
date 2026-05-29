export function TemplateClassicRoyal({ data, theme, headingFont, bodyFont }) {
  const headingStyle = { fontFamily: headingFont || "inherit" };
  const bodyStyle = { fontFamily: bodyFont || "inherit" };

    const { personal, family, contact } = data || {};

    // A classic orange/brown palette from the image
    const primaryColor = theme?.accent || "#a0522d";
    const textColor = theme?.textHeading || "#333333";

    return (
        <div
            className="relative mx-auto flex min-h-[600px] min-w-[700px] flex-col overflow-hidden shadow-2xl bg-[#fffdf7] p-8 md:p-12"
            style={bodyStyle}
        >
            <div
                className="relative h-full w-full border-[3px] p-6 sm:p-10"
                style={{ borderColor: primaryColor }}
            >
                {/* Corner Ornaments */}
                <CornerOrnament position="top-left" color={primaryColor} />
                <CornerOrnament position="top-right" color={primaryColor} />
                <CornerOrnament position="bottom-left" color={primaryColor} />
                <CornerOrnament position="bottom-right" color={primaryColor} />

                {/* Header Section Removed */}
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Details Column */}
                    <div className="flex-1 space-y-8">
                        <Section title="PERSONAL DETAILS" color={primaryColor}>
                            {personal?.dateOfBirth ? <Row label="Date of Birth" value={personal.dateOfBirth} color={primaryColor} /> : null}
                            {personal?.timeOfBirth ? <Row label="Time of Birth" value={personal.timeOfBirth} color={primaryColor} /> : null}
                            {personal?.placeOfBirth ? <Row label="Place of Birth" value={personal.placeOfBirth} color={primaryColor} /> : null}
                            {personal?.rashi ? <Row label="Rashi" value={personal.rashi} color={primaryColor} /> : null}
                            {personal?.nakshatra ? <Row label="Nakshatra" value={personal.nakshatra} color={primaryColor} /> : null}
                            {personal?.gotra ? <Row label="Gotra" value={personal.gotra} color={primaryColor} /> : null}
                            {personal?.complexion ? <Row label="Complexion" value={personal.complexion} color={primaryColor} /> : null}
                            {personal?.height ? <Row label="Height" value={personal.height} color={primaryColor} /> : null}
                            {personal?.bachelors ? <Row label="Education" value={personal.bachelors} color={primaryColor} /> : null}
                            {personal?.occupation ? <Row label="Occupation" value={personal.occupation} color={primaryColor} /> : null}
                            {personal?.customFields?.map(f => f.value ? <Row key={f.id} label={f.label} value={f.value} color={primaryColor} /> : null)}
                        </Section>

                        <Section title="FAMILY DETAILS" color={primaryColor}>
                            {family?.fatherName ? <Row label="Father's Name" value={family.fatherName} color={primaryColor} /> : null}
                            {family?.fatherOccupation ? <Row label="Father's Occ." value={family.fatherOccupation} color={primaryColor} /> : null}
                            {family?.motherName ? <Row label="Mother's Name" value={family.motherName} color={primaryColor} /> : null}
                            {family?.motherOccupation ? <Row label="Mother's Occ." value={family.motherOccupation} color={primaryColor} /> : null}
                            {family?.siblings ? <Row label="Siblings" value={family.siblings} color={primaryColor} /> : null}
                            {family?.customFields?.map(f => f.value ? <Row key={f.id} label={f.label} value={f.value} color={primaryColor} /> : null)}
                        </Section>

                        <Section title="CONTACT DETAILS" color={primaryColor}>
                            {contact?.contactPerson ? <Row label="Contact Person" value={contact.contactPerson} color={primaryColor} /> : null}
                            {contact?.contactNumber ? <Row label="Phone" value={contact.contactNumber} color={primaryColor} /> : null}
                            {contact?.email ? <Row label="Email" value={contact.email} color={primaryColor} /> : null}
                            {contact?.address ? <Row label="Address" value={contact.address} color={primaryColor} /> : null}
                            {contact?.customFields?.map(f => f.value ? <Row key={f.id} label={f.label} value={f.value} color={primaryColor} /> : null)}
                        </Section>
                    </div>

                    {/* Photo Column */}
                    {data?.photoDataUrl && (
                        <div className="md:w-1/3 flex-shrink-0 flex justify-end">
                            <div className="w-full max-w-[220px] aspect-[3/4] overflow-hidden border-2 border-slate-200 shadow-sm bg-slate-100">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={data.photoDataUrl}
                                    alt={personal.name || "Profile"}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function Section({ title, children, color }) {
    return (
        <div className="mb-6">
            <div className="text-sm font-bold tracking-wide uppercase mb-4" style={{ color }}>
                {title}
            </div>
            <div className="space-y-2.5">
                {children}
            </div>
        </div>
    );
}

function Row({ label, value }) {
    if (!value) return null;
    return (
        <div className="flex items-start text-[13px] leading-snug">
            <div className="w-[140px] flex-shrink-0 text-slate-700">{label}</div>
            <div className="w-4 text-slate-500">:</div>
            <div className="flex-1 font-medium text-slate-800 break-words">{value || "—"}</div>
        </div>
    );
}

function CornerOrnament({ position, color }) {
    const rotation = {
        "top-left": "rotate-0",
        "top-right": "rotate-90",
        "bottom-right": "rotate-180",
        "bottom-left": "-rotate-90",
    }[position];

    const positioning = {
        "top-left": "top-1.5 left-1.5",
        "top-right": "top-1.5 right-1.5",
        "bottom-right": "bottom-1.5 right-1.5",
        "bottom-left": "bottom-1.5 left-1.5",
    }[position];

    return (
        <div className={`absolute w-12 h-12 ${positioning} ${rotation}`}>
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H20C20 0 40 20 40 40C40 60 60 70 80 70C90 70 100 65 100 65" stroke={color} strokeWidth="2" strokeLinecap="round" />
                <path d="M0 0V20C0 20 20 40 40 40C60 40 70 60 70 80C70 90 65 100 65 100" stroke={color} strokeWidth="2" strokeLinecap="round" />
                <path d="M10 10H30C30 10 50 30 50 50" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
                <path d="M10 10V30C10 30 30 50 50 50" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="70" cy="70" r="3" fill={color} />
                <circle cx="85" cy="55" r="2" fill={color} />
                <circle cx="55" cy="85" r="2" fill={color} />
            </svg>
        </div>
    );
}

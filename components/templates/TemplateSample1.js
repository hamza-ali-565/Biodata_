export function TemplateSample1({ data, theme = {}, fontFamily }) {
    const { personal, family, contact, photoDataUrl } = data || {};

    const primaryColor = theme?.accent || "#0066cc"; // The blue header color
    const textColor = theme?.textHeading || "#000000";

    return (
        <div
            className="relative mx-auto flex min-h-[800px] w-[600px] flex-col overflow-hidden bg-gradient-to-br from-cyan-400 via-teal-300 to-yellow-300 p-8 sm:p-12 shadow-2xl"
            style={{ fontFamily: fontFamily || "inherit", color: textColor }}
        >
            {/* Outline Border with Diamonds */}
            <div className="absolute inset-4 border border-black pointer-events-none">
                {/* Top Diamond */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-transparent px-2">
                    <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 10L20 0L30 10L20 20L10 10Z" fill="black" />
                        <path d="M5 10L10 5L15 10L10 15L5 10Z" fill="black" />
                        <path d="M25 10L30 5L35 10L30 15L25 10Z" fill="black" />
                        <line x1="0" y1="10" x2="5" y2="10" stroke="black" strokeWidth="2" />
                        <line x1="35" y1="10" x2="40" y2="10" stroke="black" strokeWidth="2" />
                    </svg>
                </div>
                {/* Bottom Diamond */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center gap-2 bg-transparent px-2">
                    <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 10L20 0L30 10L20 20L10 10Z" fill="black" />
                        <path d="M5 10L10 5L15 10L10 15L5 10Z" fill="black" />
                        <path d="M25 10L30 5L35 10L30 15L25 10Z" fill="black" />
                        <line x1="0" y1="10" x2="5" y2="10" stroke="black" strokeWidth="2" />
                        <line x1="35" y1="10" x2="40" y2="10" stroke="black" strokeWidth="2" />
                    </svg>
                </div>
                {/* Left Diamond */}
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 bg-transparent py-2">
                    <svg width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 10L20 20L10 30L0 20L10 10Z" fill="black" />
                        <path d="M10 5L15 10L10 15L5 10L10 5Z" fill="black" />
                        <path d="M10 25L15 30L10 35L5 30L10 25Z" fill="black" />
                        <line x1="10" y1="0" x2="10" y2="5" stroke="black" strokeWidth="2" />
                        <line x1="10" y1="35" x2="10" y2="40" stroke="black" strokeWidth="2" />
                    </svg>
                </div>
                {/* Right Diamond */}
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 bg-transparent py-2">
                    <svg width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 10L20 20L10 30L0 20L10 10Z" fill="black" />
                        <path d="M10 5L15 10L10 15L5 10L10 5Z" fill="black" />
                        <path d="M10 25L15 30L10 35L5 30L10 25Z" fill="black" />
                        <line x1="10" y1="0" x2="10" y2="5" stroke="black" strokeWidth="2" />
                        <line x1="10" y1="35" x2="10" y2="40" stroke="black" strokeWidth="2" />
                    </svg>
                </div>
            </div>

            {/* Inner Content Boundary */}
            <div className="relative z-10 w-full flex flex-col pt-8 space-y-8">

                {/* If a photo exists, let's put it at the very top, centered, as a nice touch even though the sample didn't have it explicitly shown */}
                {photoDataUrl && (
                    <div className="flex justify-center mb-4">
                        <div className="w-32 h-32 overflow-hidden border-2 border-white shadow-md">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={photoDataUrl} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    </div>
                )}

                <Section title="PERSONAL DETAILS" bgColor={primaryColor}>
                    {personal?.name ? <Row label="Name" value={personal.name} /> : null}
                    {personal?.dateOfBirth ? <Row label="Date of Birth" value={personal.dateOfBirth} /> : null}
                    {personal?.timeOfBirth ? <Row label="Time of Birth" value={personal.timeOfBirth} /> : null}
                    {personal?.placeOfBirth ? <Row label="Place of Birth" value={personal.placeOfBirth} /> : null}
                    {personal?.height ? <Row label="Height" value={personal.height} /> : null}
                    {personal?.complexion ? <Row label="Complexion" value={personal.complexion} /> : null}
                    {personal?.bloodGroup ? <Row label="Blood Group" value={personal.bloodGroup} /> : null}
                    {personal?.religion ? <Row label="Religion" value={personal.religion} /> : null}
                    {personal?.caste ? <Row label="Caste" value={personal.caste} /> : null}
                    {personal?.gotra ? <Row label="Gotra" value={personal.gotra} /> : null}
                    {personal?.rashi ? <Row label="Rashi" value={personal.rashi} /> : null}
                    {personal?.nakshatra ? <Row label="Nakshatra" value={personal.nakshatra} /> : null}
                    {personal?.manglik !== undefined ? <Row label="Manglik" value={personal.manglik} /> : null}
                    {personal?.education ? <Row label="Education" value={personal.education} /> : null}
                    {personal?.bachelors ? <Row label="Degree" value={personal.bachelors} /> : null}
                    {personal?.occupation ? <Row label="Occupation" value={personal.occupation} /> : null}
                    {personal?.income ? <Row label="Annual Income" value={personal.income} /> : null}
                    {personal?.customFields?.map(f => f.value ? <Row key={f.id} label={f.label} value={f.value} /> : null)}
                </Section>

                <Section title="FAMILY DETAILS" bgColor={primaryColor}>
                    {family?.fatherName ? <Row label="Father's Name" value={family.fatherName} /> : null}
                    {family?.fatherOccupation ? <Row label="Father's Occupation" value={family.fatherOccupation} /> : null}
                    {family?.motherName ? <Row label="Mother's Name" value={family.motherName} /> : null}
                    {family?.motherOccupation ? <Row label="Mother's Occupation" value={family.motherOccupation} /> : null}
                    {family?.siblings ? <Row label="Siblings" value={family.siblings} /> : null}
                    {family?.familyType ? <Row label="Family Type" value={family.familyType} /> : null}
                    {family?.familyValues ? <Row label="Family Values" value={family.familyValues} /> : null}
                    {family?.customFields?.map(f => f.value ? <Row key={f.id} label={f.label} value={f.value} /> : null)}
                </Section>

                <Section title="CONTACT INFORMATION" bgColor={primaryColor}>
                    {contact?.contactPerson ? <Row label="Contact Person" value={contact.contactPerson} /> : null}
                    {contact?.contactNumber ? <Row label="Contact Number" value={contact.contactNumber} /> : null}
                    {contact?.email ? <Row label="Email" value={contact.email} /> : null}
                    {contact?.address ? <Row label="Address" value={contact.address} /> : null}
                    {contact?.customFields?.map(f => f.value ? <Row key={f.id} label={f.label} value={f.value} /> : null)}
                </Section>
            </div>

            <div className="relative z-10 w-full mt-auto pt-6 flex justify-center">
                <p className="text-[10px] text-black/50 tracking-widest uppercase">weddingbiodata.in</p>
            </div>
        </div>
    );
}

function Section({ title, children, bgColor }) {
    return (
        <div className="w-full flex flex-col gap-4">
            <div
                className="w-full text-white font-bold px-4 py-2 uppercase tracking-wide text-sm font-sans"
                style={{ backgroundColor: bgColor }}
            >
                {title}
            </div>
            <div className="flex flex-col gap-1.5 px-4 font-sans text-[13px] text-gray-900 font-medium">
                {children}
            </div>
        </div>
    );
}

function Row({ label, value }) {
    if (!value) return null;
    return (
        <div className="flex font-sans">
            <div className="w-40 font-bold pr-2">{label}</div>
            <div className="w-2 font-bold px-1">:</div>
            <div className="flex-1 break-words">{value}</div>
        </div>
    );
}

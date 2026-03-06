export function TemplateSample4({ data, theme = {}, fontFamily }) {
    const { personal, family, contact, photoDataUrl } = data || {};

    const headerBgColor = theme?.accent || "#d26732"; // Terracotta orange
    const flourishPrimary = "#800080"; // Purple
    const flourishSecondary = "#e67e22"; // Orange
    const textColor = theme?.textHeading || "#000000";

    return (
        <div
            className="relative mx-auto flex min-h-[800px] w-[600px] flex-col overflow-hidden shadow-2xl bg-white p-8 sm:p-12 border-x-4"
            style={{ fontFamily: fontFamily || "inherit", color: textColor, borderColor: headerBgColor }}
        >
            {/* Top Border Ornaments */}
            <div className="absolute top-0 left-0 w-full h-16 pointer-events-none flex justify-between">
                {/* Top Left Floral */}
                <div className="relative w-32 h-32 -translate-x-4 -translate-y-4">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0 C40 0 80 20 100 60 C80 60 40 40 0 0 Z" fill={flourishSecondary} opacity="0.8" />
                        <circle cx="20" cy="20" r="10" fill={flourishPrimary} />
                        <path d="M0 0 C20 40 20 80 60 100 C60 80 40 40 0 0 Z" fill={flourishPrimary} opacity="0.9" />
                        <circle cx="30" cy="40" r="5" fill={flourishSecondary} />
                        <circle cx="40" cy="30" r="5" fill={flourishSecondary} />
                        <path d="M0 50 C20 50 30 50 40 70 C30 70 20 60 0 50Z" fill={flourishSecondary} />
                    </svg>
                </div>

                {/* Top Right Floral */}
                <div className="relative w-32 h-32 translate-x-4 -translate-y-4 rotate-90 scale-y-[-1]">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0 C40 0 80 20 100 60 C80 60 40 40 0 0 Z" fill={flourishSecondary} opacity="0.8" />
                        <circle cx="20" cy="20" r="10" fill={flourishPrimary} />
                        <path d="M0 0 C20 40 20 80 60 100 C60 80 40 40 0 0 Z" fill={flourishPrimary} opacity="0.9" />
                        <circle cx="30" cy="40" r="5" fill={flourishSecondary} />
                        <circle cx="40" cy="30" r="5" fill={flourishSecondary} />
                        <path d="M0 50 C20 50 30 50 40 70 C30 70 20 60 0 50Z" fill={flourishSecondary} />
                    </svg>
                </div>

                {/* Top Center Arch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-12">
                    <svg viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0 C50 60 150 60 200 0" stroke={flourishPrimary} strokeWidth="3" fill="none" />
                        <path d="M20 0 C70 40 130 40 180 0" stroke={flourishSecondary} strokeWidth="2" fill="none" />
                    </svg>
                </div>
            </div>

            {/* Middle Side Ornaments */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-3 pointer-events-none">
                <svg width="24" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="30" r="10" fill={flourishPrimary} />
                    <line x1="12" y1="0" x2="12" y2="60" stroke={flourishPrimary} strokeWidth="2" />
                </svg>
            </div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-3 pointer-events-none">
                <svg width="24" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="30" r="10" fill={flourishPrimary} />
                    <line x1="12" y1="0" x2="12" y2="60" stroke={flourishPrimary} strokeWidth="2" />
                </svg>
            </div>

            {/* Bottom Border Ornaments */}
            <div className="absolute bottom-0 left-0 w-full h-16 pointer-events-none flex justify-between">
                {/* Bottom Left Floral */}
                <div className="relative w-32 h-32 -translate-x-4 translate-y-4 -rotate-90 scale-y-[-1]">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0 C40 0 80 20 100 60 C80 60 40 40 0 0 Z" fill={flourishSecondary} opacity="0.8" />
                        <circle cx="20" cy="20" r="10" fill={flourishPrimary} />
                        <path d="M0 0 C20 40 20 80 60 100 C60 80 40 40 0 0 Z" fill={flourishPrimary} opacity="0.9" />
                        <circle cx="30" cy="40" r="5" fill={flourishSecondary} />
                        <circle cx="40" cy="30" r="5" fill={flourishSecondary} />
                        <path d="M0 50 C20 50 30 50 40 70 C30 70 20 60 0 50Z" fill={flourishSecondary} />
                    </svg>
                </div>

                {/* Bottom Right Floral */}
                <div className="relative w-32 h-32 translate-x-4 translate-y-4 rotate-180">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0 C40 0 80 20 100 60 C80 60 40 40 0 0 Z" fill={flourishSecondary} opacity="0.8" />
                        <circle cx="20" cy="20" r="10" fill={flourishPrimary} />
                        <path d="M0 0 C20 40 20 80 60 100 C60 80 40 40 0 0 Z" fill={flourishPrimary} opacity="0.9" />
                        <circle cx="30" cy="40" r="5" fill={flourishSecondary} />
                        <circle cx="40" cy="30" r="5" fill={flourishSecondary} />
                        <path d="M0 50 C20 50 30 50 40 70 C30 70 20 60 0 50Z" fill={flourishSecondary} />
                    </svg>
                </div>

                {/* Bottom Center Arch */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-12 origin-bottom rotate-180">
                    <svg viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0 C50 60 150 60 200 0" stroke={flourishPrimary} strokeWidth="3" fill="none" />
                        <path d="M20 0 C70 40 130 40 180 0" stroke={flourishSecondary} strokeWidth="2" fill="none" />
                    </svg>
                </div>
            </div>

            {/* Inner Content Boundary */}
            <div className="relative z-10 w-full flex flex-col pt-4 space-y-8">

                {photoDataUrl && (
                    <div className="flex justify-center mb-0">
                        <div className="w-32 h-32 overflow-hidden border-[3px] rounded-sm p-1 shadow-md bg-white translate-x-2 rotate-3" style={{ borderColor: headerBgColor }}>
                            <div className="w-full h-full overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={photoDataUrl} alt="Profile" className="w-full h-full object-cover grayscale opacity-90 sepia-[.3]" />
                            </div>
                        </div>
                    </div>
                )}

                <Section title="PERSONAL DETAILS" bgColor={headerBgColor}>
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

                <Section title="FAMILY DETAILS" bgColor={headerBgColor}>
                    {family?.fatherName ? <Row label="Father's Name" value={family.fatherName} /> : null}
                    {family?.fatherOccupation ? <Row label="Father's Occupation" value={family.fatherOccupation} /> : null}
                    {family?.motherName ? <Row label="Mother's Name" value={family.motherName} /> : null}
                    {family?.motherOccupation ? <Row label="Mother's Occupation" value={family.motherOccupation} /> : null}
                    {family?.siblings ? <Row label="Siblings" value={family.siblings} /> : null}
                    {family?.familyType ? <Row label="Family Type" value={family.familyType} /> : null}
                    {family?.familyValues ? <Row label="Family Values" value={family.familyValues} /> : null}
                    {family?.customFields?.map(f => f.value ? <Row key={f.id} label={f.label} value={f.value} /> : null)}
                </Section>

                <Section title="CONTACT INFORMATION" bgColor={headerBgColor}>
                    {contact?.contactPerson ? <Row label="Contact Person" value={contact.contactPerson} /> : null}
                    {contact?.contactNumber ? <Row label="Contact Number" value={contact.contactNumber} /> : null}
                    {contact?.email ? <Row label="Email" value={contact.email} /> : null}
                    {contact?.address ? <Row label="Address" value={contact.address} /> : null}
                    {contact?.customFields?.map(f => f.value ? <Row key={f.id} label={f.label} value={f.value} /> : null)}
                </Section>
            </div>

            <div className="relative z-10 w-full mt-auto pt-6 pb-2 text-center text-xs opacity-50 uppercase justify-center flex font-sans tracking-[0.2em] font-medium text-[#d26732]">
                weddingbiodata.in
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
            <div className="w-40 font-bold pr-2 text-[#d26732]">{label}</div>
            <div className="w-2 font-bold px-1 text-[#d26732]">:</div>
            <div className="flex-1 text-gray-800 break-words">{value}</div>
        </div>
    );
}

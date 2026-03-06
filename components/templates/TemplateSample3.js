export function TemplateSample3({ data, theme = {}, fontFamily }) {
    const { personal, family, contact, photoDataUrl } = data || {};

    const headerBgColor = theme?.accent || "#fbca83"; // Light gold/orange header
    const borderColor = theme?.accentSoft || "#c8942b"; // Darker gold for borders
    const textColor = theme?.textHeading || "#000000";

    return (
        <div
            className="relative mx-auto flex min-h-[800px] w-[600px] flex-col overflow-hidden shadow-2xl bg-[#fdfaf5] p-6"
            style={{ fontFamily: fontFamily || "inherit", color: textColor }}
        >
            {/* Ornate Gold Border */}
            <div
                className="absolute inset-[15px] border-4 pointer-events-none z-0"
                style={{ borderColor: borderColor }}
            >
                {/* Inner thin border */}
                <div className="absolute inset-[4px] border border-opacity-50 pointer-events-none" style={{ borderColor: borderColor }}></div>

                {/* SVG Corner - Top Left */}
                <div className="absolute -top-[14px] -left-[14px]">
                    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0C50 0 100 0 100 0C100 0 100 50 100 100C100 70 80 50 50 50C20 50 0 70 0 100C0 100 0 50 0 0Z" fill="#fdfaf5" />
                        <path d="M10 10C40 10 90 10 90 10C90 10 90 60 90 90C90 65 75 45 50 45C25 45 10 65 10 90C10 90 10 40 10 10Z" stroke={borderColor} strokeWidth="3" fill="none" />
                        <circle cx="25" cy="25" r="5" fill={borderColor} />
                        <path d="M50 20 C60 10 70 20 60 30 C50 40 40 30 50 20" stroke={borderColor} strokeWidth="2" fill="none" />
                        <path d="M20 50 C10 60 20 70 30 60 C40 50 30 40 20 50" stroke={borderColor} strokeWidth="2" fill="none" />
                    </svg>
                </div>
                {/* SVG Corner - Top Right */}
                <div className="absolute -top-[14px] -right-[14px] rotate-90">
                    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0C50 0 100 0 100 0C100 0 100 50 100 100C100 70 80 50 50 50C20 50 0 70 0 100C0 100 0 50 0 0Z" fill="#fdfaf5" />
                        <path d="M10 10C40 10 90 10 90 10C90 10 90 60 90 90C90 65 75 45 50 45C25 45 10 65 10 90C10 90 10 40 10 10Z" stroke={borderColor} strokeWidth="3" fill="none" />
                        <circle cx="25" cy="25" r="5" fill={borderColor} />
                        <path d="M50 20 C60 10 70 20 60 30 C50 40 40 30 50 20" stroke={borderColor} strokeWidth="2" fill="none" />
                        <path d="M20 50 C10 60 20 70 30 60 C40 50 30 40 20 50" stroke={borderColor} strokeWidth="2" fill="none" />
                    </svg>
                </div>
                {/* SVG Corner - Bottom Right */}
                <div className="absolute -bottom-[14px] -right-[14px] rotate-180">
                    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0C50 0 100 0 100 0C100 0 100 50 100 100C100 70 80 50 50 50C20 50 0 70 0 100C0 100 0 50 0 0Z" fill="#fdfaf5" />
                        <path d="M10 10C40 10 90 10 90 10C90 10 90 60 90 90C90 65 75 45 50 45C25 45 10 65 10 90C10 90 10 40 10 10Z" stroke={borderColor} strokeWidth="3" fill="none" />
                        <circle cx="25" cy="25" r="5" fill={borderColor} />
                        <path d="M50 20 C60 10 70 20 60 30 C50 40 40 30 50 20" stroke={borderColor} strokeWidth="2" fill="none" />
                        <path d="M20 50 C10 60 20 70 30 60 C40 50 30 40 20 50" stroke={borderColor} strokeWidth="2" fill="none" />
                    </svg>
                </div>
                {/* SVG Corner - Bottom Left */}
                <div className="absolute -bottom-[14px] -left-[14px] -rotate-90">
                    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0C50 0 100 0 100 0C100 0 100 50 100 100C100 70 80 50 50 50C20 50 0 70 0 100C0 100 0 50 0 0Z" fill="#fdfaf5" />
                        <path d="M10 10C40 10 90 10 90 10C90 10 90 60 90 90C90 65 75 45 50 45C25 45 10 65 10 90C10 90 10 40 10 10Z" stroke={borderColor} strokeWidth="3" fill="none" />
                        <circle cx="25" cy="25" r="5" fill={borderColor} />
                        <path d="M50 20 C60 10 70 20 60 30 C50 40 40 30 50 20" stroke={borderColor} strokeWidth="2" fill="none" />
                        <path d="M20 50 C10 60 20 70 30 60 C40 50 30 40 20 50" stroke={borderColor} strokeWidth="2" fill="none" />
                    </svg>
                </div>

                {/* Top Center Ornament */}
                <div className="absolute -top-[15px] left-1/2 -translate-x-1/2 bg-[#fdfaf5] px-2">
                    <svg width="80" height="26" viewBox="0 0 80 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 13 C20 -5 60 -5 80 13" stroke={borderColor} strokeWidth="2" fill="none" />
                        <path d="M10 13 C30 5 50 5 70 13" stroke={borderColor} strokeWidth="2" fill="none" />
                        <circle cx="40" cy="13" r="6" stroke={borderColor} strokeWidth="2" fill="#fdfaf5" />
                        <circle cx="40" cy="13" r="2" fill={borderColor} />
                    </svg>
                </div>

                {/* Bottom Center Ornament */}
                <div className="absolute -bottom-[15px] left-1/2 -translate-x-1/2 bg-[#fdfaf5] px-2 rotate-180">
                    <svg width="80" height="26" viewBox="0 0 80 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 13 C20 -5 60 -5 80 13" stroke={borderColor} strokeWidth="2" fill="none" />
                        <path d="M10 13 C30 5 50 5 70 13" stroke={borderColor} strokeWidth="2" fill="none" />
                        <circle cx="40" cy="13" r="6" stroke={borderColor} strokeWidth="2" fill="#fdfaf5" />
                        <circle cx="40" cy="13" r="2" fill={borderColor} />
                    </svg>
                </div>

                {/* Left Center Ornament */}
                <div className="absolute top-1/2 -left-[15px] -translate-y-1/2 bg-[#fdfaf5] py-2 -rotate-90">
                    <svg width="60" height="26" viewBox="0 0 60 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 13 C15 -5 45 -5 60 13" stroke={borderColor} strokeWidth="2" fill="none" />
                        <circle cx="30" cy="13" r="4" fill={borderColor} />
                        <circle cx="10" cy="13" r="2" fill={borderColor} />
                        <circle cx="50" cy="13" r="2" fill={borderColor} />
                    </svg>
                </div>

                {/* Right Center Ornament */}
                <div className="absolute top-1/2 -right-[15px] -translate-y-1/2 bg-[#fdfaf5] py-2 rotate-90">
                    <svg width="60" height="26" viewBox="0 0 60 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 13 C15 -5 45 -5 60 13" stroke={borderColor} strokeWidth="2" fill="none" />
                        <circle cx="30" cy="13" r="4" fill={borderColor} />
                        <circle cx="10" cy="13" r="2" fill={borderColor} />
                        <circle cx="50" cy="13" r="2" fill={borderColor} />
                    </svg>
                </div>
            </div>

            {/* Inner Content Boundary */}
            <div className="relative z-10 w-full flex flex-col pt-16 px-10 space-y-8">

                {photoDataUrl && (
                    <div className="flex justify-center mb-0">
                        <div className="w-32 h-32 overflow-hidden border-2 rounded-full p-1" style={{ borderColor: borderColor }}>
                            <div className="w-full h-full rounded-full overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={photoDataUrl} alt="Profile" className="w-full h-full object-cover" />
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

            <div className="relative z-10 w-full mt-auto pt-6 pb-2 pl-4 flex justify-center">
                <p className="text-[10px] text-amber-900/60 tracking-widest uppercase">weddingbiodata.in</p>
            </div>
        </div>
    );
}

function Section({ title, children, bgColor }) {
    return (
        <div className="w-full flex flex-col gap-4">
            <div
                className="w-full text-black font-bold px-4 py-2 uppercase tracking-wide text-sm border-y border-opacity-30 border-black/20"
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
            <div className="w-40 font-bold pr-2 text-gray-900">{label}</div>
            <div className="w-2 font-bold px-1 text-gray-900">:</div>
            <div className="flex-1 text-gray-800 break-words">{value}</div>
        </div>
    );
}

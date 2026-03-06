export function TemplateSample2({ data, theme = {}, fontFamily }) {
    const { personal, family, contact, photoDataUrl } = data || {};

    const headerBgColor = theme?.accent || "#fac276"; // Light orange header
    const textColor = theme?.textHeading || "#000000";

    return (
        <div
            className="relative mx-auto flex min-h-[800px] w-[600px] flex-col overflow-hidden shadow-2xl bg-[#eff5f7]"
            style={{ fontFamily: fontFamily || "inherit", color: textColor }}
        >
            {/* Background Texture/Watercolor Splashes */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[#fac276] rounded-full mix-blend-multiply blur-[80px]"></div>
                <div className="absolute top-[40%] -right-[20%] w-[60%] h-[60%] bg-[#d9e6eb] rounded-full mix-blend-multiply blur-[100px]"></div>
                <div className="absolute -bottom-[20%] -left-[10%] w-[70%] h-[70%] bg-[#fac276] rounded-full mix-blend-multiply blur-[120px]"></div>
            </div>

            {/* Autumn Leaves Decoration (Top Right & Bottom Right) */}
            <div className="absolute top-0 right-0 pointer-events-none opacity-90 scale-125 origin-top-right">
                <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Maple leaf simplified SVG */}
                    <path d="M50 0C50 0 52 15 55 20L75 10L65 30L90 35L75 50L95 70C95 70 80 65 70 70L80 90L60 75L50 95L40 75L20 90L30 70C20 65 5 70 5 70L25 50L10 35L35 30L25 10L45 20C48 15 50 0 50 0Z" fill="#cd7a31" fillOpacity="0.8" />
                    <path d="M70 20C70 20 65 30 65 35L80 30L75 45L95 50L85 60L100 75L85 75L90 90L75 80L65 95L60 80L45 90L50 75L35 70L55 55L45 45L65 40L60 25L70 20Z" fill="#e09e44" fillOpacity="0.7" />
                </svg>
            </div>
            <div className="absolute bottom-0 right-0 pointer-events-none opacity-90 scale-[1.5] origin-bottom-right transform translate-x-4 translate-y-4">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 0C50 0 52 15 55 20L75 10L65 30L90 35L75 50L95 70C95 70 80 65 70 70L80 90L60 75L50 95L40 75L20 90L30 70C20 65 5 70 5 70L25 50L10 35L35 30L25 10L45 20C48 15 50 0 50 0Z" fill="#cd7a31" fillOpacity="0.7" />
                </svg>
            </div>

            {/* Inner Content */}
            <div className="relative z-10 w-full flex flex-col pt-12 space-y-10 px-8">

                {/* Photo (if provided) */}
                {photoDataUrl && (
                    <div className="flex justify-center mb-0">
                        <div className="w-28 h-32 overflow-hidden shadow-lg border-[3px] border-white rounded-md rotate-2 transition-transform">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={photoDataUrl} alt="Profile" className="w-full h-full object-cover" />
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

            <div className="relative z-10 w-full mt-auto pt-6 pb-2 flex justify-center">
                <p className="text-[10px] text-black/40 tracking-widest uppercase">weddingbiodata.in</p>
            </div>
        </div>
    );
}

function Section({ title, children, bgColor }) {
    return (
        <div className="w-full flex flex-col gap-4">
            <div
                className="w-full text-black font-extrabold px-6 py-2 tracking-wide text-sm font-sans"
                style={{ backgroundColor: bgColor }}
            >
                {title}
            </div>
            <div className="relative z-20 flex flex-col gap-1.5 px-6 font-sans text-[13px] text-gray-800 font-medium whitespace-break-spaces break-words">
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
            <div className="flex-1 text-gray-800">{value}</div>
        </div>
    );
}

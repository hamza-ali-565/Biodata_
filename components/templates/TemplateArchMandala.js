export function TemplateArchMandala({ data, theme = {}, fontFamily }) {
    const { personal, family, contact } = data || {};

    // A regal blue and cream palette
    const primaryColor = theme?.accent || "#0f2347";
    const bgColor = theme?.accentSoft || "#fff6f0"; // pale cream

    return (
        <div
            className="relative mx-auto flex min-h-[600px] min-w-[700px] flex-col overflow-hidden shadow-2xl"
            style={{ fontFamily: fontFamily || "inherit", backgroundColor: bgColor }}
        >
            <div className="relative w-full h-full overflow-hidden">
                {/* Top Pattern & Arch Mask */}
                <div className="relative w-full h-[280px]">
                    {/* Pattern Background */}
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230f2347' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3Cpath d='M20 20L40 40H20L0 20'/%3E%3C/g%3E%3C/svg%3E")`,
                            backgroundSize: '30px 30px'
                        }}
                    />

                    {/* Arch Shape SVG Overlay - creating the scalloped effect */}
                    <div className="absolute top-[80px] left-0 right-0 h-[200px] w-full">
                        <svg viewBox="0 0 800 200" preserveAspectRatio="none" className="w-full h-full text-[#fff6f0]">
                            {/* Outer stroke */}
                            <path
                                d="M 0 50 Q 100 50 150 100 Q 200 150 250 150 Q 300 150 350 100 Q 400 -50 450 100 Q 500 150 550 150 Q 600 150 650 100 Q 700 50 800 50 L 800 200 L 0 200 Z"
                                fill="none"
                                stroke={primaryColor}
                                strokeWidth="16"
                            />
                            {/* Inner fill */}
                            <path
                                d="M 0 50 Q 100 50 150 100 Q 200 150 250 150 Q 300 150 350 100 Q 400 -50 450 100 Q 500 150 550 150 Q 600 150 650 100 Q 700 50 800 50 L 800 200 L 0 200 Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                </div>

                {/* Content area */}
                <div className="relative z-10 -mt-[140px] px-8 pb-16 flex flex-col items-center">

                    {/* Circular Photo */}
                    {data?.photoDataUrl ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                            src={data.photoDataUrl}
                            alt={personal.name}
                            className="w-[200px] h-[200px] object-cover rounded-full border-[6px] shadow-xl z-20"
                            style={{ borderColor: bgColor }}
                        />
                    ) : (
                        <div
                            className="w-[200px] h-[200px] rounded-full border-[6px] bg-slate-200 flex items-center justify-center z-20"
                            style={{ borderColor: bgColor }}
                        >
                            <span className="text-slate-400">Photo</span>
                        </div>
                    )}

                    {/* Name */}
                    <h1
                        className="mt-6 text-3xl md:text-5xl font-bold uppercase tracking-widest text-center"
                        style={{ color: primaryColor }}
                    >
                        {personal?.name || "Your Name"}
                    </h1>

                    {/* Ornate Divider */}
                    <OrnateDivider color={primaryColor} />

                    {/* Details Tables */}
                    <div className="w-full max-w-2xl mt-8 space-y-12">
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

                        <OrnateDivider color={primaryColor} />

                        <Section title="FAMILY DETAILS" color={primaryColor}>
                            {family?.fatherName ? <Row label="Father's Name" value={family.fatherName} color={primaryColor} /> : null}
                            {family?.fatherOccupation ? <Row label="Father's Occ." value={family.fatherOccupation} color={primaryColor} /> : null}
                            {family?.motherName ? <Row label="Mother's Name" value={family.motherName} color={primaryColor} /> : null}
                            {family?.motherOccupation ? <Row label="Mother's Occ." value={family.motherOccupation} color={primaryColor} /> : null}
                            {family?.siblings ? <Row label="Siblings" value={family.siblings} color={primaryColor} /> : null}
                            {family?.customFields?.map(f => f.value ? <Row key={f.id} label={f.label} value={f.value} color={primaryColor} /> : null)}
                        </Section>

                        <OrnateDivider color={primaryColor} />

                        <Section title="CONTACT DETAILS" color={primaryColor}>
                            {contact?.contactPerson ? <Row label="Contact Person" value={contact.contactPerson} color={primaryColor} /> : null}
                            {contact?.contactNumber ? <Row label="Phone" value={contact.contactNumber} color={primaryColor} /> : null}
                            {contact?.email ? <Row label="Email" value={contact.email} color={primaryColor} /> : null}
                            {contact?.address ? <Row label="Address" value={contact.address} color={primaryColor} /> : null}
                            {contact?.customFields?.map(f => f.value ? <Row key={f.id} label={f.label} value={f.value} color={primaryColor} /> : null)}
                        </Section>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Section({ title, children, color }) {
    return (
        <div className="flex flex-col items-center w-full">
            <div className="w-full space-y-3">
                {children}
            </div>
        </div>
    );
}

function Row({ label, value, color }) {
    if (!value) return null;
    return (
        <div className="flex justify-center text-[15px] leading-relaxed">
            <div className="w-[160px] text-right font-medium" style={{ color: `${color}cc` }}>{label}</div>
            <div className="px-4 text-center font-bold" style={{ color }}>:</div>
            <div className="w-[180px] text-left font-bold" style={{ color }}>{value || "—"}</div>
        </div>
    );
}

function OrnateDivider({ color }) {
    return (
        <div className="my-8 w-full flex justify-center opacity-80">
            <svg width="200" height="30" viewBox="0 0 200 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 15 Q75 15 100 5 Q125 15 150 15" stroke={color} strokeWidth="1.5" fill="none" />
                <path d="M50 15 Q75 15 100 25 Q125 15 150 15" stroke={color} strokeWidth="1.5" fill="none" />
                <circle cx="100" cy="15" r="8" stroke={color} strokeWidth="1.5" fill="none" />
                <circle cx="100" cy="15" r="3" fill={color} />
                <path d="M10 15 C30 15 40 5 50 15" stroke={color} strokeWidth="1.5" fill="none" />
                <path d="M190 15 C170 15 160 25 150 15" stroke={color} strokeWidth="1.5" fill="none" />
                <path d="M10 15 C30 15 40 25 50 15" stroke={color} strokeWidth="1.5" fill="none" />
                <path d="M190 15 C170 15 160 5 150 15" stroke={color} strokeWidth="1.5" fill="none" />
            </svg>
        </div>
    );
}

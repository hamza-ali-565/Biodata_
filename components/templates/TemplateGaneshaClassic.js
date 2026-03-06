export function TemplateGaneshaClassic({ data, theme = {}, fontFamily }) {
    const { personal, family, contact } = data || {};

    // A classic orange/brown palette from the image
    const primaryColor = theme?.accent || "#a0522d";
    const textColor = theme?.textHeading || "#333333";

    return (
        <div
            className="relative mx-auto flex min-h-[600px] min-w-[700px] flex-col overflow-hidden shadow-2xl bg-[#fffdf7] p-8 md:p-12"
            style={{ fontFamily: fontFamily || "inherit" }}
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

                {/* Header: Ganesha & Om Shree Ganeshay Namah */}
                <div className="flex flex-col items-center justify-center mb-8">
                    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Simple Ganesha interpretation for SVG */}
                        <path d="M50 10C35 10 25 25 25 40C25 55 40 60 45 75C45 80 50 90 60 90C70 90 75 80 75 70C75 60 65 55 60 60C55 65 55 70 55 70" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" />
                        <path d="M40 35C30 35 20 40 15 50C10 60 15 75 25 80" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" />
                        <path d="M60 35C70 35 80 40 85 50C90 60 85 75 75 80" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" />
                        <circle cx="50" cy="30" r="5" fill={primaryColor} />
                        <path d="M40 15Q50 5 60 15" stroke={primaryColor} strokeWidth="3" fill="none" />
                        <path d="M45 20L55 20" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <h2 className="mt-3 text-lg font-bold tracking-wider" style={{ color: primaryColor }}>
                        ॐ श्री गणेशाय नमः
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Details Column */}
                    <div className="flex-1 space-y-8">
                        <Section title="PERSONAL DETAILS" color={primaryColor}>
                            <Row label="Name" value={personal?.name} />
                            <Row label="Date of Birth" value={personal?.dateOfBirth} />
                            <Row label="Time of Birth" value={personal?.timeOfBirth} />
                            <Row label="Place of Birth" value={personal?.placeOfBirth} />
                            <Row label="Rashi" value={personal?.rashi} />
                            <Row label="Nakshatra" value={personal?.nakshatra} />
                            <Row label="Complexion" value={personal?.complexion} />
                            <Row label="Height" value={personal?.height} />
                            <Row label="Gotra" value={personal?.gotra} />
                            <Row label="Education" value={personal?.education} />
                            <Row label="Profession" value={personal?.profession} />
                        </Section>

                        <Section title="FAMILY DETAILS" color={primaryColor}>
                            <Row label="Father's Name" value={family?.fatherName} />
                            <Row label="Father's Occupation" value={family?.fatherOccupation} />
                            <Row label="Mother's Name" value={family?.motherName} />
                            <Row label="Mother's Occupation" value={family?.motherOccupation} />
                            <Row label="Siblings" value={family?.siblings} />
                        </Section>

                        <Section title="CONTACT DETAILS" color={primaryColor}>
                            <Row label="Contact Number" value={contact?.phone} />
                            <Row label="Email ID" value={contact?.email} />
                            <Row label="Residential Address" value={contact?.address} />
                        </Section>
                    </div>

                    {/* Photo Column */}
                    {personal?.photo && (
                        <div className="md:w-1/3 flex-shrink-0 flex justify-end">
                            <div className="w-full max-w-[220px] aspect-[3/4] overflow-hidden border-2 border-slate-200 shadow-sm bg-slate-100">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={personal.photo}
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
            <h3 className="text-sm font-bold tracking-wide uppercase mb-4" style={{ color }}>
                {title}
            </h3>
            <div className="space-y-2.5">
                {children}
            </div>
        </div>
    );
}

function Row({ label, value }) {
    if (!label && !value) return null;
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

"use client";

import { useMemo } from "react";
import * as Templates from "./templates";
import { THEME_OPTIONS } from "./templatesConfig";

// Base-64 generic avatar for templates that require a photo
const PLACEHOLDER_AVATAR = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23cbd5e1"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"/></svg>`;

const DEMO_DATA = {
    personal: {
        name: "Aarav Sharma",
        dateOfBirth: "15 Aug 1995",
        timeOfBirth: "10:30 AM",
        placeOfBirth: "Mumbai, India",
        rashi: "Leo",
        nakshatra: "Magha",
        gotra: "Kashyap",
        complexion: "Fair",
        height: "5'10\"",
        bachelors: "B.Tech in Computer Science",
        masters: "MBA in Finance",
        schooling: "St. Xavier's High School",
        company: "Google",
        occupation: "Software Engineer",
        income: "INR 25 LPA",
    },
    family: {
        fatherName: "Rajesh Sharma",
        fatherOccupation: "Businessman",
        motherName: "Sunita Sharma",
        motherOccupation: "Homemaker",
        siblings: "1 Brother, 1 Sister",
        familyType: "Nuclear",
        familyStatus: "Upper Middle Class",
    },
    contact: {
        contactPerson: "Rajesh Sharma",
        contactNumber: "+91 9876543210",
        email: "aarav.sharma@example.com",
        address: "Andheri West, Mumbai, Maharashtra 400053",
    },
    photoDataUrl: PLACEHOLDER_AVATAR,
};

export function TemplateThumbnail({ templateDefinition }) {
    const TemplateComponent = Templates[templateDefinition.layout];

    const theme = useMemo(() => {
        return THEME_OPTIONS.find(t => t.id === templateDefinition.defaultThemeId) || THEME_OPTIONS[0];
    }, [templateDefinition.defaultThemeId]);

    if (!TemplateComponent) {
        return (
            <div className="flex h-full w-full items-center justify-center bg-slate-900 text-[10px] text-slate-500">
                Preview Not Available
            </div>
        );
    }

    // To fit standard A4-like proportions (e.g., w-[450px]) into our thumbnail box 
    // without losing quality, we scale it natively using Tailwind transform
    return (
        <div className="relative w-full h-[300px] overflow-hidden bg-slate-300 rounded-t-2xl pointer-events-none select-none flex justify-center border-b border-white/10 group-hover:brightness-105 transition-all">
            <div
                className="origin-top flex justify-center pt-4"
                style={{ transform: "scale(0.55)", width: "450px" }}
            >
                <div className="shadow-2xl">
                    <TemplateComponent data={DEMO_DATA} theme={theme} fontFamily="Playfair Display, serif" />
                </div>
            </div>

            {/* Decorative gradient overlay for premium feel */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none" />
        </div>
    );
}

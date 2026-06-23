import { DownloadCloud, Mail, Link, UploadCloud, Printer, RefreshCw } from "lucide-react";

const shareSteps = [
    {
        title: "Download as PDF",
        description: "Your biodata is generated as a high-quality PDF — ready to download to your phone or computer in seconds. No blurry images, no layout shifts.",
        icon: DownloadCloud,
    },
    {
        title: "Share via WhatsApp or Email",
        description: "Open WhatsApp, attach your PDF, and send. Most Indian families exchange biodatas this way — it takes less than a minute.",
        icon: Mail,
    },
    {
        title: "Share a Private Link",
        description: "Generate a private link to your biodata that anyone can open on their phone — no PDF download required on their end.",
        icon: Link,
    },
    {
        title: "Upload to Matrimonial Sites",
        description: "Attach your PDF directly to your Shaadi.com, BharatMatrimony, or Jeevansathi profile. A consistent, well-designed biodata makes your profile stand out.",
        icon: UploadCloud,
    },
    {
        title: "Print for In-Person Meetings",
        description: "Need a physical copy for a pandit, a relative visit, or a marriage bureau meeting? Print directly from the PDF — it's formatted for A4.",
        icon: Printer,
    },
    {
        title: "Re-download After Editing",
        description: "Changed your job, your photo, or your partner preferences? Return to the site, update your fields, and download a fresh PDF — your data is still saved.",
        icon: RefreshCw,
    },
];

export function HowToShareBiodata() {

    return (
        <section className="premium-section mt-14 w-full py-16 px-6 sm:px-12">
            
            {/* Background Subtle Art */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none blur-[2px]">
                <div className="absolute top-[30%] -left-[10%] w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] opacity-[0.02] text-brand-200 rotate-[30deg]">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-current">
                        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" />
                        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                        <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" />
                        <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                </div>
            </div>

            {/* Decorative Glows */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-brand-500/10 blur-[90px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-rose-500/10 blur-[90px] pointer-events-none" />

            <div className="relative z-10 w-full">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4 sm:text-4xl">
                            How to share your biodata after downloading
                        </h2>
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-rose-500 rounded-full" />
                        </div>
                        <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium">
                            Once your biodata is ready, you have six ways to get it to the right people — from a WhatsApp message to a printed copy for a marriage bureau meeting.
                        </p>
                    </div>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {shareSteps.map((step, index) => (
                        <div
                            key={index}
                            className="premium-card group p-6 sm:p-8"
                        >
                            <div className="mb-5 w-14 h-14 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                                <step.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                                {step.title}
                            </h3>
                            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

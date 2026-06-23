export function WhyNeedBiodata() {

    return (
        <section className="premium-section mt-14 w-full py-16 px-6 sm:px-12">
            {/* Background Art - Abstract Islamic Geometric / Mandala style */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none blur-[1px]">
                <div className="absolute -top-[10%] -left-[5%] w-64 h-64 md:w-[500px] md:h-[500px] opacity-[0.03] rotate-45 text-white">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-current" preserveAspectRatio="xMidYMid meet">
                        <polygon points="50,5 95,50 50,95 5,50" stroke="currentColor" strokeWidth="0.5" />
                        <polygon points="50,15 85,50 50,85 15,50" stroke="currentColor" strokeWidth="0.5" />
                        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                        <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" />
                        <path d="M50 0 L50 100 M0 50 L100 50" stroke="currentColor" strokeWidth="0.5" />
                        <path d="M15 15 L85 85 M15 85 L85 15" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                </div>

                <div className="absolute -bottom-[10%] -right-[5%] w-64 h-64 md:w-[500px] md:h-[500px] opacity-[0.03] text-white">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-current" preserveAspectRatio="xMidYMid meet">
                        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" />
                        <path d="M50 5 C75 5 75 45 50 45 C25 45 25 5 50 5 Z" stroke="currentColor" strokeWidth="0.5" />
                        <path d="M50 95 C75 95 75 55 50 55 C25 55 25 95 50 95 Z" stroke="currentColor" strokeWidth="0.5" />
                        <path d="M5 50 C5 75 45 75 45 50 C45 25 5 25 5 50 Z" stroke="currentColor" strokeWidth="0.5" />
                        <path d="M95 50 C95 75 55 75 55 50 C55 25 95 25 95 50 Z" stroke="currentColor" strokeWidth="0.5" />
                        <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                </div>
            </div>

            {/* Decorative Glows */}
            <div className="absolute top-10 right-10 w-40 h-40 md:w-72 md:h-72 rounded-full bg-brand-500/10 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-40 h-40 md:w-72 md:h-72 rounded-full bg-rose-500/10 blur-[80px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-6 sm:text-4xl leading-tight">
                        Why should I create a marriage biodata?
                    </h2>

                    <div className="flex justify-center mb-8">
                        <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-rose-500 rounded-full" />
                    </div>
                </div>
            </div>

            {/* New Premium Cards Section */}
            <div className="relative z-10 max-w-7xl mx-auto mt-16 md:mt-24 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
                    {[
                        {
                            title: "First step toward finding a partner:",
                            content: "A biodata is how families introduce themselves in the arranged marriage process. That time has gone when you had to go to a computer shop and ask them to create and print a hard copy. Now you can create it yourself in three easy steps, download it, and share it for free — in minutes, not days.",
                        },
                        {
                            title: "Avoid repeating your information:",
                            content: "Whether you're approaching a marriage bureau or sharing directly with families, you'll be asked the same questions dozens of times. Create your biodata once, download it as a PDF, and share it whenever someone asks. No typing the same details again and again.",
                        },
                        {
                            title: "Attract only compatible matches:",
                            content: "When your biodata clearly states your education, profession, family background, and partner preferences, families who are not a fit will self-select out. You'll spend less time on non-serious inquiries and more time on matches that actually meet your expectations.",
                        }
                    ].map((card, index) => (
                        <div
                            key={index}
                            className="premium-card group flex flex-col text-left"
                        >
                            <div className="relative z-10 flex h-full flex-col p-8 lg:p-10">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-5 leading-snug group-hover:text-brand-300 transition-colors duration-300">
                                    {card.title}
                                </h3>
                                <div className="w-12 h-[3px] bg-gradient-to-r from-brand-500 to-rose-500 rounded-full mb-6 group-hover:w-20 transition-all duration-500 ease-out opacity-70 group-hover:opacity-100" />
                                <p className="text-slate-300 text-sm md:text-base leading-relaxed flex-grow font-medium">
                                    {card.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

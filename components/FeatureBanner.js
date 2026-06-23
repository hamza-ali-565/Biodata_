import Link from "next/link";
import { Zap, Settings, Layout } from "lucide-react";
import { SmartLink } from "./SmartLink";
import { MandalaSVG } from "./MandalaSVG";

const features = [
    {
        title: "Easy to use",
        description: <>There is no need to sign up or register. Your <SmartLink href="/#biodata-form" className="text-brand-400 hover:text-brand-300 transition-colors">biodata for marriage</SmartLink> is ready just by entering personal details. And don’t forget to select a <SmartLink href="/templates" className="text-brand-400 hover:text-brand-300 transition-colors">beautiful template</SmartLink>.</>,
        icon: Zap,
        color: "from-amber-400 to-orange-500",
        bg: "bg-amber-500/10"
    },
    {
        title: "Customization made simple",
        description: <>Here, you’ll feel like everything is under your control as you can add new, fully customized fields. After selecting a <SmartLink href="/templates" className="text-brand-400 hover:text-brand-300 transition-colors">template</SmartLink>, you can also change the theme of the template.</>,
        icon: Settings,
        color: "from-sky-400 to-blue-500",
        bg: "bg-sky-500/10"
    },
    {
        title: "Great Looking Templates",
        description: <>We’ve carefully structured each <SmartLink href="/templates" className="text-brand-400 hover:text-brand-300 transition-colors">template</SmartLink> to showcase your personal, family, and professional details in the most clear and elegant way. We are offering both simple and stylish layouts, so you can select according to your preference.</>,
        icon: Layout,
        color: "from-emerald-400 to-teal-500",
        bg: "bg-emerald-500/10"
    }
];

export function FeatureBanner() {

    return (
        <section className="premium-section mt-14 w-full px-6 py-16 sm:px-12">
            {/* Decorative Glows */}
            <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-brand-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-rose-500/10 blur-[100px] pointer-events-none" />

            {/* Asian Wedding Theme Background Art: Mandala Motif */}
            <div className="absolute top-[-5%] right-[-5%] w-56 h-56 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] opacity-[0.03] pointer-events-none rotate-[30deg]">
                <MandalaSVG />
            </div>

            <div className="absolute bottom-[-5%] left-[-5%] w-56 h-56 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] opacity-[0.03] pointer-events-none -rotate-[15deg]">
                <MandalaSVG />
            </div>

            <div className="relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                        Why Our Marriage Biodata Builder Different?
                    </h2>
                    <div className="mt-4 flex justify-center">
                        <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-rose-500 rounded-full" />
                    </div>
                </div>

                <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="premium-card group flex flex-col items-center p-8 text-center"
                            >
                                {/* Subtle card glow on hover */}
                                <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`} />

                                <div className={`relative mb-6 rounded-full ${feature.bg} p-4 ring-1 ring-white/10 group-hover:ring-white/20 shadow-inner overflow-hidden`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
                                    <Icon className="w-8 h-8 text-white relative z-10 drop-shadow-md" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4">
                                    {feature.title}
                                </h3>

                                <p className="text-sm md:text-base leading-relaxed text-slate-300">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

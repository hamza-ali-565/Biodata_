"use client";

import { motion } from "framer-motion";
import {
    User, Home, Phone, Sparkles, Clock, ArrowRight,
    MapPin, Calendar, Heart, Briefcase, Activity, Droplets,
    Users, BookOpen, Search, Moon
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const steps = [
    {
        id: "personal",
        number: "01",
        title: "Personal Info",
        description: "Your basic details, identity, and physical traits.",
        icon: User,
    },
    {
        id: "family",
        number: "02",
        title: "Family Info",
        description: "Details about your parents, siblings, and relatives.",
        icon: Home,
    },
    {
        id: "contact",
        number: "03",
        title: "Contact Info",
        description: "How prospective families can securely reach you.",
        icon: Phone,
    },
];

export function HowToCreateBiodata() {
    const router = useRouter();

    const scrollToForm = () => {
        if (window.location.pathname !== "/") {
            sessionStorage.setItem("scrollToForm", "true");
            router.push("/");
            return;
        }
        const formElement = document.getElementById("biodata-form");
        if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="mt-14 relative overflow-hidden py-24 px-4 sm:px-8 lg:px-12 rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-950/90 shadow-2xl w-full min-h-[900px]">

            {/* Wedding/Mehndi Theme Background Art */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none blur-[1px]">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -right-[15%] w-[800px] h-[800px] opacity-[0.02] text-brand-300"
                >
                    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-current">
                        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
                        <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" />
                        {Array.from({ length: 12 }).map((_, i) => (
                            <path key={i} d={`M50 15 Q60 5 50 25`} stroke="currentColor" strokeWidth="0.5" fill="none" transform={`rotate(${i * 30} 50 50)`} />
                        ))}
                        {Array.from({ length: 12 }).map((_, i) => (
                            <path key={`p-${i}`} d={`M50 25 Q55 35 50 45 Q45 35 50 25`} stroke="currentColor" strokeWidth="0.5" fill="none" transform={`rotate(${i * 30} 50 50)`} />
                        ))}
                    </svg>
                </motion.div>

                <div className="absolute top-0 left-0 w-96 h-96 bg-brand-500/10 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500/10 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            <div className="relative z-10 w-full flex flex-col gap-16">

                {/* Header Sequence */}
                <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-brand-300 text-sm font-medium mb-6 shadow-sm shadow-brand-500/20"
                    >
                        <Clock className="w-4 h-4" />
                        A quick 2-minute process
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6"
                    >
                        How to Create a Stunning Marriage Biodata?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-slate-300 text-base md:text-xl leading-relaxed"
                    >
                        Building a <Link href="/#biodata-form" className="text-brand-400 hover:text-brand-300 transition-colors">marriage biodata</Link> is very easy if you follow a clear roadmap. Start with your personal details, introduce yourself in this section, then jump to professional details, describe your professional life, and lastly, describe your family details.
                    </motion.p>
                </div>

                {/* Infographic */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/[0.02]"
                >
                    <Image
                        src="/images/how-to-create-marriage-biodata.webp"
                        alt="Step-by-step guide to create a marriage biodata infographic"
                        width={1200}
                        height={630}
                        className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                        sizes="(max-width: 1024px) 100vw, 1200px"
                        loading="lazy"
                    />
                </motion.div>

                {/* Overview Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="relative text-left p-6 md:p-8 rounded-[1.5rem] border backdrop-blur-sm transition-all duration-300 border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-brand-500/30 group"
                        >
                            <span className="absolute top-4 right-6 text-4xl font-extrabold text-white/[0.03] select-none pointer-events-none group-hover:text-brand-500/10 transition-colors">
                                {step.number}
                            </span>

                            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 bg-white/[0.05] text-brand-400 group-hover:bg-brand-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-500/30">
                                <step.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-xl font-bold mb-2 text-slate-200 group-hover:text-white transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Sequential Detail Panels */}
                <div className="relative mt-8 space-y-24">

                    {/* Step 1 */}
                    <DetailSection>
                        <PanelHeader title="01. Categorize Your Persona" icon={User} desc="Input personal and professional attributes effortlessly using meticulously categorized sections." />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Sub-Group 1: Basic */}
                            <SubGroupCard title="Basic Details" icon={User}>
                                <DataItem icon={User} text="Full Name" />
                                <DataItem icon={Calendar} text="Date of Birth" tooltip="DD-MM-YYYY format" />
                                <DataItem icon={Clock} text="Time of Birth" />
                                <DataItem icon={MapPin} text="Place of Birth" />
                            </SubGroupCard>

                            {/* Sub-Group 2: Identity */}
                            <SubGroupCard title="Identity Details" icon={Search}>
                                <DataItem icon={Sparkles} text="Religion" />
                                <DataItem icon={Users} text="Caste / Sub-caste" />
                                <DataItem icon={Moon} text="Zodiac Sign" />
                                <DataItem icon={Activity} text="Nakshatra" />
                            </SubGroupCard>

                            {/* Sub-Group 3: Phys & Prof */}
                            <SubGroupCard title="Physical & Professional" icon={Briefcase}>
                                <DataItem icon={BookOpen} text="Height / Color" />
                                <DataItem icon={Droplets} text="Blood Group" />
                                <DataItem icon={Briefcase} text="Job / Business" />
                                <DataItem icon={LineChartIcon} text="Salary / Income" />
                            </SubGroupCard>

                            {/* Sub-Group 4: Extras */}
                            <SubGroupCard title="Additional" icon={Heart}>
                                <DataItem icon={Heart} text="Hobbies & Interests" />
                                <DataItem icon={Search} text="Expectations" tooltip="What you seek in a partner" />
                            </SubGroupCard>
                        </div>
                    </DetailSection>

                    {/* Divider Area */}
                    <div className="flex justify-center -mt-8 -mb-8">
                        <div className="w-[1px] h-20 bg-gradient-to-b from-brand-500/0 via-brand-500/40 to-brand-500/0" />
                    </div>

                    {/* Step 2 */}
                    <DetailSection>
                        <PanelHeader title="02. Introduce Your Roots" icon={Home} desc="Provide details about your parents, siblings, and extended family background so matches know exactly who you are." />

                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/5 blur-[50px] group-hover:bg-brand-500/10 transition-all" />
                                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-rose-400">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    Parents Information
                                </h4>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-slate-300">
                                        <div className="w-2 h-2 rounded-full bg-brand-500" />
                                        Father’s Name & Occupation (Business / Service)
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-300">
                                        <div className="w-2 h-2 rounded-full bg-brand-500" />
                                        Mother’s Name & Occupation (Homemaker)
                                    </li>
                                </ul>
                            </div>

                            <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/5 blur-[50px] group-hover:bg-rose-500/10 transition-all" />
                                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-400">
                                        <User className="w-6 h-6" />
                                    </div>
                                    Siblings & Relatives
                                </h4>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-slate-300">
                                        <div className="w-2 h-2 rounded-full bg-brand-500" />
                                        Number of Brothers & Sisters
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-300">
                                        <div className="w-2 h-2 rounded-full bg-brand-500" />
                                        Marital Status of Siblings
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-300">
                                        <div className="w-2 h-2 rounded-full bg-brand-500" />
                                        Notable Uncles or extended family names
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </DetailSection>

                    {/* Divider Area */}
                    <div className="flex justify-center -mt-8 -mb-8">
                        <div className="w-[1px] h-20 bg-gradient-to-b from-brand-500/0 via-brand-500/40 to-brand-500/0" />
                    </div>

                    {/* Step 3 */}
                    <DetailSection>
                        <PanelHeader title="03. The Final Step" icon={Phone} desc="Add the definitive way for interested matches to securely get in touch with you." />

                        <div className="max-w-3xl mx-auto">
                            <div className="relative overflow-hidden rounded-3xl p-[1px] bg-gradient-to-br from-brand-500 via-rose-500 to-indigo-500 shadow-[0_0_40px_rgba(244,63,94,0.2)] hover:shadow-[0_0_60px_rgba(244,63,94,0.4)] transition-shadow">
                                <div className="bg-slate-950 px-8 py-12 rounded-3xl h-full flex flex-col items-center text-center">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-500 to-rose-500 flex items-center justify-center text-white mb-6 shadow-xl animate-bounce">
                                        <Phone className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-3xl font-bold text-white mb-8">Ready to Connect</h4>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
                                        <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                                            <h5 className="text-brand-300 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                                                <Phone className="w-4 h-4" /> Phone Setup
                                            </h5>
                                            <p className="text-slate-300 leading-relaxed">Add up to 2 primary mobile numbers for parents or yourself to manage inquiries safely.</p>
                                        </div>
                                        <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                                            <h5 className="text-brand-300 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                                                <MapPin className="w-4 h-4" /> Address Details
                                            </h5>
                                            <p className="text-slate-300 leading-relaxed">Insert your current residential address or permanent home location details clearly.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DetailSection>

                </div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-20"
                >
                    <button
                        onClick={scrollToForm}
                        className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-slate-900 border border-brand-500/30 px-10 py-5 text-lg font-bold text-white transition-all hover:scale-105 hover:bg-slate-800 hover:border-brand-500/60 hover:shadow-[0_0_40px_rgba(244,63,94,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 overflow-hidden"
                    >
                        {/* Shine Animation */}
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:animate-[shine_1.5s_ease-out_infinite]" />

                        <span className="relative z-10 bg-gradient-to-r from-brand-300 to-rose-300 bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
                            Start Creating Your Biodata Now
                        </span>
                        <ArrowRight className="w-6 h-6 text-rose-300 group-hover:text-white relative z-10 transition-transform group-hover:translate-x-1 duration-300" />
                    </button>
                </motion.div>

            </div>

            {/* Inline CSS for the shine animation */}
            <style jsx global>{`
                @keyframes shine {
                    100% { transform: translateX(200%); }
                }
            `}</style>
        </section>
    );
}

// Sub-components to keep code clean
function DetailSection({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
}

function PanelHeader({ title, desc, icon: Icon }) {
    return (
        <div className="flex flex-col items-center text-center mb-10 w-full">
            <div className="inline-flex items-center justify-center p-3 bg-brand-500/10 rounded-2xl mb-4 border border-brand-500/20">
                <Icon className="w-8 h-8 text-brand-400" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {title}
            </h3>
            <p className="text-slate-400 text-lg max-w-2xl">{desc}</p>
        </div>
    );
}

function SubGroupCard({ title, icon: Icon, children }) {
    return (
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-brand-500/20 hover:bg-white/[0.04] transition-all group">
            <h4 className="text-brand-300 font-bold mb-5 flex items-center gap-2 border-b border-white/5 pb-3">
                <Icon className="w-4 h-4" />
                {title}
            </h4>
            <div className="space-y-4">
                {children}
            </div>
        </div>
    );
}

function DataItem({ text, icon: Icon, tooltip }) {
    return (
        <div className="flex items-center gap-3 text-slate-300 text-sm sm:text-base relative group/item cursor-default">
            <div className="p-1.5 rounded-lg bg-white/5 text-slate-400 group-hover/item:text-brand-400 group-hover/item:bg-brand-500/10 transition-colors">
                <Icon className="w-4 h-4" />
            </div>
            <span>{text}</span>
            {tooltip && (
                <div className="absolute left-0 -top-12 opacity-0 group-hover/item:opacity-100 transition-opacity bg-slate-800 text-white text-xs py-1.5 px-3 rounded pointer-events-none whitespace-nowrap z-50 border border-white/10 shadow-xl">
                    💡 {tooltip}
                    {/* Small arrow down */}
                    <div className="absolute -bottom-1 left-4 w-2 h-2 bg-slate-800 border-b border-r border-white/10 transform rotate-45"></div>
                </div>
            )}
        </div>
    );
}

function FeatureItem({ title, desc }) {
    return (
        <div>
            <h4 className="text-white font-bold text-lg mb-1 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                {title}
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed pl-3.5">{desc}</p>
        </div>
    );
}

// Custom simple LineChartIcon
function LineChartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 3v18h18" />
            <path d="m19 9-5 5-4-4-3 3" />
        </svg>
    )
}

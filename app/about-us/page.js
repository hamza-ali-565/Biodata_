import Link from "next/link";
import { 
  Sparkles, 
  HeartHandshake, 
  ShieldCheck, 
  Smartphone, 
  Zap, 
  LayoutTemplate,
  Target,
  Eye,
  Mail
} from "lucide-react";

export const metadata = {
  title: 'About Us | Marriage Biodata Hub',
  description: 'Learn about Marriage Biodata Hub, our mission to modernize traditional matrimonial biodata creation, and why thousands choose our platform for elegant, professional profiles.',
  alternates: {
    canonical: '/about-us',
  },
};

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export default function AboutUs() {
  const offerings = [
    { text: "Simple and user-friendly biodata creation", icon: Sparkles, color: "text-brand-400" },
    { text: "Professional and modern biodata designs", icon: LayoutTemplate, color: "text-rose-400" },
    { text: "Easy sharing and accessibility", icon: HeartHandshake, color: "text-emerald-400" },
    { text: "Mobile-friendly experience", icon: Smartphone, color: "text-blue-400" },
    { text: "Secure and smooth user experience", icon: ShieldCheck, color: "text-amber-400" },
  ];

  const whyChooseUs = [
    "Easy-to-use interface",
    "Professional biodata templates",
    "Fast and responsive platform",
    "Accessible on all devices",
    "Designed with simplicity and elegance",
    "Continuous improvements and updates"
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-950 flex flex-col relative overflow-hidden font-sans pb-24">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-[150px] mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-rose-500/10 blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[10%] left-[20%] w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-[150px] mix-blend-screen" />
        
        {/* Subtle SVG Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      <main className="flex-1 w-full max-w-6xl mx-auto px-6 pt-20 sm:px-12 sm:pt-28 relative z-10">
        
        {/* Premium Hero Section */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <div className="premium-chip mb-8 gap-2 px-4 py-2 text-sm font-medium text-slate-300 shadow-inner shadow-white/5">
            <Sparkles className="w-4 h-4 text-brand-400" />
            Welcome to Marriage Biodata Hub
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 bg-gradient-to-br from-white via-slate-200 to-slate-500 bg-clip-text text-transparent drop-shadow-sm leading-tight">
            Crafting the Perfect <br className="hidden sm:block" /> First Impression.
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-medium">
            A modern platform designed to simplify the process of creating professional, elegant, and attractive marriage biodata profiles.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16 lg:space-y-24">
          
          {/* Section: Our Story & Offerings */}
          <section className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-500/20 to-rose-500/20 blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
              <div className="premium-card-static relative overflow-hidden p-8 sm:p-12">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-500/20 rounded-full blur-[50px]" />
                <h3 className="text-2xl font-bold text-white mb-6">What We Provide</h3>
                <ul className="space-y-5">
                  {offerings.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <li key={idx} className="flex items-center gap-4 text-slate-300 group/item hover:-translate-y-0.5 transition-transform">
                        <div className={`p-2 rounded-lg bg-white/5 border border-white/10 ${item.color} group-hover/item:scale-110 transition-transform`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-medium text-base sm:text-lg">{item.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
                We understand how important <span className="text-brand-400">first impressions</span> are in matrimonial connections.
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-rose-500 rounded-full" />
              <p className="text-lg text-slate-400 leading-relaxed">
                Our goal is to help individuals and families create well-structured, elegant, and easy-to-share biodata profiles without any technical difficulty.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                Whether you are creating a biodata for yourself, a family member, or helping someone find the right match, our platform is built to make the process easier, faster, and more professional.
              </p>
            </div>
          </section>

          {/* Section: Mission & Vision (Dual Cards) */}
          <section className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="premium-card group p-8 sm:p-12">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target className="w-32 h-32 text-brand-500" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-orange-600 flex items-center justify-center mb-8 shadow-lg shadow-brand-500/25 group-hover:scale-110 transition-transform duration-500">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-slate-300 leading-relaxed mb-4">
                  Our mission is to modernize traditional matrimonial biodata creation by providing a clean, reliable, and accessible digital solution for everyone.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  We aim to help users present their personal, educational, professional, and family details in a clear and organized format that builds trust and confidence.
                </p>
              </div>
            </div>

            <div className="premium-card group p-8 sm:p-12">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Eye className="w-32 h-32 text-rose-500" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center mb-8 shadow-lg shadow-rose-500/25 group-hover:scale-110 transition-transform duration-500">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Our Vision</h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  We believe technology can make matrimonial connections more organized, accessible, and convenient. Our vision is to become a trusted platform for creating high-quality marriage biodata profiles for users worldwide.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Why Choose Us Grid */}
          <section className="premium-section relative overflow-hidden p-8 sm:p-12 lg:p-16">
            <div aria-hidden className="premium-panel-overlay absolute inset-0" />
            <div className="relative z-10">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Why Choose Marriage Biodata Hub?</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-rose-500 rounded-full mx-auto" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {whyChooseUs.map((feature, idx) => (
                  <div 
                    key={idx}
                    className="premium-card flex items-center gap-4 p-5"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-500/10 flex items-center justify-center border border-brand-500/20">
                      <Zap className="w-5 h-5 text-brand-400" />
                    </div>
                    <span className="font-medium text-slate-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Contact Us CTA */}
          <section className="premium-frame text-center">
            <div aria-hidden className="premium-frame-glow" />
            <div className="premium-panel p-10 sm:p-16">
              <div aria-hidden className="premium-panel-overlay" />
            {/* Glowing Orbs */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-500/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-rose-500/20 rounded-full blur-[80px]" />
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <div className="w-16 h-16 mx-auto bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Get In Touch</h2>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                If you have any questions, suggestions, or feedback, feel free to contact us. We are always here to help you perfect your matrimonial profile.
              </p>
              
              <div className="pt-4">
                <a 
                  href="mailto:marriagebiodatahub@gmail.com" 
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-brand-500/50 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                >
                  <Mail className="w-5 h-5 text-brand-400 group-hover:text-brand-300 transition-colors" />
                  <span className="text-white font-semibold text-lg tracking-wide group-hover:text-brand-200 transition-colors">
                    marriagebiodatahub@gmail.com
                  </span>
                </a>
              </div>
              
              <p className="text-slate-400 pt-6 font-medium">
                Thank you for using Marriage Biodata Hub.
              </p>
            </div>
            </div>
          </section>

        </div>
      </main>
    </div>
    <Footer />
    </>
  );
}

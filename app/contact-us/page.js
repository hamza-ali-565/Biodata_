import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Mail, Clock, HelpCircle } from "lucide-react";
import { ContactSubmitButton } from "../../components/ContactSubmitButton";
import { SocialLinks } from "../../components/SocialLinks";

export const metadata = {
  title: "Contact Us | Biodata for Marriage",
  description: "Get in touch with the Biodata for Marriage team for support, feature requests, or inquiries. We are here to help you craft the perfect marriage profile.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactUs() {
  return (
    <>
      <Header />
      <main className="flex-1 mt-10 mb-20 px-4 sm:px-6 md:px-8 mx-auto max-w-6xl text-slate-300">
        <div className="text-center mb-16 relative">
          {/* Subtle Background Glows */}
          <div className="absolute top-0 left-1/2 -mt-10 w-96 h-96 -translate-x-1/2 rounded-full bg-brand-500/10 blur-[100px] pointer-events-none" />
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-500 relative z-10">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-medium max-w-2xl mx-auto relative z-10">
            We’re here to help! Whether you need assistance building your biodata, have a cool template idea, or want to report an issue, please reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Info & Details */}
          <div className="space-y-10">
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold text-white tracking-tight">How can we help?</h2>
              
              <div className="flex gap-4">
                <div className="flex -mt-1 h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-lg">
                  <HelpCircle className="h-6 w-6 text-brand-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Support & Troubleshooting</h3>
                  <p className="text-sm leading-relaxed text-slate-400">Having trouble uploading a photo or downloading your PDF? Let us know and we'll help you get it sorted immediately.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex -mt-1 h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-lg">
                  <Mail className="h-6 w-6 text-brand-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Direct Email</h3>
                  <p className="text-sm leading-relaxed text-slate-400 mb-2">Prefer to send an email from your own client? Send us a message anytime directly at:</p>
                  <a href="mailto:support@marriagebiodatahub.com" className="text-brand-400 font-semibold hover:text-brand-300 transition-colors">
                    support@marriagebiodatahub.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex -mt-1 h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-lg">
                  <Clock className="h-6 w-6 text-brand-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Fast Response Time</h3>
                  <p className="text-sm leading-relaxed text-slate-400">We are a small, dedicated team. We try our absolute best to reply to all inquiries within <strong>24 to 48 hours</strong>.</p>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/5">
                <h3 className="text-lg font-medium text-white mb-4">You can also find us on</h3>
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="rounded-3xl border border-white/5 bg-slate-900/60 backdrop-blur-xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute bottom-0 right-0 -mb-20 -mr-20 w-80 h-80 rounded-full bg-rose-500/10 blur-[100px] pointer-events-none" />
            
            <h2 className="text-xl font-semibold text-white mb-6">Send us a message</h2>
            
            <form className="space-y-5 relative z-10">
              <div className="space-y-1.5">
                <label htmlFor="fullName" className="block text-sm font-medium text-slate-300">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="name@marriagebiodatahub.com"
                  className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300">
                  Reason for Contact
                </label>
                <select
                  id="subject"
                  className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 transition-all appearance-none"
                  required
                >
                  <option value="" disabled >Select an option...</option>
                  <option value="support">Help & Support</option>
                  <option value="feedback">Feedback / Suggest Template</option>
                  <option value="business">Business Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="How can we help you today?"
                  className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 transition-all resize-y"
                />
              </div>

              <ContactSubmitButton />
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

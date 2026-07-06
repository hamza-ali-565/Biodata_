export const metadata = {
  title: 'Terms & Conditions | Marriage Biodata Hub',
  description: 'Read the Terms & Conditions for using Marriage Biodata Hub. Learn about our guidelines, user responsibilities, and how we protect your matrimonial biodata experience.',
  alternates: {
    canonical: 'https://www.marriagebiodatahub.com/terms-and-conditions',
  },
};

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SmartLink } from "../../components/SmartLink";

export default function TermsAndConditions() {
  const sections = [
    {
      id: "eligibility",
      title: "1. Eligibility",
      content: (
        <p>
          By using this website, you confirm that you are at least 18 years old and legally capable of using matrimonial-related services.
        </p>
      )
    },
    {
      id: "purpose",
      title: "2. Purpose of the Website",
      content: (
        <div className="space-y-4">
          <p>
            Marriage Biodata Hub provides users with tools to create, manage, and share marriage biodata profiles for matrimonial purposes only.
          </p>
          <p className="font-semibold text-slate-200">We do not guarantee:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li>Marriage proposals</li>
            <li>Matchmaking success</li>
            <li>Accuracy or authenticity of user-submitted information</li>
          </ul>
          <p className="mt-4 text-brand-300/80">
            Users are advised to independently verify all information before making any personal decisions.
          </p>
        </div>
      )
    },
    {
      id: "user-responsibilities",
      title: "3. User Responsibilities",
      content: (
        <div className="space-y-4">
          <p>By using our platform, you agree that you will not:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li>Upload false or misleading information</li>
            <li>Share abusive, offensive, or illegal content</li>
            <li>Use another person’s identity, images, or information without permission</li>
            <li>Attempt to hack, damage, or misuse the website</li>
            <li>Upload viruses, spam, or malicious files</li>
          </ul>
          <p className="mt-4 font-medium text-slate-200">
            You are solely responsible for the content you submit on the platform.
          </p>
        </div>
      )
    },
    {
      id: "privacy",
      title: "4. Personal Information & Privacy",
      content: (
        <div className="space-y-4">
          <p>Users may upload personal details including:</p>
          <ul className="grid grid-cols-2 gap-2 text-slate-300 mb-4 pl-2">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-400" />Name</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-400" />Age</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-400" />Education</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-400" />Profession</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-400" />Family details</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-400" />Photographs</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-400" />Contact information</li>
          </ul>
          <p>
            By submitting content, you grant Marriage Biodata Hub permission to display and process your information for website functionality.
          </p>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mt-4">
            <p className="text-amber-300/90 text-sm">
              <strong className="text-amber-400">Recommendation:</strong> We recommend users avoid sharing highly sensitive or confidential information publicly.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "intellectual-property",
      title: "5. Intellectual Property",
      content: (
        <div className="space-y-4">
          <p>
            All website content including design, branding, logos, graphics, text, and software belongs to Marriage Biodata Hub unless otherwise stated.
          </p>
          <p className="font-semibold text-slate-200 mt-4">You may not:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li>Copy website content</li>
            <li>Reproduce any part of the platform</li>
            <li>Use our branding or materials without permission</li>
          </ul>
        </div>
      )
    },
    {
      id: "account-suspension",
      title: "6. Account Suspension & Content Removal",
      content: (
        <p>
          We reserve the right to remove any content or suspend user access without prior notice if these Terms & Conditions are violated.
        </p>
      )
    },
    {
      id: "third-party-links",
      title: "7. Third-Party Links",
      content: (
        <p>
          Our website may contain links to third-party websites or services. We are not responsible for the content, policies, or practices of those websites.
        </p>
      )
    },
    {
      id: "disclaimer",
      title: "8. Disclaimer",
      content: (
        <div className="space-y-4">
          <p>
            Marriage Biodata Hub is provided on an “as is” and “as available” basis.
          </p>
          <p className="font-semibold text-slate-200 mt-4">We do not guarantee:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li>Continuous website availability</li>
            <li>Error-free functionality</li>
            <li>Complete security</li>
            <li>Successful matches or proposals</li>
          </ul>
          <p className="mt-4 italic text-slate-400">
            Users access and use the platform at their own risk.
          </p>
        </div>
      )
    },
    {
      id: "limitation-of-liability",
      title: "9. Limitation of Liability",
      content: (
        <div className="space-y-4">
          <p>Marriage Biodata Hub shall not be responsible for:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li>User disputes</li>
            <li>Financial losses</li>
            <li>Misuse of shared information</li>
            <li>Any indirect or consequential damages related to website usage</li>
          </ul>
        </div>
      )
    },
    {
      id: "changes-to-terms",
      title: "10. Changes to Terms",
      content: (
        <p>
          We may update these Terms & Conditions at any time without prior notice. Continued use of the website after changes means you accept the updated terms.
        </p>
      )
    },
    {
      id: "contact-us",
      title: "11. Contact Us",
      content: (
        <div className="space-y-4">
          <p>
            If you have any questions regarding these Terms & Conditions, please contact us:
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-800/50 border border-white/10 hover:border-brand-500/30 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-400">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <a href="mailto:marriagebiodatahub@gmail.com" className="text-white hover:text-brand-300 font-medium transition-colors">
              marriagebiodatahub@gmail.com
            </a>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-950 flex flex-col relative overflow-hidden font-sans">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-500/10 blur-[120px] mix-blend-screen" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-rose-500/10 blur-[100px] mix-blend-screen" />
        
        {/* Subtle SVG Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px"
          }}
        />
      </div>

      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-16 sm:px-12 sm:py-24 relative z-10">
        
        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="premium-chip mb-8 gap-2 px-4 py-2 text-sm font-medium text-slate-300 shadow-inner shadow-white/5">
            <span className="w-2 h-2 rounded-full bg-brand-500 shadow-[0_0_8px_rgba(251,146,60,0.8)] animate-pulse" />
            Last Updated: May 21, 2026
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent drop-shadow-sm">
            Terms & Conditions
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Welcome to Marriage Biodata Hub. By accessing or using our website, you agree to comply with these Terms & Conditions. If you do not agree with any part of these terms, please do not use our platform.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <section 
              key={section.id}
              className="premium-card group p-8 sm:p-10"
            >
              {/* Subtle top gradient line */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/10 group-hover:via-brand-500/30 to-transparent transition-all duration-500" />
              
              <h2 className="text-2xl font-bold text-slate-100 mb-6 group-hover:text-brand-300 transition-colors duration-300">
                {section.title}
              </h2>
              
              <div className="text-base sm:text-lg leading-relaxed text-slate-300/90 prose prose-invert prose-p:my-2 prose-ul:my-2 max-w-none">
                {section.content}
              </div>
            </section>
          ))}
        </div>
        
        {/* Bottom Call to Action */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 mb-6">
            Ready to start your beautiful journey with us?
          </p>
          <SmartLink 
            href="/#biodata-form" 
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3.5 text-sm font-bold text-white shadow-[0_0_24px_rgba(244,63,94,0.25)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_32px_rgba(244,63,94,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          >
            Create Biodata For Free
          </SmartLink>
        </div>

      </main>
    </div>
    <Footer />
    </>
  );
}

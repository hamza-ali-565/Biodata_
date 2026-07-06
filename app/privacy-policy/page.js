import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const metadata = {
  title: "Privacy Policy | Marriage Biodata Hub",
  description: "Read the Privacy Policy for Marriage Biodata Hub. We prioritize your privacy with local storage data management.",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="flex-1 mt-10 mb-20 px-4 sm:px-6 md:px-8 mx-auto max-w-4xl text-slate-300 leading-relaxed">
        <div className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-rose-400">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-400 font-medium tracking-wide">
            Effective Date: April 2026
          </p>
        </div>

        <section className="space-y-10">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-brand-400 mb-3">1. Introduction</h2>
            <p className="mb-2">Welcome to <strong>Marriage Biodata Hub</strong>. Your privacy is critically important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website to create and download your marriage biodata.</p>
            <p>By using Marriage Biodata Hub, you agree to the collection and use of information in accordance with this policy.</p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-brand-400 mb-3">2. Information We Collect</h2>
            <p className="mb-4">When you use our tool to generate a biodata, you may provide certain information. However, our platform is designed with a "privacy-first" approach.</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white mb-1">Personal and Family Information</h3>
                <p>To generate your biodata, you may enter details such as your name, date of birth, physical attributes, occupation, family structure, and contact information.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-1">Photos and Images</h3>
                <p>You may choose to upload a personal photo to include in your biodata templates.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-1">Automated Usage Data</h3>
                <p>Like most websites, we may automatically collect basic, non-personally identifiable information when you visit. This includes your browser type, device type, operating system, and general aggregated usage statistics to help us improve site performance.</p>
              </div>
            </div>
          </div>

          <div className="premium-card-static relative overflow-hidden p-6 sm:p-8">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-brand-500/10 blur-[80px]" />
            <h2 className="text-xl md:text-2xl font-semibold text-brand-400 mb-3 relative z-10">3. How We Use Your Information</h2>
            <p className="mb-3 relative z-10"><strong>Your Data Stays on Your Device:</strong> We want to be completely clear—the personal data, family details, and photos you enter into our forms are <strong>processed and stored locally on your own device</strong> (using your browser's local storage).</p>
            <p className="mb-3 text-white font-medium relative z-10">We <strong className="text-rose-400 font-bold">do not</strong> upload, store, or save your biodata information or photos on our remote servers.</p>
            <p className="mb-2 relative z-10">The information you provide is used strictly for the following purpose:</p>
            <ul className="list-disc pl-6 space-y-1 relative z-10 text-slate-300">
              <li>To instantly populate and generate your chosen marriage biodata template.</li>
              <li>To allow you to download the final document as a PDF or JPEG file.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-brand-400 mb-3">4. Cookies Policy</h2>
            <p className="mb-3">We use "cookies" and similar locally-stored data (such as HTML5 Local Storage) to operate our tool effectively.</p>
            <ul className="list-disc pl-6 space-y-2 mb-3">
              <li><strong className="text-white">Essential Storage:</strong> We use local browser storage to temporarily save the text and images you input so that your data is not lost if you accidentally refresh the page or switch templates.</li>
              <li><strong className="text-white">Analytics Cookies:</strong> We may use standard aggregated analytics to understand overall website traffic and usage patterns. These do not track your specific, personally identifiable generation data.</li>
            </ul>
            <p>You can choose to disable cookies and clear local storage through your browser options. Please note that clearing local storage will erase any biodata information you are currently working on.</p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-brand-400 mb-3">5. Third-Party Services</h2>
            <p className="mb-3">Because your biodata generation happens locally on your device, we do not share your personal biodata forms or images with third parties.</p>
            <p>We may use basic third-party website hosting and analytics providers to monitor the overall health and traffic of our website. These providers do not have access to the information you type into the biodata form.</p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-brand-400 mb-3">6. Data Protection & Security</h2>
            <p>We take your security seriously. Because your data remains on your personal device and is not transmitted to our databases, the risk of data breaches involving your biodata from our end is virtually eliminated. However, we still recommend using our website on a secure, personal network and ensuring your own device has standard security protections in place.</p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-brand-400 mb-3">7. Your User Rights</h2>
            <p className="mb-3">Since we do not store your biodata information on our servers, you have complete and immediate control over it.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You can delete your information at any time by simply closing the website, clearing your browser's cache and local storage, or manually erasing the fields.</li>
              <li>No account deletion request is necessary because no account is ever created on our servers.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-brand-400 mb-3">8. Children’s Information</h2>
            <p>Marriage Biodata Hub does not knowingly target or collect personal identifiable information from children under the age of 13. Given the nature of marriage-related services, our platform is intended for use by adults or families acting on behalf of adults.</p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-brand-400 mb-3">9. Updates to This Policy</h2>
            <p>We may update our Privacy Policy from time to time to reflect changes in our tool or legal requirements. Any updates will be posted directly on this page with an updated "Effective Date." We encourage you to review this page periodically.</p>
          </div>

          <div className="premium-card-static rounded-2xl p-6 text-center sm:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-brand-400 mb-3">10. Contact Information</h2>
            <p className="mb-2">If you have any questions or suggestions regarding our Privacy Policy, or if you need clarification on how your data is processed locally, please contact us at:</p>
            <a href="mailto:marriagebiodatahub@gmail.com" className="text-white font-medium hover:text-brand-400 transition-colors inline-block mt-2">
              marriagebiodatahub@gmail.com
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

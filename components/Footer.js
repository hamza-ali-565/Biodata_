import Link from "next/link";
import Image from "next/image";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="mt-20 w-full relative overflow-hidden rounded-t-[3rem] border-t border-white/10 bg-slate-950 shadow-2xl">
      {/* Animated SVG Background Art */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Glowing Particles / Gradient Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-rose-500/10 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-500/10 blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }}></div>
        
        {/* Abstract Animated Mesh/Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        {/* Subtle Wave SVG */}
        <svg className="absolute bottom-0 left-0 w-full h-auto text-white/5" viewBox="0 0 1440 320" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,213.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="absolute top-0 left-0 w-full h-auto text-white/[0.02] transform rotate-180" viewBox="0 0 1440 320" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,213.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 lg:pt-24 pb-12 relative z-10">
        
        {/* Mini CTA Section */}
        <div className="flex flex-col md:flex-row items-center justify-between p-8 sm:p-12 mb-16 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-lg group hover:bg-white/[0.05] transition-all duration-500">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-rose-200 transition-colors duration-300">Create Your Biodata Now</h3>
            <p className="text-slate-400 font-medium">Join thousands of users who found their perfect match.</p>
          </div>
          <Link href="/#biodata-form" className="relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-rose-600 rounded-full hover:bg-rose-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(225,29,72,0.4)] focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-slate-900 active:scale-95">
            Get Started For Free
          </Link>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & About */}
          <div className="lg:col-span-5 space-y-8 pr-0 lg:pr-8">
            <Link href="/" className="inline-block relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-rose-500/20 to-indigo-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <Image
                src="/images/Logo-of-marriage-biodata-hub.png"
                alt="Marriage Biodata Hub Logo"
                width={280}
                height={85}
                className="relative h-14 sm:h-16 w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>
            <div className="space-y-4">
              <p className="text-sm sm:text-base leading-relaxed text-slate-400 font-medium hover:text-slate-300 transition-colors duration-300">
                A marriage biodata maker app dedicated to providing the easiest way to create your biodata in minutes. We understand why it’s important to find the right match, as it is about to spend the whole life with someone, and creating biodata is the initial stage of this long, beautiful walk. Our app will help you to create biodata in three easy steps: fill, choose, and download.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-400 font-medium hover:text-slate-300 transition-colors duration-300">
                We have the most popular, elegant, and premium template to make a strong impact. We hope you will enjoy our service, and once again, best of luck with your future endeavor.
              </p>
            </div>
            
            {/* Contact Details */}
            <div className="pt-4 flex flex-col space-y-3">
              <a href="mailto:marriagebiodatahub@gmail.com" className="inline-flex items-center gap-3 text-slate-300 hover:text-white group w-fit transition-colors">
                <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-rose-500/20 group-hover:border-rose-500/50 transition-colors">
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-rose-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-semibold tracking-wide text-sm sm:text-base group-hover:underline underline-offset-4 decoration-rose-500/50">marriagebiodatahub@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Quick Navigation */}
            <div className="space-y-6">
              <h4 className="text-white font-bold tracking-widest uppercase text-xs sm:text-sm bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                Quick Navigation
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Template Library', path: '/templates' },
                  { name: 'Biodata Builder', path: '/#biodata-form' }
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.path} className="group flex items-center text-sm sm:text-base text-slate-400 hover:text-white transition-all duration-300">
                      <span className="w-0 h-[2px] bg-rose-500 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300 ease-out rounded-full"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Templates */}
            <div className="space-y-6">
              <h4 className="text-white font-bold tracking-widest uppercase text-xs sm:text-sm bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                Templates
              </h4>
              <ul className="space-y-3">
                {[
                  'Traditional Biodata',
                  'Modern & Minimalist',
                  'Premium & Gold',
                  'Islamic Themes',
                  'Hindu Themes'
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link href="/templates" className="group flex items-center text-sm sm:text-base text-slate-400 hover:text-white transition-all duration-300">
                      <span className="w-0 h-[2px] bg-rose-500 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300 ease-out rounded-full"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Legal */}
            <div className="space-y-6 col-span-2 md:col-span-1">
              <h4 className="text-white font-bold tracking-widest uppercase text-xs sm:text-sm bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                Support & Legal
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Contact Us', path: '/contact-us' },
                  { name: 'Privacy Policy', path: '/privacy-policy' }
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.path} className="group flex items-center text-sm sm:text-base text-slate-400 hover:text-white transition-all duration-300">
                      <span className="w-0 h-[2px] bg-rose-500 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300 ease-out rounded-full"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative">
          <p className="text-sm text-slate-500 font-medium text-center md:text-left">
            © {new Date().getFullYear()} Marriage Biodata Hub. All rights reserved.
          </p>
          <div className="flex items-center justify-center md:justify-end gap-4">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}


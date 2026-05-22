"use client";

// Removed framer-motion
import { ViewportSection } from "../../components/ViewportSection";
import NextImage from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  HeartHandshake, 
  LayoutTemplate, 
  Palette, 
  Type, 
  FileWarning, 
  Image as ImageIcon,
  BookOpen,
  Paintbrush,
  List
} from "lucide-react";
import { TemplateList } from "../../components/TemplateList";
import { TEMPLATE_DEFINITIONS } from "../../components/templatesConfig";

export function AnimatedTemplateSections() {
  return (
    <div className="space-y-12 pb-16">
      {/* SECTION 1: HERO */}
      <section 
        className="premium-section px-6 py-12 text-center sm:px-10 sm:py-16"
      >
        <Sparkles className="absolute -left-10 -top-10 h-64 w-64 text-slate-100 opacity-5 rotate-12" />
        <Sparkles className="absolute -right-10 -bottom-10 h-64 w-64 text-slate-100 opacity-5 -rotate-12" />
        
        <div className="relative z-10 mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Premium Marriage Biodata Formats
          </h1>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            Premium marriage biodata templates that you can edit, choose the color of your choice, and download for free. A good wedding format design makes a <span className="text-slate-100 font-medium">strong impact</span> when you send your proposal to someone. After choosing your best biodata format, fill it with your complete details because you get connected when you are known.
          </p>
        </div>
      </section>

      {/* TEMPLATE LIST */}
      <section 
        initial="hidden" 
        animate="visible" 
       
        className="premium-section px-6 py-8 sm:px-10"
        aria-labelledby="template-library-heading"
      >
        <h2 id="template-library-heading" className="sr-only">
          Browse Marriage Biodata Templates
        </h2>
        <TemplateList templates={TEMPLATE_DEFINITIONS} />
      </section>

      {/* SECTION 2: IMPORTANCE */}
      <ViewportSection
       
        className="premium-section px-6 py-12 sm:px-10 lg:px-16"
      >
        <HeartHandshake className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 translate-x-1/4 text-slate-100 opacity-5" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">
              Importance of the Marriage Biodata template.
            </h2>
          </div>
          <div className="space-y-6 text-slate-300 leading-relaxed sm:text-lg">
            <p>
              Before we talk about the importance of the Bio data template, first, we should know why people use matrimonial biodata Design? They use it as their marriage resume, just like a professional CV, but in a marriage biodata resume, their intent is different. They make for a person with whom they will start a new journey, a new start, and a new life.
            </p>
            <p>
              Now we know the worth and importance of the marriage biodata format and a <Link href="/" className="text-blue-400 hover:underline hover:text-blue-300 transition-colors">platform that provides you multiple free biodata designs</Link>.
            </p>
          </div>
        </div>
      </ViewportSection>

      {/* SECTION 3: HOW TO SELECT */}
      <ViewportSection
       
        className="premium-section px-6 py-12 sm:px-10 lg:px-16"
      >
        <LayoutTemplate className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 -translate-x-1/3 text-slate-100 opacity-5" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">
              How to select a premium design biodata format.
            </h2>
          </div>
          <div className="space-y-6 text-slate-300 leading-relaxed sm:text-lg">
            <p>
              A premium marriage biodata template should be simple, readable, have a strong impact, and be eye-pleasing. One should avoid a messy bio data layout because multi-color, dirty layouts, and unpatterned designs are not readable and eye-pleasing. The fonts should not be blurred, and their size should remain constant throughout the whole wedding template.
            </p>
            <p>
              Headings in bio data designs play an important role, so they should be relevant to the information you provided in the wedding resume. The style of all headings in the biodata card has the same design and uses the same font family.
            </p>
          </div>
        </div>
      </ViewportSection>

      {/* SECTION 4: THINGS TO AVOID */}
      <ViewportSection className="relative px-2 sm:px-0">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">
            Things to Avoid When Selecting a Wedding Biodata Design.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 max-w-5xl mx-auto">
          <div className="premium-card group p-6 sm:p-8">
            <Palette className="h-8 w-8 text-rose-400 mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-xl font-semibold text-slate-100 mb-3">Use of Heavy Colors:</h3>
            <p className="text-slate-400 leading-relaxed">
              Avoid heavy colors like dark maroon, purple, and brown in the bio data template; instead, use soft colors like pink, cream, and different shades of light colors. Colors directly impact the human brain, so it's all up to selecting a decent color combination.
            </p>
          </div>

          <div className="premium-card group p-6 sm:p-8">
            <Type className="h-8 w-8 text-blue-400 mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-xl font-semibold text-slate-100 mb-3">Use of Difficult font:</h3>
            <p className="text-slate-400 leading-relaxed">
              A good biodata for marriage is one in which you use a simple and clean font. Stylish fonts may look beautiful, but difficult fonts are hard to read as they reduce the readability, and they just make your matrimonial biodata a mess. So, select decent, readable, and simple fonts so that your marriage biodata is even more interesting.
            </p>
          </div>

          <div className="premium-card group p-6 sm:p-8">
            <FileWarning className="h-8 w-8 text-amber-400 mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-xl font-semibold text-slate-100 mb-3">Overload biodata with Information:</h3>
            <p className="text-slate-400 leading-relaxed">
              A marriage biodata format with unnecessary information is not a good option. Instead, information in a marriage format should be relevant, arranged in a well-mannered manner, and to the point. To the point information will make the user understand about you in a very short time, and you will make a good impression in their mind.
            </p>
          </div>

          <div className="premium-card group p-6 sm:p-8">
            <ImageIcon className="h-8 w-8 text-emerald-400 mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-xl font-semibold text-slate-100 mb-3">Low-Quality photos:</h3>
            <p className="text-slate-400 leading-relaxed">
              A good biodata template is the one that is completely perfect from template design to color selection and from sharp font to visible photo. You should also present in their mind when they read your biodata, and it happens only when you select an image of yourself of good quality. Signs of a good image are: it should be bright, sharp, and you should be visible in the image.
            </p>
          </div>
        </div>
      </ViewportSection>

      {/* SECTION 5: EXAMPLES */}
      <ViewportSection
        stagger
        className="premium-section px-6 py-12 sm:px-10 lg:px-16"
      >
        <BookOpen className="absolute right-0 bottom-0 h-80 w-80 translate-y-1/4 translate-x-1/4 text-slate-100 opacity-5" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">
              Examples of Biodata for Marriage.
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="premium-card-static rounded-2xl border-l-4 border-l-emerald-500/50 p-6 hover:border-l-emerald-500">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-purple-500/10 p-2 rounded-lg">
                  <List className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">Complete details of yourself:</h3>
                  <p className="text-slate-300 leading-relaxed">
                    A good marriage biodata should contain all the details. One should mention all the details we discussed earlier, like personal details, family details, contact person details, usage of clear images, and the most important thing is selecting the best biodata template design. When you fill in all the information in the biodata template, it will help the other person to know about you when they read your wedding biodata.
                  </p>
                </div>
              </div>
            </div>

            <div className="premium-card-static rounded-2xl border-l-4 border-l-emerald-500/40 p-6 hover:border-l-emerald-500">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-indigo-500/10 p-2 rounded-lg">
                  <Paintbrush className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">Theme of biodata:</h3>
                  <p className="text-slate-300 leading-relaxed">
                    It is very important to select a good theme of biodata for marriage. Sending a wedding biodata template to someone is the first step of your new life. So, it should be elegant, well-styled, modern, and eye-pleasing.
                  </p>
                </div>
              </div>
            </div>

            <div className="premium-card-static rounded-2xl border-l-4 border-l-sky-500/50 p-6 hover:border-l-sky-500">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-blue-500/10 p-2 rounded-lg">
                  <LayoutTemplate className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">Marriage biodata format:</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Another important thing is to select the format of your marriage biodata template. A good template should be designed in such a way that all the information is well displayed, and the spacing between text and label should be balanced. The art of the template should be natural, which reflects your beautiful culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ViewportSection>

      {/* SECTION 6: CREATE EYE-PLEASING BIODATA */}
      <ViewportSection className="relative pt-12">
        <div className="mb-12 text-center max-w-3xl mx-auto px-4 sm:px-0">
          <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl mb-4">
            How to Create an Eye-pleasing Biodata Resume for Marriage.
          </h2>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {/* H3: Select simple and attractive layout */}
          <div className="premium-section grid grid-cols-1 items-center gap-8 p-6 sm:p-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-slate-100 mb-4">Select simple and attractive layout:</h3>
              <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                <p>
                  In today’s world, where everything is over-designed, full of different colors, people just want simplicity and comfort. So, remember when you choose a layout, it should be simple but attractive. When we talk about simplicity, it does not mean to select a plain white background A4 type template.
                </p>
                <p>
                  But it should be a sober, well-designed template so the reader of your biodata template feels that it must be created with full effort and makes them interested in approaching you, talking to you, and taking further steps for a happy marriage.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative h-[300px] w-[220px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <NextImage 
                  src="/images/new-templates/beautiful-sober-marriage-biodata.webp" 
                  alt="Sober Marriage Biodata Template" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>
          </div>

          {/* H3: Mobile-friendly format */}
          <div className="premium-section grid grid-cols-1 items-center gap-8 p-6 sm:p-10 lg:grid-cols-2">
            <div className="flex justify-center lg:justify-start">
              <div className="relative h-[250px] w-full max-w-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:scale-105 transition-transform duration-500">
                <NextImage 
                  src="/images/how-to-create-marriage-biodata.webp" 
                  alt="Mobile Friendly Biodata" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">Mobile-friendly format:</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                Since <Link href="/" className="text-blue-400 hover:underline hover:text-blue-300 transition-colors">this app</Link> provides all the templates, it is mobile-friendly, but here I am going to give you a little advice that currently we are in the most developed age of the planet earth, so we can’t guess whether the other person read it on a mobile, PC, or on a laptop. There are around 80% chances that the reader reads it on a mobile phone because in the current age, almost every other person has a mobile phone. So, before any regret, you should check the mobile responsiveness of the biodata template manually.
              </p>
            </div>
          </div>

          {/* H3: Organize information in a beautiful manner */}
          <div className="premium-section p-6 sm:p-10 lg:p-14">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h3 className="text-3xl font-bold text-slate-100 mb-6">Organize information in a beautiful manner:</h3>
              <p className="text-slate-300 leading-relaxed text-lg sm:text-xl">
                The purpose behind <Link href="/" className="text-blue-400 hover:underline hover:text-blue-300 transition-colors">creating a biodata for marriage</Link> is to portray details of one person to another person. So, the information should be aligned properly. Here are the topics you should cover in creating your marriage biodata:
              </p>
            </div>

            <div className="space-y-24">
              {/* H4: personal details */}
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                <div className="w-full lg:w-1/2 relative group perspective-1000">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
                  <NextImage 
                    src="/images/personal detail.png" 
                    alt="Personal Details Template" 
                    width={800} 
                    height={1130} 
                    className="w-full h-auto rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500" 
                  />
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                  <h4 className="text-3xl font-bold text-slate-100 flex items-center gap-4">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xl shadow-[0_0_15px_rgba(59,130,246,0.3)]">1</span>
                    personal details:
                  </h4>
                  <p className="text-slate-300 leading-relaxed text-lg sm:text-xl">
                    In personal details, you should talk about yourself honestly. It includes your name, education, occupation, hobbies, date of birth, and place of birth; you can also add custom fields of your own choice. This is the most important part of your wedding biodata format, so take time, think, and fill them wisely.
                  </p>
                </div>
              </div>

              {/* H4: Family Details */}
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                <div className="w-full lg:w-1/2 space-y-6 order-2 lg:order-1">
                  <h4 className="text-3xl font-bold text-slate-100 flex items-center gap-4">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xl shadow-[0_0_15px_rgba(16,185,129,0.3)]">2</span>
                    Family Details:
                  </h4>
                  <p className="text-slate-300 leading-relaxed text-lg sm:text-xl">
                    Relationships are not made only when two people know each other, but the background of families also really matters, especially when it is about marriage. So, the information you should fill in the family details part is: father's name, mother's name, father’s occupation, mother’s occupation, number of siblings, and you can also add custom fields. In custom fields, you should include the names of siblings, and how many of them are married, with the number of kids, their jobs, and their role in your life, because a sign of good biodata is that it has complete details.
                  </p>
                </div>
                <div className="w-full lg:w-1/2 relative group perspective-1000 order-1 lg:order-2">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 to-amber-500/20 rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
                  <NextImage 
                    src="/images/Family detail.png" 
                    alt="Family Details Template" 
                    width={800} 
                    height={1130} 
                    className="w-full h-auto rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500" 
                  />
                </div>
              </div>

              {/* H4: Contact details */}
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                <div className="w-full lg:w-1/2 relative group perspective-1000">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/20 to-rose-500/20 rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
                  <NextImage 
                    src="/images/contact details.png" 
                    alt="Contact Details Template" 
                    width={800} 
                    height={1130} 
                    className="w-full h-auto rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500" 
                  />
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                  <h4 className="text-3xl font-bold text-slate-100 flex items-center gap-4">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xl shadow-[0_0_15px_rgba(245,158,11,0.3)]">3</span>
                    Contact details:
                  </h4>
                  <p className="text-slate-300 leading-relaxed text-lg sm:text-xl">
                    When someone reads your attractive marriage biodata, they will obviously become curious to meet you. So, here comes the contact detail part, which should be filled with presence of mind and carefully. It includes details like contact person, contact number, e-mail address, residential address, and you can also add custom fields.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ViewportSection>

      {/* SECTION 7: ROLE OF COLOR */}
      <ViewportSection className="relative pt-12">
        <Palette className="absolute left-0 top-1/4 h-[600px] w-[600px] -translate-x-1/2 text-rose-500 opacity-5 blur-xl" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-0">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">
              Role of color in template design of biodata for marriage.
            </h2>
          </div>

          <div className="space-y-8">
            {/* H3: First impression */}
            <div className="premium-card group relative overflow-hidden p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-slate-100 mb-4 relative z-10">First impression:</h3>
              <p className="text-slate-300 leading-relaxed text-lg relative z-10">
                the color selection in the template is very important as it can create a good or bad impression. The color of fonts should match the theme of the biodata template. Colors make your biodata visually strong, attractive, and organized. The color combination should be soft and decent in your biodata format.
              </p>
            </div>

            {/* H3: Emotional feel */}
            <div className="premium-section relative overflow-hidden p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-slate-100 mb-4 relative z-10">Emotional feel:</h3>
              <p className="text-slate-300 leading-relaxed text-lg mb-8 relative z-10">
                colors have a strong impact on the human mind; you can say that colors have a direct connection to the human brain. Different colors make different feelings in humans, so select good, calm, soft, and professional color combinations while <Link href="/" className="text-blue-400 hover:underline hover:text-blue-300 transition-colors">creating biodata for marriage</Link>. Here are the examples of some colors and the science behind them:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                <div className="premium-card-static flex items-center gap-4 rounded-2xl p-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 flex-shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    <div className="w-6 h-6 rounded-full bg-blue-400" />
                  </div>
                  <p className="text-slate-200">
                    <span className="font-bold text-blue-400">1-Blue:</span> It refers to calmness and professionalism.
                  </p>
                </div>

                <div className="premium-card-static flex items-center gap-4 rounded-2xl p-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/30 flex-shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                    <div className="w-6 h-6 rounded-full bg-amber-400" />
                  </div>
                  <p className="text-slate-200">
                    <span className="font-bold text-amber-400">2-Gold:</span> it will make an elegant and premium touch.
                  </p>
                </div>

                <div className="premium-card-static flex items-center gap-4 rounded-2xl p-4">
                  <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center border border-pink-500/30 flex-shrink-0 shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                    <div className="w-6 h-6 rounded-full bg-pink-400" />
                  </div>
                  <p className="text-slate-200">
                    <span className="font-bold text-pink-400">3-Pink:</span> It looks soft and modern
                  </p>
                </div>

                <div className="premium-card-static flex items-center gap-4 rounded-2xl p-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 flex-shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    <div className="w-6 h-6 rounded-full bg-slate-100" />
                  </div>
                  <p className="text-slate-200">
                    <span className="font-bold text-slate-100">4-White:</span> It is clean and simple.
                  </p>
                </div>
              </div>
            </div>

            {/* H3: traditional and cultural preferences */}
            <div className="premium-card group relative overflow-hidden p-6 sm:p-8">
              <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
              
              <h3 className="text-2xl font-bold text-slate-100 mb-4 relative z-10">traditional and cultural preferences:</h3>
              <p className="text-slate-300 leading-relaxed text-lg relative z-10">
                It will be a plus point if you show your cultural preferences in your marriage biodata. And using colors is the best option to achieve this. For example, <span className="text-red-400 font-semibold">red color</span> is wedding-related, traditional, and represents luck, <span className="text-rose-600 font-semibold">maroon</span> gives a royal feeling, classy look, and mature design look, and <span className="text-amber-400 font-semibold">golden color</span> will give a luxury feel, celebration touch, and have a very strong cultural impact, especially in wedding-related designs and formats. Because selecting a color is not only for design purposes but also represents tradition, emotion, respect, and wedding feelings
              </p>
            </div>
          </div>
        </div>
      </ViewportSection>

    </div>
  );
}

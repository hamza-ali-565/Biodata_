# 💒 Marriage Biodata Hub

[![Website](https://img.shields.io/badge/Website-Live-brightgreen.svg)](https://www.marriagebiodatahub.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Welcome to **[Marriage Biodata Hub](https://www.marriagebiodatahub.com)** — the ultimate platform for creating stunning, professional, and elegant marriage biodatas. 

## 📖 Introduction

**Marriage Biodata Hub** is a modern web application designed to help individuals create premium and free marriage biodata formats with ease. A well-designed marriage resume makes a strong first impression when sending a proposal. Our platform provides users with beautifully crafted templates that they can edit, customize with their preferred colors, and download instantly for free.

Whether you prefer a minimal, traditional, or luxurious design, Marriage Biodata Hub ensures your profile is visually engaging, culturally respectful, and perfectly formatted.

---

## ✨ Features

- **Premium & Free Templates:** Access a wide variety of beautifully designed biodata templates for free.
- **Dynamic Customization:** Choose your preferred colors, layouts, and fonts to match your personality or cultural preferences.
- **Real-Time Preview:** See your biodata format update dynamically as you input your personal, family, and contact details.
- **One-Click Download:** Export your finished biodata as a high-quality PDF or JPEG document.
- **SEO-Optimized Content:** Rich articles and guides to help users understand the importance of biodata design, color psychology, and content organization.
- **SaaS-Grade UI/UX:** A beautifully crafted dark-mode interface featuring Framer Motion entrance animations, ambient glows, and glassmorphism elements.

---

## 🛠️ Tech Stack

This project is built with a modern, high-performance web stack:

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **UI Library:** [React](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Image Optimization:** Next.js `<Image>` Component
- **Deployment:** Vercel (Recommended)

---

## 🚀 Installation

To run this project locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/marriage-biodata-hub.git
   cd marriage-biodata-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open the app**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser to see the application running.

---

## 💻 Usage

1. Browse the homepage or navigate to the `/templates` page to explore available biodata designs.
2. Select a template that fits your style (Minimal, Traditional, Modern, etc.).
3. Fill in your **Personal Details**, **Family Details**, and **Contact Information**.
4. Customize the theme color if applicable.
5. Click **Download** to save your premium biodata locally.

---

## 📂 Folder Structure

```text
├── app/
│   ├── layout.js          # Global Next.js layout and metadata
│   ├── page.js            # Homepage
│   ├── globals.css        # Global Tailwind styles & CSS variables
│   └── templates/         # Templates browsing and articles page
├── components/            # Reusable UI components (Header, Footer, Cards)
├── public/
│   └── images/            # Static image assets and template previews
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Project dependencies and scripts
```

---

## 🎨 Customization

The project uses Tailwind CSS for styling, making it highly customizable. 
- **Global Theme:** Modify the CSS variables inside `app/globals.css` to tweak primary, secondary, and background colors.
- **Templates:** New templates can be added by creating new configurations in the `components/templatesConfig.js` file and adding their respective preview images to the `public/images/new-templates/` directory.

---

## 🔍 SEO Optimization

The platform is heavily optimized for search engines:
- Implements Next.js dynamic metadata API (`layout.js`, `page.js`).
- Uses structured JSON-LD data for Organization and FAQ schemas.
- Features highly optimized, semantic HTML (`<article>`, `<section>`, `<h1-h4>`).
- Utilizes `<Link>` components for SEO-friendly internal routing.
- Fast loading times due to WebP image conversions and static generation.

---

## 📱 Mobile Responsiveness

A core focus of **Marriage Biodata Hub** is its responsive design. Knowing that over 80% of users will view or create their biodata on a mobile device, the platform is built with a **Mobile-First approach**:
- Fluid grid systems and flexible containers (`w-full`, `h-auto`).
- Alternating split layouts that gracefully collapse into stacked columns on smaller screens.
- Touch-friendly navigation and form inputs.

---

## 🌐 Deployment

The application is optimized for deployment on Vercel. 

1. Push your code to a GitHub repository.
2. Connect the repository to your Vercel account.
3. Vercel will automatically detect the Next.js framework and configure the build settings (`npm run build`).
4. Your site will be live!

Visit the live production site here: **[https://www.marriagebiodatahub.com](https://www.marriagebiodatahub.com)**

---

## 🤝 Contribution

Contributions, issues, and feature requests are welcome! 
If you have suggestions for new biodata templates or UI improvements, feel free to open an issue or submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---
*Crafted with ❤️ for beautiful beginnings.*

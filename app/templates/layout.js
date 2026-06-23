import {
  Cinzel,
  Cormorant_Garamond,
  DM_Serif_Display,
  Lato,
  Libre_Baskerville,
  Merriweather,
  Montserrat,
  Nunito,
  Playfair_Display,
  Poppins,
  Raleway,
  Roboto_Slab,
  Source_Sans_3,
} from "next/font/google";

const playfairDisplay = Playfair_Display({ subsets: ["latin"], display: "swap", variable: "--font-playfair-display" });
const merriweather = Merriweather({ subsets: ["latin"], display: "swap", weight: ["400", "700"], variable: "--font-merriweather" });
const cinzel = Cinzel({ subsets: ["latin"], display: "swap", variable: "--font-cinzel" });
const poppins = Poppins({ subsets: ["latin"], display: "swap", weight: ["400", "600", "700"], variable: "--font-poppins" });
const lato = Lato({ subsets: ["latin"], display: "swap", weight: ["400", "700"], variable: "--font-lato" });
const montserrat = Montserrat({ subsets: ["latin"], display: "swap", variable: "--font-montserrat" });
const libreBaskerville = Libre_Baskerville({ subsets: ["latin"], display: "swap", weight: ["400", "700"], variable: "--font-libre-baskerville" });
const nunito = Nunito({ subsets: ["latin"], display: "swap", variable: "--font-nunito" });
const raleway = Raleway({ subsets: ["latin"], display: "swap", variable: "--font-raleway" });
const robotoSlab = Roboto_Slab({ subsets: ["latin"], display: "swap", variable: "--font-roboto-slab" });
const cormorantGaramond = Cormorant_Garamond({ subsets: ["latin"], display: "swap", variable: "--font-cormorant-garamond" });
const dmSerifDisplay = DM_Serif_Display({ subsets: ["latin"], display: "swap", weight: "400", variable: "--font-dm-serif-display" });
const sourceSansPro = Source_Sans_3({ subsets: ["latin"], display: "swap", variable: "--font-source-sans-pro" });

const fontVars = [
  playfairDisplay.variable,
  merriweather.variable,
  cinzel.variable,
  poppins.variable,
  lato.variable,
  montserrat.variable,
  libreBaskerville.variable,
  nunito.variable,
  raleway.variable,
  robotoSlab.variable,
  cormorantGaramond.variable,
  dmSerifDisplay.variable,
  sourceSansPro.variable,
].join(" ");

export default function TemplatesLayout({ children }) {
  return <div className={fontVars}>{children}</div>;
}

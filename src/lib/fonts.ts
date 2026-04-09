import {
    // Existing
    Inter,
    Playfair_Display,
    Poppins,
    Open_Sans,
    Montserrat,
    Merriweather,
    Faculty_Glyphic,
    Outfit,
  } from "next/font/google";
  import { NextFont } from "next/dist/compiled/@next/font";
  
  const inter = Inter({ subsets: ["latin"] });
  const playfair = Playfair_Display({ subsets: ["latin"] });
  const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"] });
  const merriweather = Merriweather({ weight: ["300", "400", "700", "900"], subsets: ["latin"] });
  const outfitSans = Outfit({ subsets: ["latin"] });
  
  type FontMap = {
    [key: string]: NextFont;
  };
  
  export const fontMap: FontMap = {
    Inter: inter,
    "Playfair Display": playfair,
    Poppins: poppins,
    Merriweather: merriweather,
    Outfit: outfitSans,
  
    // Fallbacks
    "default-body": inter,
    "default-heading": playfair,
  };
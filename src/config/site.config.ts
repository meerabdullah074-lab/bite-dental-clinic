/**
 * Central site configuration — single source of truth for NAP
 * (Name/Address/Phone) consistency across header, footer, contact page,
 * and JSON-LD structured data, per the SEO Architecture doc.
 *
 * Populated with Bite Squad Dental Studio's real Google Business Profile
 * data (G-8 Markaz, Islamabad).
 */

export const siteConfig = {
  name: "Bite Squad Dental Studio",
  shortName: "Bite Squad Dental",
  description:
    "Advanced Care. Beautiful Smiles. Bite Squad Dental Studio in G-8 Markaz, Islamabad — expert orthodontists, restorative & cosmetic dentistry, rated 4.8 by patients.",
  url: "https://bitesquaddentalstudio.pk",
  locale: "en_PK",
  themeColor: "#0B3D91",

  contact: {
    phone: "+92 323 7380609",
    whatsappNumber: "923237380609",
    whatsappDefaultMessage:
      "Hi Bite Squad Dental Studio, I'd like to book an appointment.",
    email: "bitesquaddentalstudio@gmail.com",
    address:
      "Office #11, 3rd Floor, Plot #12 N (Pakland Square), G-8 Markaz, Islamabad, 44090",
    addressShort: "G-8 Markaz, Islamabad",
    googleMapsPlaceId: "0x38dfbf025e15c5f7:0x63f2cc33348ef90f",
    googleMapsEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106223.13898776186!2d72.8990291972656!3d33.69670520000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf025e15c5f7%3A0x63f2cc33348ef90f!2sBite%20Squad%20Dental%20Studio%20Islamabad%20G-8%20Markaz!5e0!3m2!1sen!2s",
  },

  hours: [
    { day: "Monday", open: "13:00", close: "20:30" },
    { day: "Tuesday", open: "13:00", close: "20:30" },
    { day: "Wednesday", open: "13:00", close: "20:30" },
    { day: "Thursday", open: "13:00", close: "20:30" },
    { day: "Friday", open: "14:00", close: "21:00" },
    { day: "Saturday", open: "12:00", close: "20:30" },
    { day: "Sunday", open: "closed", close: "closed" },
  ] satisfies { day: string; open: string; close: string }[],

  social: {
    instagram: "https://www.instagram.com/bitesquaddentalstudio/",
    facebook: "",
    tiktok: "",
  },

  rating: {
    value: 4.8,
    count: 76,
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],

  footerLegal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

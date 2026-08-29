import {
  Sparkles,
  Smile,
  AlignCenter,
  Syringe,
  Baby,
  Layers,
  ShieldCheck,
  Award,
  Users,
  CalendarCheck,
  HeartHandshake,
  Wallet,
  Microscope,
  MessageCircle,
  ClipboardList,
  Stethoscope,
} from "lucide-react";
import type {
  Service,
  FAQItem,
  Testimonial,
  GalleryCase,
  ProcessStep,
  TrustStat,
  WhyChooseUsItem,
  DoctorProfile,
} from "@/types";

/**
 * Centralized content source. Every section/page component reads from
 * here rather than hardcoding copy, per the project's established
 * pattern. Prices are in PKR. Content reflects Bite Squad Dental Studio,
 * G-8 Markaz, Islamabad.
 */

export const services: Service[] = [
  {
    slug: "scaling-polishing",
    name: "Scaling & Polishing",
    shortDescription: "Painless, precise cleaning for healthier gums.",
    longDescription:
      "Thorough ultrasonic scaling and polishing that clears plaque and tartar buildup with careful, accurate technique — patients consistently describe the process as pain-free.",
    icon: Stethoscope,
    startingPrice: 2000,
    priceNote: "Starting from, final cost confirmed after check-up",
    durationNote: "30–45 min",
    highlights: [
      "Ultrasonic scaling & polishing",
      "Gentle, precise technique",
      "Fresh breath & healthier gums",
      "Suitable for regular check-ups",
    ],
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    shortDescription: "Brighter teeth in a single visit.",
    longDescription:
      "In-clinic whitening that lifts years of staining from tea, coffee, and everyday life, using a dentist-supervised process that's safe on enamel and gums.",
    icon: Sparkles,
    startingPrice: 10000,
    priceNote: "Starting from, per session",
    durationNote: "60–75 min",
    highlights: [
      "Visible results in one session",
      "Safe, enamel-friendly formula",
      "Dentist-supervised procedure",
      "Long-lasting brightness with care",
    ],
  },
  {
    slug: "fillings",
    name: "Fillings",
    shortDescription: "Tooth-colored fillings for cavities.",
    longDescription:
      "Precise, tooth-colored fillings that restore decayed teeth to full function while blending naturally with your smile.",
    icon: Syringe,
    startingPrice: 2500,
    priceNote: "Starting from, per tooth",
    durationNote: "30–45 min",
    highlights: [
      "Tooth-colored, natural finish",
      "Same-day procedure",
      "Stops decay from spreading",
      "Comfortable, minimal discomfort",
    ],
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    shortDescription: "Save the natural tooth, pain-free.",
    longDescription:
      "Careful root canal treatment under local anesthesia — patients regularly describe the process as far more comfortable than they expected.",
    icon: Syringe,
    startingPrice: 8000,
    priceNote: "Starting from, per tooth",
    durationNote: "1–2 visits",
    highlights: [
      "Fully numb, pain-free procedure",
      "Accurate, gentle technique",
      "Crown placement follow-up offered",
      "Experienced specialist care",
    ],
  },
  {
    slug: "tooth-extractions",
    name: "Simple & Surgical Extractions",
    shortDescription: "Smooth, painless extractions when needed.",
    longDescription:
      "Both simple and surgical tooth extractions carried out with care and precision — patients consistently note how smooth and comfortable the process is.",
    icon: ShieldCheck,
    startingPrice: 2000,
    priceNote: "Starting from, per tooth",
    durationNote: "20–40 min",
    highlights: [
      "Simple & surgical extractions",
      "Painless, well-managed procedure",
      "Clear aftercare guidance",
      "Experienced extraction specialists",
    ],
  },
  {
    slug: "fixed-invisible-braces",
    name: "Fixed & Invisible Braces",
    shortDescription: "Straighten teeth with braces or clear aligners.",
    longDescription:
      "Traditional fixed braces or discreet invisible aligners to correct crowded or misaligned teeth, with a treatment plan mapped out before you begin.",
    icon: AlignCenter,
    startingPrice: 60000,
    priceNote: "Starting from, full treatment",
    durationNote: "12–24 months",
    highlights: [
      "Fixed metal & ceramic braces",
      "Invisible aligner options",
      "Regular progress reviews",
      "Clear pricing before starting",
    ],
  },
  {
    slug: "crowns-bridges",
    name: "Aesthetic Crowns & Bridges",
    shortDescription: "Natural-looking crowns and bridges.",
    longDescription:
      "Custom-made crowns and bridges that restore damaged or missing teeth with a natural, aesthetic finish built around your smile.",
    icon: Layers,
    startingPrice: 15000,
    priceNote: "Starting from, per unit",
    durationNote: "2–3 visits",
    highlights: [
      "Natural-looking finish",
      "Durable, long-lasting materials",
      "Custom-fitted to your bite",
      "Restores full chewing function",
    ],
  },
  {
    slug: "dentures",
    name: "Dentures",
    shortDescription: "Custom dentures that fit and feel natural.",
    longDescription:
      "Full and partial dentures custom-fitted for comfortable eating and speaking, with adjustment visits included until the fit feels right.",
    icon: ShieldCheck,
    startingPrice: 30000,
    priceNote: "Starting from, per set",
    durationNote: "2–4 visits",
    highlights: [
      "Custom-fitted, not off-the-shelf",
      "Full & partial denture options",
      "Adjustment visits included",
      "Natural-looking materials",
    ],
  },
  {
    slug: "pediatric-dentistry",
    name: "Milk Teeth & Pediatric Care",
    shortDescription: "Gentle care for young smiles.",
    longDescription:
      "Attentive management of milk teeth pain and general pediatric dental care, built around making a child's dental visits comfortable and stress-free.",
    icon: Baby,
    startingPrice: 1500,
    priceNote: "Starting from, per visit",
    durationNote: "20–30 min",
    highlights: [
      "Child-friendly, gentle approach",
      "Milk teeth pain management",
      "Preventive care guidance",
      "Parent present throughout",
    ],
  },
  {
    slug: "oral-cyst-removal",
    name: "Oral Cyst Removal & Alveoloplasty",
    shortDescription: "Surgical oral care with precision.",
    longDescription:
      "Oral cyst removal and alveoloplasty procedures carried out with surgical precision to support healing and prepare the mouth for further treatment such as dentures.",
    icon: Microscope,
    startingPrice: 15000,
    priceNote: "Starting from, procedure dependent",
    durationNote: "30–60 min",
    highlights: [
      "Precise surgical technique",
      "Local anesthesia, minimal discomfort",
      "Digital X-ray diagnostics",
      "Clear pre- and post-op guidance",
    ],
  },
];

export const trustStats: TrustStat[] = [
  { id: "years", value: 14, suffix: "+", label: "Years of Experience", icon: Award },
  { id: "patients", value: 76, suffix: "+", label: "Patient Reviews", icon: Users },
  { id: "certified", value: 100, suffix: "%", label: "Sterilized & Safe", icon: ShieldCheck },
  { id: "rating", value: 4.8, suffix: "/5", label: "Google Rating", icon: CalendarCheck },
];

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    id: "painless",
    title: "Painless, Precise Technique",
    description:
      "From scaling to extractions, patients consistently describe our procedures as painless — done with real accuracy and care.",
    icon: HeartHandshake,
  },
  {
    id: "hygiene",
    title: "Clean & Well-Organized Clinic",
    description:
      "A clean, modern, well-organized environment that patients say sets the experience apart from other clinics in the area.",
    icon: ShieldCheck,
  },
  {
    id: "pricing",
    title: "Transparent, Honest Pricing",
    description:
      "Starting prices are published up front, and you'll always get a clear quote before any treatment begins.",
    icon: Wallet,
  },
  {
    id: "expertise",
    title: "Experienced, Caring Dentists",
    description:
      "A team known for a gentle approach and genuine attention to detail, with results that consistently earn 5-star reviews.",
    icon: Microscope,
  },
];

export const doctors: DoctorProfile[] = [
  {
    name: "Dr. Saad Saud Farooqui",
    title: "Dentist & Orthodontist, B.D.S, C-Orthodontist, F.C.P.S (Orthodontics)",
    credentials: ["B.D.S", "C-Orthodontist", "F.C.P.S. Orthodontics", "14+ Years Experience"],
    yearsExperience: 14,
    bio: [
      "Dr. Saad Saud Farooqui is an experienced Dentist and Orthodontist with over 14 years of professional experience in providing comprehensive dental care, holding a B.D.S, C-Orthodontist, and F.C.P.S. in Orthodontics.",
      "He specializes in braces, clear aligners, malocclusions, aesthetic crown & bridges, teeth alignment, and cosmetic smile enhancement — with a patient-focused approach that prioritizes comfort, function, and long-term oral health.",
      "His expertise also includes professional scaling & polishing, tooth extractions, and teeth whitening, backed by a 95% patient satisfaction rating.",
    ],
    photo: "/images/doctor/dr-saad-saud-farooqui.jpg",
    photoAlt: "Dr. Saad Saud Farooqui, Dentist & Orthodontist at Bite Squad Dental Studio",
  },
  {
    name: "Dr. Quratul Ain Mariam",
    title: "Restorative & Cosmetic Dentist, B.D.S, MBA (Health & Hospital Management)",
    credentials: ["B.D.S", "MBA Health & Hospital Mgmt", "10+ Years Experience"],
    yearsExperience: 10,
    bio: [
      "Dr. Quratul Ain Mariam is a highly skilled Dentist, Restorative Dentist, Cosmetic Dentist, and Specialist in Operative Dentistry with over 10 years of clinical experience.",
      "She specializes in restorative and cosmetic dentistry — aesthetic crowns and bridges, ceramic crowns, braces, artificial teeth, and root canal treatment — treating tooth decay, cavities, gingivitis, and bruxism with evidence-based approaches.",
      "Known for her gentle approach and commitment to patient care, her dedication to excellence has earned her a 100% patient satisfaction rating.",
    ],
    photo: "/images/doctor/dr-quratul-ain-mariam.jpg",
    photoAlt: "Dr. Quratul Ain Mariam, Restorative & Cosmetic Dentist at Bite Squad Dental Studio",
  },
];

// Kept for backward-compatible imports — primary doctor used where a
// single profile is required.
export const doctorProfile: DoctorProfile = doctors[0];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Book Your Visit",
    description: "Message us on WhatsApp or call — most requests get a same-day slot.",
    icon: MessageCircle,
  },
  {
    step: 2,
    title: "Meet Your Dentist",
    description: "A relaxed, no-pressure consultation to understand exactly what you need.",
    icon: HeartHandshake,
  },
  {
    step: 3,
    title: "Personalized Treatment Plan",
    description: "Clear pricing and next steps explained before anything begins.",
    icon: ClipboardList,
  },
  {
    step: 4,
    title: "Comfortable Care",
    description: "Modern, gentle techniques from a team that keeps you informed throughout.",
    icon: Smile,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Verified Patient",
    rating: 5,
    quote:
      "I just had my wisdom tooth extraction done by Dr. Saad. The whole experience was smooth. The clinic is very clean and they clearly prioritize sterilization, which made me comfortable.",
    treatment: "Wisdom Tooth Extraction",
  },
  {
    id: "t2",
    name: "Asadullah Shakeel",
    rating: 5,
    quote:
      "I usually don't visit dentists because of dental anxiety, but Dr. Saad and his team made the entire experience exceptional. From the warm welcome to the professional care, I felt comfortable throughout.",
    treatment: "General Dentistry",
  },
  {
    id: "t3",
    name: "Farrukh Yousaf",
    rating: 5,
    quote:
      "Amazing experience at Bite Squad. Dr. Saad and Dr. Mariam are highly professional and provide exactly the treatment needed. The staff is welcoming, and their focus on hygiene truly stands out.",
    treatment: "General Dentistry",
  },
  {
    id: "t4",
    name: "Rabia Qamar",
    rating: 5,
    quote:
      "My experience with Dr. Mariam has been amazing. She is highly skilled, attentive, and follows strict hygiene protocols, which is always my top priority when choosing a healthcare provider.",
    treatment: "Restorative Dentistry",
  },
  {
    id: "t5",
    name: "Zahir Khan",
    rating: 5,
    quote:
      "Dr. Saad explained my X-rays and every step of the procedure, which really helped ease my dental anxiety. The treatment was painless, and the entire team was friendly and supportive.",
    treatment: "General Dentistry",
  },
  {
    id: "t6",
    name: "Abdullah",
    rating: 5,
    quote:
      "I noticed a significant improvement in my smile after each visit. The dentists are knowledgeable and gentle, and the clinic uses modern technology with excellent attention to cleanliness.",
    treatment: "Cosmetic Dentistry",
  },
];

export const galleryCases: GalleryCase[] = [
  {
    id: "g1",
    label: "Full Smile Restoration",
    filter: "veneers",
    beforeImage: "/images/gallery/full-smile-restoration.png",
    afterImage: "/images/gallery/full-smile-restoration.png",
    imageAlt: "Patient smile before and after full restoration at Bite Squad Dental Studio",
  },
  {
    id: "g2",
    label: "Microabrasion Treatment",
    filter: "whitening",
    beforeImage: "/images/gallery/microabrasion-treatment.png",
    afterImage: "/images/gallery/microabrasion-treatment.png",
    imageAlt: "Patient teeth after microabrasion treatment",
  },
  {
    id: "g3",
    label: "Microabrasion — Full Process",
    filter: "whitening",
    beforeImage: "/images/gallery/microabrasion-full-process.png",
    afterImage: "/images/gallery/microabrasion-full-process.png",
    imageAlt: "Patient teeth stain removal via microabrasion, step by step",
  },
  {
    id: "g4",
    label: "Broken Implant Screw Retrieval",
    filter: "implants",
    beforeImage: "/images/gallery/broken-implant-screw-retrieval.png",
    afterImage: "/images/gallery/broken-implant-screw-retrieval.png",
    imageAlt: "Broken implant screw retrieval procedure at Bite Squad Dental Studio",
  },
  {
    id: "g5",
    label: "Pediatric Front Tooth Repair",
    filter: "veneers",
    beforeImage: "/images/gallery/pediatric-front-tooth-repair.png",
    afterImage: "/images/gallery/pediatric-front-tooth-repair.png",
    imageAlt: "Child's front tooth before and after repair",
  },
  {
    id: "g6",
    label: "Stain & Plaque Removal",
    filter: "whitening",
    beforeImage: "/images/gallery/stain-plaque-removal.png",
    afterImage: "/images/gallery/stain-plaque-removal.png",
    imageAlt: "Patient teeth before and after stain and plaque removal",
  },
  {
    id: "g7",
    label: "Single Tooth Crown Restoration",
    filter: "implants",
    beforeImage: "/images/gallery/single-tooth-crown-restoration.png",
    afterImage: "/images/gallery/single-tooth-crown-restoration.png",
    imageAlt: "Patient's chipped front tooth before and after crown restoration",
  },
  {
    id: "g8",
    label: "Full Smile Makeover",
    filter: "veneers",
    beforeImage: "/images/gallery/full-smile-makeover.png",
    afterImage: "/images/gallery/full-smile-makeover.png",
    imageAlt: "Patient full smile before and after treatment",
  },
  {
    id: "g9",
    label: "Deep Scaling & Polishing",
    filter: "whitening",
    beforeImage: "/images/gallery/deep-scaling-polishing.png",
    afterImage: "/images/gallery/deep-scaling-polishing.png",
    imageAlt: "Patient teeth before and after deep scaling and polishing",
  },
];

export const clinicPhotos: { id: string; src: string; alt: string; position?: string }[] = [
  {
    id: "p1",
    src: "/images/hero/hero-clinic-chair.webp",
    alt: "Modern treatment room with dental chair at Bite Squad Dental Studio",
  },
  {
    id: "p2",
    src: "/images/hero/hero-background.webp",
    alt: "Waiting area and reception at Bite Squad Dental Studio, G-8 Markaz",
  },
  {
    id: "p3",
    src: "/images/doctor/dr-saad-saud-farooqui.jpg",
    alt: "Dr. Saad Saud Farooqui at Bite Squad Dental Studio",
    position: "center 8%",
  },
  {
    id: "p4",
    src: "/images/doctor/dr-quratul-ain-mariam.jpg",
    alt: "Dr. Quratul Ain Mariam at Bite Squad Dental Studio",
    position: "center 8%",
  },
];

export const faqs: FAQItem[] = [
  {
    id: "faq-pain",
    question: "Will my treatment hurt?",
    answer:
      "Most procedures are done under local anesthesia and gentle, precise technique means discomfort is minimal. Our patients consistently describe scaling, fillings, and extractions as painless.",
  },
  {
    id: "faq-hygiene",
    question: "What hygiene standards do you follow?",
    answer:
      "Every instrument is sterilized, needles and certain tools are single-use, and our team wears full PPE for every patient — not just when it's requested.",
  },
  {
    id: "faq-pricing",
    question: "Is the pricing really transparent?",
    answer:
      "Yes. Starting prices are listed on our services page, and after your check-up we'll always confirm the exact cost in writing before any treatment begins — no surprise charges.",
  },
  {
    id: "faq-duration",
    question: "How long does a typical appointment take?",
    answer:
      "A routine check-up, scaling, or filling usually takes 30–45 minutes. More involved treatments like braces or crowns are spread across multiple shorter visits so nothing feels rushed.",
  },
  {
    id: "faq-first-visit",
    question: "What happens during my first visit?",
    answer:
      "We start with a conversation about your concerns, followed by a gentle examination and, if needed, digital X-rays. You'll leave with a clear treatment plan and pricing — no pressure to book anything on the spot.",
  },
  {
    id: "faq-timings",
    question: "What are your clinic timings?",
    answer:
      "We're open daily from 1 PM onward. Message us on WhatsApp or call ahead to confirm same-day availability.",
  },
  {
    id: "faq-emergency",
    question: "Do you take emergency appointments?",
    answer:
      "Yes. Message us on WhatsApp and we'll do our best to fit you in the same day for urgent issues like severe pain or a broken tooth.",
  },
  {
    id: "faq-children",
    question: "Do you treat children?",
    answer:
      "Yes, our milk teeth and pediatric care is built specifically around making young patients comfortable, with parents welcome in the room throughout.",
  },
];

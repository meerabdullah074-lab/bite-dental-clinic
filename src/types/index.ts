import type { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  icon: LucideIcon;
  startingPrice: number;
  priceNote: string;
  durationNote: string;
  highlights: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  quote: string;
  treatment?: string;
}

export type GalleryFilter =
  | "all"
  | "whitening"
  | "veneers"
  | "implants"
  | "orthodontics";

export interface GalleryCase {
  id: string;
  label: string;
  filter: Exclude<GalleryFilter, "all">;
  beforeImage: string;
  afterImage: string;
  imageAlt: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TrustStat {
  id: string;
  value: number;
  suffix?: string;
  label: string;
  icon: LucideIcon;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface DoctorProfile {
  name: string;
  title: string;
  credentials: string[];
  yearsExperience: number;
  bio: string[];
  photo: string;
  photoAlt: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface OpenStatus {
  isOpen: boolean;
  label: string;
  todayHours: { open: string; close: string } | null;
}

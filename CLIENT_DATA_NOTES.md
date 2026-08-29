# Bio Medical Dental Care — Update Notes

This codebase was adapted from the Arham Dental Care template with real
data for **Bio Medical Dental Care** (H-13, Islamabad).

## What was updated
- `src/config/site.config.ts` — name, contact info, address, hours, rating, social links
- `src/lib/site-data.ts` — doctorProfile (placeholders), testimonials (7 real reviews)
- `src/components/shared/ContactSection.tsx` — added `showMap` prop
- `src/components/sections/Contact.tsx` — homepage now passes `showMap={false}`
  so the Google Map only appears on the `/contact` page

## Still needs manual work

### 1. Images (not downloaded automatically — network restrictions)
Download these manually and place them in the paths noted, then update
references in `site-data.ts` / hero component:

- Hero / section background (treatment chair photo):
  `https://scontent.fisb31-1.fna.fbcdn.net/v/t39.30808-6/469101028_550196941271517_...` (see original chat for full link — links expire, re-fetch from Facebook if broken)
  → save as `public/images/hero/clinic-hero.jpg`

- Gallery photos (8 images from Facebook) → save into `public/images/gallery/`

- Doctor photo → **not available**, placeholder only:
  `public/images/doctor/placeholder-doctor.jpg`

> Facebook CDN links expire after a while — if any link is dead, go back to
> the clinic's Facebook page and re-save the photos from there.

### 2. Placeholders requiring client confirmation
- Doctor's real name, credentials, years of experience
- Final domain name (currently placeholder: biomedicaldentalcare.pk)
- Exact Facebook page URL
- Instagram / TikTok links (if any)
- Confirmed services list (currently reusing template's default service list)
- Real before/after treatment photos (currently using template's placeholder SVGs)

### 3. Hours edge case
Friday has a split shift: **9:00 AM–12:00 PM, then 3:00–11:00 PM** (Jummah
break). `site.config.ts` currently only stores the first shift
(09:00–12:00) since the `hours` type supports one range per day. Either:
- extend the `hours` type to support multiple ranges, or
- hardcode a text override for Friday in the hours-display component

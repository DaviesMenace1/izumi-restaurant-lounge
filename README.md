# Izumi Restaurant & Lounge

Official website for **Izumi Restaurant & Lounge** — Kampala’s premier Pan-Asian dining experience.

Built with **Next.js 15 (App Router)**, TypeScript, and Tailwind CSS.

## Deploy on Vercel

1. Import this repository
2. **Root Directory** = leave empty (or `.`)
3. Framework Preset = Next.js
4. Deploy

## Features

- Elegant dark theme with gold accents
- Multi-page App Router (Home, About, Menu, Experience, Reservations, Contact)
- Responsive header + mobile nav
- Reservation form → WhatsApp pre-filled
- TripAdvisor + partner logos
- SEO metadata
- Ready for database (Prisma / Supabase later)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project structure

```
src/
  app/
    page.tsx              # Home
    about/page.tsx
    menu/page.tsx
    experience/page.tsx
    reservations/page.tsx
    contact/page.tsx
    layout.tsx
    globals.css
  components/
    Header.tsx
    Footer.tsx
    ReservationForm.tsx
public/images/            # Partner logos + menu cover
```

## Images note

Upload these into `public/images/` after clone (or from the local project):
- `menu-cover.jpg`
- Booking.com / Uber Eats logos

## Contact

- 38 Upper Kololo Terrace, Kampala
- +256 756 244 911
- izumireservations@gmail.com

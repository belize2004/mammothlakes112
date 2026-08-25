# Mammoth Conestoga 112 — Official Website

> **High-Elevation Sanctuary.**  
> A refined mountain residence engineered for the cadence of the Eastern Sierra—uniting alpine utility with architectural calm.

Official website for **Mammoth Conestoga 112** (Mammoth Lakes, CA // Town Permit `TOML-CPAN-11083`), powered by **Astro.build**, **Tailwind CSS**, and **Cloudflare Pages** with native **OwnerRez direct booking**.

---

## 🏔️ Brand DNA System

This project is built directly from the [BRANDING-DNA.md](./BRANDING-DNA.md) framework:

* **Foundation Colors:** Deep Basalt Charcoal (`#121417`), Snow Alabaster (`#F7F5F0`), Sierra Slate (`#2E333B`).
* **Accent:** Sierra Alpenglow Ember (`#D95A2B`) used strictly for direct conversion actions and active calendar dates.
* **Typography:**
  * Display: *Fraunces* (Editorial Serif)
  * Body: *Plus Jakarta Sans* (Humanist Sans)
  * Utility: *JetBrains Mono* (Topographic coordinates, elevation data, permit specs)
* **Primary Recognition Codes:**
  1. Topographic & Altitude Metadata Layering (`37.6435° N, 118.9936° W // ELEV. 8,050 FT // UNIT 112`)
  2. Chiseled Stone & Timber Hairline Framing (0–2px radius, hairline dividers)
  3. Alpenglow Ember Accent with High-Contrast Sierra Shadows

---

## 🛠️ Tech Stack & Integrations

* **Framework:** [Astro 5.x](https://astro.build/) (Static Site Generation / Edge Performance)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Direct Booking:** Native [OwnerRez](https://www.ownerrez.com/) JavaScript Widgets
  * Real-time Multi-Month Availability Calendar (`104e34b1a59347728a6698634dfb2ee8`)
  * Instant Quote Generator & Direct Booking Engine (`eae07243091e4f43b3cce6fe084e83a9`)
  * 257+ Verified Reviews Feed (`14de608b5f9b45a59cc711820f5f8cca`)
* **Hosting & Edge Delivery:** [Cloudflare Pages](https://pages.cloudflare.com/)
* **CI/CD:** GitHub Actions / Cloudflare Pages Git Integration

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:4321` in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates static assets in `./dist/` ready for Cloudflare Pages edge deployment.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploying to Cloudflare Pages

### Option A: Cloudflare Pages Dashboard (Recommended & Easiest)
1. Push this repository to GitHub.
2. In the [Cloudflare Dashboard](https://dash.cloudflare.com/), navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select this repository.
4. Set the build settings:
   * **Framework preset:** `Astro`
   * **Build command:** `npm run build`
   * **Build output directory:** `dist`
   * **Node.js version:** `22` (or higher)
5. Click **Save and Deploy**. Cloudflare Pages will automatically deploy every push to `main` with global CDN caching and SSL!

### Option B: GitHub Actions Workflow
Add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` to your GitHub Repository Secrets to use the automated workflow in `.github/workflows/deploy.yml`.

---

## 📁 Project Structure

```
├── BRANDING-DNA.md            # Authoritative Brand DNA design system
├── BRANDING-DNA.TEMPLATE.md   # Blank Brand DNA reference template
├── astro.config.mjs           # Astro configuration
├── tailwind.config.mjs        # Tailwind theme tokens
├── wrangler.toml              # Cloudflare Pages configuration
├── public/
│   ├── _headers               # Cloudflare edge caching and security headers
│   └── favicon.svg            # Mountain peak SVG favicon
└── src/
    ├── data/
    │   ├── property.ts        # Specs, coordinates, contact, and OwnerRez IDs
    │   ├── photos.ts          # 27 curated original CDN photos with metadata
    │   ├── amenities.ts       # Categorized amenity database
    │   └── reviews.ts         # Verified review data and summary statistics
    ├── layouts/
    │   └── Layout.astro       # Base HTML skeleton, Schema.org SEO, Google Fonts
    ├── components/
    │   ├── Header.astro       # Hairline header with elevation badge & mobile menu
    │   ├── Hero.astro         # Cinematic hero with coordinates & quick booking bar
    │   ├── KeyHighlights.astro# 4 tactile feature cards (wood stove, parking, bath, dog)
    │   ├── ResidenceShowcase.astro # Interactive photo gallery & fullscreen lightbox
    │   ├── SpecsGrid.astro    # Architectural monospace data sheet
    │   ├── AmenitiesSection.astro # Categorized amenities
    │   ├── LocationGuide.astro# Proximity markers & Lincoln Mountain snow check
    │   ├── HostStory.astro    # Rog & Steph 2008 summit wedding story & rescue dogs
    │   ├── BookingSection.astro# Live OwnerRez Multi-Month Calendar & Quote widget
    │   ├── ReviewsSection.astro# 4.91★ rating & OwnerRez reviews stream
    │   ├── ArrivalFaq.astro   # Keypad arrival, parking, dog rules, checkout
    │   ├── Footer.astro       # Legal permit, direct contact, sister unit link
    │   └── StickyMobileBar.astro # Bottom mobile sticky reservation bar
    └── pages/
        ├── index.astro        # Full unified high-conversion homepage
        ├── the-residence.astro# Dedicated architectural tour
        ├── location.astro     # Dedicated mountain guide & proximity
        ├── availability.astro # Dedicated direct booking calendar
        └── reviews.astro      # Dedicated guest reviews archive
```

---

## 📄 License & Compliance

All photography and copy copyright © Roger & Stephanie.  
Town of Mammoth Lakes Transient Occupancy Tax Registration: **`TOML-CPAN-11083`**.

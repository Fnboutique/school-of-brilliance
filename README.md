# School of Brilliance – Website (Stage 1)

Premium multilingual (বাংলা / English / Banglish) IELTS education website built with
Next.js, React, TypeScript, Tailwind CSS and Framer Motion. Frontend only: no backend,
database, real login or payment processing.

## What is included in Stage 1
- Design system (navy and gold tokens in `tailwind.config.ts`, fonts in `app/layout.tsx`)
- Three-language system with saved choice (`lib/i18n/`)
- Complete homepage (navbar, hero, services, courses, mock test packages, instructor, how it works, demo testimonials, FAQ, final CTA, footer)
- Centralised pricing (`data/pricing.ts`) and contact details (`data/site.ts`)
- `sitemap.xml` and `robots.txt`
- Pages not built yet (mock tests, courses, booking, dashboards, admin and so on) show a "coming soon" page. They arrive in the next stages.

## Important status notes
- This ZIP was written without internet access, so `npm install` and `npm run build` have **not** been run on it. Only the translation files and pricing data were type-checked.
- There is no `package-lock.json` yet. Running `npm install` creates it. Commit it to GitHub afterwards.
- Language switching changes text on the same URL. Separate language URLs (such as `/bn`) and `hreflang` tags are not included yet.

## 1. Install Node.js
Download the **LTS** version from https://nodejs.org and install it. Check with `node -v` (v20 or newer).

## 2. Run locally
Open a terminal in the project folder, then:

```bash
npm install
npm run dev
```
Open http://localhost:3000.

Production check:

```bash
npm run build
npm run start
```
If `npm run build` shows an error, send the message to your developer or back to Claude.

## 3. Upload to GitHub
1. Create a free account at https://github.com.
2. Click **New repository**, name it `school-of-brilliance`, keep it empty (no README).
3. On the new repository page choose **uploading an existing file** and drag in the project files (not the folder itself, and not `node_modules` or `.next`).
4. Click **Commit changes**.

## 4. Deploy on Vercel
1. Sign in at https://vercel.com with GitHub.
2. **Add New → Project**, import `school-of-brilliance`.
3. Keep the defaults (Framework: Next.js) and click **Deploy**.

## 5. Connect schoolofbrilliance.com
1. In Vercel: **Project → Settings → Domains → Add** `schoolofbrilliance.com` (and `www.schoolofbrilliance.com`).
2. Vercel shows the DNS records to create. Add exactly those at your domain registrar's DNS page.
3. Wait for verification (minutes to a few hours), then open the site.

## Editing content
| What | Where |
|---|---|
| Any text in বাংলা / English / Banglish | `lib/i18n/bn.ts`, `en.ts`, `bl.ts` (keep the same structure in all three) |
| Mock test package prices | `data/pricing.ts` |
| Phone, email, Facebook, WhatsApp | `data/site.ts` |
| Logo | replace `public/images/logo-badge.png` (and `app/icon.png` for the browser tab icon) |
| Instructor photo | replace the placeholder block in `components/sections/InstructorIntro.tsx` with an `<Image>` |
| Services and links | `data/services.ts` |

## Folder structure
```
app/            pages, layout, sitemap, robots
components/     layout/ (navbar, footer), sections/ (homepage), ui/
data/           pricing, services, site constants
lib/i18n/       en.ts, bn.ts, bl.ts, provider.tsx
public/images/  logo files
```

## Demonstration-only in this stage
- Testimonials are clearly labelled sample placeholders.
- Prices shown on the Speaking, Writing and Speaking & Writing cards use the poster's package prices ("from 120 BDT"). Complete Mock Test and all course prices are "to be confirmed".

# Trailblazers Outdoor Solutions — Website

Production-ready static site for Trailblazers Outdoor Solutions. Plain HTML/CSS/JS — no build step. Drop into GoDaddy and go.

**Brand:** Trailblazers Outdoor Solutions
**Tagline:** One Call. One Crew. Everything Outside.
**Positioning:** Firefighter Owned. Community Focused.
**Closer:** Built on Service. Driven by Community.
**Owner:** Richard F. Olson — The Olson Family
**Domain:** trailblazer.earth
**Address:** 265 Mounds View Rd, Suite 2, River Falls, WI 54022
**Primary Phone:** 651-280-4156
**Alternate Phone:** (715) 222-8730
**Email:** bryce@trailblazer.earth
**Hours:** Mon–Fri 9am–5pm · Emergency service 24/7

---

## All 15 Pages — Built and Ready

```
index.html                ← Homepage (hero, How We Operate, 8 services, FAST QUOTES band, hero discount, commercial, reviews)
about.html                ← Owner letter + Mission + Vision + 7 Core Values + Industry Respect + Story
team.html                 ← Meet the Olson family + crew
safety.html               ← Safety & Excellence Commitment
services.html             ← All services overview
tree-removal.html         ← Tree service detail
lawn-care.html            ← Lawn care detail
landscaping.html          ← Landscaping detail
snow-removal.html         ← Snow removal & salting
landscape-materials.html  ← Mulch, dirt, gravel, stone delivery
commercial.html           ← Commercial services & contracts
service-areas.html        ← 11 areas across WI & MN
quote.html                ← Quote request (primary conversion)
gallery.html              ← Project gallery
contact.html              ← Contact, hours, holidays, payments

styles.css · main.js · sitemap.xml · robots.txt · .htaccess
assets/  ← logo files + family photo + your project photos
```

---

## Real Brand Content Captured

Pulled from your "How We Operate" poster, Olson family flyer, and existing site:

- ✅ **"One Call. One Crew. Everything Outside."** — homepage hero
- ✅ **"Firefighter Owned. Community Focused."** — homepage tagline
- ✅ **15 years of fire service** — homepage stat & owner letter
- ✅ **Olson family letter** with photo and signature — About page hero
- ✅ **5 core values from the family letter:** Integrity. Accountability. Reliability. Excellence. Service.
- ✅ **7 expanded core values** (poster) — About page
- ✅ **Mission & Vision** — full text from poster, About page
- ✅ **"How We Operate"** — 4 pillars + manifesto on homepage
- ✅ **"No excuses. No shortcuts. No damage. Only results."** — homepage manifesto stack
- ✅ **"We solve outdoor problems"** — About + Safety
- ✅ **10% off for veterans, police & first responders** — homepage discount band
- ✅ **"Built on service. Driven by community."** — every footer
- ✅ **FAST QUOTES** as the lead differentiator — dedicated section on homepage
- ✅ **Industry Respect** acknowledgment — About page section honoring competitors who are friends
- ✅ **Master Arborist + medal climber** — credentials on homepage and Team page

---

## What Makes This Site Different (vs. your old one)

1. **Fast quotes lead the pitch.** The 24-hour quote promise is a dedicated section on the homepage — your single biggest competitive edge made visible.

2. **Owner letter & family photo on About page.** The Olson family connection turns "another contractor" into "people you can trust."

3. **Industry respect section.** The note honoring friends-who-are-also-competitors is unique in this industry. It signals character and lifts you above the typical contractor pitch — customers notice.

4. **Real positioning.** "Firefighter Owned. Community Focused." is vastly more specific and trustworthy than generic claims.

5. **Eight dedicated service pages** instead of one. Each one is a separate SEO opportunity.

6. **Bi-state local SEO.** Service area page + LocalBusiness schema explicitly cover both WI and MN towns.

---

## Step 1: Wire Up the Forms (5 minutes)

Both contact form and quote form currently show confirmation but don't email. Easiest fix:

1. Sign up at [formspree.io](https://formspree.io) (free for ~50 submissions/month)
2. Create form, copy form ID
3. In `quote.html`: change `<form class="quote-form" novalidate>` to `<form class="quote-form" action="https://formspree.io/f/YOUR_ID" method="POST">`
4. Same for `contact.html` (`<form class="contact-form" novalidate>`)
5. Submissions will email to bryce@trailblazer.earth

The JS automatically lets forms with `action` attributes submit normally.

---

## Step 2: Replace Team Placeholders

`team.html` has Richard's card filled in with the family photo. The other 5 cards (Master Arborist, Lead Climber, plus 3 crew members) are placeholders.

For each: replace name, role, bio, photo (`<img src="assets/firstname.jpg">`), and credential pills with real info.

Photos work best as portrait (~800×1000), compressed at [tinypng.com](https://tinypng.com).

---

## Step 3: Add Real Reviews

Homepage has 3 placeholder review cards. Open `index.html`, find `<!-- REVIEW PLACEHOLDERS -->`, replace each with real Google reviews.

Try to vary services: one tree, one lawn/landscape, one snow/commercial.

---

## Step 4: Add Gallery Photos

1. Drop project photos into `assets/`
2. Open `gallery.html`, find `<!-- GALLERY INSTRUCTIONS -->`
3. Replace each `<svg>` placeholder with `<img src="assets/photo.jpg" alt="Description">`

Sizes: 800×600 standard · 600×800 tall · 1600×600 wide.

---

## Step 5: Upload to GoDaddy

1. Log in → **My Products** → **Manage**
2. Open **cPanel** → **File Manager**
3. Navigate to `public_html`
4. Delete existing files (back them up first if you want)
5. Upload everything in this folder including `assets/`

Visit `www.trailblazer.earth` to see it live.

---

## Step 6: SEO Setup (Critical for Local Business)

1. **Google Business Profile** — [business.google.com](https://business.google.com). Single highest-impact local SEO move:
   - Address: 265 Mounds View Rd, Suite 2, River Falls, WI 54022
   - Phone: 651-280-4156
   - Categories: Tree Service, Lawn Care Service, Landscaper, Snow Removal Service
   - Add gallery photos here too
   - Encourage customers to leave reviews

2. **Google Search Console** — [search.google.com/search-console](https://search.google.com/search-console). Submit `https://www.trailblazer.earth/sitemap.xml` to index all 15 pages.

3. **Bing Places** — [bingplaces.com](https://www.bingplaces.com). Quick setup, surprising number of customers especially older demographics.

---

## Brand Colors

In `styles.css` `:root`:

- `--green: #00ff66` (bright accent)
- `--green-deep: #003d18` (deep green backgrounds)
- `--black: #0a0a0a` (page background)
- `--bone: #f4f1ea` (off-white text)

Adjust there to change colors site-wide.

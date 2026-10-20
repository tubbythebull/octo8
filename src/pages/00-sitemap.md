---
title: "OCTO8 Elevators & Lifts — Sitemap, Redirects & Content Notes"
document_type: planning
last_updated: 2026-10-20
---

# OCTO8 Elevators & Lifts — Sitemap

## Proposed site structure

```
/                                              Home
├── /services/                                 Services (hub)
│   ├── /services/elevator-modernization       Modernization
│   ├── /services/elevator-installation        Installation
│   ├── /services/elevator-maintenance         Maintenance
│   ├── /services/elevator-repair              Repair
│   ├── /services/elevator-pit-waterproofing   Pit Waterproofing
│   └── /services/accessibility-solutions      Accessibility Solutions (new)
├── /products/                                 Products (hub)
│   ├── Residential
│   │   ├── /products/residential-crystal-elevator   Crystal Elevator (RAM)
│   │   ├── /products/residential-stratus-elevator   Stratus Elevator (RAM)
│   │   ├── /products/ascenda-home-elevator          Ascenda (Cibes Symmetry, new)
│   │   └── /products/residential-flex-lift          Flex Lift (RAM)
│   ├── Commercial
│   │   ├── /products/commercial-crystal-lift        Crystal Lift (RAM, new)
│   │   ├── /products/commercial-stratus-lift        Stratus Lift (RAM)
│   │   └── /products/commercial-flex-lift           Flex Lift (RAM)
│   └── Portable
│       └── /products/portable-vertical-platform-lift
└── /contact                                   Contact
```

## Page inventory

| # | Page | URL | Markdown file | Primary keyword |
|---|------|-----|---------------|-----------------|
| 1 | Home | `/` | `home.md` | elevator company Mississauga |
| 2 | Services hub | `/services/` | `services/index.md` | elevator services Mississauga |
| 3 | Modernization | `/services/elevator-modernization` | `services/elevator-modernization.md` | elevator modernization Mississauga |
| 4 | Installation | `/services/elevator-installation` | `services/elevator-installation.md` | elevator installation Mississauga |
| 5 | Maintenance | `/services/elevator-maintenance` | `services/elevator-maintenance.md` | elevator maintenance Mississauga |
| 6 | Repair | `/services/elevator-repair` | `services/elevator-repair.md` | elevator repair Mississauga |
| 7 | Pit Waterproofing | `/services/elevator-pit-waterproofing` | `services/elevator-pit-waterproofing.md` | elevator pit waterproofing |
| 8 | Accessibility Solutions | `/services/accessibility-solutions` | `services/accessibility-solutions.md` | accessibility lifts Mississauga |
| 9 | Products hub | `/products/` | `products/index.md` | home elevators Ontario |
| 10 | Crystal Elevator | `/products/residential-crystal-elevator` | `products/residential-crystal-elevator.md` | Crystal home elevator |
| 11 | Stratus Elevator | `/products/residential-stratus-elevator` | `products/residential-stratus-elevator.md` | two-storey home elevator |
| 12 | Ascenda | `/products/ascenda-home-elevator` | `products/ascenda-home-elevator.md` | shaftless home elevator |
| 13 | Flex Lift (Residential) | `/products/residential-flex-lift` | `products/residential-flex-lift.md` | residential wheelchair lift |
| 14 | Crystal Lift (Commercial) | `/products/commercial-crystal-lift` | `products/commercial-crystal-lift.md` | commercial Crystal Lift |
| 15 | Stratus Lift (Commercial) | `/products/commercial-stratus-lift` | `products/commercial-stratus-lift.md` | commercial Stratus Lift |
| 16 | Flex Lift (Commercial) | `/products/commercial-flex-lift` | `products/commercial-flex-lift.md` | commercial vertical platform lift |
| 17 | Portable Vertical Platform Lift | `/products/portable-vertical-platform-lift` | `products/portable-vertical-platform-lift.md` | portable wheelchair lift |
| 18 | Contact | `/contact` | `contact.md` | contact elevator company Mississauga |

## 301 redirect map (old → new)

| Old URL | New URL |
|---------|---------|
| `/modernization` | `/services/elevator-modernization` |
| `/installations` | `/services/elevator-installation` |
| `/maintenance` | `/services/elevator-maintenance` |
| `/repairs` | `/services/elevator-repair` |
| `/pit-waterproofing` | `/services/elevator-pit-waterproofing` |
| `/residential-crystal-1` | `/products/residential-crystal-elevator` |
| `/residential-stratus` | `/products/residential-stratus-elevator` |
| `/residential-trus-t-lift-1` | `/products/residential-flex-lift` |
| `/vertical-platform` | `/products/portable-vertical-platform-lift` |
| `/commercial-stratus` | `/products/commercial-stratus-lift` |
| `/commercial-trus-t-lift` | `/products/commercial-flex-lift` |

> If the site stays on GoDaddy Website Builder (which doesn't support folder-style URLs), drop the `/services/` and `/products/` prefixes and keep the rest of each slug.

## Page templates

**Every service page:** H1 + intro → *Why it matters* → *What's included* → *How it works* → *Who it's for* → *Why OCTO8* → *FAQs* → call to action → related links.

**Every product page:** H1 + tagline + hero image + intro → *At a glance* (spec table) → *Key features* → *Make it yours* (options + sizing tables) → *Reliability and backup power* → *Planning your installation* → *Warranty and care* → *Is it right for you?* → *FAQs* → call to action → related links. Product frontmatter adds `product_name`, `manufacturer`, `source` (the brochure), `og_image`, `hero_image`, `hero_image_mobile` and `hero_image_alt`.

## Brand voice in a nutshell

Warm, human and welcoming, in the spirit of Starbucks: we talk *with* people, not at them. Short sentences. "You" and "we." Focus on the moments a lift makes possible rather than hardware alone. Confident, never boastful. Canadian spelling throughout.

## Images

All product images were extracted from the manufacturer brochures and saved as WebP in `images/<product-slug>/`: a full-size file (up to 1,600 px wide) plus an `-800w` version for mobile wherever the original was wider than 800 px. Files ending in `drive-system` or with transparent backgrounds are cut-outs suited to feature sections. `images/manifest.json` lists every image with alt text, role (hero, gallery, banner, cutout) and source.

Many brochure photos are only 500–600 px wide, so use them as gallery or side images, not full-width banners. Confirm with RAM and Cibes Symmetry that dealers may use brochure imagery online (dealer portals usually offer higher-resolution files).

## Items to confirm before publishing

Search every file for `[[CONFIRM`. Business details:

- TSSA registration / licence and technician certifications
- Years in business and number of projects completed
- 24/7 emergency availability and response times
- Mississauga street address and business hours
- Ontario communities served
- Real customer testimonials
- Maintenance package names / tiers

Product details the brochures don't settle:

- **Crystal Elevator (Residential):** power requirements aren't shown in the residential brochure.
- **Crystal Lift (Commercial):** full battery backup is listed as 40 cycles in one section and 30 cycles (Tower of Power™) in the spec sheet. The spec sheet also says travel "up to 50 ft," but the Canadian highlights say 23 ft (7 m); the page uses 23 ft.
- **Stratus Lift (Commercial):** brochure mentions "up to two storeys and four intermediate stops"; confirm the wording.
- **Flex Lift (both):** no warranty terms in the brochures.
- **Ascenda:** confirm CSA B44 / TSSA acceptance for Ontario (the brochure cites European and U.S. standards only).
- **Portable Vertical Platform Lift:** no new brochure was supplied; manufacturer, rental terms, power and warranty are still unconfirmed.

## Content fixes made during the rewrite

- Product names now match the official brochures: the Trus-T-Lift pages became **Flex Lift**, and the Crystal and Stratus pages use RAM's **Elevator** (residential) and **Lift** (commercial) names.
- New pages for the **Commercial Crystal Lift** and the **Ascenda** by Cibes Symmetry.
- Flex Lift corrections: 35+ year legacy (not 25), two backup-power tiers (not three), 42" platform walls, and the Canadian enclosure rule.
- All specs, sizing tables and options are taken directly from the brochures; manufacturer cost and energy claims are credited to the manufacturer.
- Removed the "Sabre" reference and the "Startus" typo from the old site; all copy is original rather than copied from manufacturer websites.

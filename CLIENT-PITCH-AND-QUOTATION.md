# Royal Builder Australia — Website Proposal & Client Pitch

**Prepared by:** Your Web Development Agency
**Date:** 01 September 2026
**Audience:** Royal Builders Australia Pty Ltd (client)
**Live site:** https://dodgerblue-chimpanzee-802148.hostingersite.com/

---

## 1. Executive Summary

Royal Builders Australia needs a **trustworthy, professional website** that turns visitors
into quote enquiries. The current site is a good start but is currently hosted on a temporary
Hostinger URL and has several technical issues that cost leads:

- The **mobile menu is broken** (navigation disappears on phones — your main source of local searches).
- The **contact form cannot actually send** enquiries (no backend/action configured).
- You are using a **temporary hostinger subdomain**, not a branded domain like `royalbuilder.com.au`.

This proposal fixes those issues, secures your brand domain, and provides a professional
online presence worthy of a licensed Victorian builder.

---

## 2. Current Project — What We Found (Technical Audit)

Below is a concise technical audit of the existing website files:
(`index.html`, `services.html`, `home-design.html`, `commercial-fitouts.html`,
`knockdown-rebuild.html`, `extensions-additions.html`, `styles.css`, `script.js`)

### 🔴 Critical issues (fix first)

| File:Lines | Issue | Impact |
|---|---|---|
| `index.html` (and all pages) `.navlinks` hidden at max-width:900px; `menu-button` has **no JavaScript** to open it | **Mobile menu button does nothing** — navigation is invisible on phones/tablets | Losing mobile leads; visitors can't reach Services/Contact |
| `contact.html` form has no `action`/`method`, no `name` attributes, no working handler | **Enquiries never arrive** | Quotes/leads lost completely |
| No branded domain (temporary hostinger URL) | Looks unprofessional; hurts trust and local SEO | Lower conversion; harder to rank on Google |

### 🟠 Should fix (quality)

| File:Lines | Issue |
|---|---|
| `contact.html` inputs | Missing `autocomplete`, `name`, and correct `type` attributes — poor UX & accessibility |
| All `<img>` (hero, project cards, logo) | No explicit `width`/`height` → layout shift (CLS) on load, hurts Google PageSpeed |
| Design page SVGs (commercial/knockdown/extensions) | Floorplan SVGs missing `role="img"` + accessible labels (only home-design has them) |
| `script.js` view toggle buttons | No `aria-pressed`/`aria-selected` state for screen readers |
| All pages | No "skip to content" link; `scroll-margin-top` not set for any heading anchors |
| Project images | Very large JPEGs (240–280 KB each) not compressed → slow on mobile data |

### 🟢 Already good
- Clean, consistent design system (consistent colors, spacing, responsive grid)
- Semantic HTML (`<button>`, `<a>`, `<nav>`, `<section>`, `<main>`)
- Alt text on images, `aria-label` on nav and icon buttons
- Nice interactive facade/floorplan "view switch" on the design pages
- Good SEO `<title>` + `<meta description>` on every page

---

## 3. Domain Recommendation & Pricing

We checked availability of your brand name across extensions (checked via DOMAIN RDAP, Sept 2026):

| Domain | Status | Typical price/yr (AUD) |
|---|---|---|
| **royalbuilder.com.au** | ✅ **Available** (recommended) | ~$15–$30 |
| **royalbuilder.au** | ✅ Available | ~$15–$25 |
| **royalbuilder.net** | ✅ Available | ~$15–$20 |
| royalbuilder.com | ❌ Registered (taken) | — |

> ⚠️ **Note:** `.com.au` has eligibility rules from auDA — you must have an active ABN/ACN
> and the domain must match the business name or core activity. As a registered Pty Ltd
> builder you qualify. Availability must be confirmed live at the registrar at time of purchase.

**Recommendation:** Register **royalbuilder.com.au** (the premium, trust-building brand for an
Australian builder). Budget roughly **$25/year** — that is all a branded domain costs.

---

## 4. Your Costs — What I Will Charge

### Option A — Recommended (Branded site + translation from current + fixes)

| Item | Description | Price (AUD) |
|---|---|---|
| **Domain registration** (`royalbuilder.com.au`, 1st year) | Brand domain secured | $30 |
| **Domain setup / DNS / SSL** | Point domain to site, free SSL cert | $50 |
| **Website rebuild & fixes** | Fix mobile menu, make contact form work, compress images, add width/height, SVG labels, skip link | $450 |
| **Hosting (1st year)** — shared, reliable, AU-located | Fast static hosting with SSL | $150 |
| **Professional email** (2 mailboxes, 1st year) | `admin@royalbuilder.com.au` etc. | $120 |
| | **One-time total (Year 1)** | **$800** *(inc. GST $880)* |

### Annual renewal (from Year 2 onward)

| Item | Annual cost (AUD) |
|---|---|
| Domain renewal | $30 |
| Hosting renewal | $150 |
| Email (2 mailboxes) | $120 |
| **Subtotal (Year 1 only if separate)** | *covered above* |
| **Ongoing annual base** | **~$300** |

### Optional monthly maintenance (recommended)

| Plan | What's included | Price |
|---|---|---|
| **Care PLUS** (recommended) | Hosting mgmt, security & backups, content updates (up to 2/mo), uptime monitoring, minor fixes, monthly report, email support | **$49/mo** ($588/yr) |
| **Care BASIC** | Hosting mgmt, backups, security scans, uptime monitoring, quarterly content updates | $29/mo |

> Estimate: most small-business sites pay $50–$250/mo for care. A static builder site is cheap
> to run, so our pricing is at the low, fair end.

---

## 5. Client Pitch — What To Say

> **Opening (the problem):**
> "Right now your site runs on a temporary Hostinger address like dodgerblue-chimpanzee...
> hostingersite.com. On a phone, your menu button doesn't open the navigation, and the contact
> form at the bottom doesn't actually send anyone a message. So people who visit are finding you,
> but they can't reach you. That's costing you quotes."
>
> **The fix (what they get):**
> "I'll put your business on a proper brand domain — royalbuilder.com.au — so you look like the
> established, licensed Victorian builder you are. I'll fix the mobile menu, connect the contact
> form so every enquiry lands straight in your email, make it load faster, and make it rank better
> for local searches like 'builder Berwick' or 'home extension Melbourne'."
>
> **Price framing (value, not cost):**
> "For one job, the build + domain + hosting + emails is a one-time $800. After that it's about
> $300 a year to keep the domain and hosting running — less than a dollar a day. If you'd like me
> to handle updates and keep it secure and backed up, that's an optional $49 a month.
> Compare that to the cost of a single missed quote — the site pays for itself the first time it
> lands you one new job."
>
> **Close:**
> "Shall I secure royalbuilder.com.au today before someone else does, and get your site live on it
> within two weeks?"

---

## 6. Sample Quotation (to send to client)

```
QUOTATION
Royal Builders Australia Pty Ltd
Website (rebuild + domain + hosting)

1. Website rebuild & upstream fixes ............ $450
2. Domain royalbuilder.com.au (1 yr) ........... $30
3. Domain setup, DNS & SSL ..................... $50
4. Hosting (1 yr, AU) .......................... $150
5. Professional email x2 (1 yr) ................ $120
   -------------------------------------------------
   TOTAL (ex GST) .............................. $800.00
   GST (10%) ................................... $80.00
   -------------------------------------------------
   TOTAL (inc GST) ............................. $880.00
   Validity: 30 days
   Timeline: 2 weeks from deposit

OPTIONAL (recommended)
   Care PLUS monthly maintenance ............... $49.00/mo
   (security, backups, up to 2 content updates/mo,
    uptime monitoring, monthly report, email support)

Payment terms: 50% deposit to start, 50% on completion.
```

---

## 7. Next Steps

1. ✅ Confirm availability of `royalbuilder.com.au` live at registrar
2. ✅ Secure the domain before anyone else can
3. ✅ Fix mobile menu + contact form + performance (I've detailed the fixes in Part 2)
4. ✅ Deploy to branded domain
5. ✅ Set up email, SSL, Google Business Profile (free — helps local ranking)

---

*Prepared as part of the Royal Builder Australia web project. Pricing shown are estimates based on
Australian market research (2026) and can be adjusted to your final rates.*

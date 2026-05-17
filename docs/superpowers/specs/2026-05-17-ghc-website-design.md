# Golden Hearts Club Website — Design Spec

**Date:** 2026-05-17
**Status:** Approved

---

## Overview

A single-page static website for Golden Hearts Club (GHC), a student-led high school service club where members volunteer at a local senior living center to help older adults with everyday technology.

**Target audiences:**
1. Students considering joining the club
2. Parents, teachers, and school administrators
3. Senior living center staff and community partners

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | All content, semantic HTML5 sections with comments |
| `style.css` | All styling, CSS custom properties for the palette |
| `script.js` | Smooth-scroll + mobile hamburger menu (~25 lines total) |

No frameworks, no build tools, no backend.

---

## Color Palette (CSS Custom Properties)

```css
--gold:         #f5c842;
--gold-dark:    #d4a800;
--cream:        #fffbea;
--cream-light:  #fafaf5;
--dark:         #1a1a1a;
--gray:         #666666;
--white:        #ffffff;
```

---

## Visual Tone

**Warm & Community** — serif accents for headings, rounded pill buttons, soft card shadows, warm cream/gold backgrounds. Approachable and heartfelt, suitable for all three audiences.

---

## Typography

- **Headings:** Georgia or a system serif (`font-family: Georgia, 'Times New Roman', serif`)
- **Body / UI:** Open Sans via Google Fonts (`font-family: 'Open Sans', system-ui, sans-serif`)
- Base font size: 16px, line-height: 1.6

---

## Navigation

- **Sticky** top nav, white background with `box-shadow` on scroll
- Left: Club name in serif, "Hearts" word in `--gold`
- Right: 5 links — About, What We Do, Impact, Join, Contact
- **Mobile:** hamburger icon toggles a dropdown nav (JS, ~15 lines)
- Gold bottom border (`2px solid --gold`) appears on scroll via JS class toggle

---

## Sections (top to bottom)

### 1. Hero
- Full-width, `--cream` gradient background (`linear-gradient`)
- Centered layout
- Headline: "Helping seniors feel confident with technology." (serif, large)
- Subheading: short description of GHC (sans-serif, `--gray`)
- Two pill buttons: **Join the Club** (gold fill, dark text) and **Learn More** (gold outline)
- "Learn More" smooth-scrolls to the About section

### 2. About
- Background: `--white`
- Centered section heading (serif)
- 2–3 paragraphs covering club mission and core values: patience, service, respect, and intergenerational connection
- Optional decorative gold `<hr>` divider

### 3. What We Do
- Background: `--cream-light`
- Section heading centered
- **2-column grid** of 6 white cards, each with:
  - Emoji icon (large, decorative)
  - Bold card title
  - Gold left border (`border-left: 3px solid --gold`)
  - 1-sentence description in `--gray`
  - Soft box shadow
- Cards: Smartphones & Tablets, Email & Texting, Zoom / Video Calls, Apps & Settings, Computer Basics, Digital Safety
- Grid collapses to 1 column on mobile

### 4. Impact
- Background: `--white`
- Section heading centered
- Two side-by-side columns:
  - **For Seniors:** 3–4 bullet points (confidence, independence, connection)
  - **For Students:** 3–4 bullet points (leadership, communication, empathy, problem-solving)
- Closing sentence about community connection below the columns
- Columns stack vertically on mobile

### 5. Join
- Background: `--cream`
- Centered text: who can join, what's needed (patience, responsibility, willingness to help — no advanced tech experience required)
- One gold pill button: **Fill Out Interest Form** (links to `#` placeholder)

### 6. Contact
- Background: `--white`
- Centered heading and short call-to-action
- Placeholder email: `goldhearts@school.edu` (displayed as a `mailto:` link)
- Brief note inviting both students and community partners to reach out

### 7. Footer
- Background: `--dark` (`#1a1a1a`)
- White centered text
- Content: `© 2026 Golden Hearts Club. Built by student volunteers.`

---

## Responsiveness

- Single breakpoint at `768px`
- Below 768px: nav collapses, card grid goes 1-column, impact columns stack
- All padding/font sizes scale down gracefully with `clamp()` or media queries

---

## JavaScript (script.js)

Two behaviors only:
1. **Smooth scroll** — all `<a href="#...">` nav links scroll smoothly to their section
2. **Hamburger menu** — toggle a `.open` class on the mobile nav on button click; close on outside click

No third-party libraries.

---

## Placeholder Elements

- Club email: `goldhearts@school.edu` — replace with real email when available
- Interest form button: links to `#` — replace with Google Form or similar URL when ready
- No real images used; image blocks noted in comments for future club photos

---

## How to Run Locally

Open `index.html` in VS Code, install the **Live Server** extension, right-click the file → **Open with Live Server**. The site opens at `http://127.0.0.1:5500`.

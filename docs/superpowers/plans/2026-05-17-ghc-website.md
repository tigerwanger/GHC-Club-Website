# Golden Hearts Club Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page static website for Golden Hearts Club using HTML, CSS, and minimal vanilla JS.

**Architecture:** Three files — `index.html` holds all content in semantic sections, `style.css` holds all styles using CSS custom properties for the color palette, and `script.js` handles smooth-scroll and a mobile hamburger menu. No frameworks, no build tools, no backend.

**Tech Stack:** HTML5, CSS3 (custom properties, flexbox, grid, media queries), vanilla JavaScript (ES6)

---

## File Map

| File | Create/Modify | Purpose |
|------|--------------|---------|
| `index.html` | Create | All page content and section markup |
| `style.css` | Create | All styles — reset, variables, nav, sections, cards, footer, responsive |
| `script.js` | Create | Smooth-scroll + hamburger menu toggle |

---

### Task 1: Project scaffold — HTML shell and CSS variables

**Files:**
- Create: `index.html`
- Create: `style.css`
- Create: `script.js`

- [ ] **Step 1: Create `index.html` with the full document shell**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Golden Hearts Club</title>
  <!-- Open Sans from Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <!-- Navigation -->

  <!-- Hero -->

  <!-- About -->

  <!-- What We Do -->

  <!-- Impact -->

  <!-- Join -->

  <!-- Contact -->

  <!-- Footer -->

  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Create `style.css` with CSS reset and custom properties**

```css
/* ===== CSS Custom Properties ===== */
:root {
  --gold: #f5c842;
  --gold-dark: #d4a800;
  --cream: #fffbea;
  --cream-light: #fafaf5;
  --dark: #1a1a1a;
  --gray: #666666;
  --white: #ffffff;
  --font-serif: Georgia, 'Times New Roman', serif;
  --font-sans: 'Open Sans', system-ui, -apple-system, sans-serif;
  --max-width: 1100px;
  --section-padding: 80px 24px;
}

/* ===== Reset ===== */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
  color: var(--dark);
  background: var(--white);
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}
```

- [ ] **Step 3: Create `script.js` as an empty file**

```js
// script.js — smooth-scroll and mobile nav (filled in Task 9)
```

- [ ] **Step 4: Open `index.html` in a browser (or with VS Code Live Server) and verify a blank white page loads with no console errors**

- [ ] **Step 5: Commit**

```bash
git add index.html style.css script.js
git commit -m "feat: scaffold project — html shell, css reset, custom properties"
```

---

### Task 2: Navigation

**Files:**
- Modify: `index.html` — fill in the Navigation comment block
- Modify: `style.css` — add nav styles

- [ ] **Step 1: Add nav HTML inside `index.html` where the `<!-- Navigation -->` comment is**

```html
<!-- Navigation -->
<header class="nav-header" id="nav-header">
  <nav class="nav-container">
    <!-- Club name / logo -->
    <a href="#" class="nav-logo">
      Golden <span class="nav-logo-accent">Hearts</span> Club
    </a>

    <!-- Hamburger button (mobile only) -->
    <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Nav links -->
    <ul class="nav-links" id="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#what-we-do">What We Do</a></li>
      <li><a href="#impact">Impact</a></li>
      <li><a href="#join">Join</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
```

- [ ] **Step 2: Add nav styles to `style.css`**

```css
/* ===== Navigation ===== */
.nav-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--white);
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.nav-header.scrolled {
  border-bottom-color: var(--gold);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.nav-container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--dark);
}

.nav-logo-accent {
  color: var(--gold-dark);
}

.nav-links {
  display: flex;
  gap: 32px;
}

.nav-links a {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--gray);
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--dark);
}

/* Hamburger button */
.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.nav-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--dark);
  border-radius: 2px;
  transition: transform 0.3s;
}

/* Mobile nav */
@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--white);
    flex-direction: column;
    gap: 0;
    border-top: 1px solid #eee;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links li a {
    display: block;
    padding: 14px 24px;
    border-bottom: 1px solid #f0f0f0;
  }
}
```

- [ ] **Step 3: Verify in browser — nav shows club name on left, 5 links on right. On mobile width, links should be hidden (hamburger JS comes in Task 9)**

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "feat: add sticky navigation with mobile hamburger structure"
```

---

### Task 3: Hero section

**Files:**
- Modify: `index.html` — fill in the Hero comment block
- Modify: `style.css` — add hero styles

- [ ] **Step 1: Add hero HTML**

```html
<!-- Hero -->
<section class="hero" id="hero">
  <div class="hero-content">
    <h1 class="hero-headline">
      Helping seniors feel confident<br />with technology.
    </h1>
    <p class="hero-sub">
      Golden Hearts Club is a student-led service club that volunteers at a local
      senior living center — offering patient, friendly help with phones, tablets,
      email, video calls, and more.
    </p>
    <div class="hero-buttons">
      <a href="#join" class="btn btn-primary">Join the Club</a>
      <a href="#about" class="btn btn-outline">Learn More</a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add hero and shared button styles to `style.css`**

```css
/* ===== Shared Buttons ===== */
.btn {
  display: inline-block;
  padding: 12px 28px;
  border-radius: 50px;
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.1s;
  text-align: center;
}

.btn:active {
  transform: scale(0.98);
}

.btn-primary {
  background: var(--gold);
  color: var(--dark);
  border: 2px solid var(--gold);
}

.btn-primary:hover {
  background: var(--gold-dark);
  border-color: var(--gold-dark);
}

.btn-outline {
  background: transparent;
  color: var(--dark);
  border: 2px solid var(--gold-dark);
}

.btn-outline:hover {
  background: var(--gold);
  border-color: var(--gold);
}

/* ===== Hero ===== */
.hero {
  background: linear-gradient(160deg, var(--cream) 0%, #fff8d0 100%);
  padding: 100px 24px;
  text-align: center;
}

.hero-content {
  max-width: 720px;
  margin: 0 auto;
}

.hero-headline {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.2;
  color: var(--dark);
  margin-bottom: 20px;
}

.hero-sub {
  font-size: 1.1rem;
  color: var(--gray);
  max-width: 560px;
  margin: 0 auto 36px;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}
```

- [ ] **Step 3: Verify in browser — centered headline, subheading, two pill buttons on cream gradient background**

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "feat: add hero section with headline and CTA buttons"
```

---

### Task 4: About section

**Files:**
- Modify: `index.html` — fill in the About comment block
- Modify: `style.css` — add about and shared section styles

- [ ] **Step 1: Add about HTML**

```html
<!-- About -->
<section class="section about" id="about">
  <div class="container">
    <h2 class="section-title">About Golden Hearts Club</h2>
    <hr class="section-divider" />
    <div class="about-body">
      <p>
        Golden Hearts Club is a student-run service organization dedicated to
        bridging the technology gap between generations. Our members volunteer
        regularly at a local senior living center, providing one-on-one tech
        support to older adults who want to stay connected with the people and
        world they love.
      </p>
      <p>
        We believe technology should be accessible to everyone — and that
        patience, kindness, and respect are the most important tools we bring.
        Every session is an opportunity to make someone's day a little easier
        and to build a genuine friendship across generations.
      </p>
      <p>
        Our core values are <strong>patience</strong>, <strong>service</strong>,
        <strong>respect</strong>, and <strong>connection</strong>. No senior
        leaves a session feeling frustrated — we go at their pace, celebrate
        every small win, and always come back next time.
      </p>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add shared section styles and about styles to `style.css`**

```css
/* ===== Shared Section Styles ===== */
.section {
  padding: var(--section-padding);
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
}

.section-title {
  font-family: var(--font-serif);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  color: var(--dark);
  text-align: center;
  margin-bottom: 16px;
}

.section-divider {
  width: 60px;
  height: 3px;
  background: var(--gold);
  border: none;
  margin: 0 auto 40px;
}

/* ===== About ===== */
.about {
  background: var(--white);
}

.about-body {
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.about-body p {
  font-size: 1.05rem;
  color: var(--gray);
  line-height: 1.75;
  text-align: center;
}
```

- [ ] **Step 3: Verify in browser — white section, centered heading, gold divider, three paragraphs**

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "feat: add about section with mission and values"
```

---

### Task 5: What We Do section

**Files:**
- Modify: `index.html` — fill in the What We Do comment block
- Modify: `style.css` — add card grid styles

- [ ] **Step 1: Add What We Do HTML**

```html
<!-- What We Do -->
<section class="section what-we-do" id="what-we-do">
  <div class="container">
    <h2 class="section-title">What We Do</h2>
    <hr class="section-divider" />
    <div class="cards-grid">

      <div class="service-card">
        <div class="card-icon">📱</div>
        <h3 class="card-title">Smartphones &amp; Tablets</h3>
        <p class="card-desc">Helping seniors navigate apps, adjust settings, manage photos, and feel at home on their devices.</p>
      </div>

      <div class="service-card">
        <div class="card-icon">✉️</div>
        <h3 class="card-title">Email &amp; Texting</h3>
        <p class="card-desc">Composing, reading, and organizing messages so seniors can stay in touch with family and friends.</p>
      </div>

      <div class="service-card">
        <div class="card-icon">📹</div>
        <h3 class="card-title">Zoom &amp; Video Calls</h3>
        <p class="card-desc">Setting up and joining video calls so seniors can see loved ones face-to-face from anywhere.</p>
      </div>

      <div class="service-card">
        <div class="card-icon">⚙️</div>
        <h3 class="card-title">Apps &amp; Settings</h3>
        <p class="card-desc">Installing helpful apps, adjusting accessibility settings, and making devices easier to use day-to-day.</p>
      </div>

      <div class="service-card">
        <div class="card-icon">💻</div>
        <h3 class="card-title">Computer &amp; Internet Basics</h3>
        <p class="card-desc">Browsing the web, managing files, and building confidence with everyday computer tasks.</p>
      </div>

      <div class="service-card">
        <div class="card-icon">🔒</div>
        <h3 class="card-title">Digital Safety</h3>
        <p class="card-desc">Recognizing scams, creating strong passwords, and staying safe while using the internet.</p>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Add card grid styles to `style.css`**

```css
/* ===== What We Do ===== */
.what-we-do {
  background: var(--cream-light);
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.service-card {
  background: var(--white);
  border-radius: 10px;
  border-left: 3px solid var(--gold);
  padding: 24px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-icon {
  font-size: 2rem;
  line-height: 1;
}

.card-title {
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 700;
  color: var(--dark);
}

.card-desc {
  font-size: 0.95rem;
  color: var(--gray);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 3: Verify in browser — 2-column grid of 6 cards, each with icon, bold title, gold left border, gray description text. On narrow screen, stacks to 1 column**

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "feat: add what we do section with 6 service cards"
```

---

### Task 6: Impact section

**Files:**
- Modify: `index.html` — fill in the Impact comment block
- Modify: `style.css` — add impact styles

- [ ] **Step 1: Add impact HTML**

```html
<!-- Impact -->
<section class="section impact" id="impact">
  <div class="container">
    <h2 class="section-title">Our Impact</h2>
    <hr class="section-divider" />
    <div class="impact-columns">

      <div class="impact-col">
        <h3 class="impact-col-title">For Seniors</h3>
        <ul class="impact-list">
          <li>Greater confidence and independence with everyday technology</li>
          <li>Stronger connection to family and friends through video calls and messaging</li>
          <li>Reduced frustration and anxiety around digital devices</li>
          <li>A friendly, judgment-free space to ask any question</li>
        </ul>
      </div>

      <div class="impact-col">
        <h3 class="impact-col-title">For Students</h3>
        <ul class="impact-list">
          <li>Real-world leadership and communication experience</li>
          <li>Deeper empathy and patience developed through service</li>
          <li>Problem-solving skills applied in unpredictable, human situations</li>
          <li>Meaningful community service hours and a genuine sense of purpose</li>
        </ul>
      </div>

    </div>
    <p class="impact-closing">
      Together, we're proving that technology can bring generations closer — and
      that a little patience goes a long way.
    </p>
  </div>
</section>
```

- [ ] **Step 2: Add impact styles to `style.css`**

```css
/* ===== Impact ===== */
.impact {
  background: var(--white);
}

.impact-columns {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-bottom: 40px;
}

.impact-col-title {
  font-family: var(--font-serif);
  font-size: 1.3rem;
  color: var(--dark);
  margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--gold);
  display: inline-block;
}

.impact-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.impact-list li {
  font-size: 0.97rem;
  color: var(--gray);
  padding-left: 20px;
  position: relative;
  line-height: 1.6;
}

.impact-list li::before {
  content: '✦';
  position: absolute;
  left: 0;
  color: var(--gold-dark);
  font-size: 0.7rem;
  top: 4px;
}

.impact-closing {
  text-align: center;
  font-size: 1.05rem;
  color: var(--gray);
  font-style: italic;
  max-width: 620px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .impact-columns {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
```

- [ ] **Step 3: Verify in browser — two side-by-side columns with gold underlined headings, gold bullet markers, and closing italic sentence. Stacks on mobile**

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "feat: add impact section with senior and student benefit columns"
```

---

### Task 7: Join section

**Files:**
- Modify: `index.html` — fill in the Join comment block
- Modify: `style.css` — add join styles

- [ ] **Step 1: Add join HTML**

```html
<!-- Join -->
<section class="section join" id="join">
  <div class="container">
    <h2 class="section-title">Join the Club</h2>
    <hr class="section-divider" />
    <div class="join-body">
      <p>
        Golden Hearts Club welcomes any student interested in service, technology,
        healthcare, education, or community leadership. You don't need to be a
        tech expert — you just need to care.
      </p>
      <p>
        The most important qualities we look for are <strong>patience</strong>,
        <strong>responsibility</strong>, and a genuine <strong>willingness to help</strong>.
        If you can explain something clearly and kindly, you're already qualified.
      </p>
      <p>
        Fill out our interest form below and a club officer will reach out with
        next steps. We'd love to have you.
      </p>
      <!-- Replace href with your actual Google Form or interest form URL -->
      <a href="#" class="btn btn-primary join-btn">Fill Out Interest Form</a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add join styles to `style.css`**

```css
/* ===== Join ===== */
.join {
  background: var(--cream);
}

.join-body {
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
}

.join-body p {
  font-size: 1.05rem;
  color: var(--gray);
  line-height: 1.75;
}

.join-btn {
  margin-top: 8px;
}
```

- [ ] **Step 3: Verify in browser — cream background, centered paragraphs, gold pill button**

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "feat: add join section with interest form CTA"
```

---

### Task 8: Contact section and Footer

**Files:**
- Modify: `index.html` — fill in Contact and Footer comment blocks
- Modify: `style.css` — add contact and footer styles

- [ ] **Step 1: Add contact HTML**

```html
<!-- Contact -->
<section class="section contact" id="contact">
  <div class="container">
    <h2 class="section-title">Get in Touch</h2>
    <hr class="section-divider" />
    <div class="contact-body">
      <p>
        Have questions about joining, partnering with us, or bringing Golden Hearts
        Club to your community? We'd love to hear from you.
      </p>
      <p>
        Reach us at:
        <!-- Replace with the club's real email address -->
        <a href="mailto:goldhearts@school.edu" class="contact-email">goldhearts@school.edu</a>
      </p>
      <p class="contact-note">
        We welcome inquiries from prospective members, parents, teachers,
        administrators, and senior living center staff.
      </p>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add footer HTML**

```html
<!-- Footer -->
<footer class="footer">
  <p>&copy; 2026 Golden Hearts Club. Built by student volunteers.</p>
</footer>
```

- [ ] **Step 3: Add contact and footer styles to `style.css`**

```css
/* ===== Contact ===== */
.contact {
  background: var(--white);
}

.contact-body {
  max-width: 620px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-body p {
  font-size: 1.05rem;
  color: var(--gray);
  line-height: 1.7;
}

.contact-email {
  color: var(--gold-dark);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.contact-email:hover {
  color: var(--dark);
}

.contact-note {
  font-size: 0.9rem !important;
  font-style: italic;
}

/* ===== Footer ===== */
.footer {
  background: var(--dark);
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  padding: 28px 24px;
  font-size: 0.9rem;
}
```

- [ ] **Step 4: Verify in browser — white contact section with gold email link, dark footer with white text**

- [ ] **Step 5: Commit**

```bash
git add index.html style.css
git commit -m "feat: add contact section and footer"
```

---

### Task 9: JavaScript — smooth-scroll and hamburger menu

**Files:**
- Modify: `script.js` — add both behaviors

- [ ] **Step 1: Replace the placeholder comment in `script.js` with the full script**

```js
// ===== Smooth Scroll =====
// All nav links that point to an anchor (#section) scroll smoothly instead of jumping.
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
    // Close mobile nav if open
    navLinks.classList.remove('open');
  });
});

// ===== Sticky Nav Shadow =====
// Adds a "scrolled" class to the header once the user scrolls past the nav height.
var navHeader = document.getElementById('nav-header');
window.addEventListener('scroll', function () {
  if (window.scrollY > 10) {
    navHeader.classList.add('scrolled');
  } else {
    navHeader.classList.remove('scrolled');
  }
});

// ===== Mobile Hamburger Menu =====
var navToggle = document.getElementById('nav-toggle');
var navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', function () {
  navLinks.classList.toggle('open');
});

// Close nav when clicking anywhere outside of it
document.addEventListener('click', function (e) {
  if (!navHeader.contains(e.target)) {
    navLinks.classList.remove('open');
  }
});
```

- [ ] **Step 2: Verify smooth scroll — click a nav link, the page scrolls smoothly to the section instead of jumping**

- [ ] **Step 3: Verify sticky nav — scroll down past the hero; the nav should show a gold bottom border and subtle shadow**

- [ ] **Step 4: Verify hamburger menu — narrow the browser window below 768px. The nav links should be hidden. Click the hamburger button; links should appear. Click a link or outside the nav; menu should close**

- [ ] **Step 5: Commit**

```bash
git add script.js
git commit -m "feat: add smooth scroll, sticky nav shadow, and hamburger menu"
```

---

### Task 10: Final responsive polish and review

**Files:**
- Modify: `style.css` — add any remaining responsive rules and polish

- [ ] **Step 1: Add final shared responsive rules to the bottom of `style.css`**

```css
/* ===== Global Responsive ===== */
@media (max-width: 768px) {
  :root {
    --section-padding: 60px 20px;
  }

  .hero {
    padding: 80px 20px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 280px;
  }
}
```

- [ ] **Step 2: Walk through every section at 375px width (iPhone SE) and 768px width (tablet) and verify:**
  - Nav collapses to hamburger on mobile
  - Hero buttons stack vertically on mobile
  - Cards grid is 1 column on mobile
  - Impact columns stack on mobile
  - No horizontal overflow anywhere (no left-right scrollbar on body)

- [ ] **Step 3: Walk through every section at 1280px width (desktop) and verify:**
  - All content stays within `--max-width: 1100px` and is centered
  - No section looks stretched or cramped
  - Buttons, cards, and type all look proportional

- [ ] **Step 4: Check all nav anchor links jump to the correct section**

- [ ] **Step 5: Check the mailto link on the contact section opens the default email client**

- [ ] **Step 6: Commit**

```bash
git add style.css
git commit -m "feat: final responsive polish and layout review"
```

---

### Task 11: Add .gitignore and README note

**Files:**
- Create: `.gitignore`

- [ ] **Step 1: Create `.gitignore`**

```
# Brainstorm session files
.superpowers/

# macOS
.DS_Store

# VS Code
.vscode/
```

- [ ] **Step 2: Commit**

```bash
git add .gitignore
git commit -m "chore: add gitignore for superpowers, DS_Store, and vscode"
```

---

## How to Run Locally

1. Open the project folder in **VS Code**
2. Install the **Live Server** extension (search "Live Server" by Ritwick Dey in the Extensions panel)
3. Right-click `index.html` in the file explorer → **Open with Live Server**
4. The site opens at `http://127.0.0.1:5500` and auto-reloads on every save

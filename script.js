// ===== DOM References =====
var navHeader = document.getElementById('nav-header');
var navToggle = document.getElementById('nav-toggle');
var navLinks = document.getElementById('nav-links');

// ===== Smooth Scroll =====
// All nav links that point to an anchor (#section) scroll smoothly instead of jumping.
// The CSS scroll-behavior:smooth handles most cases; this also closes the mobile nav on click.
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    var href = this.getAttribute('href');
    if (!href || href === '#') return;
    var target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
    // Close mobile nav if open
    navLinks.classList.remove('open');
  });
});

// ===== Sticky Nav Shadow =====
// Adds a "scrolled" class to the header once the user scrolls past 10px.
window.addEventListener('scroll', function () {
  if (window.scrollY > 10) {
    navHeader.classList.add('scrolled');
  } else {
    navHeader.classList.remove('scrolled');
  }
});

// ===== Mobile Hamburger Menu =====
navToggle.addEventListener('click', function () {
  navLinks.classList.toggle('open');
});

// Close nav when clicking anywhere outside of it
document.addEventListener('click', function (e) {
  if (!navHeader.contains(e.target)) {
    navLinks.classList.remove('open');
  }
});

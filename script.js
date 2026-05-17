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

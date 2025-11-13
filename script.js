// Dark mode toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Responsive hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Simple form validation message
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');

form.addEventListener('submit', e => {
  e.preventDefault();
  msg.textContent = 'Thank you! Your message has been sent.';
  form.reset();
});


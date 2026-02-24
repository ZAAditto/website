// Nav scroll
const nav = document.getElementById('nav');
if (nav) window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40));

// Mobile toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(l => l.addEventListener('click', () => navLinks.classList.remove('open')));
}

// Scroll reveal
document.querySelectorAll('.reveal').forEach(el => {
  new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.1 }).observe(el);
});

// Typed.js (index page only)
const typedEl = document.getElementById('typed');
if (typedEl && typeof Typed !== 'undefined') {
  new Typed('#typed', {
    strings: ['Engineer', 'Robotics Researcher', 'CAD Expert', 'Coder'],
    loop: true, typeSpeed: 100, backSpeed: 50, backDelay: 2000
  });
}

// Lightbox
function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  if (lb) { document.getElementById('lightboxImg').src = src; lb.classList.add('active'); document.body.style.overflow = 'hidden'; }
}
function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) { lb.classList.remove('active'); document.body.style.overflow = ''; }
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// Scroll top
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => scrollTopBtn.classList.toggle('active', window.scrollY > 300));
  scrollTopBtn.addEventListener('click', e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
}

// Contact form (Formspree)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const msg = document.getElementById('sentMessage');
    if (msg) { msg.style.display = 'block'; }
    fetch(this.action, { method: this.method, body: new FormData(this) })
      .then(() => this.reset())
      .catch(() => {});
  });
}

// Navmenu scrollspy (index page)
function scrollspy() {
  const links = document.querySelectorAll('.nav-links a[href^="#"]');
  links.forEach(link => {
    const sec = document.querySelector(link.getAttribute('href'));
    if (!sec) return;
    const pos = window.scrollY + 200;
    if (pos >= sec.offsetTop && pos <= sec.offsetTop + sec.offsetHeight) {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}
window.addEventListener('scroll', scrollspy);
window.addEventListener('load', scrollspy);

// ============================================
// TRAILBLAZER EARTH — main.js
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // Mobile nav toggle
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded',
        navLinks.classList.contains('open') ? 'true' : 'false');
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    });
  });

  // Highlight current nav link based on filename
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Simple form handler (replace with real backend later)
  const forms = document.querySelectorAll('.contact-form, .quote-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      // If form has an action attribute (e.g., Formspree), let it submit normally
      if (form.getAttribute('action')) return;
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.textContent = 'Sending...';
      setTimeout(() => {
        btn.textContent = 'Sent — we\'ll be in touch';
        form.reset();
        setTimeout(() => { btn.innerHTML = originalText; }, 3000);
      }, 800);
    });
  });
});

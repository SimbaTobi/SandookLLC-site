// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal on scroll
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Smooth scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Masked hero logo: enable ONLY if supported + image loads =====
(() => {
  const maskUrl = "assets/hero.png";

  // If CSS mask isn't supported, do nothing (fallback <img> will show)
  const supportsMask =
    (window.CSS && CSS.supports && CSS.supports("-webkit-mask-image", `url("${maskUrl}")`)) ||
    (window.CSS && CSS.supports && CSS.supports("mask-image", `url("${maskUrl}")`));

  if (!supportsMask) return;

  // Only enable mask mode if the PNG successfully loads
  const img = new Image();
  img.onload = () => document.documentElement.classList.add("mask-ready");
  img.onerror = () => {
    // fallback image stays visible
    console.warn("Mask image failed to load:", maskUrl);
  };
  img.src = maskUrl;
})();

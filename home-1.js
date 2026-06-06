/* ============================================
   home-1.js — Home page: fade-in + carousel
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // --- Fade-in Animation ---
  const fadeElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => observer.observe(el));

  // Only trigger hero fade-in after short delay
  setTimeout(() => {
    var heroText = document.querySelector('.hero-text');
    if (heroText) heroText.classList.add('active');
  }, 500);

  // --- Carousel ---
  const slider = document.querySelector('.slider-container');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const dotsContainer = document.querySelector('.carousel-dots');
  const items = document.querySelectorAll('.slider-item');

  if (!slider || !items.length) return;

  const itemWidth = items[0].offsetWidth + 24; // width + gap

  // Create dots
  items.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot';
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    dot.addEventListener('click', () => scrollToSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.carousel-dots .dot');

  function scrollToSlide(index) {
    slider.scrollTo({ left: index * itemWidth, behavior: 'smooth' });
  }

  function updateDots() {
    const scrollPos = slider.scrollLeft;
    const idx = Math.round(scrollPos / itemWidth);
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  }

  prevBtn.addEventListener('click', () => {
    const currentIdx = Math.round(slider.scrollLeft / itemWidth);
    const newIdx = Math.max(0, currentIdx - 1);
    scrollToSlide(newIdx);
  });

  nextBtn.addEventListener('click', () => {
    const currentIdx = Math.round(slider.scrollLeft / itemWidth);
    const newIdx = Math.min(items.length - 1, currentIdx + 1);
    scrollToSlide(newIdx);
  });

  slider.addEventListener('scroll', updateDots);
  updateDots();

  // --- Touch swipe for carousel ---
  let startX = 0;
  slider.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; });
  slider.addEventListener('touchend', (e) => {
    const diff = startX - e.changedTouches[0].clientX;
    const currentIdx = Math.round(slider.scrollLeft / itemWidth);
    if (Math.abs(diff) > 50) {
      if (diff > 0) scrollToSlide(Math.min(items.length - 1, currentIdx + 1));
      else scrollToSlide(Math.max(0, currentIdx - 1));
    }
  });

});

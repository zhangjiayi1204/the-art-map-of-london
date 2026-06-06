/* ============================================
   music-gallery.js — Play button & fade-in
   ============================================ */

(function () {
  var currentAudio = null;
  var currentBtn = null;

  document.querySelectorAll('.play-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var track = this.getAttribute('data-track');
      if (!track) return;

      if (currentBtn === this && currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        this.textContent = '▶';
        this.classList.remove('playing');
        currentAudio = null;
        currentBtn = null;
        return;
      }

      if (currentAudio) {
        currentAudio.pause();
        if (currentBtn) {
          currentBtn.textContent = '▶';
          currentBtn.classList.remove('playing');
        }
      }

      currentAudio = new Audio(track);
      currentAudio.loop = true;
      currentAudio.volume = 0.5;
      currentAudio.play().catch(function () {});
      this.textContent = '⏸';
      this.classList.add('playing');
      currentBtn = this;
    });
  });

  // Scroll fade-in
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(function (el) {
    observer.observe(el);
  });
})();

/* ============================================
   music-player.js — Floating BGM per page
   ============================================ */

(function () {

  var page = window.location.pathname.split('/').pop() || 'index.html';

  var tracks = {
    'stpauls.html':       { file: 'handel-water-music.m4a',    title: 'Water Music: Overture',   composer: 'George Frideric Handel' },
    'greenwich.html':     { file: 'beethoven-pastoral.m4a',    title: 'Symphony No. 6 "Pastoral"', composer: 'Ludwig van Beethoven' },
    'chelsea.html':       { file: 'debussy-clair-de-lune.m4a', title: 'Clair de Lune',            composer: 'Claude Debussy' },
    'hyde-park.html':     { file: 'debussy-arabesque.m4a',     title: 'Arabesque No. 1',          composer: 'Claude Debussy' },
    'house-of-parliament.html': { file: 'satie-gymnopedie.m4a', title: 'Gymnopédie No. 1',        composer: 'Erik Satie' },
    'piccadilly.html':    { file: 'offenbach-orpheus.m4a',     title: 'Orpheus in the Underworld', composer: 'Jacques Offenbach' },
    'timeline.html':      { file: 'holst-jupiter.m4a',         title: 'The Planets: Jupiter',     composer: 'Gustav Holst' },
    'index.html':         { file: 'debussy-clair-de-lune.m4a', title: 'Clair de Lune',            composer: 'Claude Debussy' },
    'map.html':           { file: 'offenbach-orpheus.m4a',     title: 'Orpheus in the Underworld', composer: 'Jacques Offenbach' },
    'tower-bridge.html':  { file: 'rossini-william-tell.m4a',  title: 'William Tell Overture',    composer: 'Gioachino Rossini' }
  };

  var track = tracks[page];
  if (!track) return;

  var audio = new Audio(track.file);
  audio.loop = true;
  audio.volume = 0.4;

  // Build UI
  var playerHTML =
    '<div class="music-player" id="musicPlayer">' +
      '<button class="music-toggle" id="musicToggle" aria-label="Toggle music">🎵</button>' +
      '<div class="music-panel">' +
        '<div class="track-title">' + track.title + '</div>' +
        '<div class="track-composer">' + track.composer + '</div>' +
        '<div class="music-controls">' +
          '<button id="musicPlay" aria-label="Play">▶</button>' +
          '<input type="range" id="musicVolume" min="0" max="100" value="40">' +
        '</div>' +
      '</div>' +
    '</div>';

  document.body.insertAdjacentHTML('beforeend', playerHTML);

  var player = document.getElementById('musicPlayer');
  var toggle = document.getElementById('musicToggle');
  var playBtn = document.getElementById('musicPlay');
  var volumeSlider = document.getElementById('musicVolume');

  var isPlaying = false;

  function updateState() {
    if (isPlaying) {
      toggle.classList.add('playing');
      toggle.textContent = '♫';
      playBtn.textContent = '⏸';
    } else {
      toggle.classList.remove('playing');
      toggle.textContent = '♪';
      playBtn.textContent = '▶';
    }
  }

  toggle.addEventListener('click', function () {
    player.classList.toggle('open');
  });

  playBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
    } else {
      audio.play().catch(function () {});
      isPlaying = true;
    }
    updateState();
  });

  volumeSlider.addEventListener('input', function () {
    audio.volume = this.value / 100;
  });

  // Keyboard shortcut: M to toggle music
  document.addEventListener('keydown', function (e) {
    if (e.key === 'm' && !e.target.closest('input,textarea')) {
      playBtn.click();
    }
  });

  updateState();

})();

/* ============================================
   script.js — Pan + Zoom + Double-click for artwork
   ============================================ */

(function () {
  var img = document.getElementById('artwork');
  if (!img) return;

  var frame = img.parentElement;

  var scale = 1;
  var panX = 0, panY = 0;
  var minScale = 0.5, maxScale = 3.0;

  // Dragging state
  var dragging = false;
  var startX = 0, startY = 0;
  var startPanX = 0, startPanY = 0;

  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  function update() {
    scale = clamp(scale, minScale, maxScale);
    // When at default scale, snap pan to zero
    if (scale <= 1) { panX = 0; panY = 0; }
    img.style.transform = 'translate(' + panX + 'px, ' + panY + 'px) scale(' + scale + ')';
    img.style.cursor = scale > 1 ? (dragging ? 'grabbing' : 'grab') : 'zoom-in';
  }

  function getPos(e) {
    return { x: e.clientX || (e.touches && e.touches[0].clientX),
             y: e.clientY || (e.touches && e.touches[0].clientY) };
  }

  // --- Zoom at point (wheel) ---
  img.addEventListener('wheel', function (e) {
    e.preventDefault();
    var rect = img.getBoundingClientRect();
    var mx = e.clientX - rect.left;
    var my = e.clientY - rect.top;
    var ratio = 1 - e.deltaY * 0.002;
    var newScale = clamp(scale * ratio, minScale, maxScale);
    // Adjust pan to keep point under cursor stationary
    panX = mx - (mx - panX) * (newScale / scale);
    panY = my - (my - panY) * (newScale / scale);
    scale = newScale;
    update();
  }, { passive: false });

  // --- Double-click zoom ---
  img.addEventListener('dblclick', function (e) {
    e.preventDefault();
    if (scale > 1.2) {
      scale = 1; panX = 0; panY = 0;
    } else {
      var rect = img.getBoundingClientRect();
      var mx = e.clientX - rect.left;
      var my = e.clientY - rect.top;
      var targetScale = 2;
      panX = mx - mx * (targetScale / scale);
      panY = my - my * (targetScale / scale);
      scale = targetScale;
    }
    update();
  });

  // --- Pan (mouse) ---
  img.addEventListener('mousedown', function (e) {
    if (e.button !== 0) return;
    e.preventDefault();
    dragging = true;
    var p = getPos(e);
    startX = p.x; startY = p.y;
    startPanX = panX; startPanY = panY;
    update();
  });

  window.addEventListener('mousemove', function (e) {
    if (!dragging) return;
    var p = getPos(e);
    panX = startPanX + (p.x - startX);
    panY = startPanY + (p.y - startY);
    update();
  });

  window.addEventListener('mouseup', function () {
    dragging = false;
    update();
  });

  // --- Pan (touch) ---
  img.addEventListener('touchstart', function (e) {
    if (e.touches.length === 1) {
      dragging = true;
      var p = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      startX = p.x; startY = p.y;
      startPanX = panX; startPanY = panY;
      update();
    }
  }, { passive: false });

  img.addEventListener('touchmove', function (e) {
    if (!dragging || e.touches.length !== 1) return;
    e.preventDefault();
    panX = startPanX + (e.touches[0].clientX - startX);
    panY = startPanY + (e.touches[0].clientY - startY);
    update();
  }, { passive: false });

  img.addEventListener('touchend', function () {
    dragging = false;
    update();
  });

  // --- Button functions (keep existing interface) ---
  window.zoomIn = function () { scale += 0.2; update(); };
  window.zoomOut = function () { scale -= 0.2; update(); };
  window.resetZoom = function () { scale = 1; panX = 0; panY = 0; update(); };

  update();
})();

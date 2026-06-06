/* ============================================
   components.js — shared navbar & footer injection
   Also: back-to-top, hamburger menu, mobile dropdown
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // --- Inject Navbar ---
  const navbarHTML = `
    <header>
      <div class="navbar">
        <h1 class="logo">The Art Map of London</h1>
        <button class="hamburger" id="hamburgerBtn" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
        <nav>
          <ul id="navMenu">
            <li><a href="index.html" data-i18n="nav.home">Home</a></li>
            <li class="dropdown">
              <a href="map.html" class="dropbtn" data-i18n="nav.map_drop">Map ▾</a>
              <ul class="dropdown-content">
                <li><a href="stpauls.html" data-i18n="nav.stpauls">St. Paul's Cathedral</a></li>
                <li><a href="greenwich.html" data-i18n="nav.greenwich">Greenwich</a></li>
                <li><a href="chelsea.html" data-i18n="nav.chelsea">Chelsea</a></li>
                <li><a href="hyde-park.html" data-i18n="nav.hydepark">Hyde Park</a></li>
                <li><a href="house-of-parliament.html" data-i18n="nav.westminster">Palace of Westminster</a></li>
                <li><a href="tower-bridge.html" data-i18n="nav.towerbridge">Tower Bridge</a></li>
                <li><a href="piccadilly.html" data-i18n="nav.piccadilly">Piccadilly Circus</a></li>
              </ul>
            </li>
            <li><a href="timeline.html" data-i18n="nav.timeline">Timeline</a></li>
            <li><a href="music-gallery.html" data-i18n="nav.music">Music</a></li>
          </ul>
        </nav>
        <button id="themeToggle" class="theme-toggle" aria-label="Toggle theme">🌓</button>
        <button id="langToggle" class="lang-toggle" onclick="toggleLang()" title="Switch language">中</button>
      </div>
    </header>
  `;

  const navbarTarget = document.getElementById('navbar-placeholder');
  if (navbarTarget) {
    navbarTarget.outerHTML = navbarHTML;
  } else {
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
  }

  // --- Inject Footer ---
  const footerHTML = `
    <footer class="footer">
      <div class="footer-container">
        <p><span data-i18n="footer.contact">Contact:</span> <a href="mailto:yvonnezou1204@gmail.com">yvonnezou1204@gmail.com</a></p>
        <p data-i18n="footer.copy">&copy; 2025 The Art Map of London. All rights reserved.</p>
        <p data-i18n="footer.nonprofit">Non-profit website dedicated to art and culture education.</p>
      </div>
    </footer>
    <button class="back-to-top" id="backToTop" aria-label="Back to top">↑</button>
  `;

  const footerTarget = document.getElementById('footer-placeholder');
  if (footerTarget) {
    footerTarget.outerHTML = footerHTML;
  } else {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }

  // --- Back to Top ---
  const backBtn = document.getElementById('backToTop');
  if (backBtn) {
    window.addEventListener('scroll', function () {
      backBtn.classList.toggle('visible', window.scrollY > 400);
    });
    backBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Hamburger Menu Toggle ---
  const hamburger = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });
  }

  // --- Mobile Dropdown: click instead of hover ---
  const dropbtn = document.querySelector('.dropbtn');
  if (dropbtn) {
    dropbtn.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const content = this.nextElementSibling;
        const isOpen = content.style.display === 'block';
        content.style.display = isOpen ? 'none' : 'block';
        content.style.visibility = isOpen ? 'hidden' : 'visible';
        content.style.opacity = isOpen ? '0' : '1';
      }
    });
  }

  // --- Theme Toggle ---
  var themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    var savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌓';

    themeToggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      themeToggle.textContent = next === 'dark' ? '☀️' : '🌓';
    });
  }

});

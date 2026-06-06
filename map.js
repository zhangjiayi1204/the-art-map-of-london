/* ============================================
   map.js — Leaflet interactive map with 6 markers
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  var map = L.map('map', { zoomControl: false }).setView([51.505, -0.09], 13);

  L.tileLayer('https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
    attribution: '&copy; Gaode',
    maxZoom: 18,
    referrerPolicy: 'no-referrer'
  }).addTo(map);

  var locations = [
    {
      name: "St. Paul's Cathedral",
      i18n: 'map.stpauls',
      lat: 51.5138, lng: -0.0984,
      img: "StPaul's-Cathedral-1.jpg",
      artist: "Canaletto, ca. 1754",
      link: "stpauls.html"
    },
    {
      name: "Greenwich",
      i18n: 'map.greenwich',
      lat: 51.4769, lng: -0.0005,
      img: "greenwich-1.jpg",
      artist: "J.M.W. Turner, ca. 1825",
      link: "greenwich.html"
    },
    {
      name: "Chelsea",
      i18n: 'map.chelsea',
      lat: 51.4875, lng: -0.1686,
      img: "chelsea-1.jpg",
      artist: "James McNeill Whistler, ca. 1871",
      link: "chelsea.html"
    },
    {
      name: "Hyde Park",
      i18n: 'map.hydepark',
      lat: 51.5073, lng: -0.1657,
      img: "hyde-Park-1.jpg",
      artist: "Claude Monet, ca. 1871",
      link: "hyde-park.html"
    },
    {
      name: "Palace of Westminster",
      i18n: 'map.westminster',
      lat: 51.4995, lng: -0.1248,
      img: "houses-of-parliament.jpg",
      artist: "Camille Pissarro, ca. 1890",
      link: "house-of-parliament.html"
    },
    {
      name: "Piccadilly Circus",
      i18n: 'map.piccadilly',
      lat: 51.5101, lng: -0.1340,
      img: "piccadilly-cirsus.jpg",
      artist: "Charles Ginner, ca. 1912",
      link: "piccadilly.html"
    },
    {
      name: "Tower Bridge",
      i18n: 'map.towerbridge',
      lat: 51.5055, lng: -0.0754,
      img: "tower-bridge-1.jpg",
      artist: "W.L. Wyllie, 1894",
      link: "tower-bridge.html"
    }
  ];

  locations.forEach(function (loc) {
    function buildPopup() {
      var name = (window.i18n_t && window.i18n_t(loc.i18n)) || loc.name;
      var viewText = (window.i18n_t && window.i18n_t('map.view')) || 'View details →';
      return '<img loading="lazy" src="' + loc.img + '" alt="' + loc.name + '">' +
        '<h3>' + name + '</h3>' +
        '<p class="artist">' + loc.artist + '</p>' +
        '<a class="view-btn" href="' + loc.link + '">' + viewText + '</a>';
    }

    var marker = L.marker([loc.lat, loc.lng]).addTo(map);
    marker.bindPopup(buildPopup(), { maxWidth: 260 });
    marker.on('popupopen', function () {
      marker.setPopupContent(buildPopup());
    });
  });

  document.getElementById('zoom-in').addEventListener('click', function () { map.zoomIn(); });
  document.getElementById('zoom-out').addEventListener('click', function () { map.zoomOut(); });

});

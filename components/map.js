var map = L.map("map").setView([42.705, 25.09], 7.4);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

fetch("routes/DunavChernoMore2.geojson")
  .then((response) => response.json())
  .then((data) =>
    L.geoJSON(data, { style: { color: "#3b83d1" } })
      .bindPopup(`<div style='font-size: 1.4rem'>"Национален маршрут 2 - Дунав-Черно море"</div>`)
      .addTo(map)
  );

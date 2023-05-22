var southWest = L.latLng(20.859955, 125.293614),
    northEast = L.latLng(46.049957, 154.463614),
    bounds = L.latLngBounds(southWest, northEast);

var map = L.map('map', {
    maxBounds: bounds,
    attributionControl: false 
}).setView([38.964957,140.378614], 5);
L.tileLayer('https://api.maptiler.com/maps/jp-mierune-gray/256/{z}/{x}/{y}.png?key=bvtEzFAeFqFUNkDetfaA', {
    maxZoom: 10,
    minZoom:5,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

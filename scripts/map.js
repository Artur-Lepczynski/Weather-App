import "../node_modules/leaflet/dist/leaflet-src.esm.js"; 

export let tempLatitude, tempLongitude; 
let marker;

const southWestBound = L.latLng(-89.98155760646617, -180);
const northEastBound = L.latLng(89.99346179538875, 180);
const bounds = L.latLngBounds(southWestBound, northEastBound);

let map = L.map("map", {
    maxBounds: bounds,
    maxBoundsViscosity: 0.9
});

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     minZoom: 3,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>', 
//     continuousWorld: false,
//     noWrap: true, 
// }).addTo(map);

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 3,
    attribution: '&copy; <a href="https://carto.com/">carto.com</a> contributors', 
    continuousWorld: false,
    noWrap: true, 
}).addTo(map);

setViewAndMarker(52.22, 21.01);

map.addEventListener("click", (event)=>{
    let temp = getLatLong(event.latlng.toString()); 
    tempLatitude = temp.latitude; 
    tempLongitude = temp.longitude; 
    setViewAndMarker(tempLatitude, tempLongitude, map.getZoom());
});

function getLatLong(latLngString){
    latLngString = latLngString.slice(7, latLngString.length - 1);
    let temp = latLngString.split(","); 
    return {latitude: temp[0].trim(), longitude: temp[1].trim()};
};

export function setViewAndMarker(latitude, longitude, zoom = 10){
    if(marker) marker.remove(); 
    map.setView([latitude, longitude], zoom);
    marker = L.marker([latitude, longitude]).addTo(map).bindPopup(latitude + ", " + longitude).openPopup();
};
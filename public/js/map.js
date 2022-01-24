const map = L.map('map').setView([-34.51056,-58.39639], 12);

/*Socket Io
const socket = io.connect();
*/

const tileURL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'

L.tileLayer(tileURL).addTo(map);

map.locate({enableHighAccuracy: true})
map.on('locationfound', e =>{
    console.log(e)
    const coords = [e.latlng.lat, e.latlng.lng]
    const marker = L.marker(coords);
    marker.bindPopup("Socio");
    map.addLayer(marker);
})
/* example
const marker = L.marker([-34.51056,-58.39639]);
marker.bindPopup("Yco 19");
map.addLayer(marker);
*/
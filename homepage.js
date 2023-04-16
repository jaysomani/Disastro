// if (navigator.geolocation)
//     navigator.geolocation.getCurrentPosition(
//         function(position) {
//             const { latitude } = position.coords;
//             const { longitude } = position.coords;
//             console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);

//             const coords = [latitude, longitude];

//             const map = L.map("map").setView(coords, 13);

//             L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
//                 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//             }).addTo(map);

//             map.on("click", function(mapEvent) {
//                 console.log(mapEvent);
//                 const { lat, lng } = mapEvent.latlng;
//                 console.log(lat, lng);



//                 L.marker({ lat, lng }, { icon: spotIcon })
//                     .addTo(map)
//                     .bindPopup(
//                         L.popup({
//                             maxWidth: 250,
//                             minWidth: 100,
//                             autoClose: false,
//                             closeOnClick: false,

//                         })
//                     )
//                     .setPopupContent("Destination 1 | Spot 1")
//                     .openPopup();
//                 // map.setMapTypeId('satellite');
//             });
//         },
//         function() {
//             alert("Could not get your position");
//         }
//     );

// /////////////////////////////////////////////////////////////////////////////////////////
function initMap() {

    let mapOptions = {
        center: new google.maps.LatLng('23.0774', '76.8513'),
        zoom: 20,
        mapTypeId: 'satellite'
    }

    let map = new google.maps.Map(document.getElementById('map'), mapOptions);

    let markerOptions = {
        position: new google.maps.LatLng('23.0774', '76.8513'),
        map: map,
        // optimize: true;
        animation: google.maps.Animation.DROP
    }

    let marker = new google.maps.Marker(markerOptions);

    // marker.setIcon(./);
    // marker.setLabel('safe place ');
    marker.setTitle('safe place to stay');
    marker.setMap(map);
}
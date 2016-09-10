 function main() {
         var map = new L.Map('map', {
             zoomControl: false,
             center: [44.908, -75.83],
             zoom: 15
         });
         L.tileLayer(
             'http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
                 attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
                 maxZoom: 16
             }).addTo(map);
         // load 10k course route
         $.getJSON("10k.geojson", function(data) {
             // add GeoJSON layer to the map once the file is loaded
             L.geoJson(data).addTo(map);
         });
         // Define markers
         var startIcon = L.AwesomeMarkers.icon({
             prefix: 'fa',
             icon: 'flag-checkered',
             iconColor: 'white',
             markerColor: 'cadetblue'
         });
         var markerIcon = L.AwesomeMarkers.icon({
             prefix: 'fa',
             icon: '',
             iconColor: 'white',
             markerColor: 'cadetblue',
			 html: feature.properties.cng_Meters
         });
         // load 10k course route features
         $.getJSON("features.geojson", function(data) {
             //add GeoJSON layer to the map once the file is loaded
             L.geoJson(data, {
                 pointToLayer: function(feature, latlng) {
                     if (feature.properties.cng_Meters ==
                         "0.0") {
                         var marker = L.marker(latlng, {
                             icon: startIcon
                         });
                     } else {
                         var marker = L.marker(latlng, {
                             icon: markerIcon
                         });
                     };
                     return marker;
                     //return new L.marker(latlng, {
                     //icon: startIcon
                     //});
                 },
                 //onEachFeature: function(feature, layer) {
                 //layer.bindPopup(feature.properties.cng_Meters);
                 //}
             }).addTo(map);
         });
     }
     // you could use $(window).load(main);
 window.onload = main;
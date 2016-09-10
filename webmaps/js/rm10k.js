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
		 
		 // Creates a red marker with the coffee icon
  var redMarker = L.AwesomeMarkers.icon({
    icon: 'coffee',
    markerColor: 'red'
  });
		 
         // load 10k course route features
         $.getJSON("features.geojson", function(data) {
             //add GeoJSON layer to the map once the file is loaded
             L.geoJson(data, {
                 //style: function(feature) {
                     //return {
                         //color: "red"
                     //};
                 //},
                 pointToLayer: function(feature, latlng) {
                     return new L.CircleMarker(latlng, {
                         icon: redMarker
						 //radius: 10,
                         //fillOpacity: 0.85
                     });
                 },
                 //onEachFeature: function(feature, layer) {
                     //layer.bindPopup(feature.properties.cng_Meters);
                 //}
             }).addTo(map);
         });
     }
     // you could use $(window).load(main);
 window.onload = main;
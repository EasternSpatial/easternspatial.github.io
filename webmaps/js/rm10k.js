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
         L.marker([-75.842136004738762, 44.915590473006233], {
             icon: L.AwesomeMarkers.icon({
                 icon: 'spinner',
                 prefix: 'fa',
                 markerColor: 'red',
                 spin: true
             })
         }).addTo(map);
         L.marker([-75.832060018123741, 44.914413549299333], {
             icon: L.AwesomeMarkers.icon({
                 icon: 'coffee',
                 prefix: 'fa',
                 markerColor: 'red',
                 iconColor: '#f28f82'
             })
         }).addTo(map);
         L.marker([-75.822561794950488, 44.911647589142717], {
             icon: L.AwesomeMarkers.icon({
                 icon: 'cog',
                 prefix: 'fa',
                 markerColor: 'purple',
                 iconColor: 'black'
             })
         }).addTo(map);
         L.marker([-75.814411333682742, 44.904838590895402], {
             icon: L.AwesomeMarkers.icon({
                 icon: 'glass',
                 prefix: 'fa',
                 markerColor: 'green'
             })
         }).addTo(map);
         L.marker([-75.819099035460027, 44.904847825524257], {
             icon: L.AwesomeMarkers.icon({
                 icon: 'shopping-cart',
                 prefix: 'fa',
                 markerColor: 'blue'
             })
         }).addTo(map);
         L.marker([-75.819222734458137, 44.908766479203578], {
             icon: L.AwesomeMarkers.icon({
                 icon: 'info',
                 prefix: 'fa',
                 markerColor: 'orange'
             })
         }).addTo(map);
         L.marker([-75.829359263348891, 44.910911354101088], {
             icon: L.AwesomeMarkers.icon({
                 icon: 'group',
                 prefix: 'fa',
                 markerColor: 'darkred'
             })
         }).addTo(map);
         L.marker([-75.838807385644841, 44.905404992249714], {
             icon: L.AwesomeMarkers.icon({
                 icon: 'arrow-right',
                 prefix: 'fa',
                 markerColor: 'darkblue'
             })
         }).addTo(map);
         L.marker([-75.840375322159417, 44.909046491288322], {
             icon: L.AwesomeMarkers.icon({
                 icon: 'twitter',
                 prefix: 'fa',
                 markerColor: 'cadetblue'
             })
         }).addTo(map);
         // load 10k course route features
         //$.getJSON("features.geojson", function(data) {
         //add GeoJSON layer to the map once the file is loaded
         //L.geoJson(data).addTo(map);
         //});
         //$.getJSON("features.geojson", function(featData) {
         //L.geoJson(featData, {
         // style: function(feature) {
         //var ptSymbol,
         // feat = feature.properties.cng_(
         // Meters);
         // if (feat = 0.0) ptSymbol = L.AwesomeMarkers
         //.icon({
         //  icon: 'coffee',
         //  markerColor: 'red'
         //})                               
         //}).addTo(map);
         //});
     }
     // you could use $(window).load(main);
 window.onload = main;
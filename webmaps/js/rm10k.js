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
			 
		  // load GeoJSON from an external file
  $.getJSON("10k.geojson",function(data){
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data).addTo(map);
  });
    
     }
     // you could use $(window).load(main);
 window.onload = main;
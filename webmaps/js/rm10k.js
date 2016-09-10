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
         var km1Icon = L.AwesomeMarkers.icon({
             prefix: 'fa',
             icon: '1',
             iconColor: 'white',
             markerColor: 'cadetblue',
			 html: "1km"
         });
		 var km2Icon = L.AwesomeMarkers.icon({
             prefix: 'fa',
             icon: '1',
             iconColor: 'white',
             markerColor: 'cadetblue',
			 html: "2km"
         });
		 var km3Icon = L.AwesomeMarkers.icon({
             prefix: 'fa',
             icon: '1',
             iconColor: 'white',
             markerColor: 'cadetblue',
			 html: "3km"
         });
		 var km4Icon = L.AwesomeMarkers.icon({
             prefix: 'fa',
             icon: '1',
             iconColor: 'white',
             markerColor: 'cadetblue',
			 html: "4km"
         });
		 var km5Icon = L.AwesomeMarkers.icon({
             prefix: 'fa',
             icon: '1',
             iconColor: 'white',
             markerColor: 'cadetblue',
			 html: "5km"
         });
		 var km6Icon = L.AwesomeMarkers.icon({
             prefix: 'fa',
             icon: '1',
             iconColor: 'white',
             markerColor: 'cadetblue',
			 html: "6km"
         });
		 var km7Icon = L.AwesomeMarkers.icon({
             prefix: 'fa',
             icon: '1',
             iconColor: 'white',
             markerColor: 'cadetblue',
			 html: "7km"
         });
		 var km8Icon = L.AwesomeMarkers.icon({
             prefix: 'fa',
             icon: '1',
             iconColor: 'white',
             markerColor: 'cadetblue',
			 html: "8km"
         });
		 var km9Icon = L.AwesomeMarkers.icon({
             prefix: 'fa',
             icon: '1',
             iconColor: 'white',
             markerColor: 'cadetblue',
			 html: "9km"
         });
		 var defaultIcon = L.AwesomeMarkers.icon({
             prefix: 'fa',
             icon: '1',
             iconColor: 'white',
             markerColor: 'cadetblue',
			 html: "1km"
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
					} else if (feature.properties.cng_Meters ==
                         "1000.0") {
                         var marker = L.marker(latlng, {
                             icon: km1Icon
                         });
					} else if (feature.properties.cng_Meters ==
                         "2000.0") {
                         var marker = L.marker(latlng, {
                             icon: km2Icon
                         });
					} else if (feature.properties.cng_Meters ==
                         "3000.0") {
                         var marker = L.marker(latlng, {
                             icon: km3Icon
                         });
					} else if (feature.properties.cng_Meters ==
                         "4000.0") {
                         var marker = L.marker(latlng, {
                             icon: km4Icon
                         });
					} else if (feature.properties.cng_Meters ==
                         "5000.0") {
                         var marker = L.marker(latlng, {
                             icon: km5Icon
                         });
					} else if (feature.properties.cng_Meters ==
                         "6000.0") {
                         var marker = L.marker(latlng, {
                             icon: km6Icon
                         });
					} else if (feature.properties.cng_Meters ==
                         "7000.0") {
                         var marker = L.marker(latlng, {
                             icon: km7Icon
                         });
					} else if (feature.properties.cng_Meters ==
                         "8000.0") {
                         var marker = L.marker(latlng, {
                             icon: km8Icon
                         });
					} else if (feature.properties.cng_Meters ==
                         "9000.0") {
                         var marker = L.marker(latlng, {
                             icon: km9Icon
                         });
                     } else {
                         var marker = L.marker(latlng, {
                             icon: defaultIcon
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
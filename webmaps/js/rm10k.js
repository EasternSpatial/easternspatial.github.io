 function main() {
         var map = new L.Map('map', {
             zoomControl: false,
             center: [44.908, -75.83],
             zoom: 15
         });
         //L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
             //maxZoom: 20,
             //subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
         //}).addTo(Map);
		 L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
		 }).addTo(Map);
         //L.tileLayer(
         //'http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
         //attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
         //maxZoom: 16
         //}).addTo(map);
         // load 10k course route
         //$.getJSON("10k.geojson", function(data) {
             // add GeoJSON layer to the map once the file is loaded
             //L.geoJson(data).addTo(map);
         //});
         // Define markers
         var startIcon = L.AwesomeMarkers.icon({
             prefix: 'fa',
             icon: 'flag-checkered',
             iconColor: 'white',
             markerColor: 'cadetblue'
         });
         var km1Icon = L.AwesomeMarkers.icon({
             prefix: 'fa',
             icon: '',
             iconColor: 'white',
             markerColor: 'cadetblue',
             html: "1"
         });
         var km2Icon = L.AwesomeMarkers.icon({
             prefix: 'fa',
             icon: '',
             iconColor: 'white',
             markerColor: 'cadetblue',
             html: "2"
         });
         var km3Icon = L.AwesomeMarkers.icon({
             prefix: 'fa',
             icon: '',
             iconColor: 'white',
             markerColor: 'cadetblue',
             html: "3"
         });
         var km4Icon = L.AwesomeMarkers.icon({
             prefix: 'fa',
             icon: '',
             iconColor: 'white',
             markerColor: 'cadetblue',
             html: "4"
         });
         var km5Icon = L.AwesomeMarkers.icon({
             prefix: 'fa',
             icon: '',
             iconColor: 'white',
             markerColor: 'cadetblue',
             html: "5"
         });
         var km6Icon = L.AwesomeMarkers.icon({
             prefix: 'fa',
             icon: '',
             iconColor: 'white',
             markerColor: 'cadetblue',
             html: "6"
         });
         var km7Icon = L.AwesomeMarkers.icon({
             prefix: 'fa',
             icon: '',
             iconColor: 'white',
             markerColor: 'cadetblue',
             html: "7"
         });
         var km8Icon = L.AwesomeMarkers.icon({
             prefix: 'fa',
             icon: '',
             iconColor: 'white',
             markerColor: 'cadetblue',
             html: "8"
         });
         var km9Icon = L.AwesomeMarkers.icon({
             prefix: 'fa',
             icon: '',
             iconColor: 'white',
             markerColor: 'cadetblue',
             html: "9"
         });
         var defaultIcon = L.AwesomeMarkers.icon({
             prefix: 'fa',
             icon: '',
             iconColor: 'white',
             markerColor: 'cadetblue',
             html: ""
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
         // we will be appending the SVG to the Leaflet map pane
         // g (group) element will be inside the svg and it
         svg = d3.select(map.getPanes().overlayPane).append("svg"),
             // if you don't include the leaflet-zoom-hide when a 
             // user zooms in or out you will still see the phantom
             // original SVG 
             g = svg.append("g").attr("class", "leaflet-zoom-hide");
         //read in the GeoJSON. This function is asynchronous so
         // anything that needs the json file should be within
         d3.json("10k.geojson", function(collection) {
             //stream transform. transforms geometry before passing it to
             // listener. Can be used in conjunction with d3.geo.path
             // to implement the transform. In this case the transform
             var transform = d3.geo.transform({
                 point: projectPoint
             });
             //d3.geo.path translates GeoJSON to SVG path codes.
             //essentially a path generator. In this case it's
             // a path generator referencing our custom "projection"
             // which is the Leaflet method latLngToLayerPoint inside
             // our function called projectPoint
             var d3path = d3.geo.path().projection(transform);
             //essentially we're appending our features to the
             // group element. We're adding a class with the line name
             // and we're making them invisible
             var lineFeatures = g.selectAll("path").data(collection.features)
                 .enter().append("path").attr("class", function(d) {
                     return d.properties.name
                 }).attr("style", "opacity:0.5");
             // this is going to be the circle that tracks the
             // route, we're appending it to the g element
             var marker = g.append("circle");
             marker.attr("r", 10).attr("id", "marker");
             // for now we're selecting just one of the lines. And
             // on this one line we're invoking (with the selection.call)
             // our transition function. Using callis the same as invoking
             // the function by hand but makes it easier to use method
             // chaining.
             var path = svg.select("path.line0").attr("style",
                 "opacity:1").call(transition);
             // when the user zooms in or out you need to reset
             // the view
             map.on("viewreset", reset);
             // this puts stuff on the map! Without this "path"
             // only exists in theory
             reset();
             var startPoint = pathStartPoint(path);
             marker.attr("transform", "translate(" + startPoint[0] +
                 "," + startPoint[1] + ")");
             // Reposition the SVG to cover the features.
             function reset() {
                     var bounds = d3path.bounds(collection),
                         topLeft = bounds[0],
                         bottomRight = bounds[1];
                     // here you're setting some styles, width, heigh etc
                     // to the SVG. Note that we're adding a little height and
                     // width because otherwise the bounding box would perfectly
                     // cover our features BUT... since you might be using a big
                     // circle to represent a 1 dimensional point, the circle
                     // might get cut off.
                     svg.attr("width", bottomRight[0] - topLeft[0] +
                         100).attr("height", bottomRight[1] -
                         topLeft[1] + 100).style("left", topLeft[0] -
                         50 + "px").style("top", topLeft[1] - 50 +
                         "px");
                     lineFeatures.attr("d", d3path);
                     g.attr("transform", "translate(" + (-topLeft[0] +
                         50) + "," + (-topLeft[1] + 50) + ")");
                 } // end reset

             function pathStartPoint(path) {
                     var d = path.attr('d');
                     console.log(d)
                     dsplitted = d.split("L")[0].slice(1).split(",");
                     var point = []
                     point[0] = parseInt(dsplitted[0]);
                     point[1] = parseInt(dsplitted[1]);
                     return point;
                 } //end pathStartPoint

             function transition(path) {
                     path.transition().duration(24000).attrTween(
                             "stroke-dasharray", tweenDash)
                         //if you want to have it repeat the sequence
                         //then uncomment this piece
                         .each("end", function() {
                             d3.select(this).call(transition);
                         }); // infinite loop
                 } //end transition

             function tweenDash() {
                     var l = path.node().getTotalLength(); //total length of path
                     var i = d3.interpolateString("0," + l, l + "," + l); // interpolation of stroke-dasharray style attr
                     console.log(l)
                     return function(t) {
                         //t is fraction of time 0-1 since transition began
                         var marker = d3.select("#marker");
                         console.log(t)
                             // p is the point on the line (coordinates) at a given length
                             // along the line. In this case if l=50 and we're midway through
                             // the time then this would 25.
                         var p = path.node().getPointAtLength(t * l);
                         //Move the marker to that point
                         marker.attr("transform", "translate(" + p.x +
                             "," + p.y + ")"); //move marker
                         return i(t);
                     }
                 } //end tweenDash
                 // Use Leaflet to implement a D3 geometric transformation.
                 // the latLngToLayerPoint is a Leaflet conversion method:
                 //Returns the map layer point that corresponds to the given geographical
                 // coordinates (useful for placing overlays on the map).

             function projectPoint(x, y) {
                     var point = map.latLngToLayerPoint(new L.LatLng(y,
                         x));
                     this.stream.point(point.x, point.y);
                 } //end projectPoint
         });
     }
     // you could use $(window).load(main);
 window.onload = main;
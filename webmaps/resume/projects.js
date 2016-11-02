$(document).ready(function() {
	$( "#main-menu" ).hide();
});  

  //Google Analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-79179520-1', 'auto');
  ga('send', 'pageview');



// Load the map
mapboxgl.accessToken = 'pk.eyJ1IjoiZWFzdGVybnNwYXRpYWwiLCJhIjoiY2lzaXduYjFkMDFmdjMwcHVnNjVrdnlpcyJ9.TmooxPjVRzhQjVgy0KLBUg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v10',
    center: [-123.023521, 49.243935],
    zoom: 10.5,
	maxZoom: 20,
	minZoom: 8
});

// Add interactive map layers
//map.on('style.load', function () {
  
    //map.addSource('BCER_Introduction', {
        //type: 'vector',
        //url: 'mapbox://rbrtwhite.citix5lw8066p2nnvuon2pt8u-3nvr8'
    //});
	
	// camera icons
    //map.addLayer({
        //'id': 'introduction',
		//'interactive': true,
        //'type': 'symbol',
        //'source': 'BCER_Introduction',
        //'source-layer': 'BCER_Introduction',
		//'layout': {
			//'visibility': 'none',
			//'icon-image': 'attraction-15',
			//'icon-size':1
		//},
		//'paint': {}
	//});
		                    
//});


// Load interactive elements of Introduction
//addLayer('Introduction', 'introduction');

//tell buttons to toggle the relevant layer
function addLayer(name, id) {
    var link = document.createElement('button');
    link.href = '#';
    link.className = 'inactive';
    link.textContent = name;
    link.id = 'btn-'+id;
	
	var placeholder = document.createElement('button');
    placeholder.href = '#';
    placeholder.className = 'upcoming';
    placeholder.textContent = 'Chapter 1 - Stay tuned...';
    placeholder.id = 'btn-'+id;

    link.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(id, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(id, 'visibility', 'none');
            this.className = 'inactive';
        } else {
            this.className = 'active';
            map.setLayoutProperty(id, 'visibility', 'visible');
        }
    };

    var layers = document.getElementById('chapter-listing');
    layers.appendChild(link);
	layers.appendChild(placeholder);
}




	var zoomSaved;
	var pitchSaved;
	var bearingSaved;
	var centerSaved;
	
// When a click event occurs near a place, open a popup at the location of
// the feature, with description HTML from its properties.
map.on('click', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['introduction'] });
	zoomSaved = map.getZoom();
	pitchSaved = map.getPitch();
	bearingSaved = map.getBearing();
	centerSaved = map.getCenter().wrap();
	
	if (!features.length) {
        return;
    }
		
	// Fly to that feature
	if (features.length) {
        // Get coordinates from the symbol and center the map on those coordinates
		map.flyTo({
			center: features[0].geometry.coordinates,
			zoom: features[0].properties.zoom,
			bearing: features[0].properties.bearing,
			pitch: features[0].properties.pitch,
			speed: 0.8,
		});
	
	// Get attributes from elements and display them in the hidden sidebar
    document.getElementById('poi-content').innerHTML =
		'<h1>'+features[0].properties.title+'</h1>' +
		features[0].properties.image +
		'<p class="source">Image: ' +features[0].properties.source+ '</p>' +
		'<p>'+features[0].properties.description+'<span>'
		//+ ' ('+features[0].properties.date+')</span></p>'
    }	
		
	$( "#sidebar" ).show( "slide", {queue: false, direction: 'right', easing: 'easeOutCubic', duration: 800 });
	$( "#welcome" ).hide( "slide", {queue: false, direction: 'left', easing: 'easeOutCubic', duration: 800	});
		
});


// Use the same approach as above to indicate that the symbols are clickable
// by changing the cursor style to 'pointer'.
map.on('mousemove', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['introduction'] });
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
});

    function runEffect() {
      // Most effect types need no options passed by default
      var options = {};

      // Run the effect
      $( "#sidebar" ).hide( "slide", {queue: false, direction: 'right', easing: 'easeOutCubic', duration: 800	});	
	  map.flyTo({
		center: centerSaved,
		zoom: zoomSaved,
		pitch: pitchSaved,
		bearing: bearingSaved,
		speed: 0.6
	  });	  
	  $( "#welcome" ).show( "slide", {queue: false, direction: 'left', easing: 'easeOutCubic', duration: 800	});
	  //$( "#map" ).animate({width:'100%'}, {queue: false, easing: 'easeInCubic', duration: 800});
	  //$( "#map" ).animate({left:'0px'}, {queue: false, easing: 'easeInCubic', duration: 800});

    };
 
    //callback function to bring a hidden box back
    function sidebarStatus() {
      isSidebarOpen = 1;
    };
 
    // Set effect from select menu value
    $( "#poi-close" ).on( "click", function() {
      runEffect();	  
    });
 
    $( "#sidebar" ).hide();
	
	/* ------------------------------------------ */
	/* ----------------- Tours ------------------ */
	/* ------------------------------------------ */

	// Chapter 1 (Coming Soon)

/*
	
	var chapter1 = map.queryRenderedFeatures(e.point, { layers: ['chapterone'] });
	
function playback(index) {
	
    // Animate the map position based on camera properties
    map.flyTo({
			center: chapter1[index].geometry.coordinates,
			zoom: chapter1[index].properties.zoom,
			bearing: chapter1[index].properties.bearing,
			pitch: chapter1[index].properties.pitch,*
			speed: 0.8
		});

    map.once('moveend', function() {
        // Duration the slide is on screen after interaction
        window.setTimeout(function() {
            // Increment index
            index = (index + 1 === chapter1.length) ? 0 : index + 1;
            playback(index);
        }, 3000); // After callback, show the location for 3 seconds.
    });
}

    map.on('load', function() {
      playback(0);	  
    });
*/
	var mobiletoggle = 0;

    $( "#welcome-toggle" ).on( "click", function() {
		var welcomeToggle = document.getElementById('welcome-toggle');
		
		if (mobiletoggle == 0) {
			$( "#welcome" ).animate({top:'100%'}, {queue: true, easing: 'easeOutCubic', duration: 800 }).css('display', 'none');
			welcomeToggle.textContent = 'Learn More & Toggle Layers';
			mobiletoggle = 1;
		} else {
			$( "#welcome" ).css('display', 'block').animate({top:'40px'}, {queue: true, easing: 'easeOutCubic', duration: 800	}).css('display', 'block');
			welcomeToggle.textContent = 'View & Explore Map';
			mobiletoggle = 0;
		}
     });

map.addControl(new mapboxgl.Navigation());

//Toggle the site menu
$( "#site-nav" ).click(function() {
  $( "#main-menu" ).toggle( "slide", { direction: 'up', easing: 'easeOutCubic' }, 300 );
  $( "#site-nav" ).toggleClass( "active" );
  $( "#main-menu" ).toggleClass( "active" );
});

$('html').click(function(e) {
  //if clicked element is not your element and parents aren't your div
  if (e.target.id != '#main-menu' && $(e.target).parents('#menu-wrap').length == 0) {
    $( "#main-menu" ).hide();
    $( "#site-nav" ).removeClass( "active" );
    $( "#main-menu" ).removeClass( "active" );
  }
});
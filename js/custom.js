	/*
	|--------------------------------------------------------------------------
	| GOOGLE ANALYTICS
	|--------------------------------------------------------------------------
	*/	
	/*************** REPLACE WITH YOUR OWN UA NUMBER ***********/
	window.onload = function () { "use strict"; gaSSDSLoad(); }; //load after page onload
	/*************** REPLACE WITH YOUR OWN UA NUMBER ***********/



	$(document).ready(function() { 
		"use strict";
		$( ".neko-mega-menu" ).wrapInner( "<div></div>");





	
	




}); //End Doc Ready


/*
|--------------------------------------------------------------------------
| Revolution slider fullwidth
|--------------------------------------------------------------------------
*/	

function gaSSDSLoad(acct) {
	"use strict";  
	var gaJsHost = (("https:" === document.location.protocol) ? "https://ssl." : "http://www."),
	pageTracker,
	s;
	s = document.createElement('script');
	s.src = gaJsHost + 'google-analytics.com/ga.js';
	s.type = 'text/javascript';
	s.onloadDone = false;
	function init () {
		pageTracker = _gat._getTracker(acct);
		pageTracker._trackPageview();
	}
	s.onload = function () {
		s.onloadDone = true;
		init();
	};
	s.onreadystatechange = function() {
		if (('loaded' === s.readyState || 'complete' === s.readyState) && !s.onloadDone) {
			s.onloadDone = true;
			init();
		}
	};
	document.getElementsByTagName('head')[0].appendChild(s);
}


/*
|--------------------------------------------------------------------------
| Google maps
|--------------------------------------------------------------------------
	

function initialize(id) {
	"use strict";
	var image = 'images/icon-map.png';

	var overlayTitle = 'Sicurtransport';


    
    var locations = [
	
	
	['Sicurtransport <br/> <h5>Direzione e Amministrazione</h5><hr/>Via Papa Sergio I n. 48 – CAP. 90142', 'Palermo, Italia'],
    ['Sicurtransport <br/> <h5>Sede di Agrigento</h5><hr/>Via Mazzini, 124', 'Agrigento, Italia'],
    ['Sicurtransport <br/> <h5>Sede di Caltanissetta</h5><hr/>Via Luigi Einaudi, 37 ', 'Caltanissetta, Italy'],
    ['Sicurtransport <br/> <h5>Sede di Catania</h5><hr/>Via Creta, 11', 'Belpasso Catania, Italy'],
    ['Sicurtransport <h5>Sede di Messina</h5><hr/>Via Consolare Valeria, SS. 114 ', 'Pistunina Messina, Italy'],
    ['Sicurtransport <h5>Sede di Catanzaro</h5><hr/>Loc. profeta - Zona Industriale Caraffa di Catanzaro ', 'Catanzaro, Italy'],
    ['Sicurtransport <h5>Sede di Cosenza</h5><hr/>Contrada Cutura - Rende', 'Cosenza, Italy'],
    ['Sicurtransport <h5>Sede di Reggio Calabria</h5><hr/>Via Nervesa, 20/22', 'Reggio Calabria, Italy'],
    ['Sicurtransport <h5>Sede di Vibo Valentia</h5><hr/>Zona Industriale Aeroporto', 'Vibo Valentia, Italy'],
    ['Sicurtransport <h5/>Punto Operativo</h5><hr/>Via Autonomia Siciliana <br/> ', 'Castelvetrano, Italy'],
    ['Sicurtransport <h5/>Punto Operativo</h5><hr/>Via Vito Rosa,25 <br/> ', 'Santo Spirito, Bari, Italy']    
	
	
	];
    
   

	
	id = (id === undefined) ? 'map-wrapper' : id;

	var map = new google.maps.Map(document.getElementById(id), {
		scrollwheel: false,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.LARGE,
			position: google.maps.ControlPosition.LEFT_CENTER
		},
		streetViewControl:true,
		scaleControl:false,
		zoom: 14
	});

	if($mapType == 'SATELLITE'){
		map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
	}else if($mapType == 'HYBRID'){
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	}else if($mapType == 'TERRAIN'){
		map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
	}else{
		map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
	}

	if($mapStyle == 'light' && $mapType == 'ROADMAP'){
		var $flatMap = [{"elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#f5f5f2"},{"visibility":"on"}]},{"featureType":"administrative","stylers":[{"visibility":"on"}]},{"featureType":"transit","stylers":[{"visibility":"on"}]},{"featureType":"poi.attraction","stylers":[{"visibility":"on"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.place_of_worship","stylers":[{"visibility":"on"}]},{"featureType":"poi.school","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#ffffff"},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"visibility":"simplified"},{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","stylers":[{"color":"#ffffff"}]},{"featureType":"poi.park","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"water","stylers":[{"color":"#71c8d4"}]},{"featureType":"landscape","stylers":[{"color":"#e5e8e7"}]},{"featureType":"poi.park","stylers":[{"color":"#8ba129"}]},{"featureType":"road","stylers":[{"color":"#ffffff"}]},{"featureType":"poi.sports_complex","elementType":"geometry","stylers":[{"color":"#c7c7c7"},{"visibility":"on"}]},{"featureType":"water","stylers":[{"color":"#a0d3d3"}]},{"featureType":"poi.park","stylers":[{"color":"#91b65d"}]},{"featureType":"poi.park","stylers":[{"gamma":1.51}]},{"featureType":"road.local","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"poi.government","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"landscape","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","stylers":[{"visibility":"simplified"}]},{"featureType":"road"},{"featureType":"road"},{},{"featureType":"road.highway"}];
		var styledMap = new google.maps.StyledMapType($flatMap, {name: "light"});
	}else if($mapStyle == 'dark' && $mapType == 'ROADMAP'){
		var $darkMap = [{"stylers":[{"visibility":"on"},{"saturation":-100},{"gamma":0.54}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#4d4946"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"gamma":0.48}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"gamma":7.18}]}];
		var styledMap = new google.maps.StyledMapType($darkMap, {name: "dark"});
	}else if($mapStyle == 'gray' && $mapType == 'ROADMAP'){
		var $grayMap = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"on"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}];
		var styledMap = new google.maps.StyledMapType($grayMap, {name: "grey"});
	}

	if( $mapStyle != 'DEFAULT' && $mapType == 'ROADMAP'){
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');
	}

	var myLatlng;
	var marker, i;
	var bounds = new google.maps.LatLngBounds();
	var infowindow = new google.maps.InfoWindow({ content: "loading..." });

	for (i = 0; i < locations.length; i++) { 


		if(locations[i][2] !== undefined && locations[i][3] !== undefined){
			var content = '<div class="infoWindow"><h3>'+locations[i][0]+'</h3><p>'+locations[i][1]+'</p></div>';
			(function(content) {
				myLatlng = new google.maps.LatLng(locations[i][2], locations[i][3]);

				marker = new google.maps.Marker({
					position: myLatlng,
					icon:image,  
					title: overlayTitle,
					map: map
				});

				google.maps.event.addListener(marker, 'click', (function() {
					return function() {
						infowindow.setContent(content);
						infowindow.open(map, this);
					};

				})(this, i));

				if(locations.length > 1){
					bounds.extend(myLatlng);
					map.fitBounds(bounds);
				}else{
					map.setCenter(myLatlng);
				}

			})(content);
		}else{

			var geocoder   = new google.maps.Geocoder();
			var info   = locations[i][0];
			var addr   = locations[i][1];
			var latLng = locations[i][1];

			(function(info, addr) {

				geocoder.geocode( {

					'address': latLng

				}, function(results) {

					myLatlng = results[0].geometry.location;

					marker = new google.maps.Marker({
						position: myLatlng,
						icon:image,  
						title: overlayTitle,
						map: map
					});
					var $content = '<div class="infoWindow"><h3>'+info+'</h3><p>'+addr+'</p></div>';
					google.maps.event.addListener(marker, 'click', (function() {
						return function() {
							infowindow.setContent($content);
							infowindow.open(map, this);
						};
					})(this, i));

					if(locations.length > 1){
						bounds.extend(myLatlng);
						map.fitBounds(bounds);
					}else{
						map.setCenter(myLatlng);
					}
				});
			})(info, addr);

		}
	}
}
*/
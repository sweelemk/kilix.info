$(function(){
    contactsMap();
    //whereMaps();
    branchMap();
})
    var stylez = [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "saturation": "-42"
                },
                {
                    "gamma": "3.11"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "lightness": "-82"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "lightness": "100"
                },
                {
                    "visibility": "on"
                },
                {
                    "hue": "#ff0000"
                },
                {
                    "saturation": "100"
                },
                {
                    "weight": "1.83"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#d0304e"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#e72c2c"
                }
            ]
        }
    ];
function contactsMap(){
    var googleMaps = $('#map-canvas');
    if(googleMaps.length){
    	var mapOptions = {
            zoom: 15,
    		center: new google.maps.LatLng(55.828228, 37.634398),
    		disableDefaultUI: true,
    		scrollwheel: false,
    		zoomControl: true,
    		zoomControlOptions: {
    				style: google.maps.ZoomControlStyle.SMALL,
    				position: google.maps.ControlPosition.RIGHT_CENTER
    			},
    		mapTypeControlOptions: {
    			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'tehgrayz']
    		}
    	}
    	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    	var mapType = new google.maps.StyledMapType(stylez, { name:"Grayscale" });    
    	map.mapTypes.set('tehgrayz', mapType);
    	map.setMapTypeId('tehgrayz');
    	var image = 'img/icons/marker.png';
    	var myLatLng1 = new google.maps.LatLng(55.828228, 37.634398);
    	var marker1 = new google.maps.Marker({
    			position: myLatLng1,
    			map: map,
    			title: 'Uluru (Ayers Rock)', 
    			icon: image
    	});
    }
}
function whereMaps(){
    var googleMapsWhere = $('#map-canvas-where');
    if(googleMapsWhere.length){
        var mapOptions = {
            zoom: 15,
            center: new google.maps.LatLng(55.828228, 37.634398),
            disableDefaultUI: true,
            scrollwheel: false,
            zoomControl: true,
            zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL,
                    position: google.maps.ControlPosition.RIGHT_CENTER
                },
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'tehgrayz']
            }
        }
        var map = new google.maps.Map(document.getElementById('map-canvas-where'), mapOptions);
        var mapType = new google.maps.StyledMapType(stylez, { name:"Grayscale" });    
        map.mapTypes.set('tehgrayz', mapType);
        map.setMapTypeId('tehgrayz');
        var image = 'img/icons/marker.png';
        var myLatLng1 = new google.maps.LatLng(55.828228, 37.634398);
        var marker1 = new google.maps.Marker({
                position: myLatLng1,
                map: map,
                title: 'Uluru (Ayers Rock)', 
                icon: image
        });
    }
}
$('.js-tooltip').on('click', function(){
    setTimeout(function(){
        branchMap();
    })
})
function branchMap(){
    var googleMapCollection = $('.maps');
    $('.maps').each(function(){
        googleMapFunc($(this));
    });
    function googleMapFunc(googleMap){
        if(googleMap.length){
            var longitude = parseFloat(googleMap.attr('data-longitude')) || 53.894717,
                latitude = parseFloat(googleMap.attr('data-latitude')) || 27.562312;
            var latlng = new google.maps.LatLng(longitude, latitude);

            var myOptions = {
                zoom: 15,
                center: new google.maps.LatLng(55.828228, 37.634398),
                disableDefaultUI: true,
                scrollwheel: false,
                zoomControl: true,
                zoomControlOptions: {
                        style: google.maps.ZoomControlStyle.SMALL,
                        position: google.maps.ControlPosition.RIGHT_CENTER
                    },
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'tehgrayz']
                }
            };
            
            var map = new google.maps.Map(document.getElementById(googleMap.attr('id')), myOptions);
            var mapType = new google.maps.StyledMapType(stylez, { name:"Grayscale" });    
            map.mapTypes.set('tehgrayz', mapType);
            map.setMapTypeId('tehgrayz');
            
            var companyImage = new google.maps.MarkerImage();
            var companyPos = new google.maps.LatLng(longitude, latitude);
            var companyMarker = new google.maps.Marker({
                position: companyPos
            });

            var boxText = document.createElement("div");
            boxText.style.cssText = "background: url('img/icons/marker.png') no-repeat; width: 34px; height: 54px;";
            var boxContent = '';
            boxText.innerHTML = boxContent;
            var myOptions = {
                content: boxText,
                disableAutoPan: false,
                maxWidth: 0,
                pixelOffset: new google.maps.Size(-11, -32),
                zIndex: null,
                infoBoxClearance: new google.maps.Size(1, 1),
                isHidden: false,
                pane: "floatPane",
                enableEventPropagation: false,
                closeBoxURL:''
            };
            var ib = new InfoBox(myOptions);
            ib.open(map, companyMarker);
        }
    };
};


function initMap(){
    var myOptions = {
        zoom: 5,
        center: new google.maps.LatLng(55.828228, 37.634398),
        disableDefaultUI: true,
        scrollwheel: false,
        zoomControl: true,
        zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL,
                position: google.maps.ControlPosition.LEFT_CENTER
            },
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'tehgrayz']
        }
    };
    var map = new google.maps.Map(document.getElementById('map-canvas-where'), myOptions);
    var mapType = new google.maps.StyledMapType(stylez, { name:"Grayscale" });    
        map.mapTypes.set('tehgrayz', mapType);
        map.setMapTypeId('tehgrayz');

        setMarkers(map);
}
var beaches = [];
$('.maps').each(function(index){
    var cur_coords = [];
        cur_coords[0] = $(this).data('longitude');
        cur_coords[1] = $(this).data('latitude');
        cur_coords[2] = $(this).parents('.shops_item').find('.shop_title').text();
        cur_coords[3] = $(this).parents('.shops_item').find('.js-tooltip').text();
        cur_coords[4] = $(this).parents('.shops_item').find('.shop_phone').text();
        beaches[index] = cur_coords;
});
var contentString = beaches[2];
//console.log(contentString);
console.log(beaches);

function setMarkers(map) {
    var image = {
        url: 'img/icons/marker.png',
        size: new google.maps.Size(31, 54),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 54)
    };
    var infowindow = new google.maps.InfoWindow({
        content: '',
        maxWidth: 380
    });
    var markersBounds = new google.maps.LatLngBounds();
    for (var i = 0; i < beaches.length; i++) {
        var beach = beaches[i];

        var content = '<div class="tip_containet">' + '<div class="tip_title">' + beach[2] + '</div>' + '<div class="tip_address">' + beach[3] + '</div>' + '<div class="tip_phone">' + beach[4] + '</div>' + '</div>';
        console.log(content);
        var markerPosition = new google.maps.LatLng(beach[0], beach[1]);
        markersBounds.extend(markerPosition);
        var marker = new google.maps.Marker({
          position: markerPosition,
          map: map,
          icon: image,
          //info: beach[2]
        });
        (function(marker, i) {
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent(content);
                infowindow.open(map, marker);
            });
        })(marker, i);
    }
    map.setCenter(markersBounds.getCenter(), map.fitBounds(markersBounds));
};
initMap();
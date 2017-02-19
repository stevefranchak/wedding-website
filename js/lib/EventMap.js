var mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae",
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off",
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
];

window.loadEventMap = function() {
    var centerPosition = {lat: 41.06262, lng: -75.6160702},
        map = new google.maps.Map(document.getElementById('event-map-block'), {
            center: centerPosition,
            zoom: 14,
            styles: mapStyle
        }),
        markerInfoWindows = {
            ceremony: new google.maps.InfoWindow({
                content: '<div class="event-map-info-window"><b>Ceremony</b></div>'
            }),
            reception: new google.maps.InfoWindow({
                content: '<div class="event-map-info-window"><b>Reception</b></div>'
            })
        };

    // Handler for recentering the map on window resize
    // Using the Map API's resize event did not seem to work well
    $(window).on('resize', function() {
      // Wrapped in a timeout to put the map centering back into the
      //  event queue to give it a chance to get the map's actual size
      setTimeout(function() {
          map.setCenter(centerPosition);
      }, 0);

    });

    // Ceremony icon & info window
    var ceremonyMarker = new google.maps.Marker({
      position: new google.maps.LatLng(41.059985, -75.610457),
      title: 'Ceremony',
      map: map,
      icon: {
        url: 'img/wedding-ring.png',
        scaledSize: new google.maps.Size(35, 35),
        anchor: new google.maps.Point(17.5, 17.5)
      }
    });

    ceremonyMarker.addListener('click', function() {
        markerInfoWindows.ceremony.open(map, ceremonyMarker);
    });

    // Reception icon & info window
    var receptionMarker = new google.maps.Marker({
      position: new google.maps.LatLng(41.064725, -75.620537),
      title: 'Reception',
      map: map,
      icon: {
        url: 'img/dinner.png',
        scaledSize: new google.maps.Size(35, 35),
        anchor: new google.maps.Point(17.5, 17.5)
      }
    });

    receptionMarker.addListener('click', function() {
        markerInfoWindows.reception.open(map, receptionMarker);
    });

};

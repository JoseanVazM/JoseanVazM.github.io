var contactmap = {
  lat: 39.742043,
  lng: -104.991531
};

$('#at-map')
  .gmap3({
    zoom: 12,
    center: contactmap,
    scrollwheel: false,
    mapTypeId: "shadeOfGrey",
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
    }
  })

  .styledmaptype(
    "shadeOfGrey", [{
                 "featureType": "water",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#A3CCFF"
                    }, {
                     "lightness": 17
                    }]
                }, {
                 "featureType": "landscape",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#DFDFDF"
                    }, {
                     "lightness": 20
                    }]
                }, {
                 "featureType": "road.highway",
                 "elementType": "geometry.fill",
                 "stylers": [{
                     "color": "#FFEBAE"
                    }, {
                     "lightness": 17
                    }]
                }, {
                 "featureType": "road.highway",
                 "elementType": "geometry.stroke",
                 "stylers": [{
                     "color": "#ffffff"
                    }, {
                     "lightness": 29
                    }, {
                     "weight": 0.2
                    }]
                }, {
                 "featureType": "road.arterial",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#ffffff"
                    }, {
                     "lightness": 18
                    }]
                }, {
                 "featureType": "road.local",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#ffffff"
                    }, {
                     "lightness": 16
                    }]
                }, {
                 "featureType": "poi",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#f5f5f5"
                    }, {
                     "lightness": 21
                    }]
                }, {
                 "featureType": "poi.park",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#dedede"
                    }, {
                     "lightness": 21
                    }]
                }, {
                 "elementType": "labels.text.stroke",
                 "stylers": [{
                     "visibility": "on"
                    }, {
                     "color": "#ffffff"
                    }, {
                     "lightness": 16
                    }]
                }, {
                 "elementType": "labels.text.fill",
                 "stylers": [{
                     "saturation": 36
                    }, {
                     "color": "#333333"
                    }, {
                     "lightness": 40
                    }]
                }, {
                 "elementType": "labels.icon",
                 "stylers": [{
                     "visibility": "off"
                    }]
                }, {
                 "featureType": "transit",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#f2f2f2"
                    }, {
                     "lightness": 19
                    }]
                }, {
                 "featureType": "administrative",
                 "elementType": "geometry.fill",
                 "stylers": [{
                     "color": "#fefefe"
                    }, {
                     "lightness": 20
                    }]
                }, {
                 "featureType": "administrative",
                 "elementType": "geometry.stroke",
                 "stylers": [{
                     "color": "#fefefe"
                    }, {
                     "lightness": 17
                    }, {
                     "weight": 1.2
                    }]
                }], {
      name: "HQ"
    }
  )

  .marker({
    position: contactmap,
    icon: 'assets/img/map-marker.gif'
  })

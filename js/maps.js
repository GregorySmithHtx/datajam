var maps = (function(){
  //Create map object
  var map = L.map('map');
  var markers = L.markerClusterGroup({ chunkedLoading: true });

  //Create map layer
  L.tileLayer(
    'http://api.tiles.mapbox.com/v4/mapbox.outdoors/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZ3JlZ2lzbSIsImEiOiJiNjMwMWE5MWUwOThjOGUxYjIxMzk5Njk3ODBkM2ZjZiJ9.WjgpibCLDnpbg3vjS0MLKw'
    ,{}
  ).addTo(map);

  function addMarkers(markerList){
    // markers.addLayers(markerList);
    // map.addLayer(markers);
    // markerList.forEach(function(marker){
    //   marker.addTo(map);
    // })
  }

  var zips = L.geoJson(txShapes).addTo(map);
  zips.setStyle({fillOpacity:0.0, stroke: .2, opacity: .1});

  //Set center and zoom
  map.setView([29.7604, -95.3698], 10);

  people.loadPeople();

  return{
    zips: zips,
    map: map,
    markers: markers,
    addMarkers: addMarkers
  }
}());
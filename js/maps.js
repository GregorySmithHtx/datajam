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
    markers.addLayers(markerList);
    map.addLayer(markers);
    // markerList.forEach(function(marker){
    //   marker.addTo(map);
    // })
  }

  //Set center and zoom
  map.setView([29.7604, -95.3698], 10);

  people.loadPeople();

  return{
    map: map,
    markers: markers,
    addMarkers: addMarkers
  }
}());
var maps = (function(){
  //Create map object
  var map = L.map('map');
  //var markers;
  var markers = L.markerClusterGroup({ chunkedLoading: true });

  /* Please replace this with your personal mapbox access token */ 
  var access_token = 'pk.eyJ1IjoiZ3JlZ2lzbSIsImEiOiJiNjMwMWE5MWUwOThjOGUxYjIxMzk5Njk3ODBkM2ZjZiJ9.WjgpibCLDnpbg3vjS0MLKw'

  //Create map layer
  var mainMap = L.tileLayer(
    'http://api.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=' + access_token
    ,{}
  ).addTo(map);
  
  map.setView([29.7604, -95.3698], 10);

  // function addMarkers(markerList){
  //   markers.addLayers(markerList);
  //   markerList.forEach(function(marker){
  //     marker.addTo(map);
  //   })
  // }

  var zips = L.geoJson.ajax('txShapes.geojson');
  zips.on('data:loaded',function(e){
    zips.setStyle({opacity:0.0, fillOpacity: 0.0, color: "purple"});
    zips.addTo(map);
    people.loadPeople();
  });

  return{
    zips: zips,
    map: map,
    markers: markers,
    //addMarkers: addMarkers
  }
}());
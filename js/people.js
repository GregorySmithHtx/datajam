var people = (function(){
  function loadPeople(){
    d3.csv("../data.csv")
      .get(function(error, rows){
        showPeople(rows);});
  }

  function showPeople(rows){
    var markerList = [];
    
    rows.forEach(function(person){
      var id = person.id;
      var marker = L.marker(L.latLng(person.lat, person.lon), { title: id });
    
      marker.bindPopup(id);
      markerList.push(marker);
    });
    
    maps.addMarkers(markerList);
  }

  return{
    loadPeople: loadPeople
  }
}());
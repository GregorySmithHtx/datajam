var people = (function(){
  var peopleList = [];
  var interests = [];

  function loadPeople(){
    d3.csv("js/data.csv")
      .get(function(error, rows){
        showPeople(rows);});
  }

  function Person(data){
    this.id = data.id;
    this.lat = data.lat;
    this.lon = data.lon;
    this.interests = data.topics.split(',');
  }

  function addInterests(topics){
    topics.split(',').forEach(function(interest){
      if(interests.indexOf(interest) === -1){
        interests.push(interest);
      }
    })
  }

  function showZip(point){
    var zip = leafletPip.pointInLayer(point.getLatLng(), maps.zips, true);
    if(zip.length){
      zip[0].setStyle({fillOpacity: zip[0].options.fillOpacity + 0.05});
    }
  }

  function showPeople(rows){
    var markerList = [];
    
    rows.forEach(function(person){
      var id = person.id;
      var marker = L.marker(L.latLng(person.lat, person.lon), { title: id });
      
      marker.bindPopup(id);
      markerList.push(marker);

      peopleList.push(new Person(person));
      showZip(marker);
      addInterests(person.topics);
    });
    
    maps.addMarkers(markerList);
    interests.sort();
    // console.log(interests);
  }

  return{
    peopleList: peopleList,
    loadPeople: loadPeople
  }
}());
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
    //Change opacity for zip with person in it
  }

  function showPeople(rows){
    var markerList = [];
    
    rows.forEach(function(person){
      var id = person.id;
      var marker = L.marker(L.latLng(person.lat, person.lon), { title: id });
      
      marker.bindPopup(id);
      markerList.push(marker);

      peopleList.push(new Person(person));
      showZip([person.lat,person.lon]);
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
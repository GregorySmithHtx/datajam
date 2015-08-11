var people = (function(){
  var peopleList = [];
  var interests = [];
  var zipList = [];
  var maxCounter = 0;
  var $alertBox = $('.alert');

  $alertBox.hide();

  function loadPeople(){
    $alertBox.text('Loading people data...');
    d3.csv("js/data.csv")
      .get(function(error, rows){
        showPeople(rows);});
  }

  function addZip(point){
    var zip = leafletPip.pointInLayer(point.getLatLng(), maps.zips, true),
        zipName;
  
    if(zip.length){
      zipName = zip[0].feature.properties.NAME;
      if(!zipList[zipName]){
        zipList[+zipName] = {};
        zipList[+zipName].layer = zip[0];
        zipList[+zipName].layer.bindPopup(zipName);
        zipList[+zipName].count = 1;
      }else{
        zipList[+zipName].count++;
        if(zipList[+zipName].count > maxCounter){
          maxCounter = zipList[+zipName].count;
        }
      }
    }
  }

  function showZips(){
    var max = d3.max(zipList);

    zipList.forEach(function(zip, i){
      var opacity = Math.max( Math.ceil(zip.count/maxCounter * 10) / 10 ).toFixed(1);
      zip.layer.setStyle({fillOpacity: opacity})
    });
  }

  function showPeople(rows){
    var markerList = [];
    $alertBox.text('Mapping people')
    
    rows.forEach(function(person){
      var id = person.id;
      var marker = L.marker(L.latLng(person.lat, person.lon), { title: id });
      
      //marker.bindPopup(id);
      markerList.push(marker);
      addZip(marker);
      maps.addMarkers(markerList);
    });

    showZips();
    $alertBox.hide();
  }

  return{
    peopleList: peopleList,
    loadPeople: loadPeople
  }
}());
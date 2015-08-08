function polygon(coordinates){
  return {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            coordinates
          ]
        }
      }
    ]
  };
}

function lineString(coordinates){
  return {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "LineString",
          "coordinates": coordinates
        }
      }
    ]
  };
}

function point(coordinates, data){
  return {
  "type": "FeatureCollection",
  "features": [
    {

      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [coordinates,
          [coordinates[0]-2.5,coordinates[1]+5],
          [coordinates[0]+2.5,coordinates[1] + 5]]
        ]
      }
    }
  ]
}
}
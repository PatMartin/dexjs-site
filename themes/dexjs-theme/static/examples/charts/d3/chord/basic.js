var csv = {
  "header" : [ "Name", "Gender", "Vehicle" ],
  "data"   : [
    [ "Bob", "Male", "Truck" ],
    [ "Jennifer", "Female", "Car" ],
    [ "Pat", "Male", "Car" ]
  ]
}

dex.charts.d3.Chord({
  "parent": "#Chord",
  "csv": csv
}).render();

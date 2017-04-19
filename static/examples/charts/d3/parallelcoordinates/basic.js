var csv = {
  "header" : [ "Name", "Gender", "Vehicle" ],
  "data"   : [
    [ "Bob", "Male", "Truck" ],
    [ "Jennifer", "Female", "Car" ],
    [ "Pat", "Male", "Car" ],
    [ "Jim", "Male", "Truck" ],
    [ "Mike", "Male", "Car" ],
    [ "Sally", "Female", "Car" ]
  ]
};

dex.charts.d3.ParallelCoordinates({
  "parent": "#ParallelCoordinates",
  "csv": csv,
  "margin.top" : 60
}).render();

var csv = {
  "header" : [ "Country", "Continent", "Population" ],
  "data"   : [
    [ "China", "Asia", 1381920000 ],
    [ "India", "Asia", 1312900000 ],
    [ "United States", "North America", 324631000 ],
    [ "Mexico", "North America", 122273000 ],
    [ "Canada", "North America", 36471800 ]
  ]
}

dex.charts.d3.ClusteredForce({
  "parent": "#ClusteredForce",
  "csv": csv,
  "groups" : [ { "category" : "Continent", "value" : "Population", "label" : "Country"}]
}).render();

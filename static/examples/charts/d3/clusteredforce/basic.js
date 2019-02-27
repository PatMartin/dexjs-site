var csv = new dex.csv({
  "header": ["Country", "Continent", "Population"],
  "data": [
    ["China", "Asia", 1381920000],
    ["India", "Asia", 1312900000],
    ["United States", "North America", 324631000],
    ["Mexico", "North America", 122273000],
    ["Canada", "North America", 36471800]
  ]
});

chart = dex.charts.d3.ClusteredForce({
  "parent": "#Chart",
  "csv": csv,
  "groups": [{"category": "Continent", "value": "Population", "label": "Country"}]
}).render();

var configPane = dex.ui.ConfigurationPane({
  parent: "#ConfigurationPane",
  csv: csv,
  components: [chart]
}).render();
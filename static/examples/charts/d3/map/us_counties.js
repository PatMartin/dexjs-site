d3.json("/data/maps/us.json", function (error, topology) {

  var map = dex.charts.d3.TopoJsonMap({
    'parent': "#Map",
    'topology': topology,
    'feature.topology': topology.objects['counties']
  }).render();
});

d3.json("/data/maps/us-states.json", function (error, topology) {

  var map = dex.charts.d3.TopoJsonMap({
    'parent': "#Map",
    'topology': topology,
    'feature.topology': topology.objects['us-states']
  }).render();
});

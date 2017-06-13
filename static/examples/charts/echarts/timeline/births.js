d3.json("/data/WorldBirthsAndDeaths.json", function (error, world) {
  dex.console.log(world);
  var chart = dex.charts.echarts.Timeline({
    parent: '#Timeline',
    csv: dex.csv.include(world, [3, 4, 5, 1, 2])
  }).render();
});
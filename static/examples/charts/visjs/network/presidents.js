d3.json("/data/presidents.json", function(error, data) {
  dex.charts.vis.Network({
    "parent": "#Network",
    categories: 1,
    "csv": new dex.csv(data).include([2, 3, 1])
  }).render();
});
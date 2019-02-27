d3.json("/data/presidents.json", function(error, data) {
  dex.charts.d3plus.RingNetwork({
    "parent": "#RingNetwork",
    "csv": new dex.csv(data).include([2, 3, 1])
  }).render();
});
var csv = new dex.csv({
  header: [ "Series", "Sequence", "X", "Y", "Size"],
  data: [
    [ "Series 1", 1, 1, 1, 10 ],
    [ "Series 2", 1, 2, 2, 20 ],
    [ "Series 1", 2, 3, 3, 30 ],
    [ "Series 2", 2, 4, 4, 10 ],
    [ "Series 1", 3, 5, 2, 15 ],
    [ "Series 2", 3, 6, 3, 23 ]
  ]
});

chart = dex.charts.echarts.Timeline({
  parent: '#Chart',
  csv: csv
}).render();

var configPane = dex.ui.ConfigurationPane({
  parent: "#ConfigurationPane",
  csv: csv,
  components: [ chart ]
}).render();
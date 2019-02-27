var csv = new dex.csv(['First Name', "Sales", "Revenue", "Quarter" ]);

for (var nameIndex = 0; nameIndex < 4; nameIndex++) {
  var name = faker.name.firstName();
  ["Q1", "Q2", "Q3", "Q4"].forEach(function(quarter) {
    csv.data.push([name, quarter, faker.random.number(), quarter]);
  });
}

var chart = dex.charts.echarts.PolarPlot({
  parent: '#Chart',
  csv: csv,
  'series.type': "bar"
}).render();

var configPane = dex.ui.ConfigurationPane({
  parent: "#ConfigurationPane",
  csv: csv,
  components: [ chart ]
}).render();
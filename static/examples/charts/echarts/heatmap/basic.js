var csv = new dex.csv(['Name', 'Month', 'Sales', 'Extraneous', "mi"]);

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

for (var nameIndex = 0; nameIndex < 5; nameIndex++) {
  var name = faker.name.firstName();
  months.forEach(function (month, mi) {
    csv.data.push([name, month, faker.random.number(), faker.random.number(), mi ]);
  });
}

chart = dex.charts.echarts.HeatMap({
  parent: '#Chart',
  csv: csv
}).render();

var configPane = dex.ui.ConfigurationPane({
  parent: "#ConfigurationPane",
  csv: csv,
  components: [ chart ]
}).render();
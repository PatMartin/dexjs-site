var csv = new dex.csv(['First Name', "Month", "Sales", "Revenue", "Age" ]);

for (var nameIndex = 0; nameIndex < 10; nameIndex++) {
  var name = faker.name.firstName();
  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    .forEach(function(month) {
    csv.data.push([name, month, faker.random.number(10000,100000),
      faker.random.number(1000,10000),
      faker.random.number(18,70),
    ]);
  });
}

chart = dex.charts.echarts.SteamGraph({
  parent: '#Chart',
  csv: csv
}).render();

var configPane = dex.ui.ConfigurationPane({
  parent: "#ConfigurationPane",
  csv: csv,
  components: [ chart ]
}).render();
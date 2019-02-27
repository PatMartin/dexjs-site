var csv = new dex.csv(["Quarter", "Salesman", "Units Sold", "Profit", "Revenue"]);

_.range(3).forEach(function() {
  var name = faker.name.firstName();
  ["Q1", "Q2", "Q3", "Q4"].forEach(function(quarter) {
    csv.data.push([quarter, name, faker.random.number(1000,2000),
      faker.random.number(10000,20000), faker.random.number(100000, 200000)])
  })
})

chart = dex.charts.echarts.PieChart({
  parent: '#Chart',
  csv: csv
}).render();

var configPane = dex.ui.ConfigurationPane({
  parent: "#ConfigurationPane",
  csv: csv,
  components: [ chart ]
}).render();
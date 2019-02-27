var csv = new dex.csv(['Name', 'Date', 'Y' ]);

for (var nameIndex = 0; nameIndex < 10; nameIndex++) {
  var name = faker.name.firstName();
  for (var year = 2015; year < 2017; year++) {
    for (var month = 0; month < 12; month++) {
      csv.data.push([name, new Date(year, month, 1),
        faker.random.number({'min': 0, 'max': 100})])}}}

var bubbleChart = dex.charts.nvd3.StackedAreaChart({
  'parent': '#StackedAreaChart',
  'csv': csv
}).render();
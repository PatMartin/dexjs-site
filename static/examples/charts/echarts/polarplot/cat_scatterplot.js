var hours = [ '12a','1a','2a','3a','4a','5a','6a','7a','8a','9a','10a',
  '11a','12p','1p','2p','3p','4p','5p','6p','7p','8p','9p','10p','11p'];
var days = ['Mon', 'Tues', 'Wed', 'Thurs','Fri', 'Sat', 'Sun'];
var series = ["Commits", "Checkouts", "Issues"];

var csv = new dex.csv(["Day", "Value", "Hour", "Activity" ]);

days.forEach(function (day) {
  hours.forEach(function (hour) {
    series.forEach(function (series) {
      csv.data.push([series, day, hour, Math.floor(Math.random() * 51)]);
    });
  });
});

var chart = dex.charts.echarts.PolarPlot({
  parent: '#Chart',
  csv: csv,
  radius: { min:1, max: 25 },
  "series.type": "scatter",
  refreshType: "render"
}).render();

var configPane = dex.ui.ConfigurationPane({
  parent: "#ConfigurationPane",
  csv: csv,
  components: [ chart ]
}).render();
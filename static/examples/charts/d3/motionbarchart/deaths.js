d3.json("/data/WorldBirthsAndDeaths.json", function (error, data) {
  dex.charts.d3.MotionBarChart({
    "parent": "#MotionBarChart",
    "csv": new dex.csv(data),
    "index": {
      "name": "Country",
      "color": "Country",
      "time": "Year",
      "y": "Deaths per 1000 People"
    }
  }).render();
});

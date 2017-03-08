d3.json("/data/WorldBirthsAndDeaths.json", function (error, world) {
  dex.charts.d3.MotionBarChart({
    "parent": "#MotionBarChart",
    "csv": world,
    "index": {
      "name": "Country",
      "color": "Country",
      "time": "Year",
      "y": "Births per 1000 People"
    }
  }).render();
});

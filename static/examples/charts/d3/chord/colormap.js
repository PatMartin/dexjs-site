// Our data
var colors = new dex.csv({
  "header": ["Primary Color", "CombinedColor"],
  "data": [["red", "orange"], ["yellow", "orange"], ["red", "purple"],
    ["blue", "purple"], ["blue", "green"], ["yellow", "green"], ["unknown", "unknown"]
  ]
});

// Color mappings
var colorPresets = {
  'red': 'red', 'blue': 'blue', 'yellow': 'yellow',
  'purple': 'purple', 'green': 'green', 'orange': 'orange'
};

chart = dex.charts.d3.Chord({
  "parent": "#Chart",
  "csv": colors,
  // Use preset colors, but use a colormap of only 1 color (black) for
  // unrecognized colors.
  "color": dex.color.colormap(["black"], colorPresets),
}).render();

var configPane = dex.ui.ConfigurationPane({
  parent: "#ConfigurationPane",
  csv: colors,
  components: [chart]
}).render();

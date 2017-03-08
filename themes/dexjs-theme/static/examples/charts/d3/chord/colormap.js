// Our data
var colors = {
  "header" : [ "Primary Color", "CombinedColor" ],
  "data" : [[ "red", "orange" ],[ "yellow", "orange"], [ "red", "purple" ],
    [ "blue", "purple"], [ "blue", "green" ], [ "yellow", "green" ]
  ]
};

// Color mappings
var colorPresets = {
  'red': 'red', 'blue': 'blue', 'yellow': 'yellow',
  'purple' : 'purple', 'green' : 'green', 'orange' : 'orange'
};

dex.charts.d3.Chord({
  "parent": "#Chord",
  "csv": colors,
  // Use preset colors, but use a colormap of only 1 color (black) for
  // unrecognized colors.
  "color" : dex.color.colormap(["black"], colorPresets),
}).render();
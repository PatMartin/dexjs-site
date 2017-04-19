// Create data
var rankings = {
  "header" : [ "Team", "Week", "Rank" ],
  "data" : [
    ["Tornadoes", 1, 1 ], ["Cougars", 1, 2 ], ["Lizard Kings", 1, 3 ],
    ["Tornadoes", 2, 2 ], ["Cougars", 2, 1 ], ["Lizard Kings", 2, 3 ],
    ["Tornadoes", 3, 3 ], ["Cougars", 3, 1 ], ["Lizard Kings", 3, 2 ],
    ["Tornadoes", 4, 2 ], ["Cougars", 4, 3 ], ["Lizard Kings", 4, 1 ]
  ]
};

// Configure and render the chart.
dex.charts.d3.BumpChart({
  "parent" : "#BumpChart",
  "csv" : rankings
}).render();
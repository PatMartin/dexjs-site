var csv = new dex.csv({
  "header" : [ "Category", "X", "Y" ],
  "data"   : [
    [ "Cat1", "1", "2" ],
    [ "Cat2", "1", "4" ],
    [ "Cat1", "2", "4" ],
    [ "Cat2", "2", "8"],
    [ "Cat1", "3", "8" ],
    [ "Cat2", "3", "16"]
  ]
});

dex.charts.nvd3.StackedAreaChart({
  "parent": "#StackedAreaChart",
  "csv": csv
}).render();

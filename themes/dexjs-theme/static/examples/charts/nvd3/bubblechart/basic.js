var csv = {
  "header" : [ "Category", "X", "Y", "Size" ],
  "data"   : [
    [ "Cat1", "1", "2", 100 ],
    [ "Cat2", "1", "4", 200 ],
    [ "Cat1", "2", "4", 200 ],
    [ "Cat2", "2", "8", 400],
    [ "Cat1", "3", "8", 400 ],
    [ "Cat2", "3", "16", 800]
  ]
}

dex.charts.nvd3.BubbleChart({
  "parent": "#BubbleChart",
  "csv": csv
}).render();

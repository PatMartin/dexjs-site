var csv = {
  header: [ "X", "Y", "Size", "Category", "Sequence"],
  data: [
    [ 1, 1, 10, "Category 1", 1 ],
    [ 2, 2, 20, "Category 2",1 ],
    [ 3, 3, 30, "Category 3",1 ],
    [ 4, 4, 20, "Category 1",2 ],
    [ 5, 5, 40, "Category 2",2 ],
    [ 6, 6, 60, "Category 3",2 ]
    ]
};

var chart = dex.charts.echarts.Timeline({
  parent: '#Timeline',
  csv: csv
}).render();
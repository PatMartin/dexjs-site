d3.json("/data/presidents.json", function(error, data) {
  dex.charts.d3.Dendrogram({
    "parent": "#Dendrogram",
    "csv": dex.csv.columnSlice(data, [2, 3, 1]),
    "connectionType" : "elbow",
    "root.name" : "Presidents",
    "link.stroke.color" : "red",
    "link.stroke.width" : 3,
    "link.stroke.dasharray" : "10 5",
    "node.expanded.circle.r" : 3,
    "node.expanded.circle.fill.fillColor" : "green"
  }).render();
});
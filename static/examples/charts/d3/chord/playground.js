var csv = new dex.csv({
  "header": ["Name", "Gender", "Vehicle"],
  "data": [
    ["Bob", "Male", "Truck"],
    ["Jennifer", "Female", "Car"],
    ["Pat", "Male", "Car"]
  ]
});

chart = dex.charts.d3.Chord({
  "parent": "#Chart",
  "csv": csv,
  "resizable": true,
  "width": "100%",
  "height": "100%",
  "margin": {
    "left": 50,
    "right": 50,
    "top": 50,
    "bottom": 50
  },
  "transform": "",
  "draggable": false,
  "padding": 0.05,
  "nodes.mouseout.stroke.color": "black",
  "nodes.mouseout.stroke.width": 2,
  "nodes.mouseout.stroke.dasharray": "2 2",
  //"nodes.mouseout.fill.fillColor" : "green",
  "nodes.mouseout.fill.fill": "none",

  "nodes.mouseover.stroke.color": "red",
  "nodes.mouseover.stroke.width": 5,
  "nodes.mouseover.stroke.dasharray": "1",
  //"nodes.mouseover.fill.fillColor" : "red",
  "nodes.mouseover.fill.fillColor": 0.5,
  "nodes.mouseover.fill.fill": "none",

  "links.mouseout.stroke.color": "white",
  "links.mouseout.stroke.dasharray": 1,
  "links.mouseout.stroke.width": 0,
  //"links.mouseout.fill.fillColor" : "yellow",
  "links.mouseout.fill.fillOpacity": .2,
  "links.mouseout.fill.fill": "none",

  "links.mouseover.stroke.color": "white",
  "links.mouseover.stroke.dasharray": 1,
  "links.mouseover.stroke.width": 0,
  //"links.mouseover.fill.fillColor" : "purple",
  "links.mouseover.fill.fillOpacity": 1,
  "links.mouseover.fill.fill": "none",

  "color": d3.scale.category20c(),
  "innerRadius": "auto",
  "outerRadius": "auto",
  "tick.start.x": 1,
  "tick.start.y": 0,
  "tick.end.x": 5,
  "tick.end.y": 0,
  "tick.padding": 10,
  "tick.stroke.color": "black",
  "tick.stroke.width": 2,
  "tick.stroke.dasharray": "1",
  "title.text": "Your message here...",
  "title.font.size": 24,
  "title.decoration": "underline",
  "title.anchor": "middle",
  "title.fill.fillColor": "red",
  "title.transform": "rotate(45)"
}).render();

var configPane = dex.ui.ConfigurationPane({
  parent: "#ConfigurationPane",
  csv: csv,
  components: [chart]
}).render();

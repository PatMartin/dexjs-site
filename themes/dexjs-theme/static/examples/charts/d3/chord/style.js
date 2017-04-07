var csv = {
  "header": ["Name", "Gender", "Vehicle"],
  "data": [
    ["Bob", "Male", "Truck"],
    ["Jennifer", "Female", "Car"],
    ["Pat", "Male", "Car"]
  ]
}

dex.charts.d3.Chord({
  "parent": "#Chord",
  "csv": csv,
  "apply": [
    {
      "select": "text",
      "styles": {"fill": "blue", "font-size": 24}
    },
    {
      "select": "path",
      "styles": {"stroke-width": 2, "stroke": "green"}
    },
    {
      "select": ".chord path",
      "styles": {"stroke-width": 5, "stroke": "red"}
    }
  ]
}).render();

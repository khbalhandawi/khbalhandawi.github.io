// quantitative color scale
var colorscale = d3.scale.linear()
  .domain([0,1,2,3])
  .range(["red", "green", "blue", "magenta"])
  .interpolate(d3.interpolateLab);

var hiddenColumns=["","NaN","E1","E2","E3","IoP E1","IoP E2","IoP E3","CAC E1","CAC E2","CAC E3"];
var precision = 2

// format the data to 2 decimal places
var formatData = function(d) {
  let formattedObject = {};
  for (let key in d) {
    if (d.hasOwnProperty(key) && hiddenColumns.indexOf(key) === -1) {
      let value = d[key];
      if (typeof value === "string" && !isNaN(value)) {
        value = parseFloat(value).toFixed(2);
      }
      formattedObject[key] = value;
    }
  }
  return formattedObject;
};

d3.csv('../../assets/data/concepts_data.csv', function(data) {

  var color = function(d) { 
    return colorscale(d['id']); 
  };

  var parcoords = d3.parcoords()("#concept")
      .color(color)
      .alpha(0.5);

  parcoords
    .data(data)
    .hideAxis(hiddenColumns)
    .composite("darker")
    .render()
    .shadows()
    .reorderable()
    .brushMode("1D-axes");  // enable brushing

  var gridData = data.map(formatData);
  // create data table, row hover highlighting
  var grid = d3.divgrid();

  d3.select("#gridConcept")
  .datum(gridData.slice(0,10))
  .call(grid)
  .selectAll(".row")
  .on({
      "mouseover": function(d) { 

        var dHighlight = data.filter(function(row) {
          return parseFloat(row.id) == parseFloat(d.id);
        });

        parcoords.highlight(dHighlight) 
        
        vanes.map(function(d) {d.img.style("opacity", 0.2)})
        struts.map(function(d) {d.img.style("opacity", 0.2)})

        vanes.forEach(function(vane) {
          if (parseFloat(d["height"]) == parseFloat(vane["height"])) {
            vane.img.style("opacity", 1);
          };
        });

        struts.forEach(function(strut) {
          if (parseFloat(d["lean angle"]) == parseFloat(strut["lean"])) {
            strut.img.style("opacity", 1);
          };
        });

      },
      "mouseout": function(d) { 
        vanes.map(function(d) {d.img.style("opacity", 1.0)})
        struts.map(function(d) {d.img.style("opacity", 1.0)})
        parcoords.unhighlight([d]);
      }
  });

  var lean0 = d3.select("#lean0");
  var lean30 = d3.select("#lean30");
  var vanethin = d3.select("#vanethin");
  var vanethick = d3.select("#vanethick");

  const vanes = [
    {height:"15.0", img:vanethin},
    {height:"17.0", img:vanethick},
  ];

  const struts = [
    {lean:"0.0", img:lean0},
    {lean:"30.0", img:lean30}
  ];

  // update data table on brush event
  parcoords.on("brush", function(d) {

    vanes.map(function(d) {d.img.style("opacity", 0.2)})
    struts.map(function(d) {d.img.style("opacity", 0.2)})

    d.map(function(d) { 
      vanes.forEach(function(vane) {
        if (parseFloat(d["height"]) == parseFloat(vane["height"])) {
          vane.img.style("opacity", 1);
        };
      });

      struts.forEach(function(strut) {
        if (parseFloat(d["lean angle"]) == parseFloat(strut["lean"])) {
          strut.img.style("opacity", 1);
        };
      });
    });

    let formatted = d.map(formatData);
    d3.select("#gridConcept")
        .datum(formatted.slice(0,10))
        .call(grid)
        .selectAll(".row")
        .on({
        "mouseover": function(d) { parcoords.highlight([d]) },
        "mouseout": parcoords.unhighlight
        });
  });
});
// quantitative color scale
var blue_to_brown = d3.scale.linear()
  .domain([-6, 2])
  .range(["steelblue", "red"])
  .interpolate(d3.interpolateLab);

var hiddenColumns=["","id","NaN","E1","E2","E3","IoP E1","IoP E2","IoP E3","CAC E1","CAC E2","CAC E3"];

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

// load csv file and create the chart
d3.csv('../../assets/data/doe_data_real.csv',function(data) {

  var color = function(d) { return blue_to_brown(d['value']); };

  var parcoords = d3.parcoords()("#doe")
      .color(color)
      .alpha(0.05);

  parcoords
    .data(data)
    .hideAxis(hiddenColumns)
    .composite("darker")
    .render()
    .shadows()
    .reorderable()
    .brushMode("1D-axes");  // enable brushing

    // create data table, row hover highlighting
    let formattedData = data.map(formatData);
    var grid = d3.divgrid();

    d3.select("#gridDOE")
    .datum(formattedData.sort(() => 0.5 - Math.random()).slice(0,10))
    .call(grid)
    .selectAll(".row")
    .on({
        "mouseover": function(d) { parcoords.highlight([d]) },
        "mouseout": parcoords.unhighlight
    });

    // update data table on brush event
    parcoords.on("brush", function(d) {
      let formatted = d.map(formatData);
      d3.select("#gridDOE")
          .datum(formatted.sort(() => 0.5 - Math.random()).slice(0,10))
          .call(grid)
          .selectAll(".row")
          .on({
          "mouseover": function(d) { parcoords.highlight([d]) },
          "mouseout": parcoords.unhighlight
          });
    });

  var sltBrushMode = d3.select('#sltBrushMode')
});
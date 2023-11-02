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

  // Parallel coordinates plot //
  var parcoords = d3.parcoords()("#pcpConcept")
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

  // Scatter plot //  
    
  // Get the div dimensions  
  var div = document.getElementById('scatterConcept');  
  var divWidth = div.clientWidth;  
  var divHeight = div.clientHeight; 

  // Set dimensions and margins  
  var margin = {top: 20, right: 20, bottom: 50, left: 80},  
      width = divWidth - margin.left - margin.right,  
      height = divHeight - margin.top - margin.bottom;  
    
  // Set x and y dimensions to "IoP" and "CAC"  
  var xDimension = "IoP";  
  var yDimension = "CAC";  

  // Create an SVG to hold your scatter plot  
  var scatter = d3.select("#scatterConcept").append("svg")  
    .attr("width", width + margin.left + margin.right)  
    .attr("height", height + margin.top + margin.bottom)  
    .append("g")  
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");  
  
  // Create scales for your scatter plot  
  var xScale = d3.scale.linear()  
    .domain(d3.extent(data, function(d) { return d[xDimension]; }))  
    .range([0, width])
    .nice();  
    
  var yScale = d3.scale.linear()  
    .domain(d3.extent(data, function(d) { return d[yDimension]; }))  
    .range([height, 0])
    .nice();  
  
  // Create axes  
  var xAxis = d3.svg.axis().scale(xScale).orient("bottom");  
  var yAxis = d3.svg.axis().scale(yScale).orient("left");  

  // Add X axis
  scatter.append("g")  
    .attr("class", "x axis")  
    .attr("transform", "translate(0," + height + ")")  
    .call(xAxis)  
    .select(".domain") // select the domain path element, not all path elements  
    .style("stroke-width", "50px !important"); // make the line thinner   
  
  // Add Y axis
  scatter.append("g")  
    .attr("class", "y axis")  
    .call(yAxis)  
    .select(".domain") // select the domain path element, not all path elements  
    .style("stroke-width", "5px !important"); // make the line thinner   
  
  // Add X axis label  
  scatter.append("text")  
    .attr("class", "x label")  
    .attr("text-anchor", "end")  
    .attr("x", width/2)  
    .attr("y", height + 40)  
    .text(xDimension);  
  
  // Add Y axis label  
  scatter.append("text")  
    .attr("class", "y label")  
    .attr("text-anchor", "end")  
    .attr("x", -height/2)  
    .attr("y", -50)  
    .attr("transform", "rotate(-90)")  
    .text(yDimension);

  // Add points to the scatter plot  
  scatter.selectAll(".point")  
    .data(data)  
    .enter().append("circle")  
    .attr("class", "point")  
    .attr("cx", function(d) { return xScale(d[xDimension]); })  
    .attr("cy", function(d) { return yScale(d[yDimension]); })  
    .attr("r", 5)  
    .style("fill", function(d) { return color(d); });  

  // Assume that `data` is your data array  
  var circles = scatter.selectAll("circle")

  // Create a brush  
  var brush = d3.svg.brush()  
    .x(d3.scale.identity().domain([0, width]))  
    .y(d3.scale.identity().domain([0, height]))  
    .on("brush", brushed);

  // add brush to the figure
  scatter.append("g")  
    .attr("class", "brush")  
    .call(brush);

  // Mouse over functionality //

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

  // repeat for a brush on the scatter plot
  function brushed() {  
    var extent = brush.extent();  
    var extentDataCoords = [  
      [xScale.invert(extent[0][0]), yScale.invert(extent[0][1])],  
      [xScale.invert(extent[1][0]), yScale.invert(extent[1][1])]  
    ];

    // Check if brush is cleared  
    if (extent[0][0] === extent[1][0] && extent[0][1] === extent[1][1]) {  
      // Reset opacity for all elements  
      vanes.map(function(d) {d.img.style("opacity", 1)});  
      struts.map(function(d) {d.img.style("opacity", 1)});  
    
      // Set the data table to the full dataset  
      let formatted = data.map(formatData); // Replace 'data' with your full dataset  
      d3.select("#gridConcept")  
          .datum(formatted)  
          .call(grid)  
          .selectAll(".row")  
          .on({  
          "mouseover": function(d) { parcoords.highlight([d]) },  
          "mouseout": parcoords.unhighlight  
          });  
    
      return; // Exit the function early  
    } 

    // Reset opacity for all elements  
    vanes.map(function(d) {d.img.style("opacity", 0.2)});  
    struts.map(function(d) {d.img.style("opacity", 0.2)});  
  
    // Highlight elements based on the brush selection
    var selectedData = []; // Array to store brushed data items   
    circles.each(function(d) {  
      if (extentDataCoords[0][0] <= parseFloat(d[xDimension]) && parseFloat(d[xDimension]) <= extentDataCoords[1][0] &&  
          extentDataCoords[1][1] <= parseFloat(d[yDimension]) && parseFloat(d[yDimension]) <= extentDataCoords[0][1]) {  

        // Push the selected data item into the array  
        selectedData.push(d);  

        vanes.forEach(function(vane) {  
            if (parseFloat(d["height"]) == parseFloat(vane["height"])) {  
                vane.img. style("opacity", 1);  
            }  
        });  

        struts.forEach(function(strut) {  
            if (parseFloat(d["lean angle"]) == parseFloat(strut["lean"])) {  
                strut.img.style("opacity", 1);  
            }  
        });
      }  
    });   
    
    let formatted = selectedData.map(formatData);
    d3.select("#gridConcept")
        .datum(formatted.slice(0,10))
        .call(grid)
        .selectAll(".row")
        .on({
        "mouseover": function(d) { parcoords.highlight([d]) },
        "mouseout": parcoords.unhighlight
        });

  }

});
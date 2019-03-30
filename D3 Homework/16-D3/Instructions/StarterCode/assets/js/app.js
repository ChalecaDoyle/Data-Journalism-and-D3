

// Grab data for aniamation
 //height of the graph
var svgWidth = 960
var svgHeight =500


//margin spacing for graph
var margin ={
  top: 20,
  right: 40,
  bottom: 60,
  left: 100
};
 var width = svgWidth - margin.left - margin.right;
 var height = svgHeight - margin.top - margin.bottom;

//create wrapper for svg for the graph
var svg = d3.select("body")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

//set the radius for each dot that appear in the graph
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);
d3.select("body").append("div").attr("clas", "tooltip").style("opacity", 0);  

//import Data from csv
d3.csv("data.csv", function (err, healthData) {
  if (err)throw err;
console.log(healthcare)
   //Parse Data/ as numbers
   healthData.forEach(function(data){
     data.poverty = +data.poverty;
     data.healthcare = +data.healthcare;
   });
 var xScale = d3.scalelinear().range([0,width]);
 var yScale = d3.scalelinear().range([height, 0]); 

 //create axis funtion
 var bottomAxis = d3.axisBottom(xScale);
 var leftAxis = d3.axisLeft(yScale);
 
  var xMin;
  var xMax;
  var yMin;
  var yMax;
  
  xMin = d3.min(healthData, function(data) {
      return data.healthcare;
  });
  
  xMax = d3.max(healthData, function(data) {
      return data.healthcare;
  });
  
  yMin = d3.min(healthData, function(data) {
      return data.poverty;
  });
  
  yMax = d3.max(healthData, function(data) {
      return data.poverty;
  });
  
  xLinearScale.domain([xMin, xMax]);
  yLinearScale.domain([yMin, yMax]);
  console.log(xMin);
  console.log(yMax);


// Append axes fro circle charts

chartGroup.append("g")
 .attr("transform", `translate(0, ${height})`)
 .call(bottomAxis);

chartGroup.append("g")
 .call(leftAxis);

//create cirles
var cirlesGroups = chartGroup.selectAll("circle")
.data(healthcare)
.enter()
.append("cirle")
.attr("cx", xScale(d.healthcare +1.5))
.attr("cy", yScale(d.poverty + 0.3))
.attr("r","12")
.attr("fill", "blue")
.attr("opacity", .5)
.on("mouseout", function(data, index) {
  toolTip.hide(data);
})
//use the function tool-tip to retrieve and grab data
var toolTip = d3.tip()
  .tip()
  .attr("class", "toolTip")
  .offset([40, -60])
  .html(function(d){
     
    eturn (abbr + '%');
  });

// Create tooltip in the chart

chartGroup.call(toolTip);

// create event listeners to display and hide the tooltip

circlesGroup.on("click", function(data) {
toolTip.show(data);
})
// onmouseout event
.on("mouseout", function(data, index) {
  toolTip.hide(data);
});

// Create axes labels

chartGroup.append("text")
.style("font-size", "12px")
.selectAll("tspan")
.data(healthData)
.enter()
.append("tspan")
  .attr("x", function(data) {
      return xLinearScale(data.healthcare +1.3);
  })
  .attr("y", function(data) {
      return yLinearScale(data.poverty +.1);
  })
  .text(function(data) {
      return data.abbr
  });

  chartGroup.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 0 - margin.left + 40)
  .attr("x", 0 - (height / 2))
  .attr("dy", "1em")
  .attr("class", "axisText")
  .text("Lacks Healtcare(%)");

chartGroup.append("g")
  .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
  .attr("class", "axisText")
  .text("In Poverty (%)");
}); 


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
d3.csv("data.csv", function (err, healthDare) {
  if (err)throw err;
console.log(healthcare)
   //Parse Data/ as numbers
   healthData.forEach(function(data){
     data.poverty = +data.poverty;
     data.heatlhcare = +data.healthcare;
   });
 var xScale = d3.scalelinear().range([0,width]);
 var yScale = d3.scalelinear().range([height, 0]); 

 //create axis funtion
 var bottomAxis = d3.axisBottom(xScale);
 var leftAxis = d3.axisLeft(yScale);
 
 var 
})
 
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

     
    

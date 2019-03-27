
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

// append svg for y coordinates specified 
// poverty
xText   
   .append("text")
   .attr("y", -26)
   .attr("data-name", "poverty")
   .attr("data-axis", "x")
   .attr("class", "aText active x")
   .text("In poverty (%)");

// age
xText
   .append("text")
   .attr("y", 0)
   .attr("data-name", "age")
   .attr("data-axis", "x")
   .attr("class", "aText inactive x")
   .text("Age (Median)");

 // income
 xText
   .append("text")
   .attr("y", 26)
   .attr("data-name", "income")
   .attr("data-axis", "x")
   .attr("class", "aText inactive x")
   .text("Househole Income (Median)");

 //left axis----specify the variables for readability and transformation attributes   
 var leftTextX = margin + tPadLeft;
 var leftTextX = (height + labelArea) /2 - labelArea;
 

 //add second labels group for left axis chart
 svg.append("g").attr("class", "yText");
 
 // yText will select only the group while elimating additional data
 var yText = d3.select(".yText");

 //nest the group transform attr in a function allowing for changes-operation

 function yTextRefresher(){
     yText.attr(
         "transform",
         "translate",
         "translate(" + leftTextX + ", " + leftTextY + ")rotate(-90)"

     );

 }
 yTextRefresher();

 // append obseity, smokes, and the that lack healthcare
 //obesity
 yText
    .append("text")
    .attr("y", -26)
    .attr("data-name", "obesity")
    .attr("data-axis", "y")
    .attr("class", "aText active y")
    .text("Obese (%)");

// Smokes
yText
   .append("text")
   .attr("y", 0)
   .attr("data-name", "smokes")
   .attr("data-axis", "y")
   .attr("class", "aText active y")
   .text("Smokes (%)");
   
//lack healthcare
yText
   .append("text")
   .attr("y", 26)
   .attr("data-name", "healthcare")
   .attr("data-axis", "y")
   .attr("class", "aText active y")
   .text("Lacks Healthcare (%)");

});

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
     
    
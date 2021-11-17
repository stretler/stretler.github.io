
// set up data
const data = [
  {day: "Wednesday 11/10", steps: 4416},
  {day: "Thursday 11/11", steps: 5534},
  {day: "Friday 11/12", steps: 7113},
  {day: "Saturday 11/13", steps: 10527},
  {day: "Sunday 11/14", steps: 3275},
  {day: "Monday 11/15", steps: 7723},
   {day: "Tuesday 11/16", steps: 3522},
];

// Example 4 Add a little interactivity with a class
// // set up styling that will hold the chart
const width = 1300;
const height = 1200;
const margin = {top: 0, bottom: 0, left: 100, right: 100};

// create svg that will hold chart, you can then target the svg with css to see it
const svg = d3.select(".d3-container")
.append("svg")
.attr("height", height - margin.top - margin.bottom)
.attr("width", width - margin.left - margin.right)
.attr("viewBox", [0,0, width, height]);

// set up the x scale to match how many elements we have in our object
const x = d3.scaleBand()
.domain(d3.range(data.length))
.range([margin.left, width - margin.right])
.padding(0.17);
  

// set up y scale to match the amounts. 0 to 15 will work
const y = d3.scaleLinear()
.domain([0,12000])
.range([height - margin.bottom, margin.top]);

// start creating the bars for the chart.
// we set up rectangles, as well as sort the data from biggest to smallest
svg
  .append("g")
  .attr("fill", "navy")
  .selectAll("rect")
  .data(data)
  .join("rect")
  // places data on correct positions
  .attr("x", (d, i) => x(i))
  .attr("y", (d) => y(d.steps))
  .attr("height", d => y(0) - y(d.steps))
  .attr("width", x.bandwidth())
  //add a class
  .attr("class", "rectangle")
 

// set up labels for x axis
// the transform moves the labels to the bottom, comment out to see what i mean
function xAxis(g) {
  g.attr("transform", `translate(0, ${height + 75})`)
  g.call(d3.axisBottom(x).tickFormat(i => data[i].day))
  .selectAll("text")
    .attr("transform", "translate(50,-30)rotate(30)")
}

// set up labels for y axis
function yAxis(g){
  g.attr("transform", `translate(${margin.left}, 0)`)
  .call(d3.axisLeft(y).ticks(null, data.format))
}

function changeColor(color){
  d3.selectAll("rect")
    .transition()
    .duration(3000)
    .style("fill", color)
    .attr("class", "button")
}

// draw the labels onto the page for y
svg.append("g").call(yAxis);

//draws the labels onto the page. this puts them at the top by default so the you need to transform their position.
svg.append("g").call(xAxis);

// draws bars onto page. try adding another flower to the data to see how it changes.
  svg.node();


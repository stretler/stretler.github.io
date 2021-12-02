var width = 1000
var height = 900

var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", 1000)
    .attr("height", 900)

var data = [
 {
  id: "notimetodie",
  Film: "No Time to Die",
  MyRating: 4,
  AvgRating: 3.6,
  Genre: "Action",
 img: "assets/notimetodie.jpg"
 },
 {
  id: "dune",
  Film: "Dune",
  MyRating: 2.5,
  AvgRating: 4.1,
  Genre: "Science Fiction",
  img: "assets/dune.jpg"
 },
 {
  id: "deathto2020",
  Film: "Death to 2020",
  MyRating: 1,
  AvgRating: 2.8,
  Genre: "Documentary",
  img: "assets/deathto2020.jpg"
 },
 {
  Film: "Wonder Woman 1984",
  MyRating: 3,
  AvgRating: 2.4,
  Genre: "Action"
 },
 {
  Film: "Borat",
  MyRating: 4,
  AvgRating: 3.6,
  Genre: "Comedy"
 },
 {
  Film: "Soul",
  MyRating: 4.5,
  AvgRating: 4.1,
  Genre: "Family"
 },
 {
  Film: "I Care A Lot",
  MyRating: 2.5,
  AvgRating: 3.1,
  Genre: "Thriller"
 },
 {
  Film: "Heathers",
  MyRating: 3,
  AvgRating: 3.8,
  Genre: "Drama"
 },
 {
  Film: "Hamilton",
  MyRating: 4,
  AvgRating: 4.2,
  Genre: "Drama"
 },
 {
  Film: "The Social Dilemma",
  MyRating: 2.5,
  AvgRating: 3.3,
  Genre: "Documentary"
 },
 {
  Film: "1917",
  MyRating: 5,
  AvgRating: 4.1,
  Genre: "Thriller"
 },
 {
  Film: "Frozen 2",
  MyRating: 3.5,
  AvgRating: 3.3,
  Genre: "Family"
 },
 {
  Film: "El Camino",
  MyRating: 3,
  AvgRating: 3.5,
  Genre: "Thriller"
 },
 {
  Film: "Jojo Rabbit",
  MyRating: 4.5,
  AvgRating: 4,
  Genre: "Drama"
 },
 {
  Film: "Knives Out",
  MyRating: 4,
  AvgRating: 4,
  Genre: "Comedy"
 },
 {
  Film: "Just Mercy",
  MyRating: 4.5,
  AvgRating: 3.8,
  Genre: "Drama"
 },
 {
  Film: "Weathering with You",
  MyRating: 3.5,
  AvgRating: 3.6,
  Genre: "Fantasy"
 },
 {
  Film: "Lion ",
  MyRating: 5,
  AvgRating: 3.8,
  Genre: "Drama"
 },
 {
  Film: "Parasite",
  MyRating: 5,
  AvgRating: 4.6,
  Genre: "Drama"
 },
 {
  Film: "Stromboli",
  MyRating: 1,
  AvgRating: 3.9,
  Genre: "Drama"
 },
 {
  Film: "Spiderman into the Spiderverse",
  MyRating: 4,
  AvgRating: 4.4,
  Genre: "Action"
 },
 {
  Film: "Greenbook",
  MyRating: 2,
  AvgRating: 3.6,
  Genre: "Drama"
 },
 {
  Film: "Roma",
  MyRating: 3.5,
  AvgRating: 4.1,
  Genre: "Drama"
 },
 {
  Film: "Ted",
  MyRating: 3,
  AvgRating: 2.9,
  Genre: "Comedy"
 },
 {
  Film: "Bus 174",
  MyRating: 1.5,
  AvgRating: 3.9,
  Genre: "Documentary"
 },
 {
  Film: "Happy Together",
  MyRating: 3.5,
  AvgRating: 4.2,
  Genre: "Drama"
 },
 {
  Film: "Born in Flames",
  MyRating: 1,
  AvgRating: 3.9,
  Genre: "Documentary"
 },
 {
  Film: "Red Desert",
  MyRating: 2,
  AvgRating: 4,
  Genre: "Drama"
 },
 {
  Film: "Revenge of the Nerds",
  MyRating: 3,
  AvgRating: 2.9,
  Genre: "Comedy"
 },
 {
  Film: "Gaslight",
  MyRating: 3,
  AvgRating: 3.9,
  Genre: "Thriller"
 },
 {
  Film: "Princess Mononoke",
  MyRating: 4.5,
  AvgRating: 4.3,
  Genre: "Fantasy"
 },
 {
  Film: "Your Name",
  MyRating: 5,
  AvgRating: 4.2,
  Genre: "Fantasy"
 },
 {
  Film: "Kiki's Delivery Service",
  MyRating: 4.5,
  AvgRating: 4.1,
  Genre: "Fantasy"
 },
 {
  Film: "Circle",
  MyRating: 1,
  AvgRating: 2.6,
  Genre: "Horror"
 },
 {
  Film: "Almost Famous",
  MyRating: 4,
  AvgRating: 4,
  Genre: "Drama"
 },
 {
  Film: "Pulp Fiction",
  MyRating: 3.5,
  AvgRating: 4.3,
  Genre: "Thriller"
 },
 {
  Film: "Shutter Island",
  MyRating: 5,
  AvgRating: 4,
  Genre: "Thriller"
 },
 {
  Film: "The Wolf of Wall Street",
  MyRating: 4.5,
  AvgRating: 4,
  Genre: "Comedy"
 },
 {
  Film: "The Social Network",
  MyRating: 3.5,
  AvgRating: 3.9,
  Genre: "Drama"
 },
 {
  Film: "Legally Blonde",
  MyRating: 3.5,
  AvgRating: 3.7,
  Genre: "Comedy"
 },
 {
  Film: "The Devil Wears Prada",
  MyRating: 4,
  AvgRating: 3.7,
  Genre: "Comedy"
 },
 {
  Film: "The Hangover",
  MyRating: 4,
  AvgRating: 3.4,
  Genre: "Comedy"
 },
 {
  Film: "Good Will Hunting",
  MyRating: 3.5,
  AvgRating: 4.2,
  Genre: "Drama"
 },
 {
  Film: "Call me by your Name",
  MyRating: 4.5,
  AvgRating: 4,
  Genre: "Drama"
 },
 {
  Film: "American Beauty",
  MyRating: 5,
  AvgRating: 4,
  Genre: "Drama"
 },
 {
  Film: "Pitch Perfect",
  MyRating: 4,
  AvgRating: 3.3,
  Genre: "Comedy"
 },
 {
  Film: "Me before You",
  MyRating: 3,
  AvgRating: 3.3,
  Genre: "Drama"
 },
 {
  Film: "Her",
  MyRating: 4.5,
  AvgRating: 4.1,
  Genre: "Romance"
 },
 {
  Film: "The Squid and the Whale",
  MyRating: 2,
  AvgRating: 3.6,
  Genre: "Drama"
 },
 {
  Film: "Spirited Away",
  MyRating: 5,
  AvgRating: 4.5,
  Genre: "Fantasy"
 },
 {
  Film: "Creep",
  MyRating: 2.5,
  AvgRating: 3.3,
  Genre: "Horror"
 },
 {
  Film: "Eternal Sunshine of the Spotless Mind",
  MyRating: 4,
  AvgRating: 4.2,
  Genre: "Drama"
 },
 {
  Film: "Superbad",
  MyRating: 3,
  AvgRating: 3.8,
  Genre: "Comedy"
 },
 {
  Film: "My Neighbor Totoro",
  MyRating: 5,
  AvgRating: 4.2,
  Genre: "Family"
 },
 {
  Film: "Ponyo",
  MyRating: 4,
  AvgRating: 3.9,
  Genre: "Family"
 },
 {
  Film: "Monty Python and the Holy Grail",
  MyRating: 4.5,
  AvgRating: 4.1,
  Genre: "Comedy"
 },
 {
  Film: "Eigth Grade",
  MyRating: 3,
  AvgRating: 3.9,
  Genre: "Drama"
 },
 {
  Film: "Brides Maids",
  MyRating: 3,
  AvgRating: 3.5,
  Genre: "Comedy"
 },
 {
  Film: "Anchorman",
  MyRating: 3,
  AvgRating: 3.5,
  Genre: "Comedy"
 },
 {
  Film: "Blockers",
  MyRating: 4,
  AvgRating: 3.1,
  Genre: "Comedy"
 },
 {
  Film: "12 Years a Slave",
  MyRating: 5,
  AvgRating: 4.1,
  Genre: "Drama"
 },
 {
  Film: "Vacation",
  MyRating: 4,
  AvgRating: 3.5,
  Genre: "Comedy"
 },
 {
  Film: "Passengers",
  MyRating: 2,
  AvgRating: 2.8,
  Genre: "Action"
 },
 {
  Film: "The Edge of Seventeen",
  MyRating: 4,
  AvgRating: 3.6,
  Genre: "Drama"
 },
 {
  Film: "Ant Man and the Wasp",
  MyRating: 2.4,
  AvgRating: 3.2,
  Genre: "Action"
 },
 {
  Film: "Wedding Crashers",
  MyRating: 3.5,
  AvgRating: 3.1,
  Genre: "Comedy"
 },
 {
  Film: "Crazy Rich Asians",
  MyRating: 4.5,
  AvgRating: 3.5,
  Genre: "Comedy"
 },
 {
  Film: "Suicide Squad",
  MyRating: 3,
  AvgRating: 2.1,
  Genre: "Action"
 },
 {
  Film: "The Greatest Showman",
  MyRating: 4,
  AvgRating: 3.3,
  Genre: "Drama"
 },
 {
  Film: "Ferris Buellers Day Off",
  MyRating: 5,
  AvgRating: 3.9,
  Genre: "Comedy"
 },
 {
  Film: "Arrival",
  MyRating: 5,
  AvgRating: 4.1,
  Genre: "Action"
 },
 {
  Film: "Beauty and the Beast (2019)",
  MyRating: 4,
  AvgRating: 3.1,
  Genre: "Family"
 },
 {
  Film: "High School Musical 3",
  MyRating: 4,
  AvgRating: 3,
  Genre: "Family"
 },
 {
  Film: "Baby Driver",
  MyRating: 4,
  AvgRating: 3.8,
  Genre: "Action"
 },
 {
  Film: "Sixteen Candles",
  MyRating: 4,
  AvgRating: 3.1,
  Genre: "Comedy"
 },
 {
  Film: "Old School",
  MyRating: 4,
  AvgRating: 3.2,
  Genre: "Comedy"
 },
 {
  Film: "The Martian",
  MyRating: 5,
  AvgRating: 3.7,
  Genre: "Action"
 },
 {
  Film: "Life of Pi",
  MyRating: 4.5,
  AvgRating: 3.7,
  Genre: "Drama"
 },
 {
  Film: "Get Out",
  MyRating: 5,
  AvgRating: 4.2,
  Genre: "Drama"
 },
 {
  Film: "The Kissing Booth 2",
  MyRating: 1,
  AvgRating: 1.6,
  Genre: "Comedy"
 },
 {
  Film: "Jurassic Park",
  MyRating: 4.5,
  AvgRating: 4.1,
  Genre: "Science Fiction"
 },
 {
  Film: "Avatar",
  MyRating: 3,
  AvgRating: 3.3,
  Genre: "Action"
 },
 {
  Film: "Goodfellas",
  MyRating: 4.5,
  AvgRating: 4.4,
  Genre: "Drama"
 },
 {
  Film: "The Graduate",
  MyRating: 3.5,
  AvgRating: 4.1,
  Genre: "Drama"
 },
 {
  Film: "Moana",
  MyRating: 4,
  AvgRating: 3.8,
  Genre: "Family"
 },
 {
  Film: "The Breakfast Club",
  MyRating: 5,
  AvgRating: 3.8,
  Genre: "Drama"
 },
 {
  Film: "Jaws",
  MyRating: 4,
  AvgRating: 4,
  Genre: "Thriller"
 },
 {
  Film: "A Quiet Place 2",
  MyRating: 4,
  AvgRating: 3.6,
  Genre: "Horror"
 },
 {
  Film: "Moonrise Kingdom",
  MyRating: 3,
  AvgRating: 4,
  Genre: "Comedy"
 },
 {
  Film: "Love Simon",
  MyRating: 3.5,
  AvgRating: 3.5,
  Genre: "Drama"
 },
 {
  Film: "History of the World Part 1",
  MyRating: 2,
  AvgRating: 3.3,
  Genre: "Comedy"
 },
 {
  Film: "The Babadook",
  MyRating: 2,
  AvgRating: 3.5,
  Genre: "Horror"
 },
 {
  Film: "Grease",
  MyRating: 4,
  AvgRating: 3.4,
  Genre: "Comedy"
 },
 {
  Film: "Rear Window",
  MyRating: 2,
  AvgRating: 4.3,
  Genre: "Thriller"
 },
 {
  Film: "The Great Gatsby",
  MyRating: 1,
  AvgRating: 3.3,
  Genre: "Drama"
 },
 {
  Film: "Lady Bird",
  MyRating: 3.5,
  AvgRating: 3.9,
  Genre: "Drama"
 },
 {
  Film: "Inside Out",
  MyRating: 3.5,
  AvgRating: 3.9,
  Genre: "Family"
 },
 {
  Film: "Thouroughbreds",
  MyRating: 1,
  AvgRating: 3.6,
  Genre: "Drama"
 },
 {
  Film: "Flamingo Kid",
  MyRating: 4,
  AvgRating: 3,
  Genre: "Comedy"
 }
]


var color = d3.scaleOrdinal()
  .domain(["Comedy", "Drama", "Action", "Documentary", "Animation", "Family", "Thriller"])
  .range([ "#6cffff", "#ff80e3", "#b8ff8c", "#ff7070", "#ffe68c", "#a46ffb", "#fff965"])

var size = d3.scaleLinear()
    .domain([0, 5])
    .range([5,45]) 

 var Tooltip = d3.select("#my_dataviz")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "10px")
  
  
  var mouseover = function(d) {
    Tooltip
      .style("opacity", 1)
  }
  var mousemove = function(d) {
    Tooltip
      .html(d.Film + "<br>" + "My Rating: "+ d.MyRating + "<br>"+ "Average Rating: " + d.AvgRating + "<br>" + "Genre: " + d.Genre)
       .style("left", (d3.mouse(this)[0]+2) + "px")
      .style("top", (d3.mouse(this)[1]) + "px")
  }
  var mouseleave = function(d) {
    Tooltip
      .style("opacity", 0)
  }


var node = svg.append("g")
  .selectAll("div")
  .data(data)
  .enter()


var defs = node.append("defs");
defs.append('pattern')
.data(data)
  .attr("id", function(d) { return d.id;}  )
.attr("width", 70 + "px")
  .attr("height", 105 + "px")
  .attr("x", 0)
  .attr("y", 0)
  .attr('patternUnits', 'userSpaceOnUse')
  .attr("preserveAspectRatio", "none")
  .append("image")
  .attr("width", 70)
    .attr("height", 105)
  .attr("xlink:xlink:href", function(d) { return d.img;})



var circle = node.append("circle")
.data(data)
     .attr("class", "node")
      .attr("r", function(d){ return size(d.MyRating)})
      // .style("fill", function(d){ return color(d.Genre)} )
      .attr("fill",function(d) { return "url(#"+ d.id+")" }  )
      .attr("stroke", function(d){ return color(d.Genre)})
      .style("stroke-width", 1)
      .style("opacity", 1)
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .on("mouseover", mouseover) 
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)
      .call(d3.drag() 
           .on("start", dragstarted)
           .on("drag", dragged)
           .on("end", dragended));

var click = function(d) {
    circle
       .attr("r", function(d){ return size(d.MyRating)})
  }

  var click2 = function(d) {
    circle
       .attr("r", function(d){ return size(d.AvgRating)})
  }
var clicking = d3.select("#one")
     .on("click", click)

var clicking = d3.select("#two")
     .on("click", click2)


var simulation = d3.forceSimulation()
      .force("center", d3.forceCenter().x(width / 2).y(height / 2)) 
      .force("charge", d3.forceManyBody().strength(.1)) 
      .force("collide", d3.forceCollide().strength(.2).radius(function(d){ return (size(d.MyRating)+3) }).iterations(1)) 


simulation
    .nodes(data)
    .on("tick", function(d){
      circle
          .attr("cx", function(d){ return d.x; })
          .attr("cy", function(d){ return d.y; })
    });
function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(.03).restart();
  d.fx = d.x;
  d.fy = d.y;
}
function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}
function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(.03);
  d.fx = null;
  d.fy = null;
}



     
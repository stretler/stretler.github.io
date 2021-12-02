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
  id: "wonderwoman",
  Film: "Wonder Woman 1984",
  MyRating: 3,
  AvgRating: 2.4,
  Genre: "Action",
  img: "assets/wonderwoman.jpg"
 },
 {
  id:"borat",
  Film: "Borat",
  MyRating: 4,
  AvgRating: 3.6,
  Genre: "Comedy",
  img:"assets/borat.jpg"
 },
 {
  id: "soul",
  Film: "Soul",
  MyRating: 4.5,
  AvgRating: 4.1,
  Genre: "Family",
  img:"assets/soul.jpg"
 },
 {
  id:"icarealot",
  Film: "I Care A Lot",
  MyRating: 2.5,
  AvgRating: 3.1,
  Genre: "Thriller",
  img:"assets/icarealot.jpg"
 },
 {
  id:"heathers",
  Film: "Heathers",
  MyRating: 3,
  AvgRating: 3.8,
  Genre: "Drama",
  img:"assets/heathers.jpg"
 },
 {
  id:"hamilton",
  Film: "Hamilton",
  MyRating: 4,
  AvgRating: 4.2,
  Genre: "Drama",
  img:"assets/hamilton.jpg"
 },
 {
  id:"1",
  Film: "The Social Dilemma",
  MyRating: 2.5,
  AvgRating: 3.3,
  Genre: "Documentary",
  img:"assets/thesocialdilemma.jpeg"
 },
 {
  id:"2",
  Film: "1917",
  MyRating: 5,
  AvgRating: 4.1,
  Genre: "Thriller",
  img:"assets/1917.jpg"
 },
 {
  id:"3",
  Film: "Frozen 2",
  MyRating: 3.5,
  AvgRating: 3.3,
  Genre: "Family",
  img:"assets/frozen2.jpg"
 },
 {
  id:"4",
  Film: "El Camino",
  MyRating: 3,
  AvgRating: 3.5,
  Genre: "Thriller",
  img:"assets/elcamino.jpg"
 },
 {
  id:"5",
  Film: "Jojo Rabbit",
  MyRating: 4.5,
  AvgRating: 4,
  Genre: "Drama",
  img:"assets/jojorabbit.jpg"
 },
 {
  id:"6",
  Film: "Knives Out",
  MyRating: 4,
  AvgRating: 4,
  Genre: "Comedy",
  img:"assets/knivesout.jpg"
 },
 {
  id:"7",
  Film: "Just Mercy",
  MyRating: 4.5,
  AvgRating: 3.8,
  Genre: "Drama",
  img:"assets/justmercy.jpg"

 },
 {
  id:"8",
  Film: "Weathering with You",
  MyRating: 3.5,
  AvgRating: 3.6,
  Genre: "Fantasy",
  img:"assets/weathering.jpg"

 },
 {
  id:"9",
  Film: "Lion ",
  MyRating: 5,
  AvgRating: 3.8,
  Genre: "Drama",
  img:"assets/lion.jpg"

 },
 {
  id:"10",
  Film: "Parasite",
  MyRating: 5,
  AvgRating: 4.6,
  Genre: "Drama",
  img:"assets/parasite.jpg"

 },
 {
  id:"stromboli",
  Film: "Stromboli",
  MyRating: 1,
  AvgRating: 3.9,
  Genre: "Drama",
  img:"assets/stromboli.jpg"
 },
 {
  id:"11",
  Film: "Spiderman into the Spiderverse",
  MyRating: 4,
  AvgRating: 4.4,
  Genre: "Action",
  img:"assets/spiderman.jpg"

 },
 {
  id:"12",
  Film: "Greenbook",
  MyRating: 2,
  AvgRating: 3.6,
  Genre: "Drama",
  img:"assets/greenbook.jpg"

 },
 {
  id:"13",
  Film: "Roma",
  MyRating: 3.5,
  AvgRating: 4.1,
  Genre: "Drama",
  img:"assets/roma.jpg"
 },
 {
  id:"14",
  Film: "Ted",
  MyRating: 3,
  AvgRating: 2.9,
  Genre: "Comedy",
  img:"assets/ted.jpg"
 },
 {
  id:"15",
  Film: "Bus 174",
  MyRating: 1.5,
  AvgRating: 3.9,
  Genre: "Documentary",
  img:"assets/bus174.jpg"
 },
 {
  id:"16",
  Film: "Happy Together",
  MyRating: 3.5,
  AvgRating: 4.2,
  Genre: "Drama",
  img:"assets/happytogether.jpg"
 },
 {
  id:"a",
  Film: "Born in Flames",
  MyRating: 1,
  AvgRating: 3.9,
  Genre: "Documentary",
  img:"assets/borninflames.jpg"
 },
 {
  id:"b",
  Film: "Red Desert",
  MyRating: 2,
  AvgRating: 4,
  Genre: "Drama",
  img:"assets/reddesert.jpg"
 },
 {
  id:"s",
  Film: "Revenge of the Nerds",
  MyRating: 3,
  AvgRating: 2.9,
  Genre: "Comedy",
  img:"assets/revenge.jpg"
 },
 {
  id:"d",
  Film: "Gaslight",
  MyRating: 3,
  AvgRating: 3.9,
  Genre: "Thriller",
  img:"assets/gaslight.jpg"
 },
 {
  id:"f",
  Film: "Princess Mononoke",
  MyRating: 4.5,
  AvgRating: 4.3,
  Genre: "Fantasy",
  img:"assets/mononoke.jpg"
 },
 {
  id:"g",
  Film: "Your Name",
  MyRating: 5,
  AvgRating: 4.2,
  Genre: "Fantasy",
  img:"assets/yourname.jpg"
 },
 {
  id:"h",
  Film: "Kiki's Delivery Service",
  MyRating: 4.5,
  AvgRating: 4.1,
  Genre: "Fantasy",
  img:"assets/kiki.jpg"
 },
 {
  id:"j",
  Film: "Circle",
  MyRating: 1,
  AvgRating: 2.6,
  Genre: "Horror",
  img:"assets/circle.jpg"
 },
 {
  id:"k",
  Film: "Almost Famous",
  MyRating: 4,
  AvgRating: 4,
  Genre: "Drama",
  img:"assets/almostfamous.jpg"
 },
 {
  id:"l",
  Film: "Pulp Fiction",
  MyRating: 3.5,
  AvgRating: 4.3,
  Genre: "Thriller",
  img:"assets/pulpfiction.jpg"
 },
 {
  id:"q",
  Film: "Shutter Island",
  MyRating: 5,
  AvgRating: 4,
  Genre: "Thriller",
  img:"assets/shutterisland.jpg"
 },
 {
  id:"w",
  Film: "The Wolf of Wall Street",
  MyRating: 4.5,
  AvgRating: 4,
  Genre: "Comedy",
  img:"assets/wolf.jpg"
 },
 {
  id:"e",
  Film: "The Social Network",
  MyRating: 3.5,
  AvgRating: 3.9,
  Genre: "Drama",
  img:"assets/thesocialnetwork.jpg"
 },
 {
  id:"r",
  Film: "Legally Blonde",
  MyRating: 3.5,
  AvgRating: 3.7,
  Genre: "Comedy",
  img:"assets/legallyblonde.jpg"
 },
 {
  id:"t",
  Film: "The Devil Wears Prada",
  MyRating: 4,
  AvgRating: 3.7,
  Genre: "Comedy",
  img:"assets/devilwearsprada.jpg"
 },
 {
  id:"y",
  Film: "The Hangover",
  MyRating: 4,
  AvgRating: 3.4,
  Genre: "Comedy",
  img:"assets/thehangover.jpg"
 },
 {
  id:"u",
  Film: "Good Will Hunting",
  MyRating: 3.5,
  AvgRating: 4.2,
  Genre: "Drama",
  img:"assets/goodwillhunting.jpg"
 },
 {
  id:"i",
  Film: "Call me by your Name",
  MyRating: 4.5,
  AvgRating: 4,
  Genre: "Drama",
  img:"assets/callmebyyourname.jpg"
 },
 {
  id:"o",
  Film: "American Beauty",
  MyRating: 5,
  AvgRating: 4,
  Genre: "Drama",
  img:"assets/americanbeauty.jpg"
 },
 {
  id:"p",
  Film: "Pitch Perfect",
  MyRating: 4,
  AvgRating: 3.3,
  Genre: "Comedy",
  img:"assets/pitchperfect.jpg"
 },
 {
  id:"z",
  Film: "Me before You",
  MyRating: 3,
  AvgRating: 3.3,
  Genre: "Drama",
  img:"assets/mebeforeyou.jpg"
 },
 {
  id:"x",
  Film: "Her",
  MyRating: 4.5,
  AvgRating: 4.1,
  Genre: "Romance",
  img:"assets/her.jpg"
 },
 {
  id:"c",
  Film: "The Squid and the Whale",
  MyRating: 2,
  AvgRating: 3.6,
  Genre: "Drama",
  img:"assets/squid.jpg"
 },
 {
  id:"v",
  Film: "Spirited Away",
  MyRating: 5,
  AvgRating: 4.5,
  Genre: "Fantasy",
  img:"assets/spiritedaway.jpg"
 },
 {
  id:"n",
  Film: "Creep",
  MyRating: 2.5,
  AvgRating: 3.3,
  Genre: "Horror",
  img:"assets/creep.jpg"
 },
 {
  id:"m",
  Film: "Eternal Sunshine of the Spotless Mind",
  MyRating: 4,
  AvgRating: 4.2,
  Genre: "Drama",
  img:"assets/eternal.jpg"
 },
 {
  id:"hi",
  Film: "Superbad",
  MyRating: 3,
  AvgRating: 3.8,
  Genre: "Comedy",
  img:"assets/superbad.jpg"
 },
 {
  id:"20",
  Film: "My Neighbor Totoro",
  MyRating: 5,
  AvgRating: 4.2,
  Genre: "Family",
  img:"assets/totoro.jpg"
 },
 {
  id:"21",
  Film: "Ponyo",
  MyRating: 4,
  AvgRating: 3.9,
  Genre: "Family",
  img:"assets/ponyo.jpg"
 },
 {
  id:"22",
  Film: "Monty Python and the Holy Grail",
  MyRating: 4.5,
  AvgRating: 4.1,
  Genre: "Comedy",
  img:"assets/montypython.jpg"
 },
 {
  id:"23",
  Film: "Eigth Grade",
  MyRating: 3,
  AvgRating: 3.9,
  Genre: "Drama",
  img:"assets/eighthgrade.jpg"
 },
 {
  id:"24",
  Film: "Brides Maids",
  MyRating: 3,
  AvgRating: 3.5,
  Genre: "Comedy",
  img:"assets/bridesmaids.jpg"
 },
 {
  id:"25",
  Film: "Anchorman",
  MyRating: 3,
  AvgRating: 3.5,
  Genre: "Comedy",
  img:"assets/anchorman.jpg"
 },
 {
  id:"26",
  Film: "Blockers",
  MyRating: 4,
  AvgRating: 3.1,
  Genre: "Comedy",
  img:"assets/blockers.jpg"
 },
 {
  id:"27",
  Film: "12 Years a Slave",
  MyRating: 5,
  AvgRating: 4.1,
  Genre: "Drama",
  img:"assets/12yearsaslave.jpg"
 },
 {
  id:"28",
  Film: "Vacation",
  MyRating: 4,
  AvgRating: 3.5,
  Genre: "Comedy",
  img:"assets/vacation.jpg"
 },
 {
  id:"29",
  Film: "Passengers",
  MyRating: 2,
  AvgRating: 2.8,
  Genre: "Action",
  img:"assets/passengers.jpg"
 },
 {
  id:"30",
  Film: "The Edge of Seventeen",
  MyRating: 4,
  AvgRating: 3.6,
  Genre: "Drama",
  img:"assets/edgeofseventeen.jpg"
 },
 {
  id:"31",
  Film: "Ant Man and the Wasp",
  MyRating: 2.4,
  AvgRating: 3.2,
  Genre: "Action",
  img:"assets/antman.jpg"
 },
 {
  id:"32",
  Film: "Wedding Crashers",
  MyRating: 3.5,
  AvgRating: 3.1,
  Genre: "Comedy",
  img:"assets/weddingcrashers.jpg"
 },
 {
  id:"33",
  Film: "Crazy Rich Asians",
  MyRating: 4.5,
  AvgRating: 3.5,
  Genre: "Comedy",
  img:"assets/crazyrichasians.jpg"
 },
 {
  id:"34",
  Film: "Suicide Squad",
  MyRating: 3,
  AvgRating: 2.1,
  Genre: "Action",
  img:"assets/suicidesquad.jpg"
 },
 {
  id:"35",
  Film: "The Greatest Showman",
  MyRating: 4,
  AvgRating: 3.3,
  Genre: "Drama",
  img:"assets/greatestshowman.jpg"
 },
 {
  id:"36",
  Film: "Ferris Buellers Day Off",
  MyRating: 5,
  AvgRating: 3.9,
  Genre: "Comedy",
  img:"assets/ferrisbuellersdayoff.jpg"
 },
 {
  id:"37",
  Film: "Arrival",
  MyRating: 5,
  AvgRating: 4.1,
  Genre: "Action",
  img:"assets/arrival.jpg"
 },
 {
  id:"38",
  Film: "Beauty and the Beast (2017)",
  MyRating: 4,
  AvgRating: 3.1,
  Genre: "Family",
  img:"assets/beautyandthebeast.jpg"
 },
 {
  id:"39",
  Film: "High School Musical 3",
  MyRating: 4,
  AvgRating: 3,
  Genre: "Family",
  img:"assets/hsm3.jpg"
 },
 {
  id:"40",
  Film: "Baby Driver",
  MyRating: 4,
  AvgRating: 3.8,
  Genre: "Action",
  img:"assets/babydriver.jpg"
 },
 {
  id:"41",
  Film: "Sixteen Candles",
  MyRating: 4,
  AvgRating: 3.1,
  Genre: "Comedy",
  img:"assets/16candles.jpg"
 },
 {
  id:"42",
  Film: "Old School",
  MyRating: 4,
  AvgRating: 3.2,
  Genre: "Comedy",
  img:"assets/oldschool.jpg"
 },
 {
  id:"43",
  Film: "The Martian",
  MyRating: 5,
  AvgRating: 3.7,
  Genre: "Action",
  img:"assets/themartian.jpg"
 },
 {
  id:"44",
  Film: "Life of Pi",
  MyRating: 4.5,
  AvgRating: 3.7,
  Genre: "Drama",
  img:"assets/lifeofpi.jpg"
 },
 {
  id:"45",
  Film: "Get Out",
  MyRating: 5,
  AvgRating: 4.2,
  Genre: "Drama",
  img:"assets/getout.jpg"
 },
 {
  id:"46",
  Film: "The Kissing Booth 2",
  MyRating: 1,
  AvgRating: 1.6,
  Genre: "Comedy",
  img:"assets/kissingbooth2.jpg"
 },
 {
  id:"47",
  Film: "Jurassic Park",
  MyRating: 4.5,
  AvgRating: 4.1,
  Genre: "Science Fiction",
  img:"assets/jurassicpark.jpg"
 },
 {
  id:"48",
  Film: "Avatar",
  MyRating: 3,
  AvgRating: 3.3,
  Genre: "Action",
  img:"assets/avatar.jpg"
 },
 {
  id:"49",
  Film: "Goodfellas",
  MyRating: 4.5,
  AvgRating: 4.4,
  Genre: "Drama",
  img:"assets/goodfellas.jpg"
 },
 {
  id:"50",
  Film: "The Graduate",
  MyRating: 3.5,
  AvgRating: 4.1,
  Genre: "Drama",
  img:"assets/thegraduate.jpg"
 },
 {
  id:"51",
  Film: "Moana",
  MyRating: 4,
  AvgRating: 3.8,
  Genre: "Family",
  img:"assets/moana.jpg"
 },
 {
  id:"52",
  Film: "The Breakfast Club",
  MyRating: 5,
  AvgRating: 3.8,
  Genre: "Drama",
  img:"assets/thebreakfastclub.jpg"
 },
 {
  id:"53",
  Film: "Jaws",
  MyRating: 4,
  AvgRating: 4,
  Genre: "Thriller",
  img:"assets/jaws.jpg"
 },
 {
  id:"54",
  Film: "A Quiet Place 2",
  MyRating: 4,
  AvgRating: 3.6,
  Genre: "Horror",
  img:"assets/aquietplace2.jpg"
 },
 {
  id:"55",
  Film: "Moonrise Kingdom",
  MyRating: 3,
  AvgRating: 4,
  Genre: "Comedy",
  img:"assets/moonrisekingdom.jpg"
 },
 {
  id:"56",
  Film: "Love Simon",
  MyRating: 3.5,
  AvgRating: 3.5,
  Genre: "Drama",
  img:"assets/lovesimon.jpg"
 },
 {
  id:"57",
  Film: "History of the World Part 1",
  MyRating: 2,
  AvgRating: 3.3,
  Genre: "Comedy",
  img:"assets/historyoftheworld.jpg"
 },
 {
  id:"58",
  Film: "The Babadook",
  MyRating: 2,
  AvgRating: 3.5,
  Genre: "Horror",
  img:"assets/thebabadook.jpg"
 },
 {
  id:"59",
  Film: "Grease",
  MyRating: 4,
  AvgRating: 3.4,
  Genre: "Comedy",
  img:"assets/grease.jpg"
 },
 {
  id:"60",
  Film: "Rear Window",
  MyRating: 2,
  AvgRating: 4.3,
  Genre: "Thriller",
  img:"assets/rearwindow.jpg"
 },
 {
  id:"61",
  Film: "The Great Gatsby",
  MyRating: 1,
  AvgRating: 3.3,
  Genre: "Drama",
  img:"assets/greatgatsby.jpg"
 },
 {
  id:"62",
  Film: "Lady Bird",
  MyRating: 3.5,
  AvgRating: 3.9,
  Genre: "Drama",
  img:"assets/ladybird.jpg"
 },
 {
  id:"63",
  Film: "Inside Out",
  MyRating: 3.5,
  AvgRating: 3.9,
  Genre: "Family",
  img:"assets/insideout.jpg"
 },
 {
  id:"64",
  Film: "Thoroughbreds",
  MyRating: 1,
  AvgRating: 3.6,
  Genre: "Drama",
  img:"assets/thoroughbreds.jpg"
 },
 {
  id:"65",
  Film: "Flamingo Kid",
  MyRating: 4,
  AvgRating: 3,
  Genre: "Comedy",
  img:"assets/flamingokid.jpg"
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
      .style("stroke-width", 2)
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



     
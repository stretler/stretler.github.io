let sliderA;
let sliderB;
let sliderC;
let slider;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  //applies absolute positioning
  canvas.position(0, 0);
  canvas.class("container");
  angleMode(DEGREES);  
  // create some sliders
  sliderA = createSlider(0, 255, 0);
  sliderA.class("slider1");
  sliderA.position(width/3, 10);

  sliderB = createSlider(0, 255, 0);
  sliderB.class("slider2");
  sliderB.position(width/3, 30);

  sliderC = createSlider(0, 255, 0);
  sliderC.class("slider3");
  sliderC.position(width/3, 50);
  background("black");
  
} 

function draw() { 
fill("white")
stroke("black")
  rect((width/3 + 505), 10, 45, 110)
frameRate(20);

  // get value of sliders
  let r = sliderA.value();
  let g = sliderB.value();
  let b = sliderC.value();
    // print text
  text('R: '+r,(width/3 + 510),25);
  text('G: '+g,(width/3 + 510),65);
  text('B: '+b,(width/3 + 510),105); 

  if (mouseIsPressed){
    let r = sliderA.value();
  let g = sliderB.value();
  let b = sliderC.value();
stroke((r + (random(50))), (g + (random(50))), (b + random(50)));
   fill(r, g, b);
strokeWeight(2);
 ellipse(mouseX, mouseY, random(10,100));

 
 

}}


  


  



  

  
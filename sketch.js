// Creating the red green blue colour
var r = 0;
var g = 0;
var b = 0;

class Ellipse {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.height = 20;
    this.width = 20;
  }

  display() {
    ellipse(this.x,this.y,this.width,this.height);
  }
}

function setup(){

  // Creating the canvas
  createCanvas(1366,625);
}


function draw(){

  // Colouring the background
  background(r,g,b);
  
  // Changing the value of Red based on the mouse movement about the X axis
  r = map(mouseX,0,1366,0,255);
  r = map(mouseY,0,625,0,255);

  // Changing the value of Green based on the mouse movement about the X axis
  g = map(mouseX,0,1366,0,255);
  
  // Changing the value of Blue based on the mouse movement about the X axis
  b = map(mouseX,0,1366,0,255);
  
  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  move = new Ellipse();
  move.x = mouseX;
  move.y = mouseY;
  fill("green");

  move.display();

  // Remember to fill the canvas with white paint before creating the ellipse.
}
function preload(){
  // put preload code here
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(200);
  polygon(200, 200, 100, 12)
}

// This is a piece of code to be placed after the draw(). This code “enables” the polygon() instruction
function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

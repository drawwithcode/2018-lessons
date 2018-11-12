var r = 0;
var g = 0;
var b = 0;
var bgColor;
var myTurnedAxis = 'None';

function setup() {
	createCanvas(windowWidth, windowHeight);
	textSize(18);
  rectMode(CENTER);
}

function draw() {
  bgColor = color(r,g,b);
  background(bgColor);
  fill(255);
  noStroke();
  text('Click in the center to enable full screen', 5, 20);
  text(myTurnedAxis, 5, 40);
  stroke(255);
  noFill();
  rect(width/2,height/2,width/2,height/2);
  if (r >= 5) {
    r -= 5;
  }
}


function deviceTurned(){
  if (turnAxis == 'X') {
    r = 255;
  }
}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
	if(mouseX > width/4 && mouseX < width/4*3 && mouseY > height/4 && mouseY < height/4*3) {
		var fs = fullscreen();
		fullscreen(!fs);
	}
}

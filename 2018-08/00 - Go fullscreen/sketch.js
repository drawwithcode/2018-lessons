function setup() {
	createCanvas(windowWidth, windowHeight);
	textSize(18);
  rectMode(CENTER);
}

function draw() {
  background(0)
  fill(255);
  noStroke();
  text('Click in the center to enable full screen', 5, 20);
  stroke(255);
  noFill();
  rect(width/2,height/2,width/2,height/2);
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

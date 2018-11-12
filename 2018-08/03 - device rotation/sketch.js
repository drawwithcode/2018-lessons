function setup() {
	createCanvas(windowWidth, windowHeight);
	textSize(18);
  textAlign(CENTER);
	rectMode(CENTER);

}

function draw() {
  translate(width/2,height/2);
	background(120);
	fill(255);
	noStroke();
	text('Click in the center to enable full screen', 0, 0);

  text('Z rotation: '+ rotationZ, 0, 20);
  text('X rotation: '+ rotationX, 0, 40);
  text('Y rotation: '+ rotationY, 0, 60);
	stroke(255);
	noFill();
	rect(0, 0, width / 2, height / 2);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
	if(mouseX > width / 4 && mouseX < width / 4 * 3 && mouseY > height / 4 && mouseY < height / 4 * 3) {
		var fs = fullscreen();
		fullscreen(!fs);
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(200);
	var diameter = 0;
	//set diameter to the smallest dimension
	if (width > height) {
		diameter = height;
	} else {
		diameter = width;
	}

	ellipse(width / 2, height / 2, diameter);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

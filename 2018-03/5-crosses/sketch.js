function setup() {
	createCanvas(400, 400);
	colorMode(HSB, 255);
	//create line grid
	// with a for cicle draw bot vertical and horizontal lines
	for (var pos = 25; pos < width; pos += 25) {
		stroke(0);
		noFill();
		line(pos, 10, pos, 390);
		line(10, pos, 390, pos);
	}

	//create first grid of dots
	for (var x = 25; x < 400; x += 50) {
		for (var y = 25; y < 400; y += 50) {
			noStroke();
			fill(255);
			ellipse(x, y, 10);
		}
	}

	//create second grid of dots
	for (var x = 50; x < 400; x += 50) {
		for (var y = 50; y < 400; y += 50) {
			noStroke();
			fill(255);
			ellipse(x, y, 10);
		}
	}
}

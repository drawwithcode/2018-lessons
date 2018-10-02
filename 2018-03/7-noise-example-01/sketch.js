function setup() {
	createCanvas(windowWidth, windowHeight);
}



function draw() {
	var iterator = frameCount;
	// x position is equal to the iterator
	var x = iterator;
	// Draw a circle with a random y posizion in the upper half of the screen
	var y = random(0, height / 2);
	ellipse(x, y, 10)

	//draw a line in the middle
	line(0,height/2, width, height/2)

	// Draw a circle using noise() function
	var y = noise(iterator / 50) * height / 2 + height / 2;

	ellipse(x, y, 10);
}

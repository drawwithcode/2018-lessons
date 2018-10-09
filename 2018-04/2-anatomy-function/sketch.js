

function drawCandy(posX, posY, rotation, color) {
	// posX and posY will be used as coordinates for the ellipse
	angleMode(DEGREES); // Change the mode to DEGREES
	push();
	translate(posX, posY);
	rotate(rotation);
	noStroke();
	fill('white')
	arc(0, 0, 50, 50, 0, 90, PIE);
	fill(color)
	arc(0, 0, 50, 50, 90, 180, PIE);
	fill('white')
	arc(0, 0, 50, 50, 180, 270, PIE);
	fill(color)
	arc(0, 0, 50, 50, 270, 360, PIE);
	pop();
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

// To “call a function” means to order the computer to execute its list of instructions.
// In the call you “pass” it the values of its parameters («This time posX is equal to 100»).

function draw() {
	// This is how to call a function
	drawCandy(frameCount, 100, frameCount, 'pink');
	drawCandy(frameCount, 200, frameCount*2, 'red');
	drawCandy(mouseX, mouseY, frameCount, 'blue')
}

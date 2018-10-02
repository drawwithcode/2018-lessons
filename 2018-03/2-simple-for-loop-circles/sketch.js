//draw a line each 10 pixels

function setup() {
	createCanvas(400, 100);

	for (var x = 0; x < width; x += 10) {
		line(x, 0, x + 100, 100)
	}
}

//draw a grid of coloured dots with different size

function setup() {
	createCanvas(400, 400);
	colorMode(HSB, 255);

	for (var x = 25; x < width; x += 25) {
		for (var y = 25; y < height; y += 25) {
			stroke(255);
			var customHue = x / width * 255;
			var customSaturation = x / width * 255;
			var diameter = (x + y) / 10;

			fill(customHue, customSaturation, 255);
			ellipse(x, y, (x + y) / 10);
		}
	}
}

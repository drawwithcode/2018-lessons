//draw a grid of red dots

function setup() {
	createCanvas(400, 400);

	for (var x = 25; x < 400; x += 25) {
		for (var y = 25; y < 400; y += 25) {

			stroke('white');
			fill('red');
			ellipse(x, y, 25);
		}
	}
}

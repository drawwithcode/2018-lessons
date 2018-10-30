function preload() {
	// put preload code here
}

var capture;

function setup() {
	createCanvas(640, 480);
	capture = createCapture(VIDEO);
	capture.size(640, 480);
	capture.hide();
}

function draw() {

	var myImage = capture.loadPixels();

	image(myImage, 0, 0, 640, 480);
}

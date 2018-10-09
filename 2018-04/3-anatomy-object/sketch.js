function preload() {
	// put preload code here
}

var myCuteBall;
var secondBall;

function setup() {
	createCanvas(windowWidth, windowHeight);
	myCuteBall = new Ball(width / 2, height / 2, 50);
	myCuteBall.speed = 5;
	myCuteBall.color = 'pink'

	//second ball
	secondBall = new Ball(0, 0, 10);
}


function draw() {

	myCuteBall.move();
	myCuteBall.display();

	secondBall.move();
	secondBall.display();
	// update the color variable of the second ball giving a random variable
	var myColor = color(random(255), random(255), random(255))
	secondBall.color = myColor;
}

function Ball(_x, _y, _diameter) {
	// Properties defined by constructor
	this.size = _diameter;
	this.x = _x;
	this.y = _y;
	// Hardcoded properties
	this.color = 'red';
	this.speed = 2;

	var yDir = 1;
	var xDir = 1;
	// Methods
	this.move = function() {
		this.x += this.speed * xDir;
		this.y += this.speed * yDir;

		if (this.y >= height || this.y <= 0) {
			// if 1, set to -1, if -1, set to 1
			yDir *= -1;
		}

		if (this.x >= width || this.x <= 0) {
			xDir *= -1;
		}
	}

	this.display = function() {
		fill(this.color);
		ellipse(this.x, this.y, this.size);
	}
}

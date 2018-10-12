var data;
var balls = [];

function preload() {
    // data = loadJSON('./assets/data.json');
    data = loadJSON('./assets/data-24-10-2017.json');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  console.log(data);

  for(var i=0; i<data.people.length; i++ ) {

    var x = random(width);
    var y = random(height);
    var size = data.people[i].careerdays;
    var name = data.people[i].name;
    var title = data.people[i].title;

    var myBall = new Ball(x, y, size, name, title);
    balls.push(myBall);
  }
}


function draw() {
  background(255);
	for(var j = 0; j < balls.length; j++) {
		balls[j].move();
		balls[j].display();
	}
}

function Ball(_x, _y, _diameter, _name, _title) {
	// Properties defined by constructor
	this.size = _diameter;
	this.x = _x;
	this.y = _y;
	// Hardcoded properties
	this.speed = 2;

	this.yDir = 1;
	this.xDir = 1;
	// Methods
	this.move = function() {
		this.x += this.speed * this.xDir;
		this.y += this.speed * this.yDir;

		if (this.y >= height || this.y <= 0) {
			// if 1, set to -1, if -1, set to 1
			this.yDir *= -1;
		}

		if (this.x >= width || this.x <= 0) {
			this.xDir *= -1;
		}
	}

	this.display = function() {
    if (_title == 'Commander') {
      textSize(24);
      fill('red');
    } else {
      fill('white');
      textSize(12);
    }
    ellipse(this.x, this.y, this.size);
    textAlign(CENTER);
    fill(0);
    text(_name, this.x, this.y);
	}
}

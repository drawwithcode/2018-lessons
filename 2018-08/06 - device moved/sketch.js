var value = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  // by default it is set on 0.5
  setMoveThreshold(2);
}

function draw() {
  background('#73C86B');
  fill(255-value);
  textSize(90);
  textAlign(CENTER);
  text(value,width/2,height/2+30)
}

function deviceMoved() {
  value++;
}

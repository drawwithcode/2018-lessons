function preload(){
  // put preload code here
}
var size;

function setup() {
  createCanvas(windowWidth, windowHeight);
  size = height/4;
  background('#63e7ff');
  textSize(size);
  textAlign(CENTER);
  textFont('Alegreya');
}

function draw() {
  background('#63e7ff');

  fill(lerpColor(color('#212F3C'), color('#F5B7B1'),hour()/24))
  var hour_y = map(hour(),1,24,size*0.75,height-size*0.25);
  text(hour(),width/6,hour_y);

  fill(lerpColor(color('#212F3C'), color('#F5B7B1'),minute()/59))
  var minute_y = map(minute(),0,59,size*0.75,height-size*0.25);
  text(minute(),width/2,minute_y);

  fill(lerpColor(color('#212F3C'), color('#F5B7B1'),second()/59))
  var second_y = map(second(),0,59,size*0.75,height-size*0.25);
  text(second(),width/6*5,second_y);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  size = windowHeight/4;
  textSize(size);
}

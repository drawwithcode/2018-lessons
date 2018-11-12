function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background('white');
  noStroke();

  // Understanding device orientation: ALPHA = rotationZ
  // draw ALPHA red rectangle
  fill('#F24440');
  rect(0,0,map(rotationZ,0,360,1,width),height/3);
  // print values
  fill('#333333');
  textAlign(LEFT)
  text('0',5,height/6);
  textAlign(CENTER)
  text(round(rotationZ), width/2, height/6);
  textAlign(RIGHT)
  text('360',width-5,height/6);

  // Understanding device orientation: BETA = rotationX
  // draw BETA blue rectangle
  fill('#1785FB');
  rect(0,height/3,map(rotationX,-180,180,1,width),height/3);
  // print values
  fill('#333333');
  textAlign(LEFT)
  text('-180',5,height/2);
  textAlign(CENTER)
  text(round(rotationX), width/2, height/2);
  textAlign(RIGHT);
  text('180',width-5,height/2);

  // Understanding device orientation: GAMMA = rotationY
  // draw GAMMA green rectangle
  fill('#73C86B');
  rect(0,height/3*2,map(rotationY,-90,90,1,width),height/3);
  // print values
  fill('#333333');
  textAlign(LEFT);
  text('-90',5,height/6*5)
  textAlign(CENTER);
  text(round(rotationY), width/2, height/6*5);
  textAlign(RIGHT);
  text('90',width-5,height/6*5)
}

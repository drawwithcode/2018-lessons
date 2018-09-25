function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
}

function draw() {
  noStroke();
  
  // with push() you collect the upcoming transformations
  push();
  translate(frameCount,height/2);
  rotate(frameCount)
  fill(255)
  arc(0, 0, 50, 50, 0, 90, PIE);
  fill(255,102,0)
  arc(0, 0, 50, 50, 90, 180, PIE);
  fill(255)
  arc(0, 0, 50, 50, 180, 270, PIE);
  fill(102,255,102)
  arc(0, 0, 50, 50, 270, 360, PIE);

  // with pop() you terminate the collected transformation
  // and you reset the space to the original state
  pop();
}

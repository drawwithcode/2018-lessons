function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background('#eea7a6');

  var myText = 'I loaded a nice new font!';

  // textFont('Alegreya');
  // textAlign(CENTER);
  // textSize(60);
  // textStyle(BOLD);

  drawingContext.font = 'italic bold 60px Alegreya';
  drawingContext.textAlign = 'center';
  drawingContext.letterSpacing = 100
  fill(50);
  text(myText,width/2,height/2);
}

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background('#eea7a6');

  var myText = 'I loaded a nice new font!';
  textFont('Alegreya');
  textAlign(CENTER);
  textSize(60);
  fill(50);
  text(myText,width/2,height/2);
}

function preload(){
  // put preload code here
  myImage = loadImage("./assets/flamingo.jpg");
}
var myImage;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25);
}

function draw() {
  background(25);
  // image(myImage,0,0,myImage.width,myImage.height)
  backgroundImage(myImage);
}

function backgroundImage(img) {
  push();
  translate(width/2,height/2);
  imageMode(CENTER);
  let scale = Math.max(width/img.width,height/img.height);
  image(img,0,0,img.width*scale,img.height*scale)
  pop();
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

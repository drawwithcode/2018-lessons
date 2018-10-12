function preload(){
  // put preload code here
  myImage = loadImage("./assets/flamingo.jpg");
}
var myImage;
var filters = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25);
  frameRate(2);

  filters = [
    {
      type: THRESHOLD,
      param: 0.9
    },
    {
      type: GRAY,
      param: null
    },
    {
      type: OPAQUE,
      param: null
    },
    {
      type: INVERT,
      param: null
    },
    {
      type: POSTERIZE,
      param: 100
    },
    {
      type: BLUR,
      param: 5
    },
    {
      type: ERODE,
      param: null
    }
  ]

  var f = filters[3];
  myImage.filter(f.type,f.param)
}

function draw() {
  background(25);
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

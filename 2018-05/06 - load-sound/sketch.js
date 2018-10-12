var mySong;

function preload(){
  mySong = loadSound("./assets/lunedi-cinema.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseX > width/2) {
    background(0,255,0);
    if (mySong.isPlaying() == false) {
      mySong.play();
    }
  } else {
    background(255,0,0);
    mySong.stop();
  }
}

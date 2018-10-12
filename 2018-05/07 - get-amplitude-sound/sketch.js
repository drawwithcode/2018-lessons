var mySong;
var analyzer;

function preload(){
  mySong = loadSound("./assets/lunedi-cinema.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);
}

function draw() {
  var volume = 0;
  if (mouseX > width/2) {
    background(0,255,0);
    if (mySong.isPlaying() == false) {
      mySong.play();
    }
    // get the volume and remap it to a bigger value
    volume = analyzer.getLevel();
    volume = map(volume,0,1,0,height);
  } else {
    background(255,0,0);
    mySong.stop();
  }
  ellipse(width/2,height,volume)
}

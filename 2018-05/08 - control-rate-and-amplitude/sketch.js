var mySong;
var myRate=1;

function preload() {
    mySong = loadSound('./assets/lunedi-cinema.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    mySong.loop();
    
    // info
    line(width/2,0,width/2,height/2-40);
    line(width/2,height/2+40,width/2,height);
    text('0',10,height/2);
    textAlign(CENTER);
    text('0.5',width/4,height/2);
    textAlign(CENTER);
    text('1',width/2,height/2);
    textAlign(CENTER);
    text('2',width/4*3,height/2);
    textAlign(RIGHT);
    text('4',width-10,height/2);
}

function draw() {
    if (mouseX < width/2) {
      myRate = map(mouseX,0,width/2,0,1);
    } else {
      myRate = map(mouseX,width/2,width,1,4);
    }
    mySong.rate(myRate);
    mySong.amp(mouseY/height);
}

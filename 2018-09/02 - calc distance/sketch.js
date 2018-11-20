var myLoc;

var duomoLat = 45.4640976;
var duomoLon = 9.1897378;

var colosseumLat = 41.8902142;
var colosseumLon = 12.4900422;

function preload(){
  // put preload code here
  myLoc = getCurrentPosition();
}

function setup() {
  // put setup code here
  console.log(myLoc);

  //calc distance
  var distance = calcGeoDistance(myLoc.latitude, myLoc.longitude, duomoLat, duomoLon, "km");


  createCanvas(windowWidth, windowHeight);
  background('azure');
  textAlign(CENTER);
  textSize(32);
  fill('darkblue')
  text(distance, width/2, height/2);
}

function draw() {
  // put drawing code here

}

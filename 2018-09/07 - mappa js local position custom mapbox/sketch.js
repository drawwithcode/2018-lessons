var myMap;
var canvas;
var myLoc;
var mappa = new Mappa('MapboxGL', 'pk.eyJ1IjoibWlraW1hIiwiYSI6IjNvWUMwaUEifQ.Za_-O03W3UdQxZwS3bLxtg');
// Lets put all our map options in a single object
var options = {
	lat: 0,
	lng: 0,
	zoom: 8,
	style: 'mapbox://styles/mikima/cjoptof3g04yj2snokioobkpx',
	pitch: 50
}

function preload(){
  // put preload code here
  myLoc = getCurrentPosition();
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	// background(100); let's uncomment this, we don't need it for now

	//update options according to current location
	options.lat = myLoc.latitude;
	options.lng = myLoc.longitude;

	// Create a tile map with the options declared
	myMap = mappa.tileMap(options);
	myMap.overlay(canvas);
}

function draw() {
	clear();
	angleMode(DEGREES);
	var point = myMap.latLngToPixel(myLoc.latitude, myLoc.longitude);
	fill('black');
	push();
	translate(point.x, point.y);
	rotate(45);
	rectMode(CENTER);
	rect(0,0,30,10);
	pop();
	push();
	translate(point.x, point.y);
	rotate(-45);
	rectMode(CENTER);
	rect(0,0,30,10);
	pop();
}

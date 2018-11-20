var myMap;
var canvas;
var mappa = new Mappa('Leaflet');

var duomoLat = 45.4640976;
var duomoLon = 9.1897378;


// Lets put all our map options in a single object
var options = {
	lat: duomoLat,
	lng: duomoLon,
	zoom: 4,
	style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	// background(100); let's uncomment this, we don't need it for now

	// Create a tile map with the options declared
	myMap = mappa.tileMap(options);
	myMap.overlay(canvas);
}

function draw() {
	clear();

	var point = myMap.latLngToPixel(duomoLat, duomoLon);
	ellipse(point.x, point.y, 5);
}

var myMap;
var myLoc;
var canvas;
var mappa = new Mappa('Leaflet');

var points = [];

// see https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions
watchOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};


// Lets put all our map options in a single object
var options = {
	lat: 0,
	lng: 0,
	zoom: 17,
	style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function preload(){
  // put preload code here
  myLoc = getCurrentPosition();
  points.push(myLoc);
}

function setup() {
	//create the canvas
	canvas = createCanvas(windowWidth, windowHeight);

	//set up the watch function, define which function to call everytime the position changes
	watchPosition(onPositionChange);

	//update options centering the map on the first position
	options.lat = myLoc.latitude;
	options.lng = myLoc.longitude;
	console.log(options)

	// Create a tile map with the options declared
	myMap = mappa.tileMap(options);
	myMap.overlay(canvas);
}

function draw() {
	//clear the canvas
	clear();

	for(var i = 0; i < points.length; i++){
		// get the saved point from the array
		var point = points[i];
		//project it on the current map
		var pointOnMap = myMap.latLngToPixel(point.latitude, point.longitude);
		//draw an ellipse
		fill(random(255), random(255), random(255));
		ellipse(pointOnMap.x, pointOnMap.y, 5);
	}
}

function onPositionChange(newPosition) {
	points.push(newPosition);
}

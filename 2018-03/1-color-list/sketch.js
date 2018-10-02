// define the list
var colorList = ['#e86584',
				'#3c5979',
				'#018cb7',
				'#fae093'
];

function setup() {

	createCanvas(windowWidth, windowHeight);

	//create a square, fill with the second color
	//remember that in lists the first index is 0, not 1.
	var myColor = colorList[0];
	fill(myColor);
	rect(0, 0, 100, 100);

	myColor = colorList[1];
	fill(myColor);
	rect(100, 0, 100, 100);

	myColor = colorList[2];
	fill(myColor);
	rect(200, 0, 100, 100);

	myColor = colorList[3];
	fill(myColor);
	rect(300, 0, 100, 100);

}

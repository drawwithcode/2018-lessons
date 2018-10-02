// define the list
var colorList = ['#e86584',
				'#3c5979',
				'#018cb7',
				'#fae093'
];

function setup() {

	createCanvas(800, 100);

	//cycle in the list, draw a square filled with each color

	for (var i = 0; i < colorList.length; i++) {

		var x = i * 100;
		var y = 0;
		var colorHex = colorList[i];
		fill(color(colorHex));
		rect(x, y, 100, 100);

	}
}

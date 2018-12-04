// Global variables, declared outside of anything.
// They can be accessed and modified by any the P5js canvas
var my_global_variable = 'olè';

// The first canvas is declared as a function assigned to a variable.
// The canvas contains all the ordinary P5js functions, declared again as variables PRECEDED BY 'p.'
// - p.preload() {}
// - p.setup() {}
// - p.draw() {}
// - p.mousePressed() {}
// - p.mouseReleased() {}
// - etc.
var red_canvas = function (p) {

  // The following are variables accessible ONLY from within this canvas.
  var bg_col = p.color('red');

  // Ordinary p5js functions preceded by 'p.'
  p.setup = function() {
	   var canvas = p.createCanvas(500,500);
     // place the canvas in the object with the id "green-canvas"
     canvas.parent('red-canvas')
  }
  p.draw = function() {
  	p.background(bg_col);
  	p.ellipse(200,200,50);
  }
}

// After that the canvas is assigned as functionto a specific variable,
// you have to instantiate a new p5 object passing that variable to it.
var red_sketch = new p5(red_canvas);

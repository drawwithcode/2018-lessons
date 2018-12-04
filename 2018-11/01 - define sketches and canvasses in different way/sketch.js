// Global variables, declared outside of anything.
// They can be accessed and modified by any the P5js canvas
var position = {'x':0, 'y':0 }

// The first canvas is declared as a function assigned to a variable.
// The canvas contains all the ordinary P5js functions, declared again as variables PRECEDED BY 'p.'
// - p.preload() {}
// - p.setup() {}
// - p.draw() {}
// - p.mousePressed() {}
// - p.mouseReleased() {}
// - etc.
var my_canvas = function( p ) {
  // The following are variables accessible ONLY from within this canvas.
  var bg_col = p.color('red');
  // Ordinary p5js functions preceded by 'p.'
  p.setup = function() {
    p.createCanvas(500, 500);
  };
  p.draw = function() {
    p.background(bg_col);
    p.ellipse(position.x, position.y, 50);
  };
};
// After that the canvas is assigned as functionto a specific variable,
// you have to instantiate a new p5 object passing that variable to it.
var my_sketch = new p5(my_canvas);

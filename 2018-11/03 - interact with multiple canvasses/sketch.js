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
var canvas_red = function( p ) {
  // The following are variables accessible ONLY from within this canvas.
  var dragging = false;
  var bg_col = p.color('red');
  var bg_col_dragging = p.color(255,100,100);
  // Ordinary p5js functions preceded by 'p.'
  p.setup = function() {
    var canvas = p.createCanvas(500, 500);
    // place the canvas in the object with the id "green-canvas"
    canvas.parent('red-canvas');
  };
  p.draw = function() {
    if (dragging == true) {
      // Even variables such as 'mouseX' need to be written as 'p.mouseX'
      position.x = p.mouseX;
      position.y = p.mouseY;
      p.background(bg_col_dragging);
    } else {
      p.background(bg_col);
    }
    p.ellipse(position.x, position.y, 50)
  };
  p.mousePressed = function() {
    // The 'dist()' function becames 'p.dist()'
    var dist = p.dist(position.x, position.y, p.mouseX, p.mouseY)
    if ( dist <= 25 ) {
      dragging = true;
    }
  }
  p.mouseReleased = function() {
    dragging = false;
  }
};
// After that the canvas is assigned as functionto a specific variable,
// you have to instantiate a new p5 object passing that variable to it.
var p5_red = new p5(canvas_red);

// With the same locig, you can create as many canvas as you want
var canvas_green = function( p ) {
  // The following are variables accessible ONLY from within this canvas.
  var dragging = false;
  var bg_col = p.color('green');
  var bg_col_dragging = p.color(100,255,100);
  // Ordinary p5js functions preceded by 'p.'
  p.setup = function() {
    var canvas = p.createCanvas(500, 500)
    // place the canvas in the object with the id "green-canvas"
    canvas.parent('green-canvas');
  };
  p.draw = function() {
    if (dragging == true) {
      // Even variables such as 'mouseX' need to be written as 'p.mouseX'
      position.x = p.mouseX;
      position.y = p.mouseY;
      p.background(bg_col_dragging);
    } else {
      p.background(bg_col);
    }
    p.ellipse(position.x, position.y, 50)
  };
  p.mousePressed = function() {
    // The 'dist()' function becames 'p.dist()'
    var dist = p.dist(position.x, position.y, p.mouseX, p.mouseY)
    if ( dist <= 25 ) {
      dragging = true;
    }
  }
  p.mouseReleased = function() {
    dragging = false;
  }
};
var p5_green = new p5(canvas_green);

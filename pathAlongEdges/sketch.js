// Example 5-8: Square following edge, uses a �state� variable

x = 0; // x location of square
y = 0; // y location of square

speed = 5; // speed of square

// A variable to keep track of the square�s "state."  
// Depending on the value of its state, it will either move right, down, left, or up.
state = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255);

	// Display the square
	stroke(0);
	fill(175);
	rect(x, y, 9, 9);

	// If the state is 0, move to the right.
	if (state == 0) {
		x = x + speed;
		// If, while the state is 0, it reaches the right side of the window, change the state to 1
		// Repeat this same logic for all states!?
		if (x > width - 10) {
			x = width - 10;
			state = 1;
		}
	} else if (state == 1) {
		y = y + speed;
		if (y > height - 10) {
			y = height - 10;
			state = 2;
		}
	} else if (state == 2) {
		x = x - speed;
		if (x < 0) {
			x = 0;
			state = 3;
		}
	} else if (state == 3) {
		y = y - speed;
		if (y < 0) {
			y = 0;
			state = 0;
		}
	}
}

function windowResized() { // Let it redraw the window
	resizeCanvas(windowWidth, windowHeight);
}
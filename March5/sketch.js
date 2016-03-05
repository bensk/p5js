function setup() {
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  fill(255, 67, 150);
  noStroke()
  ellipse(mouseX, mouseY, 100, 100);
  fill(0,255,255);
  ellipse(200,300,300,300);
}
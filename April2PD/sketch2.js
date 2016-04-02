function setup() {
  createCanvas(windowWidth,windowHeight);
  fill(0,255,0);
}

function draw() {
  background('white');
  rect(50,50,mouseX,mouseY);
}

function mousePressed(){
  fill(255,0,0)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  fill(0,255,0);
}

function draw() {
  background('white');
  rect(0,0,mouseX,mouseY);
}

function mousePressed(){
  fill(random(0,255),random(0,255),random(0,255))
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
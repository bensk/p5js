function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  if (mouseIsPressed) {
    // strokeWeight(abs(mouseY-pmouseY)/(mouseX-pmouseX))
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
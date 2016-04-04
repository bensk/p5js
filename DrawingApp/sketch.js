function setup() {
  createCanvas(500, 500);

}

function draw() {
  if (mouseIsPressed) {
    strokeWeight(abs(mouseY-pmouseY)/(mouseX-pmouseX))
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
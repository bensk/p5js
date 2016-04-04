document.ontouchmove = function(event){
  event.preventDefault();
}

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

function drawMobile() {
  if (touchIsDown) {
    // strokeWeight(abs(mouseY-pmouseY)/(mouseX-pmouseX))
    line(ptouchX, ptouchY, touchX, touchY);
  }
}
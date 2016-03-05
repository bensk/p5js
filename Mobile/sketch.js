// var iWidth = 0;
var iHeight = 0;
var x = 0;
var y = 0;



function setup() {
  createCanvas(windowWidth, windowHeight)
  iWidth = windowWidth / 2;
  // iHeight = windowHeight / 2;
}

function draw() {


  // line(iWidth, 0, iWidth*2, iHeight);


  if (iWidth * 2 - x > 0) {
    line(iWidth, y, iWidth * 2 - x, y);
    // iWidth-=10;
    x = x + 10;
    y = y + 10;

  } else {
    // line(iWidth, y, iWidth - x, y);
    // stroke('blue');
    // y = y + 10;
    // x = x + 10;


  }





}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}
var delay = 50;

function setup() { // function that runs one time
  //  w   h

  createCanvas(500, 500); // setup the size of the screen 
  background("#F5BA14");

}

function draw() {

  background("#F5BA14");
  c = color("#1AC2BD");
  fill(c); // green!
  stroke(255);
  strokeWeight(5);
  rect(50, 50, 50, 50);
  stroke(125, 0, 0);
  // line(125, 125, 300, 250);

  line(mouseX - delay, mouseY - delay, 250, 0);
  if(delay>0){
    delay = delay -1;
  } else if(delay==0){
    delay = 50;
  }
  println(mouseX)
}
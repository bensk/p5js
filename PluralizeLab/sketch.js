var input, button, greeting;

function setup() {
  createCanvas(windowWidth, windowHeight)

  input = createInput()
  input.position(10, 70)
  button = createButton('pluralize');
  button.position(150, 70);
}

function draw() {

  background('white')
  textSize(32)
  text("BJC Pluralize Lab", 10, 30)
  textSize(12)
  text("Enter a noun!",10,50)
  var noun = input.value();
  if (noun.length > 2) {
    if (noun.charAt(noun.length - 1) === "s" || noun.charAt(noun.length - 1) === "h" || noun.charAt(noun.length - 1) === "sh" || noun.charAt(noun.length - 1) === "ch") {
      text(noun + "es", 10, 110)
    } else {
      text(noun + "s", 10, 110)
    }
  }
}

function pluralize() {

}
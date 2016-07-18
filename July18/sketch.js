var myArray = ['⚡️', '💩', '💡', '🍑', '👍', '🌮', '👾', '🖥', '🤓', '🐙', '🐳', '🐠', '🚀'];
var emoji = myArray[Math.floor(Math.random() * myArray.length)];
var colorArray = ['#5C3B57', '#4FC2A1', '#85D1DE', '#EDB538']
var color1 = colorArray[Math.floor(Math.random() * colorArray.length)];
var color2 = colorArray[Math.floor(Math.random() * colorArray.length)];


function setup() {
    createCanvas(windowWidth, windowHeight); 
    //	color1 = random(0,255)

}

function draw() {
    background('white')

    fill(color1)
    triangle(0, 0, windowWidth / 2, 0, 0, windowHeight / 2)
    fill(color2)
    triangle(windowWidth / 2, 0, windowWidth / 2, windowHeight / 2, 0, windowHeight / 2)
    textSize(72)
    text(emoji, windowWidth / 2, windowHeight / 2)
}

function randomColor(){

}

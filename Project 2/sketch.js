let data;
let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7OlIis5SjmviNeQS-is4tU6nAoX6seiH1It2UEnIvvGZ7yHBjANiIbuNNxaU9vf3FEC5kFjq2sagw/pub?gid=0&single=true&output=csv";

function preload() {
  data = loadTable(url, 'csv', 'header');
  icecream = loadImage('icecream.jpg');
  sushi = loadImage('sushi.jpg');
  hamburger = loadImage('hamburger.jpg');

}
function setup() {
  createCanvas(650, 410);
}

var state;
var bar = {
  "i": 8, //petData.length (iteration)
  "startX": 315, //start of graph at the line
  "startY": 190, //start at top of graph
  "height": 35, //height of bars
  "ratio": 3.9, //ratio of bar length
  "distance": 45, //distance between bars (y postion)
};
var icecreamL = bar.height / 3;
var sushiL = icecreamL * 2;
var hamburgerL = icecreamL * 3;
var shape = bar.height / 2;


function draw() {
  background(247, 171, 171)
  textAlign(LEFT, CENTER)
  noStroke();
  rectMode(CORNER)

//subtite
fill(0, 0, 130) /// color of bar
// rect(24,bar.startY-15,186,bar.distance*9+15)
textSize(15)
fill(0, 0, 0) /// color of text///

text('For the food below:',50,110) //mean graph title

// image- graph Index
image(icecream, 40,135,(bar.height + 25), bar.height + 20)
image(sushi,120,135,(bar.height + 20) * 1.39, bar.height + 20)
image(hamburger,217,135,(bar.height + 20) * 1.39, bar.height + 20)


//Title
textStyle(BOLD)
textSize(40)
fill(252, 252, 252)
text('Nutrition Content', 150, 48)
fill(19, 45, 57)
text('Nutrition Content', 150, 50)

if (data) {
  let numRows = data.getRowCount();
  let cal = data.getColumn('Calories');
  let names = data.getColumn('Food');
  let fat = data.getColumn('Fat');
  let sugar = data.getColumn('Sugar');

for (let i = 0; i < numRows; i++){
  let x = 60;
  let y = 220 + i*70;
  let w = cal[i];
  let h = 200;

 

  noStroke();

  fill (0);
  textSize(14);
  text(names[i], x, y -10);
  fill(255);
  rect (x, y, w, bar.height);

  strokeWeight(4);
  stroke(168, 12, 12)//fat
  line(x,y+10,fat[i],y+10);
  //print(60+fat[0]);

  stroke(12, 163, 171)// sugar
line(x,y+20,sugar[i],y + 20)
  
}

  ///// ASK PROF

// for (let i = 0; i < numRows; i++){
//   let x = 60;
//   let y = 220 + i*70;
//   let w = cal[i];
//   let h = 200;

//   fill (0);
//   textSize(14);
//   text(names[i], x, y -10);
//   fill(255);
//   stroke(168, 12, 12)//fat
//   line(430,120,480,120)
// }

}

//Index for bar graph
noStroke()
textSize(12);
fill(0)
text('Calories', 335, 150)
text('per serving', 330, 165)

fill(255) //bar color
rect(322, 105, 70, bar.height)

fill(0); //text color
text('% of fat', 435, 150)
text('% of sugar', 525, 150)

strokeWeight(6)
stroke(168, 12, 12)//fat
line(430,120,480,120)
stroke(12, 163, 171)// sugar
line(530,120,580,120)

} //end draw loop


let bubbles = [];

function setup() {
  createCanvas(600, 400);

//   for (let i = 0; i < 1000; i++){
//     let x = random(width);
//     let y = random(height);
//     let r = random(10, 40);

//   bubbles[i] = new Bubble(x, y, r);
// }
  // bubbles[0] = new Bubble(200, 200, 40);
  // bubbles[1] = new Bubble(400, 200, 20);
}

function mouseDragged(){
  let r = random(10, 50);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

function draw() {
  background(0);

  for (let i = 0; i < bubbles.length; i++){
  bubbles[i].show();
  bubbles[i].move();
  }
  // bubbles[0].show();
  // bubbles[0].move();
  
  // bubbles[1].show();
  // bubbles[1].move();
}

class Bubble {
  constructor(tempX, tempY, tempR) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
  }
  
  move(){
      this.x = this.x + random(-5, 5);
  this.y = this.y + random(-5, 5);
  }
  
  show() {
      stroke(255);
  strokeWeight(4);
  noFill();

  
  // fill(125,50);
  // noStroke();
  ellipse(this.x, this.y, this.r * 2);
  }
}



//////Makes the bubble looks like smokes/////
// let bubbles = [];


// function setup() {
//   createCanvas(600, 400);

//   for (let i = 0; i < 1000; i++){
//     let x = random(width);
//     let y = random(height);
//     let r = random(10, 40);

//   bubbles[i] = new Bubble(x, y, r);
// }
//   // bubbles[0] = new Bubble(200, 200, 40);
//   // bubbles[1] = new Bubble(400, 200, 20);
// }


// function draw() {
//   background(0);

//   for (let i = 0; i < bubbles.length; i++){
//   bubbles[i].show();
//   bubbles[i].move();
//   }
//   // bubbles[0].show();
//   // bubbles[0].move();
  
//   // bubbles[1].show();
//   // bubbles[1].move();
// }

// class Bubble {
//   constructor(tempX, tempY, tempR) {
//     this.x = tempX;
//     this.y = tempY;
//     this.r = tempR;
//   }
  
//   move(){
//       this.x = this.x + random(-5, 5);
//   this.y = this.y + random(-5, 5);
//   }
  
//   show() {
//       stroke(255);
//   strokeWeight(4);

//   fill(125,50);
//   noStroke();
//   ellipse(this.x, this.y, this.r * 2);
//   }
// }


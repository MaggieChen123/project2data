let bubbles = [];
// let bubble;

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent('data');

  for (let i = 0; i < 5; i++) {
  let x = random(width);
  let y = random(height);
  let r = random(10, 50);

  let b = new Bubble(x, y, r, 0);
  bubbles.push(b);
  }
}
// function mouseDragged(){
//   let r = random(10, 50);
//   let b = new Bubble(mouseX, mouseY, r);
//   bubbles.push(b);
// }


function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].click(mouseX,mouseY);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}
/// number pops up from side and comes at random
  // time = time -1;

  // if (time == 0) {
  //   let r = random(10, 50);
  //   let x = random(width);
  //   let y = random(height);
  //   let b = new Bubble(x, y, r);
  //   bubbles.push(b);
  //   time = 100;


  // }
  // bubbles[0].show();
  // bubbles[0].move();
  
  // bubbles[1].show();
  // bubbles[1].move();
// }


class Bubble {
  constructor(tempX, tempY, tempR, tempB) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
    this.brightness = tempB;
  }

  click(px, py) {
    let d = dist(px, py, this.x, this.y);

    if (d < this.r) {
      this.brightness = 125;
      print("clicked on bubble");
    }
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness);

    // fill(125,50);
    // noStroke();
    ellipse(this.x, this.y, this.r * 2);
  }
}



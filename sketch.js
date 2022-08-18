let bright1 = 0;
let bright2 = 100;
let inc1 = 1;
let inc2 = -1;
let wid;
let heig;
const MIN_B = 0; MAX_B = 100;
let deg = 0;
let tileCount;

function setup() {
  createCanvas(windowWidth, windowHeight);
  wid = width;
  heig = height;
  colorMode(HSB, 360, 100, 100, 100);
  tileCount = (height*.08);
  frameRate(15);
}

function draw() {
  background(100, 100, bright1, 10);
  noStroke();
  fill(random(360), bright2, 100);
  push();
  translate(width/2, height/2);
  rotate(deg);
  rectMode(CENTER)
  rect(0, 0, wid, heig);
  pop();
  grid();
  bright1 += inc1;
  bright2 += inc2;
  wid -= inc1*15;
  heig -= inc1*10;
  deg-= 0.01;
  if (bright2 == MIN_B || bright2 == MAX_B) inc2 *= -1;
  if (bright1 == MIN_B || bright1 == MAX_B)  inc1 *= -1;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function grid(){
  for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {
      let posX = (width / tileCount) * gridX;
      let posY = (height / tileCount) * gridY;
      noStroke();
      rectMode(CORNER);
      //fill(0);
      //rect(posX, posY, width/tileCount, height/tileCount);
      
      var toggle = floor(random(2));
      if (toggle == 1){
         fill(0);
          rect(posX, posY, width/tileCount, height/tileCount);
      // } if (toggle == 3){
      // fill(random(360), 100, random(10));


    } else {
      fill(100, 100, bright1, 10);
      rect(posX, posY, width/tileCount, height/tileCount);
      }
    
      }
    }
}

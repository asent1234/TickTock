
var hr 
var mn 
var sc 
var scAngle, mnAngle, hrAngle
var se, me, he
function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);

  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  hr = hour();
  mn = minute();
  sc = second();
  angleMode(DEGREES);
  stroke(255,0,0)
  
  scAngle = map(sc, 0, 60, 0, 360)
  se = p5.Vector.fromAngle(radians(scAngle), 150);
  mnAngle = map(mn, 0, 60, 0, 360)
  me = p5.Vector.fromAngle(radians(mnAngle), 100);
  hrAngle = map(hr, 0, 24, 0, 360)
  he = p5.Vector.fromAngle(radians(hrAngle), 50);
  
  push();

  translate(width / 2, height / 2);
  rotate(270);
  
  strokeWeight(6)

  stroke(255,0,0)
  line(0,0,se.x, se.y);
  stroke(102, 0, 20)
  line(0,0,me.x, me.y);
  stroke(20, 0, 4)
  line(0,0,he.x, he.y);

  noFill();
  stroke(255,0,0)
  arc(0, 0, 340,340, 0, scAngle) 
  stroke(102, 0, 20)
  arc(0, 0, 240,240, 0, mnAngle) 
  stroke(20, 0, 4)
  arc(0, 0, 140, 140, 0, hrAngle)
  
  
   
  pop();
  
}
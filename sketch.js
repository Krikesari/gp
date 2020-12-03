var hr, mn, sc;
var hrAngle, mnAngle, scAngle;
var Hour;
var ampm;
var bg;
var sunrise,day,sunset,night;
function preload(){
  night=loadImage("night.gif");
  sunset=loadImage("sunset.gif");
  day=loadImage("afternoon.png");
 sunrise=loadImage("sunrise.gif");
}
function setup() {
  createCanvas(800, 400);
  //createSprite(400, 200, 50, 50);
  ampm = "am"
  angleMode(DEGREES);
  
  
 
}

function draw() {

  background(bg);

  translate(200, 200)
  rotate(-90)

  hr = hour();
  mn = minute();
  sc = second();


  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);

  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(3);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0, 0, 255);
  strokeWeight(13);
  line(0, 0, 50, 0);
  pop();

  stroke(255, 0, 255);
  point(0, 0)

  strokeWeight(10);
  noFill();

  stroke(255, 0, 0);
  arc(0, 0, 300, 300, 0, scAngle);
  stroke(0, 255, 0);
  arc(0, 0, 280, 280, 0, mnAngle);
  stroke(0, 0, 255);
  arc(0, 0, 260, 260, 0, hrAngle);
  drawSprites();

  if (hr > 12) {
    Hour = hr - 12;
    ampm = "pm"
  }
  else {
    Hour = hr;
    ampm = "am"
  }
  if (sc < 10) {
    sc = "0" + sc
  }
  if (mn < 10) {
    mn = "0" + mn
  }
  if (Hour < 10) {
    Hour = "0" + Hour
  }
  if (hr >= 4 && hr <= 9) {
    bg=sunrise;
  }
  if (hr >= 10 && hr <= 17) {
    bg=day;
  }
  if (hr >= 18 && hr <= 20) {
    bg=sunset;
  }
  else{
    bg=night;
  }
  fill("black");
  textSize(30);
  rotate(+90)
  stroke(rgb(0, 255, 0))
  text(Hour + ":" + mn + ":" + sc + "   " + ampm, 260, 0);
}


var box1;
var box2;
function setup() {
  createCanvas(600, 400);
box1=new Box();
box2=new Box();
}

function draw() {
  background(220);
box1.show();
  box1.set_speed(4);
  box1.set_width(5);
  box2.show();
  box2.set_speed(6);
  box2.set_width(7);
}


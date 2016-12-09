var ship;
var obstacle;

function setup() {
  createCanvas(600, 600);
  ship = new Ship();
  obstacle = new Obstacle();
}

function draw() {
  background(0);
  ship.show();
  obstacle.show();
}

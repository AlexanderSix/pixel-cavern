var ship;

function setup() {
  createCanvas(600, 600);
  ship = new Ship();
}

function draw() {
  background(0);
  ship.show();
}

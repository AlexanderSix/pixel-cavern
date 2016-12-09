var ship;
var obstacles = [];

function setup() {
  createCanvas(600, 600);
  ship = new Ship();
}

function draw() {
  background(0);
  ship.show();
  ship.update();

  if (frameCount % 100 == 0) {
    obstacles.push(new Obstacle);
  }
  for (var i = 0; i < obstacles.length; ++i) {
    obstacles[i].show();
    obstacles[i].update();
    if (obstacles[i].isGone()) {
      obstacles.splice(i, 1);
    }
  }
  // console.log(obstacles.length);
}

function keyPressed() {
  if (key == ' ') {
    ship.boosters();
  }
}

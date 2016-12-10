var ship;
var obstacles;

function setup() {
  createCanvas(600, 600);
  reset();
}

function reset() {
  ship = new Ship();
  obstacles = [];
}

function draw() {
  background(0);
  ship.show();
  ship.update();

  if (frameCount % 120 == 0) {
    obstacles.push(new Obstacle);
  }
  for (var i = obstacles.length-1; i >= 0; --i) {
    obstacles[i].show();
    obstacles[i].update();
    if (obstacles[i].hits(ship)) {
      ship.decreaseHealth();
    }
    if (obstacles[i].isGone()) {
      obstacles.splice(i, 1);
    }
  }

  if (ship.isDead()) {
    // console.log("DEAD");
    reset();
  }
  // console.log(obstacles.length);
}

function keyPressed() {
  if (key == ' ') {
    ship.boosters();
  }
}

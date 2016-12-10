var ship;
var obstacles;
var h3;
var counter;
var pipeCounter;

function setup() {
  var canvas = createCanvas(600, 600);
  canvas.parent('canvas-id');
  reset();
}

function reset() {
  ship = new Ship();
  obstacles = [];
  h3 = document.getElementById("health");
  h3.innerHTML = ship.health + " lives";
  counter = 0;
  pipeCounter = document.getElementById("pipe-counter");
  pipeCounter.innerHTML = counter + " pipes cleared.";
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
      h3.innerHTML = ship.health + " lives";
    }
    if (obstacles[i].isGone()) {
      if (obstacles[i].wasCleared()) {
        counter++;
        pipeCounter.innerHTML = counter + " pipes cleared.";
      }
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

function Ship() {
  this.size = 20;
  this.startingVector = createVector(50, height/2);

  this.gravity = 0.6;
  this.velocity = 0;
  this.thrusters = 15;

  this.show = function() {
    fill(0, 255, 0);
    rect(this.startingVector.x, this.startingVector.y, this.size, this.size);
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.startingVector.y += this.velocity;

    if (this.startingVector.y > height-20) {
      this.startingVector.y = height-20;
      this.velocity = 0;
    }

    if (this.startingVector.y < 0) {
      this.startingVector.y = 0;
      this.velocity = 0;
    }
  }

  this.boosters = function() {
    this.startingVector.y -= this.thrusters;
    this.velocity -= this.thrusters;
  }
}

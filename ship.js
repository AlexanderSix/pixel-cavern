function Ship() {
  this.size = 20;
  this.startingVector = createVector(50, height/2);

  this.gravity = 3;
  this.weight = 15;
  this.velocity = 0;

  this.show = function() {
    fill(0, 255, 0);
    rect(this.startingVector.x, this.startingVector.y, this.size, this.size);
  }

  this.update = function() {
    if (this.startingVector.y < height - this.size) {
      this.startingVector.y -= -this.gravity;
    }
  }

  this.boosters = function() {
    this.startingVector.y -= 50;
  }
}

function Ship() {
  this.size = 20;
  this.startingVector = createVector(50, height/2);

  this.gravity = 0.6;
  this.weight = 15;
  this.velocity = 0;

  this.show = function() {
    fill(0, 255, 0);
    rect(this.startingVector.x, this.startingVector.y, this.size, this.size);
  }
}

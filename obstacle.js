function Obstacle() {
  this.width = 40;
  this.pipeBottom = random(150, height - 300);
  this.space = random(100, 175);
  this.pipeTop = this.pipeBottom + this.space;
  this.location = width;
  this.scrollSpeed = 2;

  this.red = false;

  this.show = function() {
    fill(0, 255, 0);
    if (this.red) {
      fill(255, 0, 0);
    }
    rect(this.location, this.pipeTop, this.width, height);
    rect(this.location, 0, this.width, this.pipeBottom);
  }

  this.update = function() {
    this.location -= this.scrollSpeed;
  }

  this.isGone = function() {
    if (this.location < -this.width);
  }

  this.hits = function(ship) {
    if ((ship.startingVector.y < this.pipeTop-this.space && (ship.startingVector.x + ship.size > this.location && ship.startingVector.x + ship.size < this.location + this.width))||
     ship.startingVector.y > this.pipeTop && (ship.startingVector.x + ship.size > this.location && ship.startingVector.x + ship.size < this.location + this.width)) {
      console.log("OUCH!!");
      this.red = true;
      return true;
    }
    this.red = false;
    return false;
  }
}

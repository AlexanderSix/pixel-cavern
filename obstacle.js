function Obstacle() {
  this.width = 40;
  this.pipeBottom = random(150, height - 300);
  this.space = random(75, 175);
  this.pipeTop = this.pipeBottom + this.space;
  // this.pipeTop = random(height/2 + 50, height-150);
  this.location = width;
  this.scrollSpeed = 2;

  this.show = function() {
    fill(0, 255, 0);
    rect(this.location, this.pipeTop, this.width, height);
    rect(this.location, 0, this.width, this.pipeBottom);
  }

  this.update = function() {
    this.location -= this.scrollSpeed;
  }

  this.isGone = function() {
    if (this.location < -this.width);
  }

}

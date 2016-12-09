function Obstacle() {
  this.width = 40;
  this.pipeBottom = random(100, height/2 - 40);
  this.pipeTop = random(height/2 - 40, height-100);
  this.enterLocation = width;
  this.scrollSpeed = 2;

  this.show = function() {
    fill(0, 255, 0);
    rect(width/2, this.pipeTop, this.width, height);
    rect(width/2, 0, this.width, this.pipeBottom);
  }


}

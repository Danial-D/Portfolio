// A barrier that moves back and forth

function Barrier() {
  
  this.pos = createVector(100,150);
  this.width = 200;
  this.height = 10;
  this.vel = createVector(-1,0);
  
  this.update = function() {
    this.pos.add(this.vel);
    if (this.pos.x <= 50 || this.pos.x >= 150) {
      this.vel.x *= -1;
    }
  }
  
  this.draw = function() {
    fill(255);
    rect(this.pos.x, this.pos.y, this.width, this.height);
  }
  
}
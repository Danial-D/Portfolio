var population;
// Each rocket is alive till 400 frames
var lifespan = 150;
// Made to display count on screen
var lifeP;
// Keeps track of frames
var count = 0;
// Where rockets are trying to go
var target;
// Max force applied to rocket
var maxforce = 0.2;
// Seperating things to draw from eachother to tidy code
var drawList = [];
var barrier;

function setup() {
  createCanvas(400, 300);
  population = new Population();
  barrier = new Barrier();
  lifeP = createP();
  target = createVector(width / 2, 50);
  
  drawList.push(function() {
    background(0);
  });
  
  drawList.push(function() {
    population.run();
  });
  
  drawList.push(function() {
    barrier.update();
    barrier.draw();
  //Renders target
    ellipse(target.x, target.y, 16, 16);
  });
  


}

function draw() {
  // Displays count to window
  
  for (var i = 0; i < this.drawList.length; i++) {
    drawList[i]();
  }
  
  lifeP.html(count);

  count++;
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    // Population = new Population();
    count = 0;
  }

}

 // Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&


var bird;
var pipes = [];
var seconds = 0;
var seconds = 0;
var score = document.getElementById("seconds");


function setup() {
  createCanvas(640, 480);
  bird = new Bird();
  pipes.push(new Pipe());
  
}

function draw() {
  background(0);


  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if (frameCount % 75 == 0) {
    pipes.push(new Pipe());
  }
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
}
var interval = setInterval(incrementSeconds, 1000);
function incrementSeconds() {
    seconds += 1;

   for (var i = pipes.length-1; i >= 0; i--) {
  if (pipes[i].hits(bird)) {
      seconds-=10;
    }
   
   }
   score.innerText = "Your score is " + seconds;
  
}




// Whens the lifetime of this program?
//declaring variables
var input; 
var counter = 0;
var timeleft = 0;

function setup() { // called after webpages initializes, and from the p5 service
  noCanvas();
  //creates a box for the user to input a time
  input = createInput();
  //runs the "createTimer" function after user presses enter in the box
  input.changed(createTimer); // adds to some outside queue, the function createTimer... this function is non-blocking, i.e., the program continues right after execution. It doesn't wait until input is changed...  
  
}
function createTimer() {
  //makes it so the users variable is what is used as the timers length
  timeleft = input.value();
  
  //makes the corresponding paragraph line display the time remaining
  var timer = select('#timer');
  timer.html(convertSeconds(timeleft - counter));
  
  //dictates what a second is equal to (1000 milliseconds)
   var interval = setInterval(timeIt, 1000);
   function timeIt() {
     //instructs the timer to start counting down when it is supposed to rather than automatically starting
     if (counter < timeleft) {
       counter++;
       //gives the timer the value it is supposed to have
       timer.html(convertSeconds(timeleft - counter));
   
    //stops the timer once it reaches zero
        if (counter == timeleft) {
          var state = select('#state');
          state.html("Input another time");
          counter = 0; 
          timeleft = 0;
          clearInterval(interval)
        }
     }
   } 
}
  
 
 //converts minutes to seconds when need be
function convertSeconds(s) {
  //makes it so the minutes and seconds are never decimals
  var min = floor(s / 60);
  var sec = s % 60;
  //formats the minutes and seconds to look more like a clock
  return nf(min, 2) + ':' + nf(sec, 2);
}
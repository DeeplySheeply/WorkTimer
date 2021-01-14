// Variables to hold time data

var start = 0;
var milliVar;
var secVar;
var minVar;
var hourVar;
var displayVar;

// The following methods use JS libraries to define start and break times
////////////////////////////////////////////////

function startTime() {
  milliVar = setInterval(setStart, 1000);
}

function setStart() {
  start ++; 
}

function breakTime() {
  clearInterval(milliVar);
}

function startDisplay(){
  displayVar = setInterval(displayTime, 1000);
}

//////////////////////////////////////////////////

//Method to calculate hours and minutes as well as to display the time

function displayTime(){
  if (start < 3600) {
    minVar = Math.floor(start / 60);
  } else if (start > 3600) {
    minVar = Math.floor((start % 3600) /60 );   
  }
  secVar = start % 60;
  hourVar = Math.floor (start / 3600);
  document.getElementById("disp").innerHTML = "Hours: " + hourVar + " Minutes: " + minVar + " Seconds: " + secVar; 
    
}  



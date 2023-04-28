// index.js - purpose and description here
// Author: Taylor Wedaa
// Date: April 28th, 2023

var myTransport = ["Prius", "walk", "Bus"]

var myMainRide = {
  make: "Toyota",
  model: "Prius",
  color: "Space Grey",
  year: 2014,
  age: function() {
      return 2023 - this.year;
  }
}
document.writeln("Getting around: " + myTransport + "<br>")
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
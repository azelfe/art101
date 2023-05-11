// index.js - purpose and description here
// Author: Taylor Wedaa
// Date: April 28th, 2023

var outputEl = document.getElementById("div");
var new1El = document.createElement("p");
new1El.innerHTML = "something else new";
new1El.style.fontSize = "30pt";

var new2El = document.createElement("p");
new2El.innerHTML = "something else else new";
new1El.style.color = "blue"

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

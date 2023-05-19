// index.js - purpose and description here
// Author: Taylor Wedaa
// Date: May 18, 2023

function sortingHatLength(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Gryffindor";
  } else if (mod == 1) {
    return "Ravenclaw";
  } else if (mod == 2) {
    return "Slytherin";
  } else if (mod == 3) {
    return "Hufflepuff";
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHatLength(name);
  var newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
});
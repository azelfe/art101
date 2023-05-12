// index.js - purpose and description here
// Author: Taylor
// Date: May 11

var buttonEl = document.getElementById("my-button");

//function sortME(str){
//  return str.split(' ').sort()join('')
//}
buttonEl.addEventListener("click", function(){
  var name = prompt ("hi what is your name?");
  var nameStr = ("hello " + name)
  var helloEL = document.getElementById("hello-world");
  helloEL.innerHTML = nameStr;
})


//notes
var buttonEl = document.getElementById("my-button")
buttonEl.addEventListener("click", function(){
var inputEl = document.getElementById("my-input");
var value = inputEL.value;
console.log(value)
var newEl = document.createElement("p");
newEl.innerHTML = value;
document.getElementById("output").appendChild(newEl);
inputEl.value = " ";
buttonEl.focus();
//makes the curser go back to the feild
});


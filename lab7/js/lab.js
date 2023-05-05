// index.js - purpose and description here
// Author: Taylor Wedaa
// Date: April 28th, 2023

function sortUserName() {
    var userName = window.prompt("Hi. What is your name?");
    console.log("userName =", userName);
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return nameSorted;
}

document.writeln("Here's your sorted name.",
  sortUserName(), "</br>");
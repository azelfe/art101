// index.js - purpose and description here
// Author: Taylor Wedaa
// Date: May 16, 2023

function sortUserName() {
    var input = document.getElementById('user-name').value;
    var nameArray = input.split('');
    console.log("nameArray =", nameArray);
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return nameSorted;
  }

  document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('sort-button');
    var output = document.getElementById('output');

    button.addEventListener('click', function() {
      var sortedValue = sortUserName();
      output.innerHTML = "Here's your sorted name: " + sortedValue;
    });
  });

  document.writeln("Here's your sorted name: ", sortUserName(), "</br>");
// index.js - Fetch clues from jService API and display the output
// Author: Taylor Wedaa
// Date: June 1, 2023

$('#activate').click(function() {
  $.ajax({
    url: "https://jservice.io/api/clues",
    data: { id: 219786 },
    method: "GET",
    dataType: 'json',
    success: function(data) {
      var output = JSON.stringify(data);
      $('#output').text(output);
    },
    error: function(xhr, status, error) {
      console.error(error);
    }
  });
});

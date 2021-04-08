console.log("app.js is loaded");
// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(data);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Iterate through array of objects
data.forEach(function(ufoSightings) {

    console.log(ufoSightings);
    var row = tbody.append("tr");
});
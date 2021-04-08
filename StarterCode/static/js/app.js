console.log("app.js is loaded");
// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(data);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Iterate through array of objects and append a table row to each element in the array
data.forEach(function(ufoSightings) {

    console.log(ufoSightings);
    var row = tbody.append("tr");

    // take key-value pairs and append to table columns
    Object.entries(ufoSightings).forEach(function([key, value]) {
        console.log("Combing through new key-value pair:");
        console.log(key, value);

        var cell = row.append("td");
        cell.text(value);
    });
});
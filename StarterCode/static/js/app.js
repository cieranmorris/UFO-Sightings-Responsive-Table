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

//Get a reference to the Filter Table button and input field using d3
var button = d3.select("#filter-btn");

var inputField = d3.select("#form-control");

//Install Event Handler associated with clicking the button using an anonymous callback
button.on("click", function() {
    console.log("A button was clicked");
    console.log(d3.event.target);
});

//Change the event once new text is entered in the input field
inputField.on("change", function() {
    var newText = d3.event.target.value;
    console.log(newText);
});
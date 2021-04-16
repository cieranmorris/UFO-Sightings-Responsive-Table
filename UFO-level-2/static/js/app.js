console.log("app.js is loaded");
// from data.js
var tableData = data;

function buildTable(sightings) {

    tbody.html("");
    // Iterate through array of objects and append a table row to each element in the array
    sightings.forEach(function (ufoSightings) {

        console.log(ufoSightings);
        var row = tbody.append("tr");

        // take key-value pairs and append to table columns
        Object.entries(ufoSightings).forEach(function ([key, value]) {
            console.log("Combing through new key-value pair:");
            console.log(key, value);

            var cell = row.append("td");
            cell.text(value);
        });
    });
};


// Build filter table function
function filterTable() {

    //Install d3 function to prevent page from reloading when new data is entered
    d3.event.preventDefault();
    console.log("filtering by date data now");

    var dateField = d3.select("#datetime");
    var dateValue = dateField.property("value");
    console.log(dateValue);

    //filter data table based on the input value (date)
    var filteredData = tableData;
    if (dateValue != "") {

        filteredData = filteredData.filter(function (ufoRow) {
            if (dateValue === ufoRow.datetime) {
                return true;
            }
        });

    };

    var cityInputField = d3.select("#city");
    var cityInputValue = cityInputField.property("value");
    console.log(cityInputValue);

    //filter data table based on the input value (city)
    if (cityInputValue != "") {

        filteredData = filteredData.filter(function (ufoRow) {
            if (cityInputValue === ufoRow.city) {
                return true;
            }
        });
    };

    var stateInputField = d3.select("#state");
    var stateInputValue = stateInputField.property("value");
    console.log(stateInputValue);

    //filter data table based on the input value (state)
    if (stateInputValue != "") {

        filteredData = filteredData.filter(function (ufoRow) {
            if (stateInputValue === ufoRow.state) {
                return true;
            }
        });
    };

    var countryInputField = d3.select("#country");
    var countryInputValue = countryInputField.property("value");
    console.log(countryInputValue);

    //filter data table based on the input value (country)
    if (countryInputValue != "") {

        filteredData = filteredData.filter(function (ufoRow) {
            if (countryInputValue === ufoRow.country) {
                return true;
            }
        });
    };

    var shapeInputField = d3.select("#shape");
    var shapeInputValue = shapeInputField.property("value");
    console.log(shapeInputValue);

    //filter data table based on the input value (shape)
    if (shapeInputValue != "") {

        filteredData = filteredData.filter(function (ufoRow) {
            if (shapeInputValue === ufoRow.shape) {
                return true;
            }
        });
    };

buildTable(filteredData);
};


// Get a reference to the table body
var tbody = d3.select("tbody");
buildTable(tableData);


//Get a reference to the Filter Table button and input field using d3
//Get a reference to the Filter Table when user uses any of the filter input fields
var button = d3.select("#filter-btn");
var form = d3.selectAll(".filter");

//Install Event Handler associated with clicking the button using an anonymous callback
button.on("click", filterTable);
form.on("change", filterTable);

//d3.Select All Event handler for all buttons clicked
d3.selectAll('button').on('click', function () {

    //console log the `button` element
    console.log(this);
});

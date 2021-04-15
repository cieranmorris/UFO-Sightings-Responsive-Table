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
    // create variable so that if inputValue is deleted, the page reverts to the original table
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
    // create variable so that if inputValue is deleted, the page reverts to the original table
    // var cityFilteredData = tableData;
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
    // create variable so that if inputValue is deleted, the page reverts to the original table
    // var stateFilteredData = tableData;
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
    // create variable so that if inputValue is deleted, the page reverts to the original table
    // var countryFilteredData = tableData;
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
    // create variable so that if inputValue is deleted, the page reverts to the original table
    // var shapeFilteredData = tableData;
    if (shapeInputValue != "") {

        filteredData = filteredData.filter(function (ufoRow) {
            if (shapeInputValue === ufoRow.shape) {
                return true;
            }
        });
    };


buildTable(filteredData);
}; //FUNCTION ENDS

// //filter table function for city
// function filterTableCity() {

//     //prevent reloading of page
//     d3.event.preventDefault();
//     console.log("filtering by city data now");

//     var cityInputField = d3.select("#city");
//     var cityInputValue = cityInputField.property("value");
//     console.log(cityInputValue);

//     //filter data table based on the input value (city)
//     // create variable so that if inputValue is deleted, the page reverts to the original table
//     var cityFilteredData = tableData;
//     if (cityInputValue != "") {

//         var cityFilteredData = tableData.filter(function (ufoRow) {
//             if (cityInputValue === ufoRow.city) {
//                 return true;
//             }
//         });
//     };

//     buildTable(cityFilteredData);
// };

// //filter table function for state
// function filterTableState() {

//     //prevent reloading of page
//     d3.event.preventDefault();
//     console.log("filtering by state data now");

//     var stateInputField = d3.select("#state");
//     var stateInputValue = stateInputField.property("value");
//     console.log(stateInputValue);

//     //filter data table based on the input value (state)
//     // create variable so that if inputValue is deleted, the page reverts to the original table
//     var stateFilteredData = tableData;
//     if (stateInputValue != "") {

//         var stateFilteredData = tableData.filter(function (ufoRow) {
//             if (stateInputValue === ufoRow.state) {
//                 return true;
//             }
//         });
//     };

//     buildTable(stateFilteredData);

// };

// //filter table function for country
// function filterTableCountry() {

//     //prevent page from reloading
//     d3.event.preventDefault();
//     console.log("filtering by country data now");

//     var countryInputField = d3.select("#country");
//     var countryInputValue = countryInputField.property("value");
//     console.log(countryInputValue);

//     //filter data table based on the input value (country)
//     // create variable so that if inputValue is deleted, the page reverts to the original table
//     var countryFilteredData = tableData;
//     if (countryInputValue != "") {

//         var countryFilteredData = tableData.filter(function (ufoRow) {
//             if (countryInputValue === ufoRow.country) {
//                 return true;
//             }
//         });
//     };

//     buildTable(countryFilteredData);
// };


// //filter table function for shape
// function filterTableShape() {

//     //prevent reloading of page
//     d3.event.preventDefault();

//     console.log("filtering by shape data now");

//     var shapeInputField = d3.select("#shape");
//     var shapeInputValue = shapeInputField.property("value");
//     console.log(shapeInputValue);

//     //filter data table based on the input value (shape)
//     // create variable so that if inputValue is deleted, the page reverts to the original table
//     var shapeFilteredData = tableData;
//     if (shapeInputValue != "") {

//         var shapeFilteredData = tableData.filter(function (ufoRow) {
//             if (shapeInputValue === ufoRow.country) {
//                 return true;
//             }
//         });
//     };

//     buildTable(shapeFilteredData);
// }


// Get a reference to the table body
var tbody = d3.select("tbody");
buildTable(tableData);


//Get a reference to the Filter Table button and input field using d3
//Get a reference to the Filter Table using d3 for when Enter is hit
var button = d3.select("#filter-btn");
var form = d3.selectAll(".filter");



//Install Event Handler associated with clicking the button using an anonymous callback
button.on("click", filterTable);
form.on("change", filterTable);


// //Create function to run through clicking the button and hitting enter
// function runEnter() {

//     //prevent page from reloading
//     d3.event.preventDefault();

//     //Select the input element and get the raw HTML code
//     var 
// }




//d3.Select All Event handler for all buttons clicked
d3.selectAll('button').on('click', function () {

    //console log the `button` element
    console.log(this);
});






// //Change the event once new text is entered in the input field
// inputField.on("change", function() {
//     var newText = d3.event.target.value;
//     console.log(newText);
// });
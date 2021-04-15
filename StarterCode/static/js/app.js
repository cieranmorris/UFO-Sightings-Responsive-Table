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
    console.log("I am going to filter data");

   var inputField = d3.select("#datetime");
   var inputValue = inputField.property("value");
   console.log(inputValue);

   //filter data table based on the input value (date)
   // create variable so that if inputValue is deleted, the page reverts to the original table
   var filteredData = tableData;
   if (inputValue != "") {

    var filteredData = tableData.filter(function(ufoRow) {
        if (inputValue === ufoRow.datetime) {
            return true;
        }
    });
   };
   

   buildTable(filteredData);
};

//filter table function for city
function filterTableCity() {

    //prevent reloading of page
    d3.event.preventDefault();
    console.log("filtering city data now");

    var cityInputField = d3.select("#city");
    var cityInputValue = cityInputField.property("value");
    console.log(cityInputValue);

    //filter data table based on the input value (city)
   // create variable so that if inputValue is deleted, the page reverts to the original table
   var cityFilteredData = tableData;
   if (cityInputValue != "") {

    var cityFilteredData = tableData.filter(function(ufoRow) {
        if (cityInputValue === ufoRow.city) {
            return true;
        }
    });
   };
   
   buildTable(cityFilteredData);
};

//filter table function for state
function filterTableState() {

    //prevent reloading of page
    d3.event.preventDefault();
    
}


// Get a reference to the table body
var tbody = d3.select("tbody");
buildTable(tableData);


//Get a reference to the Filter Table button and input field using d3
var button = d3.select("#filter-btn");

//Install Event Handler associated with clicking the button using an anonymous callback
button.on("click", filterTable);








// //Change the event once new text is entered in the input field
// inputField.on("change", function() {
//     var newText = d3.event.target.value;
//     console.log(newText);
// });
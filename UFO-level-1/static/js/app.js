// from data.js
var tableData = data;

// Select the table body created in index.html
var tbody = d3.select("tbody");

//Create a function that will construct the Dataframe
function constructDataFrame(data) {
    //Clear the tbody if there are existing data
    tbody.html("");

    //Using forEach, loop through each objects in the imported data
    //and populate the dataframe.
    data.forEach((dataRow) => {
        var row = tbody.append("tr");

        Object.values(dataRow).forEach((observation) => {
            emptyCell = row.append("td");
            emptyCell.text(observation);
        })
    })
}

//Create a function that will handle the Click user will make.
function handleClick() {
    //If the date was entered, then go through the imported data
    //and match the data with the user input
    var date = d3.select("#datetime").property("value");
    filteredData = tableData;
    
    if (date) {

        filteredData = filteredData.filter(row => row.datetime === date);
    }
    constructDataFrame(filteredData);
}

//bind the handleClick function to an event listener (when clicked, run thefunction)
d3.selectAll("#filter-btn").on("click", handleClick);
constructDataFrame(data)





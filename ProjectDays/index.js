function saveData() {
    // Get input values
    var title = document.getElementById("title").value;
    var datePicker = document.getElementById("datePicker").value;
    var description = document.getElementById("description").value;

    // Your existing JavaScript code for adding to the table

    // Create a new row in the table
    var table = document.getElementById("HEA");
    var newRow = table.insertRow(-1);

    // Add cells to the row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    // Set cell values (excluding the date)
    cell1.textContent = "Title: " + title;
    cell2.textContent = "Description: " + description;

    // Create a Delete button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        // Delete the row when the Delete button is clicked
        table.deleteRow(newRow.rowIndex);
    };

    // Append the Delete button to the third cell
    cell3.appendChild(deleteButton);

    // Highlight the row based on the selected day
    var selectedDay = new Date(datePicker).getDay();
    var dayButtons = document.querySelectorAll(".weekday");

    // Remove previous highlights
    dayButtons.forEach(button => button.classList.remove("highlight"));

    // Add highlight to the selected day
    dayButtons[selectedDay].classList.add("highlight");
}

// Set the min attribute of the date input to today
function updateMinDate() {
    document.getElementById("datePicker").min = new Date().toISOString().split("T")[0];
}

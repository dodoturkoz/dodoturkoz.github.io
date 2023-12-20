// Select the input field
var nameInput = document.getElementById('name');

// Add an event listener for the input event
nameInput.addEventListener('input', function (event) {
    // The name to disallow
    var disallowedName1 = "Gabi";
    var disallowedName2 = "gabi";
    var disallowedName3 = "gabriella";
    var disallowedName4 = "Gabriella";

    // Check if the input value is the disallowed name
    if (event.target.value === disallowedName1 || event.target.value === disallowedName2 || event.target.value === disallowedName3 || event.target.value === disallowedName4) {
        // Clear the input field
        event.target.value = "";

        // Display an error message
        alert("Lütfen web sitemden uzak durun.");
    }
});
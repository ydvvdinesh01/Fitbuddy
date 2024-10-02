document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission until validation

    // Get input field values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if all fields are filled
    if (username === "" || password === "") {
        // Display error message if any field is empty
        document.getElementById('error-message').style.display = "block";
    } else {
        // If all fields are filled, hide error message and redirect
        document.getElementById('error-message').style.display = "none";
        // Redirect to the next page
        window.location.href = "dashboard.html"; // Replace with the next page
    }
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation for demonstration purposes
    const validUsername = "admin";
    const validPassword = "password123";

    if (username === validUsername && password === validPassword) {
        // Redirect to the next page if login is successful
        window.location.href = "dashboard.html";
    } else {
        // Show an error message if the login details are incorrect
        document.getElementById('error-message').style.display = "block";
    }
});

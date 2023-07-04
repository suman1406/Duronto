document.getElementById("logout").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag

    // Display the alert message
    alert('Logged out');

    // Modify the browser history to replace the current entry with the login page
    history.pushState(null, "", "login.html");

    // Redirect to the login page
    window.location.href = "login.html";
});
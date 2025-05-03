document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".login-form");
    const loadingScreen = document.getElementById("loading");

    // Function to show loading animation
    function showLoading() {
        loadingScreen.style.display = "block";
        setTimeout(() => {
            loadingScreen.style.display = "none";
        }, 2000); // Loading screen visible for 2 seconds
    }

    // Show loading animation when switching pages
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent immediate navigation
            showLoading();
            setTimeout(() => {
                window.location.href = this.href;
            }, 2000); // Redirect after animation
        });
    });

    // Login Form Submission
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        showLoading();

        // Simulate successful login
        setTimeout(() => {
            alert("Login successful!");
            window.location.href = "dashboard.html"; // Redirect to home page
        }, 2000);
    });
});
// Simulated admin credentials
const adminUsername = "admin";
const adminPassword = "admin123";

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");
    const container = document.querySelector(".container"); // Select the container div

    const logo = document.getElementById("Logo");
    if (logo) {
        logo.innerHTML = "SOVANN";
    }

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const usernameInput = document.getElementById("name");
        const passwordInput = document.getElementById("password");

        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;

        if (enteredUsername === adminUsername && enteredPassword === adminPassword) {
            // Successful login
            errorMessage.textContent = "";
            // Hide the login form and display a success message
            container.style.display = "none";
            // Optionally, you can show a success message
            // document.getElementById("success-message").textContent = "Login successful!";
        } else {
            // Invalid credentials
            container.style.display = "block"; // Show the login form
            errorMessage.textContent = "Invalid username or password. Please try again.";
        }
    });

    const togglePassword = document.getElementById("toggle-password");
    const passwordInput = document.getElementById("password");

    togglePassword.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.textContent = "Hide";
        } else {
            passwordInput.type = "password";
            togglePassword.textContent = "Show";
        }
    });
});

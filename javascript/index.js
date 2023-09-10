document.addEventListener("DOMContentLoaded", function() {
    // Change the title
    const logo = document.getElementById("Logo");
    if (logo) {
        logo.innerHTML = "SOVANN";
    }
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("toggle-password");

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
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById("Logo");
    if (logo) {
        logo.innerHTML = "SOVANN";
    }
    const navLinks = document.querySelectorAll(".nav-link");

    // Add click event listeners to each navigation link
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Get the target section's ID from the link's href attribute
            const targetId = link.getAttribute("href").substring(1);

            // Find the target section by ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Calculate the target position relative to the viewport
                const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY;

                // Scroll smoothly to the target position
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth",
                });
            }
        });
    });
});

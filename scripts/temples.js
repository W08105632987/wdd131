document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("active");

            menuToggle.innerHTML = menu.classList.contains("active") 
                ? "&times;"  // Change to "X" when open
                : "&#9776;"; // Change back to "☰"
        });
    }
});

// Set copyright year without waiting for DOMContentLoaded
const footerYear = document.querySelector("footer p:first-of-type");
if (footerYear) {
    footerYear.innerHTML += `&copy; ${new Date().getFullYear()}`;
}

// Set last modified date without waiting for DOMContentLoaded
const footerModified = document.querySelector("footer p:nth-of-type(2)");
if (footerModified) {
    footerModified.innerHTML += `Last Modified: ${document.lastModified}`;
}

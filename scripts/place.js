function calculateWindChill(temp, windSpeed) {
    return (temp <= 10 && windSpeed > 4.8) 
        ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1) + "°C"
        : "N/A"; // Only calculates if conditions are met
}

// Run after the page loads
document.addEventListener("DOMContentLoaded", function () {
    const tempElement = document.getElementById("temp");
    const windElement = document.getElementById("wind");
    const windChillElement = document.getElementById("windChill");

    // Get temperature and wind speed values
    const temp = parseFloat(tempElement.textContent) || 0;
    const windSpeed = parseFloat(windElement.textContent) || 0;

    // Display Wind Chill only if conditions are met
    windChillElement.textContent = calculateWindChill(temp, windSpeed);
});

// Get the current year
const currentYear = new Date().getFullYear();

// Output copyright year in the first paragraph of the footer
document.querySelector(
  "footer p:first-of-type"
).innerHTML += `&copy; ${currentYear}`;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Output last modified date in the second paragraph of the footer
document.querySelector(
  "footer p:nth-of-type(2)"
).innerHTML += `Last Modified: ${lastModifiedDate}`;

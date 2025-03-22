// Wind Chill Calculation
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temp * Math.pow(windSpeed, 0.16)
        ).toFixed(1) + "°C";
    } else {
        return "N/A"; // Wind chill is not applicable
    }
}

// Ensure correct values for temperature and wind speed
document.addEventListener("DOMContentLoaded", function () {
    const tempElement = document.getElementById("temp");
    const windElement = document.getElementById("wind");
    const windChillElement = document.getElementById("windChill");

    if (tempElement && windElement && windChillElement) {
        const temp = parseFloat(tempElement.textContent);
        const windSpeed = parseFloat(windElement.textContent);

        // Ensure valid numeric values before calculating wind chill
        if (!isNaN(temp) && !isNaN(windSpeed)) {
            windChillElement.textContent = calculateWindChill(temp, windSpeed);
        } else {
            windChillElement.textContent = "N/A"; // Display "N/A" if values are missing
        }
    }
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

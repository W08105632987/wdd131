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
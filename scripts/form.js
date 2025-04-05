// Populate the product select dropdown dynamically
const productSelect = document.getElementById("product");

const products = [
  { id: "hp-laptop", name: "HP Laptop" },
  { id: "dell-laptop", name: "Dell Laptop" },
  { id: "microsoft", name: "Microsoft" },
  { id: "acer", name: "Acer" },
  { id: "elitebook", name: "Elitebook" },
  { id: "probook", name: "Probook" }
];

if (productSelect) {
  // Clear any existing options except the placeholder
  productSelect.innerHTML = `<option value="">Choose a Product ...</option>`;
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

// Footer auto year and last modified
const footerYear = document.querySelector("footer p:first-of-type");
if (footerYear) {
  footerYear.innerHTML += ` &copy; ${new Date().getFullYear()}`;
}

const footerModified = document.querySelector("footer p:nth-of-type(2)");
if (footerModified) {
  footerModified.innerHTML = `Last Modified: ${document.lastModified}`;
}

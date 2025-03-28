document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const templeCards = document.getElementById("temple-cards");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("active");
            menuToggle.innerHTML = menu.classList.contains("active") ? "&times;" : "&#9776;";
        });
    }

    // Temple Data (Using Local Images)
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "images/aba.webp"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "images/manti.webp"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "images/payson.webp"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "images/yigo.webp"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "images/washington.webp"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "images/lima.webp" 
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "images/mexico.webp"
        },
        {
            templeName: "Salt Lake City",
            location: "Salt Lake City, Utah, United States",
            dedicated: "1893, April, 6",
            area: 253000,
            imageUrl: "images/salt.webp"
        },
        {
            templeName: "Accra Ghana",
            location: "Accra, Ghana",
            dedicated: "2004, January, 11",
            area: 17750,
            imageUrl: "images/accra.webp"
        },
        {
            templeName: "Johannesburg South Africa",
            location: "Johannesburg, South Africa",
            dedicated: "1985, August, 24",
            area: 19500,
            imageUrl: "images/johannes.webp"
        }
    ];

    function getYear(dedicatedDate) {
        return parseInt(dedicatedDate.split(",")[0]); // Extract year from "YYYY, Month, Day"
    }

    function displayTemples(filter = "all") {
        templeCards.innerHTML = "";
        const filteredTemples = temples.filter(temple => {
            const year = getYear(temple.dedicated);
            if (filter === "all") return true;
            if (filter === "home") return true;
            if (filter === "old") return year < 1900;
            if (filter === "new") return year >= 2000;
            if (filter === "large") return temple.area > 90000;
            if (filter === "small") return temple.area < 10000;
            return false;
        });

        filteredTemples.forEach(temple => {
            const div = document.createElement("div");
            div.classList.add("temple-card");
            div.innerHTML = `
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="300" height="200"> 
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq. ft.</p>
            `;
            templeCards.appendChild(div);
        });
    }

    // Menu Filter
    document.querySelectorAll("#menu li a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const filterType = event.target.textContent.toLowerCase();
            displayTemples(filterType);
        });
    });

    displayTemples(); // Show all on load

    // Footer Dynamic Year
    const footerYear = document.querySelector("footer p:first-of-type");
    if (footerYear) {
        footerYear.innerHTML += ` &copy; ${new Date().getFullYear()}`;
    }

    // Footer Last Modified
    const footerModified = document.querySelector("footer p:nth-of-type(2)");
    if (footerModified) {
        footerModified.innerHTML = `Last Modified: ${document.lastModified}`;
    }
});

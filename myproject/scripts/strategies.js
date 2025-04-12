// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const sectionTitle = document.getElementById("sectionTitles");
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Restore last scroll position
    const lastScrollPosition = localStorage.getItem("scrollPosition");
    if (lastScrollPosition) {
        window.scrollTo(0, parseInt(lastScrollPosition));
    }

    // Scroll handler
    window.addEventListener("scroll", function () {
        const scrollY = window.scrollY || document.documentElement.scrollTop;

        // Show or hide back to top button
        if (scrollToTopBtn) {
            scrollToTopBtn.style.display = scrollY > 300 ? "block" : "none";
        }

        // Highlight section and show title
        sections.forEach((section) => {
            if (
                scrollY >= section.offsetTop - 50 &&
                scrollY < section.offsetTop + section.offsetHeight
            ) {
                if (sectionTitle) {
                    sectionTitle.textContent = `You are viewing the ${section.id} section`;
                    sectionTitle.style.display = "hidden";
                }
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });

        // Save scroll position
        localStorage.setItem("scrollPosition", scrollY);
    });

    // Scroll to top smoothly when button clicked
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    }
});

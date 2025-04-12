document.addEventListener('DOMContentLoaded', function() {
    // 1. Highlight Active Section
    const sections = document.querySelectorAll('.step');
    const navLinks = document.querySelectorAll('.cta a');
    
    // Log navLinks to check if they are being selected correctly
    console.log(navLinks);

    window.addEventListener('scroll', () => {
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionBottom = rect.bottom;

            if (sectionTop <= 0 && sectionBottom >= 0) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLinks[index]) { // Check if navLinks[index] exists
                    navLinks[index].classList.add('active');
                }
            }
        });
    });

    // 2. Pop-up
    function showPopUp() {
        alert("Here’s a helpful tip: Consistency is key to making money with affiliate marketing!");
    }

    // Optional: Trigger popup after a certain time or event
    setTimeout(showPopUp, 3000);  // 3 seconds after page load

    // 3. Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.onscroll = function () {
    // Scroll-to-top button logic
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = `block`;
    } else {
        scrollToTopBtn.style.display = `none`;
        }
    };

    sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 50 && window.scrollY < section.offsetTop + section.offsetHeight) {
        // Mark section as visited in localStorage
        localStorage.setItem(`${section.id}-visited`, true);
        
        // Dynamically set text content using template literals
        sectionTitle.textContent = `You are viewing the ${section.id} section`;
    }
});


    scrollToTopBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});

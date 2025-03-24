document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        section.style.opacity = "0";
        section.style.transition = "opacity 1.5s";
    });

    const revealSections = () => {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                section.style.opacity = "1";
            }
        });
    };

    window.addEventListener("scroll", revealSections);
    revealSections();
});


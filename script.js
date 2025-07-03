// Add any interactive features or animations here
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.2}s`;
    });
});

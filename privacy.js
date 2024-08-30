document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.policy-section');
    sections.forEach((section, index) => {
        section.style.opacity = 0;
        setTimeout(() => {
            section.style.transition = 'opacity 1s';
            section.style.opacity = 1;
        }, index * 500);
    });

    // Smooth scrolling effect
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

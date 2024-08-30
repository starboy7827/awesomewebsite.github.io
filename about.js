document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image');

    const handleScroll = () => {
        images.forEach(image => {
            const rect = image.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                image.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case images are already in view
});

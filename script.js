document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.popout-image');
    images.forEach(image => {
        image.addEventListener('click', () => {
            image.classList.toggle('expanded');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close');

    // Show the popup after a delay
    setTimeout(() => {
        popup.style.display = 'flex';
    }, 1000); // Adjust the delay as needed

    // Close the popup when the close button is clicked
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});

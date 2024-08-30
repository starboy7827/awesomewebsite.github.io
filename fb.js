document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const feedbackType = document.getElementById('feedback-type').value;
        const message = document.getElementById('message').value;

        if (name && email && phone && feedbackType && message) {
            alert('Thank you for your feedback!');
            form.reset();
            form.classList.add('submitted');
            setTimeout(() => form.classList.remove('submitted'), 2000);
        } else {
            alert('Please fill in all fields.');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Mobile menu
const menuButton = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuButton) {
    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}


// Booking button
const bookingButtons = document.querySelectorAll('.booking-btn');

bookingButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Booking system coming soon!");
    });
});

// Initiate variables for the nav-toggle and the nav class

const navToggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.nav');

// A click event to the navToggle to display the Navbar

navToggle.addEventListener('click', () => {
    navbar.classList.toggle('nav__visible')
})
// /Users/fernando/ecommerce-ttech/js/test.js

// Function to toggle the navigation menu
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Form Data Submitted:', data);
}

// Event listener for menu toggle button
document.getElementById('menu-toggle').addEventListener('click', toggleMenu);

// Event listener for form submission
document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);

// Function to initialize the website
function init() {
    console.log('Website Initialized');
    // Additional initialization code can go here
}

// Initialize the website when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
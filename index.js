// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-container ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


// JavaScript to handle scroll-triggered animations
document.addEventListener('DOMContentLoaded', function () {
    const fadeElements = document.querySelectorAll('.fade-in');

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Stop observing once shown
            }
        });
    }, { threshold: 0.5 }); // Trigger when 10% of the element is in view

    // Observe each element
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});


// JavaScript to handle scroll-triggered animations with sequential delay
document.addEventListener('DOMContentLoaded', function () {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add the show class with a delay for each item
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, index * 400); // Adjust delay timing as needed
                observer.unobserve(entry.target); // Stop observing once shown
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is in view

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Get the current URL path
    const path = window.location.pathname;

    // Get all navigation links
    const navLinks = document.querySelectorAll('.header_navigation a');

    // Loop through each link and add the 'active' class if the href matches the current path
    navLinks.forEach(link => {
        // Use window.location.href to get the full URL including the domain
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});

function toggleMenu(displayValue) {
    const navigation = document.getElementById('header_navigation');
    navigation.style.display = displayValue;
}
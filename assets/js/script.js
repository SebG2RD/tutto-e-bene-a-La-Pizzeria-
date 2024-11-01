// Gestion de l'augmentation et de la réduction de la quantité
document.querySelector('.increase').addEventListener('click', function() {
    var input = document.querySelector('.quantity');
    var currentValue = parseInt(input.value, 10);
    input.value = currentValue + 1;
});

document.querySelector('.decrease').addEventListener('click', function() {
    var input = document.querySelector('.quantity');
    var currentValue = parseInt(input.value, 10);
    if (currentValue > 1) {
        input.value = currentValue - 1;
    }
});

// Gestion du menu hamburger pour la navigation mobile
const menuHamburger = document.querySelector(".menu-mobile");
const navLinks = document.querySelector(".navbar-left-menu");

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile');
});


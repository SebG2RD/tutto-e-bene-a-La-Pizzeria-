const menuHamburger = document.querySelector(".menu-mobile");
const navLinks = document.querySelector(".navbar-left-menu");
if (menuHamburger != null && navLinks != null) {
    menuHamburger.addEventListener('click', () => {
        navLinks.classList.toggle('mobile');
    });
}



const buttonIncrease = document.querySelector('.increase');
if (buttonIncrease != null) {
    buttonIncrease.addEventListener('click', function() {
        var input = document.querySelector('.quantity');
        var currentValue = parseInt(input.value, 10);
        input.value = currentValue + 1;
    });
}

const buttonDecrease = document.querySelector('.decrease');
if (buttonDecrease != null) {
    buttonDecrease.addEventListener('click', function() {
        var input = document.querySelector('.quantity');
        var currentValue = parseInt(input.value, 10);
        if (currentValue > 1) {
            input.value = currentValue - 1;
        }
    });
}

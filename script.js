const menuLeft = document.getElementById('menu-left');
const menuRight = document.getElementById('menu-right');
let isOpen = false;

menuLeft.addEventListener('click', () => {
    if (isOpen === false) {
        menuRight.classList.add('menu__right--open');
        isOpen = true;
    } else {
        menuRight.classList.remove('menu__right--open');
        isOpen = false;
    }
    
});
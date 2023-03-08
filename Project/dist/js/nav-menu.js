const menuBtn = document.querySelector('#navbar-toggle');
const navItems = document.querySelectorAll('.nav-item');
const header = document.querySelector('#header');
const mobileNav = document.querySelector('#nav-container-responsive');

menuBtn.addEventListener('click', toggleMenu);
let showMenu = false;

function toggleMenu() {
    console.log("Test");
    if (!showMenu) {
        menuBtn.classList.add('close');
        header.classList.add('responsive');
        mobileNav.classList.remove('slide-out');
        mobileNav.classList.add('slide-in');
        // navItems.forEach(item => item.classList.remove('hide'));
        
        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        header.classList.remove('responsive');
        mobileNav.classList.remove('slide-in');
        mobileNav.classList.add('slide-out');
        // navItems.forEach(item => item.classList.add('hide'));

        // Set Menu State
        showMenu = false;
    }
}
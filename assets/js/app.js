//!TOGGLE NAVIGATION MENU AND ICONS
const menuToggleBtn = document.querySelector('.menu-toggle-button');
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.list');
// let isOpen = false; //keep track of the current state of the navList element


menuToggleBtn.addEventListener('click', () => {
    hamburger.classList.toggle('mobile-menu');
    navList.classList.toggle('slideDown');
});

// !TOGGLE THEME AND STORE SELECTION WITHIN LOCAL STORAGE

// !SCROLL REVEAL
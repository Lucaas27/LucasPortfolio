//!TOGGLE NAVIGATION MENU AND ICONS
const menuToggleBtn = document.querySelector('.menu-toggle-button');
const content = document.querySelector('#home');
const closeBtn = document.querySelector('.close-icon');

const openNavMenu = () => {
    content.classList.add('active');
    document.querySelector('.list').style.display = 'flex';
}

const closeNavMenu = () => {
    content.classList.remove('active');
    document.querySelector('.list').style.display = 'none';
}

menuToggleBtn.addEventListener('click', openNavMenu);
closeBtn.addEventListener('click', closeNavMenu);


// !REMOVE ACTIVE CLASS FROM AND ICON ON LINK CLICK

// !TOGGLE THEME AND STORE SELECTION WITHIN LOCAL STORAGE

// !SCROLL REVEAL
/*************************** Variables ******************************/

const body = document.querySelector('body');
const menuToggleBtn = document.querySelector('.menu-toggle-button');
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.list');
const themeBtn = document.querySelector('.theme-toggle-button');
const logoImg = document.querySelector('.logo-img');
const currentTheme = localStorage.getItem('darkTheme');


/*************************** Functions ******************************/

// !SET UP MOBILE VIEW
const mobileView = () => {
    hamburger.classList.toggle('mobile-menu');
    navList.classList.toggle('slideDown');
}

// !HIDE MOBILE VIEW WHEN A LINK IS CLICKED
const removeMobileView = e => {
    if (e.target.classList.contains('list-link')) {
        hamburger.classList.remove('mobile-menu');
        navList.classList.remove('slideDown');
    }
}

// !CHANGE PICTURE DEPENDING ON THE THEME
const changePic = (darkPic, lightPic) => {
    if (logoImg.getAttribute('src') === darkPic) {
        logoImg.setAttribute('src', lightPic);
    } else {
        logoImg.setAttribute('src', darkPic);
    }
}

// !TOGGLE THEME AND STORE SELECTION IN LOCAL STORAGE
const toggleTheme = () => {
    body.classList.toggle('dark-theme');
    changePic('./assets/images/logo_darkbg.png', './assets/images/logo_lightbg.png');
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('darkTheme', 'active');
    } else {
        localStorage.removeItem('darkTheme');
    }
}

// !CHECK IF THE DARK THEME IS ACTIVE
(function checkTheme() {
    if (currentTheme) {
        changePic('./assets/images/logo_darkbg.png', './assets/images/logo_lightbg.png');
        body.classList.add('dark-theme');
    }
})();


/*************************** Event Listeners ******************************/

//!TOGGLE NAVIGATION MENU AND ICONS
menuToggleBtn.addEventListener('click', mobileView);

// !REMOVE MOBILE VIEW WHEN A LINK OF THE NAVBAR IS CLICKED
document.addEventListener('click', removeMobileView);

// !TOGGLE THEME AND STORE SELECTION WITHIN LOCAL STORAGE
themeBtn.addEventListener('click', toggleTheme)

// !SCROLL REVEAL
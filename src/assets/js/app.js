/*************************** Variables ******************************/

const body = document.querySelector('body');
const menuToggleBtn = document.querySelector('.menu-toggle-button');
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.list');
const themeBtn = document.querySelector('.theme-toggle-button');
const logoImg = document.querySelector('.logo-img');
const currentTheme = localStorage.getItem('darkTheme');


/*************************** Functions ******************************/


// !HIGHLIGHT JS
hljs.highlightAll();
hljs.addPlugin(new CopyButtonPlugin());


// !SET UP MOBILE VIEW
const mobileView = () => {
    hamburger.classList.toggle('mobile-menu');
    navList.classList.toggle('slideDown');
    body.style.overflowY = body.style.overflowY === 'hidden' ? 'visible' : 'hidden'; // if current styling is *hidden* then change to visible, otherwise change to hidden

};

// !HIDE MOBILE VIEW WHEN A LINK IS CLICKED
const removeMobileView = e => {
    if (e.target.classList.contains('list-link') && navList.classList.contains('slideDown')) {
        hamburger.classList.remove('mobile-menu');
        navList.classList.remove('slideDown');
        body.style.overflowY = body.style.overflowY === 'hidden' ? 'visible' : 'hidden'; // if current styling is *hidden* then change to visible, otherwise change to hidden
    }
};

// !CHANGE PICTURE DEPENDING ON THE THEME
const changePic = (darkPic, lightPic) => {
    if (logoImg.getAttribute('src') === darkPic) {
        logoImg.setAttribute('src', lightPic);
    } else {
        logoImg.setAttribute('src', darkPic);
    }
};

// !TOGGLE THEME AND STORE SELECTION IN LOCAL STORAGE
const toggleTheme = () => {
    body.classList.toggle('dark-theme');
    changePic('/assets/images/logo_darkbg.png', '/assets/images/logo_lightbg.png');
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('darkTheme', 'active');
    } else {
        localStorage.removeItem('darkTheme');
    }
};

// !CHECK IF THE DARK THEME IS ACTIVE
(function checkTheme() {
    if (currentTheme) {
        changePic('/assets/images/logo_darkbg.png', '/assets/images/logo_lightbg.png');
        body.classList.add('dark-theme');
    }
})();


/*************************** Event Listeners ******************************/

//!TOGGLE NAVIGATION MENU AND ICONS
menuToggleBtn.addEventListener('click', mobileView);

// !REMOVE MOBILE VIEW WHEN A LINK OF THE NAVBAR IS CLICKED
document.addEventListener('click', removeMobileView);

// !TOGGLE THEME AND STORE SELECTION WITHIN LOCAL STORAGE
themeBtn.addEventListener('click', toggleTheme);

// !SCROLL REVEAL

const sr = ScrollReveal({
    distance: '50px',
    duration: 1500,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
});

sr.reveal(`.main-title, .hero-group-buttons`, { origin: 'top' });
sr.reveal('.scroll-reveal-left', { origin: 'left' });
sr.reveal('.scroll-reveal-right', { origin: 'right' });
sr.reveal('.tech-stack-item', { interval: '200' });
sr.reveal(`.section-title, .section-subtitle-container`, {
    origin: 'top',
    interval: '200'
});
sr.reveal('.portfolio-card', { interval: '450' });
sr.reveal(`.form-container`, {
    origin: 'top',
});

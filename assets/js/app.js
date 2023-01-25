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
const removeMobileView = e =>{
    if (e.target.classList.contains('list-link')) {
        hamburger.classList.remove('mobile-menu');
        navList.classList.remove('slideDown');
    }
}

// !CHANGE LOGO DEPENDING ON THE THEME
const changeLogo = () =>{
    if (logoImg.getAttribute('src') === './assets/images/logo_darkbg.png') {
        logoImg.setAttribute('src','./assets/images/logo_lightbg.png');
    } else {
        logoImg.setAttribute('src','./assets/images/logo_darkbg.png')       
    }
}

// !TOGGLE THEME AND STORE SELECTION IN LOCAL STORAGE
const toggleTheme = ()=>{
    body.classList.toggle('dark-theme');
    changeLogo();
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('darkTheme', 'active');
    }else{
        localStorage.removeItem('darkTheme');
    }
}

// !CHECK IF THE DARK THEME IS ACTIVE
(function checkTheme() {
    if(currentTheme){
        changeLogo();
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
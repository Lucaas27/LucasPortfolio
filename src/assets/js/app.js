/*************************** Variables ******************************/

const body = document.querySelector('body');
const menuToggleBtn = document.querySelector('.menu-toggle-button');
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.list');
const themeBtn = document.querySelector('.theme-toggle-button');
const logoImg = document.querySelector('.logo-img');
const catBtns = document.querySelectorAll('.catBtn');
const currentTheme = localStorage.getItem('darkTheme');
const postsNav = document.querySelector('.posts-nav');
let modal = document.querySelectorAll('.modal');
const closeModal = document.querySelectorAll('.modal-close');
const openModal = document.querySelectorAll('.open-modal');
const overlay = document.querySelectorAll('.overlay');


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
// !
// const toggleModal = e => {
//     modalContainer.style.display = 'block';
//     body.style.overflowY = body.style.overflowY === 'hidden' ? 'visible' : 'hidden'; // if current styling is *hidden* then change to visible, otherwise change to hidden
// };

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

//parameter passed from button (Parameter same as category)
function filterPosts(cat) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equals innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            //Check if element contains category class
            if (element.classList.contains(value)) {
                //display element based on category
                element.classList.remove("hide");
            } else {
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}

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

// !RETURN TO THE POSITION AFTER REFRESH

// document.addEventListener("DOMContentLoaded", function (event) {
//     const scrollpos = localStorage.getItem("scrollpos");
//     if (scrollpos) window.scrollTo(0, scrollpos);
// });

window.onscroll = function (e) {
    localStorage.setItem("scrollpos", window.scrollY);
};



// MODAL

// Generate the HTML code for the buttons and modals
for (let i = 1; i < openModal.length; i++) {
    // Append data-target to the open modal and close modal elements
    openModal[i].setAttribute("data-target", "modal" + i);
    closeModal[i].setAttribute("data-target", "modal" + i);
    overlay[i].setAttribute("data-target", "modal" + i);
    // Append id to the modal element
    modal[i].setAttribute("id", "modal" + i);

}

const modalOpen = (b) => {
    const modalId = b.getAttribute('data-target');
    const targetModal = document.getElementById(modalId);
    targetModal.classList.add('open');
    body.style.overflowY = 'hidden';

};

const modalClose = (b) => {
    const modalId = b.getAttribute('data-target');
    const targetModal = document.getElementById(modalId);
    targetModal.classList.remove('open');
    body.style.overflowY = 'visible';

};

function attachEventListener(openModal, closeButtons, overlay) {
    openModal.forEach(b => {
        b.addEventListener('click', () => {
            modalOpen(b);
        });
    });
    closeButtons.forEach(b => {
        b.addEventListener('click', () => {
            modalClose(b);
        });
    });

    overlay.forEach(o => {
        o.addEventListener('click', () => {
            modalClose(o);
        });
    });
}

attachEventListener(openModal, closeModal, overlay);




//HANDLE FORM SUBMISSION

const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
        .then(() => {
            alert("Thank you for your submission! I'll get in touch soon!");
            myForm.reset();
        })// Reset the form fields to their default values
        .catch((error) => alert(error));

};

document
    .querySelector("form")
    .addEventListener("submit", handleSubmit);

import './footer.js';

/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Add this block to set the active link on page load for non-index pages
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage && currentPage !== 'index.html') {
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                // Remove active from other links
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active to the current page link
                link.classList.add('active');
            }
        });
    }
});


/*==================== typed js ====================*/
const typedElement = document.querySelector('.multiple-text');

if (typedElement) {
    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'UI/UX Designer', 'SEO Specialist'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
        onStringTyped: (arrayPos, self) => {
            const aboutContent = document.querySelector('.about-content');
            if (aboutContent) {
                const h3 = aboutContent.querySelector('h3');
                const p = aboutContent.querySelector('p');

                if (h3 && p) {
                    switch(arrayPos) {
                        case 0:
                            h3.textContent = 'Frontend Developer!';
                            p.textContent = 'I am a self-taught frontend developer with a passion for creating beautiful and intuitive user interfaces. I have a strong understanding of HTML, CSS, and JavaScript, and I\'m always learning new technologies. I am a highly motivated and results-oriented individual, and I am confident in my ability to contribute to any team.';
                            break;
                        case 1:
                            h3.textContent = 'UI/UX Designer!';
                            p.textContent = 'As a UI/UX designer, I focus on creating user-centered designs that are both beautiful and easy to use. I have a strong understanding of design principles and I am proficient in a variety of design tools. I am passionate about creating user experiences that are both enjoyable and effective.';
                            break;
                        case 2:
                            h3.textContent = 'SEO Specialist!';
                            p.textContent = 'I am a data-driven SEO specialist with a proven track record of success. I have a deep understanding of how search engines work and I am an expert in keyword research, on-page optimization, and link building. I am passionate about helping businesses grow their organic traffic and improve their online visibility.';
                            break;
                    }
                }
            }
        }
    });
}

/*==================== image switcher ====================*/
function switchImage(clickedImage) {
    const galleryImages = document.querySelectorAll('.gallery-img');
    const currentActive = document.querySelector('.gallery-img.active');

    if (clickedImage !== currentActive) {
        currentActive.classList.remove('active');
        clickedImage.classList.add('active');
    }
}

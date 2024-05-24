const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
//////////////////////////
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === "Escape" && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

//const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
console.log(document.getElementsByClassName('btn'));
// creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML =
    'we use cookied for improve functionality and analytics. <button class= "btn btn--close-cookie">Got it</button>';
header.prepend(message);
header.append(message);

// delete elements
document
    .querySelector('.btn--close-cookie')
    .addEventListener('click', function () {
        //message.remove();
        message.parentElement.removeChild(message);
    });

// style
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.backgroundColor);
console.log(message.style.color);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
document.documentElement.style.setProperty('--color-primary', 'orangered');

// attributes 
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'beautiful minimalist logo';

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'bankist');

console.log(logo.src);
console.log(logo.getAttribute('srx'));

const link = document.querySelector('.nav__link--btn');

console.log(link.href);
console.log(link.getAttribute('href'));

// data attributes

console.log(logo.dataset.versionNumber);

// classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btn button 
btnScrollTo.addEventListener('click', function (e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);
    console.log(e.target.getBoundingClientRect());

    console.log('current scroll (X/Y)', window.pageXOffset, pageYOffset);

    console.log(
        'height/width viewport',
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
    );
    //     window.scrollTo({
    //         left: s1coords.left + window.pageXOffset,
    //         top: s1coords.top + window.pageYOffset,
    //         behavior: 'smooth'
    //     });
});

// page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.preventDefault();
//         const id = this.getAttribute('href');
//         console.log(id);
//         document.querySelector(id).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });
// 1. Add event listener to common parent element
// 2.

document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.classList.contains('.nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        });
    }
});
// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');
    console.log(clicked);

    // Guard clause
    if (!clicked) return;

    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(c => c.classList.remove('operations__tab--active'));
    // activate tab
    clicked.classList.add('operations__tab--active');

    // activate content area

    console.log(clicked.dataset.tab);
    document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add('operations__content--active');
});

// menu fade  animation
const handleHover = function (e, opacity) {
    if (e.target.classList.contains('nav__link')) {
        const link = e.target;
        const siblings = link.closest('.nav').
            querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');

        siblings.forEach(el => {
            if (el !== link) el.style.opacity = 0.5;
        });
        logo.style.opacity = opacity;
    }
}
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));


// sticky navigation
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function () {
    console.log(window.scrollY);
    if (window.scrollY > initialCoords.top)
        nav.classList.add('sticky');
    else nav.classList.remove('sticky');
});

// sticky navigation: intersection Observer API
// const obsCallback = function(entries, observer) {
//     entries.forEach(entry => {
//         console.log(entry);
//     });
// }

// const obsOptions = {
//     root: null,
//     threshold: [0, 0.2];
// }

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// obsOptions.observer(section1);

const header = querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight)
const stickyNav = function (entries) {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickNav, {
    root: null,
    threshold: 0,
    rootMargin: `${navHeight} px`,
});

headerObserver.observe(header);
//const h1 = document.querySelector('h1');
//  Reveal sections

const allSection = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);

};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

allButtons.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');

});

//lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observe) {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) return;

    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');

    });
    observe.unobserve(entry.target)

}
const imgObserver = new IntersectionObserver(loadImg,
    {
        root: null,
        threshold: 0,
        rootMargin: '-200px',
    });

imgObserver.forEach(img => imgObserver.observe(img));
//
const alertH1 = function (e) {
    alert('addEventListener: great ');
}
// h1.addEventListener('mouseenter', function(e){
//     alert('addEventListener! you ate reading the heading : D');
// });
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000)

//  h1.onmouseenter = function (e) {
//     alert('onmouseenter: great! you are reading the heading : D');
//  };

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255), randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function(e) {
//     this.style.backgroundColor = randomColor();
//     //console.log('link')
//     console.log('link', e.target, e.currentTarget);
//     console.log(e.currentTarget === this);
// });

// document
//     .querySelector('.nav__links')
//     .addEventListener('click', function(e){
//         //console.log("LINH")
//         this.style.backgroundColor = randomColor();
//         console.log('container', e.target);
//     });

// document
//     .querySelector('.nav')
//     .addEventListener('click', function(e) {
//         this.style.backgroundColor = randomColor();
//         console.log("nav", e.target);
//     }, true);

const h1 = document.querySelector('h1');

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';

// slides
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
//const slider = document.querySelector('.slider');
const maxSlide = slides.length;
let curSlide = 0;
const dotContainer = document.querySelector('.dots');

// slider.style.transform = 'scale(0.4) tranlateX(-800px)';
// slider.style.overflow = 'visible';

const createDots = function(){
    slides.forEach(function(_, i) {
        dotContainer.insertAdjacentHTML(
            'beforeend', 
            `<button class='dots__dot' data-slide='${i}'></button>`
        );
    });
};
createDots();

const goToSlide = function(slide) {
    slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
};
goToSlide(0);

// next slide

const nextSlide = function(){
    if(curSlide === maxSlide -1){
        curSlide = 0;
    }else{
        curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide)
}
const prevSlide = function() {
    if(curSlide === 0){
        curSlide = maxSlide - 1;
    }else{
        curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
}

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function(e) {
    console.log(e);
    if(e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
});

dotContainer.addEventListener('click', function(e){
    if(e.target.classList.contains('dots__dot')) {
        const {slide} = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
    }
});

const activateDot = function(slide) {
    document
        .querySelectorAll('.dots__dot')
        .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)   
        .classList.add('dots__dot--active') 
};
activateDot(0);
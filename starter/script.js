'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const buttonScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Button scrolling
buttonScrollTo.addEventListener('click', function (e) {
  const s1coors = section1.getBoundingClientRect();
  // console.log(s1coors);

  // console.log(e.target.getBoundingClientRect());

  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  //scrolling
  // window.scrollTo(
  //   s1coors.left + window.pageXOffset,
  //   s1coors.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coors.left + window.pageXOffset,
  //   top: s1coors.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////
//Page navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//Add event listener to common parent element
//Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

/*
///////////////////////////////////////
//Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//Creating and inserting element
const massage = document.createElement('div');
massage.classList.add('cookie-message');
// massage.textContent = 'We use Cookie for improved functionality and analytics.';
massage.innerHTML =
  'We use Cookie for improved functionality and analytics. <button class="btn btn--close-cookie">Go it<button/>';

// header.prepend(massage);
header.append(massage);
// header.append(massage.cloneNode(true));

//or
// header.before(massage);
// header.after(massage);

//Delete Elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // massage.remove();
    massage.parentElement.removeChild(massage);
  });

//Styles
massage.style.backgroundColor = '#37383d';
massage.style.width = '120%';

console.log(massage.style.color);
console.log(massage.style.backgroundColor);

console.log(getComputedStyle(massage).color);
// console.log(getComputedStyle(massage).height);

massage.style.height =
  Number.parseFloat(getComputedStyle(massage).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

//Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');

console.log(link.getAttribute('href'));
console.log(link.href);

//Data attributes
console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c'); //Not includes
logo.classList.contains('c');

//Don't use
logo.className = 'Jonas';
///////////////////////////////////////
*/

/*
///////////////////////////////////////
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('Welcome! You are reading the heading.');
  // h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('Welcome again! You are reading the heading.');
// };
///////////////////////////////////////
*/

/*
///////////////////////////////////////
//rgb(255, 255, 255);
const randomInt = (max, min) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // //Stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});
///////////////////////////////////////
*/

/*
///////////////////////////////////////
const h1 = document.querySelector('h1');

//Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';
console.log('------------------------------');

//Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);
h1.closest('.header').style.backgroundColor = 'var(--color-tertiary-opacity)';

//Going sideways: sibling
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);
console.log(h1.parentElement.children);
///////////////////////////////////////
*/

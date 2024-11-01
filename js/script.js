var myNav = document.getElementById('mynav');
const menu = document.querySelector('.menu');
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const overlay = document.querySelector('.overlay');



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        
        menu.classList.remove('active');
        overlay.classList.remove('blurred');
    });
});


// window.onscroll = () => {
//     "use strict";
//     if(window.scrollY > 200) {
//         myNav.classList.add('nav-colored');
//     }else {
//         myNav.classList.remove('nav-colored');
//     }
// }

if(bar) {
    bar.addEventListener('click', () => {
        menu.classList.add('active');
        overlay.classList.add('blurred');
    });
}

if(close) {
    close.addEventListener('click', () => {
        menu.classList.remove('active');
        overlay.classList.remove('blurred');
    });
}

const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["Web Developer", "Web Designer", "Tutor", "Learner..."];

let textArrayIndex = 0;
let charIndex = 0;

const erase = () => {
  if (charIndex > 0) {
    cursor.classList.remove('blink');
    typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 80);
  } else {
    cursor.classList.add('blink');
    textArrayIndex++;
    if (textArrayIndex > textArray.length - 1) {
      textArrayIndex = 0;
    }
    setTimeout(type, 1000);
  }
}

const type = () => {
  if (charIndex <= textArray[textArrayIndex].length - 1) {
    cursor.classList.remove('blink');
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 120);
  } else {
    cursor.classList.add('blink');
    setTimeout(erase, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
})


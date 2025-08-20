function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

const words = ["| Inspire", "| Innovate", "| Build", "| Develop", "| Create", "| Explore", "| Lead", "| Inspire"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const speed = 150; // typing speed
const delay = 1500; // delay before deleting

function typeEffect() {
  currentWord = words[i];
  const display = document.getElementById("changing-text");

  if (isDeleting) {
    display.textContent = currentWord.substring(0, j--);
  } else {
    display.textContent = currentWord.substring(0, j++);
  }

  if (!isDeleting && j === currentWord.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, delay);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length; // move to next word
  }

  setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

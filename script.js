function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

const words = ["| Automation", "| Develop", "| Vision", "| Inspire", "| Transform", "| Innovate", "| Youth", "| Achieve"];

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

function toggleEvent(card) {
  // Close all other cards
  document.querySelectorAll('.card').forEach(c => {
    if (c !== card) {
      c.classList.remove('active');
    }
  });
  // Toggle clicked card
  card.classList.toggle('active');
}


document.addEventListener("DOMContentLoaded", typeEffect);

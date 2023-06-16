const text = "Your Gateway to Affordable Books! ";
const h1 = document.getElementById("typewriter");
let index = 0;

function typewriterEffect() {
  if (index < text.length) {
    h1.innerHTML += text[index];
    index++;
    if (text[index] === " ") {
      h1.innerHTML += text[index]; // Add space
      index++;
    }
    setTimeout(typewriterEffect, 100); // Adjust the typing speed here (in milliseconds)
  } else {
    setTimeout(function () {
      h1.innerHTML = ""; // Clear the content of the h1 tag
      index = 0; // Reset the index
      typewriterEffect(); // Restart the typewriter effect
    }, 2000); // Adjust the delay before restarting (in milliseconds)
  }
}

typewriterEffect();

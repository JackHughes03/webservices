var video = document.getElementById("bikevideo");
video.autoplay = true;
video.loop = true;
video.muted = true;
video.play();

const title = "Jack Hughes Web Services";
const titleElement = document.getElementById("commastitle");
let index = 0;

titleElement.innerHTML = '"';

function writeTitle() {
  setTimeout(() => {
    // create a new span element for each letter
    const letter = document.createElement("span");
    letter.classList.add("letter");
    letter.innerHTML = title[index];
    titleElement.appendChild(letter);

    // check if the current letter is the last letter of a word
    if (title[index] === " " || (title[index + 1] === undefined && index !== title.length - 1)) {
      // add a space after the word, but not if it's the last letter
      const space = document.createElement("span");
      space.innerHTML = " ";
      titleElement.appendChild(space);
    }

    index++;
    if (index < title.length) {
      writeTitle();
    } else {
      titleElement.innerHTML += '"';
      fallApart();
    }
  }, 100);
}



function fallApart() {
  // select all letter elements
  const letters = document.querySelectorAll(".letter");
  let delay = 0;
  letters.forEach((letter) => {
    // set a random delay for each letter
    delay = Math.floor(Math.random() * 1000);
    setTimeout(() => {
      // add a falling animation to each letter with a random duration
      letter.style.animation = `fall ${Math.random() + 1}s ease`;
    }, delay);
  });
}


writeTitle();
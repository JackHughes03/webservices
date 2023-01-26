var video = document.getElementById("bikevideo");
video.autoplay = true;
video.loop = true;
video.muted = true;
video.play();

var video2 = document.getElementById("fallvideo");
video2.autoplay = true;
video2.loop = true;
video2.muted = true;
video2.play();

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

var rjs_cursor = document.getElementById("rjs_cursor"); //Getting the cursor
var body = document.querySelector("body"); //Get the body element

//Functions for showing and hiding the cursor
//They are referenced the 
function rjs_show_cursor(e) { //Function to show/hide the cursor
  if (rjs_cursor.classList.contains('rjs_cursor_hidden')) {
    rjs_cursor.classList.remove('rjs_cursor_hidden');
  }
  rjs_cursor.classList.add('rjs_cursor_visible');
}

function rjs_hide_cursor(e) {
  if (rjs_cursor.classList.contains('rjs_cursor_visible')) {
    rjs_cursor.classList.remove('rjs_cursor_visible');
  }
  rjs_cursor.classList.add('rjs_cursor_hidden');
}


function rjs_mousemove(e) { //Function to correctly position the cursor
  rjs_show_cursor(); //Toggle show/hide

  var rjs_cursor_width = rjs_cursor.offsetWidth * 0.5;
  var rjs_cursor_height = rjs_cursor.offsetHeight * 0.5;

  var rjs_cursor_x = e.clientX - rjs_cursor_width; //x-coordinate
  var rjs_cursor_y = e.clientY - rjs_cursor_height; //y-coordinate
  var rjs_cursor_pos = `translate(${rjs_cursor_x}px, ${rjs_cursor_y}px)`;
  rjs_cursor.style.transform = rjs_cursor_pos;
}


//Eventlisteners
window.addEventListener('mousemove', rjs_mousemove); //Attach an event listener
body.addEventListener('mouseleave', rjs_hide_cursor);




const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2")
};

const texts = [
  "Amazing",
  "Animations",
  "With",
  "Pure Code"
];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
      if (shouldIncrementIndex) {
          textIndex++;
      }

      doMorph();
  } else {
      doCooldown();
  }
}

animate();

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


// every 3 seconds change the stop3 background colour
setInterval(function() {
  var stop3 = document.getElementById("stop3");
  stop3.style.transition = "all 1s ease";
  stop3.style.backgroundColor = getRandomColor();
}
, 2000);
